import L from 'leaflet';

const form = document.querySelector('[data-login-form]');
const passwordInput = document.querySelector('[data-password-input]');
const loginButton = document.querySelector('[data-login-button]');
const message = document.querySelector('[data-login-message]');
const dashboard = document.querySelector('[data-dashboard]');
const loginPanel = document.querySelector('[data-login-panel]');
const totalVisits = document.querySelector('[data-total-visits]');
const uniqueVisitors = document.querySelector('[data-unique-visitors]');
const recentVisitsBody = document.querySelector('[data-recent-visits]');
const visitsMoreButton = document.querySelector('[data-visits-more]');
const visitsCount = document.querySelector('[data-visits-count]');
const mapElement = document.querySelector('[data-analytics-map]');
const mapCount = document.querySelector('[data-map-count]');
const mapNote = document.querySelector('[data-map-note]');
const listNodes = {
  countries: document.querySelector('[data-list="countries"]'),
  pages: document.querySelector('[data-list="pages"]'),
  referrers: document.querySelector('[data-list="referrers"]'),
  devices: document.querySelector('[data-list="devices"]'),
  browsers: document.querySelector('[data-list="browsers"]'),
};

const formatter = new Intl.DateTimeFormat('es-CO', {
  dateStyle: 'medium',
  timeStyle: 'short',
});
const numberFormatter = new Intl.NumberFormat('es-CO');

let map;
let markerLayer;
let recentVisits = [];
let visibleVisits = 20;

const VISITS_INCREMENT = 20;

const setText = (node, value) => {
  if (node) node.textContent = value;
};

const formatNumber = (value) => numberFormatter.format(value || 0);

const formatDate = (value) => {
  if (!value) return 'Sin fecha';

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Sin fecha';

  return formatter.format(date);
};

const getCountryFlag = (countryCode) => {
  if (typeof countryCode !== 'string' || !/^[A-Z]{2}$/.test(countryCode)) return '';

  return countryCode
    .split('')
    .map((letter) => String.fromCodePoint(127397 + letter.charCodeAt(0)))
    .join('');
};

const appendTextCell = (row, value) => {
  const cell = document.createElement('td');
  cell.textContent = value || 'Desconocido';
  row.append(cell);
  return cell;
};

const getMarkerRadius = (count, maxCount) => {
  if (!maxCount) return 8;
  return Math.max(8, Math.min(22, 7 + Math.sqrt(count / maxCount) * 15));
};

const getPrecisionLabel = (precision) => {
  if (precision === 'city') return 'Coordenada de ciudad';
  if (precision === 'country-fallback') return 'Ciudad no resuelta, centro de pais';
  return 'Centro de pais';
};

const createTooltipContent = (location) => {
  const content = document.createElement('div');
  content.className = 'map-tooltip-content';

  const title = document.createElement('strong');
  title.textContent = location.city
    ? `${location.city}, ${location.country}`
    : location.country;

  const subtitle = document.createElement('span');
  subtitle.textContent = getPrecisionLabel(location.precision);

  const visits = document.createElement('em');
  visits.textContent = `${formatNumber(location.count)} visitas`;

  const details = document.createElement('div');
  details.className = 'map-tooltip-stats';

  const unique = document.createElement('span');
  unique.textContent = `${formatNumber(location.uniqueVisitors)} visitantes unicos`;

  const repeated = document.createElement('span');
  const repeatedVisits = location.repeatedVisits || 0;
  repeated.textContent = repeatedVisits
    ? `${formatNumber(repeatedVisits)} visitas repetidas`
    : 'Sin visitas repetidas';

  details.append(unique, repeated);
  content.append(title, subtitle, visits, details);
  return content;
};

const initializeMap = () => {
  if (map || !mapElement) return;

  map = L.map(mapElement, {
    center: [18, -35],
    zoom: 2,
    minZoom: 2,
    maxZoom: 12,
    worldCopyJump: true,
    scrollWheelZoom: false,
  });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap &copy; CARTO',
    maxZoom: 20,
  }).addTo(map);

  markerLayer = L.layerGroup().addTo(map);
};

