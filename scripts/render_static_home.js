// Keep the Spanish HTML source aligned with the content rendered by app.js.
// Search crawlers and visitors without JavaScript can then read the services and cases.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const htmlPath = path.join(root, 'index.html');
const sandbox = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'data.js'), 'utf8'), sandbox);
const data = sandbox.window.PORTFOLIO_DATA;
const es = data.es;
const e = value => String(value).replace(/[&<>"']/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
})[char]);

const fragments = {
  'nav-links': ['home', 'about', 'services', 'projects'].map(id => `<a href="#${id}" data-nav="${id}">${e(es.nav[id])}</a>`).join(''),
  'mobile-nav': ['home', 'about', 'services', 'projects', 'contact'].map(id => `<a href="#${id}" data-nav="${id}">${e(es.nav[id])}</a>`).join(''),
  'about-kicker': e(es.about.kicker),
  'about-title': e(es.about.title),
  'about-body': es.about.body.map(p => `<p>${e(p)}</p>`).join(''),
  'about-credentials': es.about.credentials.map(name => `<span class="about-cred">${e(name)}</span>`).join(''),
  'about-stats': es.about.stats.map(stat => `<div class="about-stat-card"><span class="about-stat-icon"></span><span class="about-stat-k">${e(stat.k)}</span><span class="about-stat-v">${e(stat.v)}</span></div>`).join(''),
  'services-kicker': e(es.services.kicker),
  'services-title': e(es.services.title),
  'services-areas': es.services.areas.map(area => `<div class="area" data-area="${e(area.id)}"><div class="area-head"><div class="area-head-left"><span class="area-id">${e(area.id)}</span><h3 class="area-label">${e(area.label)}</h3></div><p class="area-desc">${e(area.desc)}</p></div><div class="services-grid">${area.items.map(item => `<div class="service"><div class="service-head"><span class="service-icon"></span></div><h4 class="service-title">${e(item.title)}</h4><p class="service-desc">${e(item.desc)}</p><span class="service-rule"></span></div>`).join('')}</div></div>`).join(''),
  'projects-kicker': e(es.projects.kicker),
  'projects-title': e(es.projects.title),
  'projects-note': e(es.projects.note),
  'projects-list': es.projects.items.filter(project => project.link).map(project => {
    const slot = project.link ? 'a' : 'div';
    const href = project.link ? ` href="${e(project.link)}" aria-label="Ver caso de éxito: ${e(project.title)}"` : '';
    const image = project.image ? `<img src="${e(project.image)}" alt="${e(project.title)}" loading="lazy" decoding="async" width="${project.image.endsWith('.webp') ? '960' : '640'}" height="${project.image.endsWith('.webp') ? '720' : '480'}">` : '';
    const title = project.link ? `<a href="${e(project.link)}">${e(project.title)}</a>` : e(project.title);
    const link = project.link ? `<a href="${e(project.link)}" class="project-link"><span>Ver caso de éxito | 2026</span><span class="arr">→</span></a>` : '';
    return `<article class="project project-linked"><${slot} class="project-slot"${href}>${image}</${slot}><div class="project-body"><div class="project-meta"><span class="project-tag">${e(project.tag)}</span><span class="project-status">${e(project.status)}</span></div><h3>${title}</h3><p>${e(project.summary)}</p><div class="chips">${project.chips.map(chip => `<span class="chip">${e(chip)}</span>`).join('')}</div>${link}</div></article>`;
  }).join(''),
  'journey-kicker': e(es.journey.kicker),
  'journey-title': e(es.journey.title),
  'experience-title': e(es.experience.title),
  'experience-list': es.experience.items.map(item => `<div class="tl-item"><div class="tl-period">${e(item.period)}</div><div><h4 class="tl-role">${e(item.role)}</h4><div class="tl-org">${e(item.org)}</div><p class="tl-desc">${e(item.desc)}</p></div></div>`).join(''),
  'education-title': e(es.education.title),
  'education-list': es.education.items.map(item => `<div class="edu-item"><div class="edu-year">${e(item.year)}</div><div><h4>${e(item.title)}</h4><div class="org">${e(item.org)}</div></div></div>`).join(''),
  'courses-kicker-sub': e(es.courses.kicker),
  'courses-list': `<ul>${es.courses.items.map(item => `<li>${e(item)}</li>`).join('')}</ul>`,
  'faq-kicker': e(es.faq.kicker),
  'faq-title': e(es.faq.title),
  'faq-list': es.faq.items.map((item, index) => `<details class="faq-item"${index === 0 ? ' open' : ''}><summary><span class="faq-num">${String(index + 1).padStart(2, '0')}</span><span class="faq-q">${e(item.q)}</span><span class="faq-toggle">+</span></summary><div class="faq-a">${e(item.a)}</div></details>`).join(''),
  'contact-kicker': e(es.contact.kicker),
  'contact-title': e(es.contact.title),
  'contact-sub': e(es.contact.sub),
  'contact-info': [
    ['EMAIL', data.meta.email, `mailto:${data.meta.email}`],
    ['LINKEDIN', 'linkedin.com/in/sergioguillenpampliega', data.meta.linkedin],
    ['INSTAGRAM', 'instagram.com/sergiogp.ia', data.meta.instagram],
    ['TELÉFONO', data.meta.phone, `tel:${data.meta.phone.replace(/\s/g, '')}`],
    ['WEB', data.meta.handle, `https://${data.meta.handle}`],
  ].map(([label, value, href]) => `<a href="${e(href)}" target="${href.startsWith('http') ? '_blank' : '_self'}" rel="noopener"><div><div class="label">${e(label)}</div><div class="val">${e(value)}</div></div><span class="arr">↗</span></a>`).join(''),
};

let html = fs.readFileSync(htmlPath, 'utf8');
const original = html;
for (const [name, fragment] of Object.entries(fragments)) {
  const start = `<!-- STATIC:${name}:START -->`;
  const end = `<!-- STATIC:${name}:END -->`;
  if (!html.includes(start)) {
    const emptyElement = new RegExp(`(<([a-z][a-z0-9]*)\\b[^>]*\\bid="${name}"[^>]*>)(</\\2>)`);
    if (!emptyElement.test(html)) throw new Error(`No empty HTML element for: ${name}`);
    html = html.replace(emptyElement, `$1${start}${end}$3`);
  }
  const from = html.indexOf(start);
  const to = html.indexOf(end);
  if (from < 0 || to < from) throw new Error(`Missing or broken static marker: ${name}`);
  html = html.slice(0, from + start.length) + fragment + html.slice(to);
}

if (process.argv.includes('--check')) {
  if (html !== original) {
    console.error('Static Spanish HTML differs from data.js; run node scripts/render_static_home.js');
    process.exitCode = 1;
  } else console.log('OK: static Spanish HTML matches data.js');
} else {
  if (html !== original) fs.writeFileSync(htmlPath, html);
  console.log('Updated static Spanish HTML in index.html');
}
