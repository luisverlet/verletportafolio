import { createHmac } from 'node:crypto';
import { UAParser } from 'ua-parser-js';
import { getSupabaseServerClient } from '../../lib/supabaseServer';

export const prerender = false;

const STRING_LIMITS = {
  visitorId: 100,
  sessionId: 100,
  page: 300,
  referrer: 500,
  language: 50,
  userAgent: 500,
  country: 10,
  region: 100,
  city: 120,
  device: 120,
  browser: 120,
  os: 120,
};

const json = (body, status) => (
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
    },
  })
);

const readBody = async (request) => {
  try {
    return await request.json();
  } catch {
    return null;
  }
};

const limitString = (value, maxLength) => {
  if (typeof value !== 'string') return null;

  const trimmedValue = value.trim();
  if (!trimmedValue) return null;

  return trimmedValue.slice(0, maxLength);
};

const limitNullableString = (value, maxLength) => {
  if (typeof value !== 'string') return null;
  return value.slice(0, maxLength) || null;
};

const decodeHeaderValue = (value) => {
  if (!value) return null;

  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
};

const getVercelHeader = (request, headerName, maxLength) => (
  limitNullableString(decodeHeaderValue(request.headers.get(headerName)), maxLength)
);

const getClientIp = (request) => {
  const forwardedFor = request.headers.get('x-forwarded-for');

  if (forwardedFor) {
    return forwardedFor.split(',')[0]?.trim() || null;
  }

  return request.headers.get('x-real-ip') || null;
};

const hashIp = (ip) => {
  if (!ip) return null;

  const secret = import.meta.env.IP_HASH_SECRET;

  if (!secret) {
    throw new Error('Missing IP_HASH_SECRET environment variable.');
  }

  return createHmac('sha256', secret).update(ip).digest('hex');
};

const parseScreenSize = (value) => {
  const numberValue = Number(value);

  if (!Number.isFinite(numberValue) || numberValue <= 0) {
    return null;
  }

  return Math.min(Math.round(numberValue), 100000);
};

const getDevice = (parsedUserAgent) => (
  parsedUserAgent.device.type ||
  parsedUserAgent.device.model ||
  'desktop'
);

const getBrowser = (parsedUserAgent) => (
  [parsedUserAgent.browser.name, parsedUserAgent.browser.version]
    .filter(Boolean)
    .join(' ') || null
);

const getOs = (parsedUserAgent) => (
  [parsedUserAgent.os.name, parsedUserAgent.os.version]
    .filter(Boolean)
    .join(' ') || null
);

export async function POST({ request }) {
  try {
    const body = await readBody(request);

    if (!body) {
      return json({ ok: false, error: 'Invalid JSON body.' }, 400);
    }

    const visitorId = limitString(body.visitorId, STRING_LIMITS.visitorId);
    const page = limitString(body.page, STRING_LIMITS.page);

    if (!visitorId || !page) {
      return json({ ok: false, error: 'visitorId and page are required.' }, 400);
    }

    const userAgent = (
      limitNullableString(body.userAgent, STRING_LIMITS.userAgent) ||
      limitNullableString(request.headers.get('user-agent'), STRING_LIMITS.userAgent)
    );
    const parsedUserAgent = UAParser(userAgent || '');

    const visit = {
      visitor_id: visitorId,
      session_id: limitNullableString(body.sessionId, STRING_LIMITS.sessionId),
      page,
      referrer: limitNullableString(body.referrer, STRING_LIMITS.referrer),
      country: getVercelHeader(request, 'x-vercel-ip-country', STRING_LIMITS.country),
      region: getVercelHeader(request, 'x-vercel-ip-country-region', STRING_LIMITS.region),
      city: getVercelHeader(request, 'x-vercel-ip-city', STRING_LIMITS.city),
      language: limitNullableString(body.language, STRING_LIMITS.language),
      device: limitNullableString(getDevice(parsedUserAgent), STRING_LIMITS.device),
      browser: limitNullableString(getBrowser(parsedUserAgent), STRING_LIMITS.browser),
      os: limitNullableString(getOs(parsedUserAgent), STRING_LIMITS.os),
      screen_width: parseScreenSize(body.screenWidth),
      screen_height: parseScreenSize(body.screenHeight),
      ip_hash: hashIp(getClientIp(request)),
      user_agent: userAgent,
    };

    const supabase = getSupabaseServerClient();
    const { error } = await supabase.from('visits').insert(visit);

    if (error) {
      console.error('Failed to insert visit.', error);
      return json({ ok: false, error: 'Database error.' }, 500);
    }

    return json({ ok: true }, 201);
  } catch (error) {
    console.error('Failed to track visit.', error);
    return json({ ok: false, error: 'Server error.' }, 500);
  }
}

export function ALL() {
  return json({ ok: false, error: 'Method not allowed.' }, 405);
}