const renderMap = (locations, unmappedVisits) => {
  initializeMap();
  if (!map || !markerLayer) return;

  markerLayer.clearLayers();

  const safeLocations = Array.isArray(locations)
    ? locations.filter((location) => (
      Number.isFinite(location.latitude) &&
      Number.isFinite(location.longitude)
    ))
    : [];

  setText(mapCount, `${formatNumber(safeLocations.length)} ubicaciones`);

  const note = unmappedVisits
    ? `${formatNumber(unmappedVisits)} visitas no tienen pais o ciudad validos y no se muestran en el mapa.`
    : 'Las ciudades se ubican con coordenadas reales cuando estan disponibles; si no, se usa el centro del pais.';
  setText(mapNote, note);

  if (!safeLocations.length) {
    map.setView([18, -35], 2);
    return;
  }

  const maxCount = Math.max(...safeLocations.map((location) => location.count));
  const bounds = [];

  safeLocations.forEach((location) => {
    const radius = getMarkerRadius(location.count, maxCount);
    const latLng = [location.latitude, location.longitude];
    bounds.push(latLng);

    const marker = L.circleMarker(latLng, {
      radius,
      color: 'rgba(255, 255, 255, 0.95)',
      weight: 2,
      fillColor: 'rgb(var(--color-lilac))',
      fillOpacity: 0.72,
      opacity: 0.95,
    })
      .bindTooltip(createTooltipContent(location), {
        className: 'analytics-map-tooltip',
        direction: 'top',
        opacity: 1,
        offset: [0, -Math.max(radius + 4, 12)],
      });

    marker.on('mouseover focus', () => marker.openTooltip());
    marker.addTo(markerLayer);
  });

  if (bounds.length === 1) {
    map.setView(bounds[0], 4);
  } else {
    map.fitBounds(bounds, {
      padding: [46, 46],
      maxZoom: 5,
    });
  }

  window.requestAnimationFrame(() => map.invalidateSize());
};

const renderRankList = (node, items) => {
  if (!node) return;
  node.textContent = '';

  if (!items?.length) {
    const empty = document.createElement('p');
    empty.className = 'empty-state';
    empty.textContent = 'Sin datos';
    node.append(empty);
    return;
  }

  const maxCount = Math.max(...items.map((item) => item.count));

  items.slice(0, 8).forEach((item) => {
    const row = document.createElement('div');
    row.className = 'rank-row';

    const content = document.createElement('div');
    content.className = 'rank-content';

    const label = document.createElement('span');
    label.className = 'rank-label';
    label.textContent = item.label;

    const count = document.createElement('strong');
    count.className = 'rank-count';
    count.textContent = formatNumber(item.count);

    const track = document.createElement('div');
    track.className = 'rank-track';

    const bar = document.createElement('span');
    bar.className = 'rank-bar';
    bar.style.setProperty('--bar-width', `${Math.max((item.count / maxCount) * 100, 7)}%`);

    content.append(label, count);
    track.append(bar);
    row.append(content, track);
    node.append(row);
  });
};

