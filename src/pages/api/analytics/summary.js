import cities from 'all-the-cities';
import {
  checkRateLimit,
  constantTimeEquals,
  getClientIp,
} from '../../../lib/requestSecurity';
import { getSupabaseServerClient } from '../../../lib/supabaseServer';

export const prerender = false;

const VISIT_LIMIT = 500;
const RECENT_VISITS_LIMIT = 20;
const UNKNOWN_LABEL = 'Desconocido';
let cityIndex;

const COUNTRY_CENTROIDS = Object.freeze({
  AD: { latitude: 42.55, longitude: 1.58 },
  AE: { latitude: 23.42, longitude: 53.85 },
  AF: { latitude: 33.94, longitude: 67.71 },
  AG: { latitude: 17.06, longitude: -61.8 },
  AL: { latitude: 41.15, longitude: 20.17 },
  AM: { latitude: 40.07, longitude: 45.04 },
  AO: { latitude: -11.2, longitude: 17.87 },
  AR: { latitude: -38.42, longitude: -63.62 },
  AT: { latitude: 47.52, longitude: 14.55 },
  AU: { latitude: -25.27, longitude: 133.78 },
  AZ: { latitude: 40.14, longitude: 47.58 },
  BA: { latitude: 43.92, longitude: 17.68 },
  BB: { latitude: 13.19, longitude: -59.54 },
  BD: { latitude: 23.68, longitude: 90.36 },
  BE: { latitude: 50.5, longitude: 4.47 },
  BF: { latitude: 12.24, longitude: -1.56 },
  BG: { latitude: 42.73, longitude: 25.49 },
  BH: { latitude: 26.07, longitude: 50.56 },
  BI: { latitude: -3.37, longitude: 29.92 },
  BJ: { latitude: 9.31, longitude: 2.32 },
  BN: { latitude: 4.54, longitude: 114.73 },
  BO: { latitude: -16.29, longitude: -63.59 },
  BR: { latitude: -14.24, longitude: -51.93 },
  BS: { latitude: 25.03, longitude: -77.4 },
  BT: { latitude: 27.51, longitude: 90.43 },
  BW: { latitude: -22.33, longitude: 24.68 },
  BY: { latitude: 53.71, longitude: 27.95 },
  BZ: { latitude: 17.19, longitude: -88.5 },
  CA: { latitude: 56.13, longitude: -106.35 },
  CD: { latitude: -4.04, longitude: 21.76 },
  CF: { latitude: 6.61, longitude: 20.94 },
  CG: { latitude: -0.23, longitude: 15.83 },
  CH: { latitude: 46.82, longitude: 8.23 },
  CI: { latitude: 7.54, longitude: -5.55 },
  CL: { latitude: -35.68, longitude: -71.54 },
  CM: { latitude: 7.37, longitude: 12.35 },
  CN: { latitude: 35.86, longitude: 104.2 },
  CO: { latitude: 4.57, longitude: -74.3 },
  CR: { latitude: 9.75, longitude: -83.75 },
  CU: { latitude: 21.52, longitude: -77.78 },
  CV: { latitude: 16, longitude: -24.01 },
  CY: { latitude: 35.13, longitude: 33.43 },
  CZ: { latitude: 49.82, longitude: 15.47 },
  DE: { latitude: 51.17, longitude: 10.45 },
  DJ: { latitude: 11.83, longitude: 42.59 },
  DK: { latitude: 56.26, longitude: 9.5 },
  DO: { latitude: 18.74, longitude: -70.16 },
  DZ: { latitude: 28.03, longitude: 1.66 },
  EC: { latitude: -1.83, longitude: -78.18 },
  EE: { latitude: 58.6, longitude: 25.01 },
  EG: { latitude: 26.82, longitude: 30.8 },
  ES: { latitude: 40.46, longitude: -3.75 },
  ET: { latitude: 9.15, longitude: 40.49 },
  FI: { latitude: 61.92, longitude: 25.75 },
  FJ: { latitude: -16.58, longitude: 179.41 },
  FR: { latitude: 46.23, longitude: 2.21 },
  GA: { latitude: -0.8, longitude: 11.61 },
  GB: { latitude: 55.38, longitude: -3.44 },
  GD: { latitude: 12.12, longitude: -61.68 },
  GE: { latitude: 42.32, longitude: 43.36 },
  GH: { latitude: 7.95, longitude: -1.02 },
  GM: { latitude: 13.44, longitude: -15.31 },
  GN: { latitude: 9.95, longitude: -9.7 },
  GQ: { latitude: 1.65, longitude: 10.27 },
  GR: { latitude: 39.07, longitude: 21.82 },
  GT: { latitude: 15.78, longitude: -90.23 },
  GW: { latitude: 11.8, longitude: -15.18 },
  GY: { latitude: 4.86, longitude: -58.93 },
  HN: { latitude: 15.2, longitude: -86.24 },
  HR: { latitude: 45.1, longitude: 15.2 },
  HT: { latitude: 18.97, longitude: -72.29 },
  HU: { latitude: 47.16, longitude: 19.5 },
  ID: { latitude: -0.79, longitude: 113.92 },
  IE: { latitude: 53.41, longitude: -8.24 },
  IL: { latitude: 31.05, longitude: 34.85 },
  IN: { latitude: 20.59, longitude: 78.96 },
  IQ: { latitude: 33.22, longitude: 43.68 },
  IR: { latitude: 32.43, longitude: 53.69 },
  IS: { latitude: 64.96, longitude: -19.02 },
  IT: { latitude: 41.87, longitude: 12.57 },
  JM: { latitude: 18.11, longitude: -77.3 },
  JO: { latitude: 30.59, longitude: 36.24 },
  JP: { latitude: 36.2, longitude: 138.25 },
  KE: { latitude: -0.02, longitude: 37.91 },
  KG: { latitude: 41.2, longitude: 74.77 },
  KH: { latitude: 12.57, longitude: 104.99 },
  KM: { latitude: -11.88, longitude: 43.87 },
  KN: { latitude: 17.36, longitude: -62.78 },
  KR: { latitude: 35.91, longitude: 127.77 },
  KW: { latitude: 29.31, longitude: 47.48 },
  KZ: { latitude: 48.02, longitude: 66.92 },
  LA: { latitude: 19.86, longitude: 102.5 },
  LB: { latitude: 33.85, longitude: 35.86 },
  LC: { latitude: 13.91, longitude: -60.98 },
  LI: { latitude: 47.17, longitude: 9.56 },
  LK: { latitude: 7.87, longitude: 80.77 },
  LR: { latitude: 6.43, longitude: -9.43 },
  LS: { latitude: -29.61, longitude: 28.23 },
  LT: { latitude: 55.17, longitude: 23.88 },
  LU: { latitude: 49.82, longitude: 6.13 },
  LV: { latitude: 56.88, longitude: 24.6 },
  LY: { latitude: 26.34, longitude: 17.23 },
  MA: { latitude: 31.79, longitude: -7.09 },
  MC: { latitude: 43.75, longitude: 7.41 },
  MD: { latitude: 47.41, longitude: 28.37 },
  ME: { latitude: 42.71, longitude: 19.37 },
  MG: { latitude: -18.77, longitude: 46.87 },
  MK: { latitude: 41.61, longitude: 21.75 },
  ML: { latitude: 17.57, longitude: -3.99 },
  MM: { latitude: 21.91, longitude: 95.96 },
  MN: { latitude: 46.86, longitude: 103.85 },
  MR: { latitude: 21.01, longitude: -10.94 },
  MT: { latitude: 35.94, longitude: 14.38 },
  MU: { latitude: -20.35, longitude: 57.55 },
  MV: { latitude: 3.2, longitude: 73.22 },
  MW: { latitude: -13.25, longitude: 34.3 },
  MX: { latitude: 23.63, longitude: -102.55 },
  MY: { latitude: 4.21, longitude: 101.98 },
  MZ: { latitude: -18.67, longitude: 35.53 },
  NA: { latitude: -22.96, longitude: 18.49 },
  NE: { latitude: 17.61, longitude: 8.08 },
  NG: { latitude: 9.08, longitude: 8.68 },
  NI: { latitude: 12.87, longitude: -85.21 },
  NL: { latitude: 52.13, longitude: 5.29 },
  NO: { latitude: 60.47, longitude: 8.47 },
  NP: { latitude: 28.39, longitude: 84.12 },
  NZ: { latitude: -40.9, longitude: 174.89 },
  OM: { latitude: 21.51, longitude: 55.92 },
  PA: { latitude: 8.54, longitude: -80.78 },
  PE: { latitude: -9.19, longitude: -75.02 },
  PG: { latitude: -6.31, longitude: 143.96 },
  PH: { latitude: 12.88, longitude: 121.77 },
  PK: { latitude: 30.38, longitude: 69.35 },
  PL: { latitude: 51.92, longitude: 19.15 },
  PT: { latitude: 39.4, longitude: -8.22 },
  PY: { latitude: -23.44, longitude: -58.44 },
  QA: { latitude: 25.35, longitude: 51.18 },
  RO: { latitude: 45.94, longitude: 24.97 },
  RS: { latitude: 44.02, longitude: 21.01 },
  RU: { latitude: 61.52, longitude: 105.32 },
  RW: { latitude: -1.94, longitude: 29.87 },
  SA: { latitude: 23.89, longitude: 45.08 },
  SB: { latitude: -9.65, longitude: 160.16 },
  SC: { latitude: -4.68, longitude: 55.49 },
  SD: { latitude: 12.86, longitude: 30.22 },
  SE: { latitude: 60.13, longitude: 18.64 },
  SG: { latitude: 1.35, longitude: 103.82 },
  SI: { latitude: 46.15, longitude: 14.99 },
  SK: { latitude: 48.67, longitude: 19.7 },
  SL: { latitude: 8.46, longitude: -11.78 },
  SN: { latitude: 14.5, longitude: -14.45 },
  SO: { latitude: 5.15, longitude: 46.2 },
  SR: { latitude: 3.92, longitude: -56.03 },
  ST: { latitude: 0.19, longitude: 6.61 },
  SV: { latitude: 13.79, longitude: -88.9 },
  SY: { latitude: 34.8, longitude: 38.99 },
  SZ: { latitude: -26.52, longitude: 31.47 },
  TD: { latitude: 15.45, longitude: 18.73 },
  TG: { latitude: 8.62, longitude: 0.82 },
  TH: { latitude: 15.87, longitude: 100.99 },
  TJ: { latitude: 38.86, longitude: 71.28 },
  TL: { latitude: -8.87, longitude: 125.73 },
  TN: { latitude: 33.89, longitude: 9.54 },
  TR: { latitude: 38.96, longitude: 35.24 },
  TT: { latitude: 10.69, longitude: -61.22 },
  TW: { latitude: 23.7, longitude: 120.96 },
  TZ: { latitude: -6.37, longitude: 34.89 },
  UA: { latitude: 48.38, longitude: 31.17 },
  UG: { latitude: 1.37, longitude: 32.29 },
  US: { latitude: 39.83, longitude: -98.58 },
  UY: { latitude: -32.52, longitude: -55.77 },
  UZ: { latitude: 41.38, longitude: 64.59 },
  VC: { latitude: 12.98, longitude: -61.29 },
  VE: { latitude: 6.42, longitude: -66.59 },
  VN: { latitude: 14.06, longitude: 108.28 },
  YE: { latitude: 15.55, longitude: 48.52 },
  ZA: { latitude: -30.56, longitude: 22.94 },
  ZM: { latitude: -13.13, longitude: 27.85 },
  ZW: { latitude: -19.02, longitude: 29.15 },
});

