// SVG icon library — clean stroke icons matching terminal/tech aesthetic
window.SGP_ICONS = {
  chat: '<path d="M3 5h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9l-4 3v-3H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"/><circle cx="8" cy="10.5" r="0.6" fill="currentColor"/><circle cx="11" cy="10.5" r="0.6" fill="currentColor"/><circle cx="14" cy="10.5" r="0.6" fill="currentColor"/>',
  brain: '<path d="M9 4a3 3 0 0 0-3 3v.5A2.5 2.5 0 0 0 4 10v.5A2.5 2.5 0 0 0 6 13a2 2 0 0 0 2 2v3M15 4a3 3 0 0 1 3 3v.5A2.5 2.5 0 0 1 20 10v.5A2.5 2.5 0 0 1 18 13a2 2 0 0 1-2 2v3M12 4v16M9 8h3M12 12h3"/>',
  spark: '<path d="M12 3v6M12 15v6M3 12h6M15 12h6M5.6 5.6l4.2 4.2M14.2 14.2l4.2 4.2M5.6 18.4l4.2-4.2M14.2 9.8l4.2-4.2"/>',
  target: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/>',
  chart: '<path d="M4 20V8M10 20V4M16 20v-8M22 20H2"/><circle cx="4" cy="8" r="1.5" fill="currentColor"/><circle cx="10" cy="4" r="1.5" fill="currentColor"/><circle cx="16" cy="12" r="1.5" fill="currentColor"/>',
  mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M8 21h8"/>',
  funnel: '<path d="M3 4h18l-7 9v6l-4 2v-8L3 4z"/>',
  ticket: '<path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4V8z"/><path d="M9 6v12" stroke-dasharray="2 2"/>',
  doc: '<path d="M6 3h8l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M14 3v4h4M8 11h8M8 15h8M8 19h5"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M3 20c0-3.5 3-6 6-6s6 2.5 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M14 20c0-2.5 1.5-4.5 4-4.5S22 17.5 22 20"/>',
  kanban: '<rect x="3" y="4" width="18" height="16" rx="1.5"/><path d="M3 9h18M9 4v16M15 4v16"/>',
  report: '<rect x="4" y="3" width="16" height="18" rx="1.5"/><path d="M8 8h8M8 12h8M8 16h5"/><circle cx="18" cy="16" r="0.8" fill="currentColor"/>',
  layout: '<rect x="3" y="4" width="18" height="16" rx="1.5"/><path d="M3 9h18M9 9v11"/>',
  cloud: '<path d="M7 18a4 4 0 0 1-1-7.9A6 6 0 0 1 18 9.5 4.5 4.5 0 0 1 17 18H7z"/>',
  db: '<ellipse cx="12" cy="5" rx="8" ry="2.5"/><path d="M4 5v14c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5V5M4 12c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5"/>',
  flow: '<rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="3" width="6" height="6" rx="1"/><rect x="9" y="15" width="6" height="6" rx="1"/><path d="M6 9v3a2 2 0 0 0 2 2h2M18 9v3a2 2 0 0 1-2 2h-2"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="M16 8l-3 6-6 3 3-6 6-3z" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="0.8" fill="#000" stroke="none"/>',
  globe: '<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/>',
  megaphone: '<path d="M3 10v4l11 5V5L3 10z"/><path d="M14 8c2 0 3 1.8 3 4s-1 4-3 4M7 14v5h3v-3.5"/>',
  search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="M15 15l5 5"/>',
  bullseye: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="0.8" fill="currentColor"/>',
  rocket: '<path d="M12 3c4 4 5 7 5 11l-5 3-5-3c0-4 1-7 5-11z"/><path d="M9 14l-3 4 3-1 1 3 2-3M15 14l3 4-3-1-1 3-2-3"/><circle cx="12" cy="10" r="1.5"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="M3 7l9 6 9-6"/>',
};

window.SGP_makeIcon = function(name, size = 22) {
  const path = window.SGP_ICONS[name];
  if (!path) return '';
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${path}</svg>`;
};
