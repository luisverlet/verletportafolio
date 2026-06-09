import { getSupabaseServerClient } from '../../../lib/supabaseServer';

export const prerender = false;

const VISIT_LIMIT = 500;
const RECENT_VISITS_LIMIT = 20;

const json = (body, status = 200) => (
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
    },
  })
);

const isAuthorized = (request) => {
  const adminPassword = import.meta.env.ADMIN_PASSWORD;
  const providedPassword = request.headers.get('x-admin-password');

  return Boolean(adminPassword && providedPassword && providedPassword === adminPassword);
};

const fallback = (value, label) => {
  if (typeof value !== 'string') return label;

  const trimmedValue = value.trim();
  return trimmedValue || label;
};

const getReferrerSource = (referrer) => {
  const value = fallback(referrer, 'Directo');

  if (value === 'Directo') return value;

  try {
    const url = new URL(value);
    return url.hostname.replace(/^www\./, '') || value;
  } catch {
    return value;
  }
};

const groupBy = (items, getKey) => {
  const counts = new Map();

  items.forEach((item) => {
    const key = getKey(item);
    counts.set(key, (counts.get(key) || 0) + 1);
  });

  return Array.from(counts.entries())
    .map(([label, count]) => ({ label, count }))
    .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
};

const formatRecentVisit = (visit) => ({
  created_at: visit.created_at,
  page: fallback(visit.page, '/'),
  country: fallback(visit.country, 'Desconocido'),
  city: fallback(visit.city, 'Desconocida'),
  referrer: getReferrerSource(visit.referrer),
  device: fallback(visit.device, 'Desconocido'),
  browser: fallback(visit.browser, 'Desconocido'),
});

export async function GET({ request }) {
  if (!isAuthorized(request)) {
    return json({ ok: false, error: 'Unauthorized.' }, 401);
  }

  try {
    const supabase = getSupabaseServerClient();
    const { data: visits, error } = await supabase
      .from('visits')
      .select('visitor_id,page,referrer,country,city,device,browser,os,created_at')
      .order('created_at', { ascending: false })
      .limit(VISIT_LIMIT);

    if (error) {
      console.error('Failed to load analytics summary.', error);
      return json({ ok: false, error: 'Database error.' }, 500);
    }

    const safeVisits = visits || [];
    const uniqueVisitorIds = new Set(
      safeVisits
        .map((visit) => visit.visitor_id)
        .filter((visitorId) => typeof visitorId === 'string' && visitorId.trim())
    );

    return json({
      ok: true,
      totalVisits: safeVisits.length,
      uniqueVisitors: uniqueVisitorIds.size,
      countries: groupBy(safeVisits, (visit) => fallback(visit.country, 'Desconocido')),
      pages: groupBy(safeVisits, (visit) => fallback(visit.page, '/')),
      referrers: groupBy(safeVisits, (visit) => getReferrerSource(visit.referrer)),
      devices: groupBy(safeVisits, (visit) => fallback(visit.device, 'Desconocido')),
      browsers: groupBy(safeVisits, (visit) => fallback(visit.browser, 'Desconocido')),
      recentVisits: safeVisits.slice(0, RECENT_VISITS_LIMIT).map(formatRecentVisit),
    });
  } catch (error) {
    console.error('Failed to build analytics summary.', error);
    return json({ ok: false, error: 'Server error.' }, 500);
  }
}

export function ALL() {
  return json({ ok: false, error: 'Method not allowed.' }, 405);
}