const countryDisplayNames = new Intl.DisplayNames(['es'], { type: 'region' });

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

  return constantTimeEquals(providedPassword, adminPassword);
};

const fallback = (value, label) => {
  if (typeof value !== 'string') return label;

  const trimmedValue = value.trim();
  return trimmedValue || label;
};

const cleanValue = (value) => {
  if (typeof value !== 'string') return null;

  const trimmedValue = value.trim();
  return trimmedValue || null;
};

const normalizeCountryCode = (country) => {
  const code = cleanValue(country)?.toUpperCase();
  return code && /^[A-Z]{2}$/.test(code) ? code : null;
};

const getCountryName = (country) => {
  const code = normalizeCountryCode(country);

  if (!code) return UNKNOWN_LABEL;

  try {
    return countryDisplayNames.of(code) || code;
  } catch {
    return code;
  }
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

const normalizeText = (value) => cleanValue(value)
  ?.normalize('NFD')
  .replace(/\p{Diacritic}/gu, '')
  .toLowerCase();

const addCityToIndex = (index, city) => {
  const countryCode = normalizeCountryCode(city.country);
  const names = [city.name, city.altName]
    .flatMap((name) => (typeof name === 'string' ? name.split(',') : []))
    .map(normalizeText)
    .filter(Boolean);
  const coordinates = city.loc?.coordinates;

  if (!countryCode || !names.length || !Array.isArray(coordinates)) return;

  const longitude = Number(coordinates[0]);
  const latitude = Number(coordinates[1]);

  if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) return;

  names.forEach((name) => {
    const key = `${countryCode}:${name}`;
    const existingCity = index.get(key);

    if (!existingCity || city.population > existingCity.population) {
      index.set(key, {
        latitude,
        longitude,
        population: city.population || 0,
      });
    }
  });
};