const renderRecentVisits = (visits, limit = VISITS_INCREMENT) => {
  if (!recentVisitsBody) return;
  recentVisitsBody.textContent = '';

  if (!visits?.length) {
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    cell.colSpan = 9;
    cell.textContent = 'Sin visitas registradas';
    row.append(cell);
    recentVisitsBody.append(row);
    setText(visitsCount, '0 visitas mostradas');
    if (visitsMoreButton) visitsMoreButton.hidden = true;
    return;
  }

  const visibleRows = visits.slice(0, limit);

  visibleRows.forEach((visit) => {
    const row = document.createElement('tr');
    if (visit.isOwnerSummary) row.classList.add('owner-summary-row');

    appendTextCell(row, formatDate(visit.created_at));

    const visitorCell = document.createElement('td');
    const visitorId = document.createElement('span');
    visitorId.className = 'visitor-id';
    visitorId.textContent = visit.visitorId || 'sin-id';
    visitorCell.append(visitorId);
    row.append(visitorCell);

    const statusCell = document.createElement('td');
    const status = document.createElement('span');
    status.className = 'visit-status';
    status.dataset.repeated = String(Boolean(visit.isRepeatedVisitor));
    status.dataset.owner = String(Boolean(visit.isOwnerSummary));
    status.textContent = visit.isOwnerSummary
      ? `Entraste ${formatNumber(visit.visitorVisitCount)} veces`
      : visit.isRepeatedVisitor
        ? `Repite x${formatNumber(visit.visitorVisitCount)}`
        : 'Nuevo';
    statusCell.append(status);
    row.append(statusCell);

    appendTextCell(row, visit.page);

    const countryCell = document.createElement('td');
    const country = document.createElement('span');
    country.className = 'country-cell';

    const flag = document.createElement('span');
    flag.className = 'country-flag';
    flag.setAttribute('aria-hidden', 'true');
    flag.textContent = getCountryFlag(visit.countryCode);

    const countryName = document.createElement('span');
    countryName.textContent = visit.country || 'Desconocido';

    country.append(flag, countryName);
    countryCell.append(country);
    row.append(countryCell);

    appendTextCell(row, visit.city);
    appendTextCell(row, visit.referrer);
    appendTextCell(row, visit.device);
    appendTextCell(row, visit.browser);
    recentVisitsBody.append(row);
  });

  setText(
    visitsCount,
    `${formatNumber(visibleRows.length)} de ${formatNumber(visits.length)} visitas mostradas`
  );

  if (visitsMoreButton) {
    visitsMoreButton.hidden = visibleRows.length >= visits.length;
  }
};

const renderDashboard = (summary) => {
  setText(totalVisits, formatNumber(summary.totalVisits));
  setText(uniqueVisitors, formatNumber(summary.uniqueVisitors));
  renderMap(summary.mapLocations, summary.unmappedVisits);
  renderRankList(listNodes.countries, summary.countries);
  renderRankList(listNodes.pages, summary.pages);
  renderRankList(listNodes.referrers, summary.referrers);
  renderRankList(listNodes.devices, summary.devices);
  renderRankList(listNodes.browsers, summary.browsers);
  recentVisits = Array.isArray(summary.recentVisits) ? summary.recentVisits : [];
  visibleVisits = VISITS_INCREMENT;
  renderRecentVisits(recentVisits, visibleVisits);
};

visitsMoreButton?.addEventListener('click', () => {
  visibleVisits += VISITS_INCREMENT;
  renderRecentVisits(recentVisits, visibleVisits);
});

const offerPasswordSave = async () => {
  if (!form || !window.PasswordCredential || !navigator.credentials?.store) return;

  try {
    const credential = new PasswordCredential(form);
    await navigator.credentials.store(credential);
  } catch {
    // Browser support varies; the normal autocomplete hints remain in place.
  }
};

form?.addEventListener('submit', async (event) => {
  event.preventDefault();

  const password = passwordInput?.value || '';
  setText(message, 'Cargando...');
  loginButton.disabled = true;

  try {
    const response = await fetch('/api/analytics/summary', {
      method: 'GET',
      headers: {
        'x-admin-password': password,
      },
    });

    if (!response.ok) {
      setText(message, response.status === 401 ? 'Contrasena incorrecta.' : 'No se pudo cargar el panel.');
      dashboard.hidden = true;
      return;
    }

    const summary = await response.json();
    renderDashboard(summary);
    await offerPasswordSave();
    setText(message, '');
    loginPanel.hidden = true;
    dashboard.hidden = false;
    window.requestAnimationFrame(() => map?.invalidateSize());
  } catch {
    setText(message, 'No se pudo conectar con el servidor.');
    dashboard.hidden = true;
  } finally {
    loginButton.disabled = false;
  }
});
