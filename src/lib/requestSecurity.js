import { createHash, timingSafeEqual } from 'node:crypto';

const buckets = new Map();
const MAX_BUCKETS = 2000;

export const getClientIp = (request) => {
  const forwardedFor = request.headers.get('x-forwarded-for');

  if (forwardedFor) {
    return forwardedFor.split(',')[0]?.trim() || 'unknown';
  }

  return (
    request.headers.get('x-real-ip') ||
    request.headers.get('cf-connecting-ip') ||
    'unknown'
  );
};

export const constantTimeEquals = (actual, expected) => {
  if (typeof actual !== 'string' || typeof expected !== 'string') return false;
  if (!actual || !expected) return false;

  const actualHash = createHash('sha256').update(actual).digest();
  const expectedHash = createHash('sha256').update(expected).digest();

  return timingSafeEqual(actualHash, expectedHash);
};

export const checkRateLimit = ({ key, limit, windowMs }) => {
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || bucket.resetAt <= now) {
    if (buckets.size > MAX_BUCKETS) {
      buckets.clear();
    }

    buckets.set(key, {
      count: 1,
      resetAt: now + windowMs,
    });

    return {
      limited: false,
      remaining: limit - 1,
      retryAfter: 0,
    };
  }

  bucket.count += 1;

  return {
    limited: bucket.count > limit,
    remaining: Math.max(limit - bucket.count, 0),
    retryAfter: Math.ceil((bucket.resetAt - now) / 1000),
  };
};

export const isSameOriginRequest = (request) => {
  const origin = request.headers.get('origin');

  if (!origin) return true;

  try {
    const requestUrl = new URL(request.url);
    const originUrl = new URL(origin);

    return originUrl.host === requestUrl.host;
  } catch {
    return false;
  }
};