const getCityIndex = () => {
  if (!cityIndex) {
    cityIndex = new Map();
    cities.forEach((city) => addCityToIndex(cityIndex, city));
  }

  return cityIndex;
};

const getCoordinatesForVisit = (countryCode, city) => {
  const normalizedCity = normalizeText(city);

  if (normalizedCity) {
    const cityCoordinates = getCityIndex().get(`${countryCode}:${normalizedCity}`);

    if (cityCoordinates) {
      return {
        latitude: cityCoordinates.latitude,
        longitude: cityCoordinates.longitude,
        precision: 'city',
      };
    }
  }

  const countryCentroid = COUNTRY_CENTROIDS[countryCode];

  if (!countryCentroid) return null;

  return {
    latitude: countryCentroid.latitude,
    longitude: countryCentroid.longitude,
    precision: normalizedCity ? 'country-fallback' : 'country',
  };
};

const buildMapLocations = (visits) => {
  const locations = new Map();
  let unmappedVisits = 0;

  visits.forEach((visit) => {
    const countryCode = normalizeCountryCode(visit.country);
    const coordinates = countryCode ? getCoordinatesForVisit(countryCode, visit.city) : null;

    if (!countryCode || !coordinates) {
      unmappedVisits += 1;
      return;
    }

    const city = cleanValue(visit.city);
    const key = `${countryCode}:${city || 'country'}`;

    if (!locations.has(key)) {
      locations.set(key, {
        countryCode,
        country: getCountryName(countryCode),
        city,
        count: 0,
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
        precision: coordinates.precision,
      });
    }

    locations.get(key).count += 1;
  });

  return {
    locations: Array.from(locations.values())
      .sort((a, b) => b.count - a.count || a.country.localeCompare(b.country)),
    unmappedVisits,
  };
};

const formatRecentVisit = (visit) => ({
  created_at: visit.created_at,
  page: fallback(visit.page, '/'),
  country: getCountryName(visit.country),
  city: fallback(visit.city, 'Desconocida'),
  referrer: getReferrerSource(visit.referrer),
  device: fallback(visit.device, UNKNOWN_LABEL),
  browser: fallback(visit.browser, UNKNOWN_LABEL),
});

export async function GET({ request }) {
  const clientIp = getClientIp(request);
  const rateLimit = checkRateLimit({
    key: `admin-analytics:${clientIp}`,
    limit: 20,
    windowMs: 5 * 60 * 1000,
  });

  if (rateLimit.limited) {
    return json({ ok: false, error: 'Too many requests.' }, 429);
  }

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
    const map = buildMapLocations(safeVisits);

    return json({
      ok: true,
      totalVisits: safeVisits.length,
      uniqueVisitors: uniqueVisitorIds.size,
      countries: groupBy(safeVisits, (visit) => getCountryName(visit.country)),
      pages: groupBy(safeVisits, (visit) => fallback(visit.page, '/')),
      referrers: groupBy(safeVisits, (visit) => getReferrerSource(visit.referrer)),
      devices: groupBy(safeVisits, (visit) => fallback(visit.device, UNKNOWN_LABEL)),
      browsers: groupBy(safeVisits, (visit) => fallback(visit.browser, UNKNOWN_LABEL)),
      mapLocations: map.locations,
      unmappedVisits: map.unmappedVisits,
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
