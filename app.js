// Landing oficial — Sergio Guillén Pampliega
(function () {
  const state = {
    lang: localStorage.getItem('sgp-lang') || (navigator.language?.startsWith('en') ? 'en' : 'es'),
  };

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  function t() { return window.PORTFOLIO_DATA[state.lang]; }
  function meta() { return window.PORTFOLIO_DATA.meta; }

  function el(tag, attrs = {}, children = []) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === 'class') node.className = v;
      else if (k === 'html') node.innerHTML = v;
      else if (k.startsWith('on')) node.addEventListener(k.slice(2), v);
      else node.setAttribute(k, v);
    }
    (Array.isArray(children) ? children : [children]).forEach(c => {
      if (c == null) return;
      node.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
    });
    return node;
  }

  const NAV_IDS = ['home', 'about', 'services', 'projects', 'skills', 'experience', 'education', 'faq', 'contact'];

  function renderNav() {
    const nav = $('#nav-links');
    nav.innerHTML = '';
    const mobileNav = $('#mobile-nav');
    if (mobileNav) mobileNav.innerHTML = '';
    NAV_IDS.forEach(id => {
      const label = t().nav[id];
      if (!label) return;
      const a = el('a', { href: '#' + id, 'data-nav': id }, label);
      nav.appendChild(a);
      // Mobile nav clone
      if (mobileNav) {
        const ma = el('a', { href: '#' + id, 'data-nav': id, onclick: () => closeMobileMenu() }, label);
        mobileNav.appendChild(ma);
      }
    });
    $('.nav-cta-text').textContent = t().nav.contact;
  }

  function renderHero() {
    const lines = t().hero.tagline.split('\n');
    const titleHtml = lines.map((l, i) => i === lines.length - 1
      ? `<span class="hl">${l}</span>`
      : `<span>${l}</span>`).join('<br/>');
    $('#hero-status-text').textContent = t().hero.status;
    $('#hero-role').textContent = t().hero.role;
    $('#hero-title').innerHTML = titleHtml + '<span class="hero-cursor"></span>';
    $('#hero-sub').textContent = t().hero.sub;
    $('#hero-cta-primary').innerHTML = `${t().hero.ctaPrimary} <span class="arr">→</span>`;
    $('#hero-cta-secondary').innerHTML = `${t().hero.ctaSecondary} <span class="arr">↓</span>`;
    $('#hero-coords').textContent = `LAT 37.99° N · LON 1.13° W · MURCIA / ES`;
    $('#hero-time-label').textContent = state.lang === 'es' ? 'SISTEMA' : 'SYSTEM';
    $('#hero-scroll').textContent = state.lang === 'es' ? 'DESPLAZA' : 'SCROLL';
  }

  function renderAbout() {
    $('#about-kicker').textContent = t().about.kicker;
    $('#about-title').textContent = t().about.title;
    const body = $('#about-body');
    body.innerHTML = '';
    t().about.body.forEach(p => body.appendChild(el('p', {}, p)));

    const photo = $('#about-photo-img');
    if (photo) {
      photo.src = meta().photoHero;
      photo.alt = meta().name;
      $('#about-photo-caption').textContent = meta().photoCaption[state.lang];
    }

    // Credentials
    const creds = $('#about-credentials');
    creds.innerHTML = '';
    (t().about.credentials || []).forEach(c => {
      creds.appendChild(el('span', { class: 'about-cred' }, c));
    });

    // Stat cards
    const stats = $('#about-stats');
    stats.innerHTML = '';
    const iconSvgs = {
      brain: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 0-6 6c0 1.66.68 3.16 1.76 4.24L12 16l4.24-3.76A6 6 0 0 0 12 2z"/><path d="M12 16v6"/><path d="M8 22h8"/></svg>',
      globe: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/></svg>',
      pin: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    };
    t().about.stats.forEach(s => {
      const iconHtml = iconSvgs[s.icon] || '';
      stats.appendChild(el('div', { class: 'about-stat-card' }, [
        el('span', { class: 'about-stat-icon', html: iconHtml }),
        el('span', { class: 'about-stat-k' }, s.k),
        el('span', { class: 'about-stat-v' }, s.v),
      ]));
    });
  }

  function renderServices() {
    $('#services-kicker').textContent = t().services.kicker;
    $('#services-title').textContent = t().services.title;
    const wrap = $('#services-areas');
    wrap.innerHTML = '';
    t().services.areas.forEach(area => {
      const head = el('div', { class: 'area-head' }, [
        el('div', { class: 'area-head-left' }, [
          el('span', { class: 'area-id' }, area.id),
          el('h3', { class: 'area-label' }, area.label),
        ]),
        el('p', { class: 'area-desc' }, area.desc),
      ]);
      const grid = el('div', { class: 'services-grid' });
      area.items.forEach((s) => {
        const iconHtml = s.icon && window.SGP_makeIcon ? window.SGP_makeIcon(s.icon, 22) : '';
        grid.appendChild(el('div', { class: 'service' }, [
          el('div', { class: 'service-head' }, [
            el('span', { class: 'service-icon', html: iconHtml }),
            el('span', { class: 'service-arrow', html: '↗' }),
          ]),
          el('h4', { class: 'service-title' }, s.title),
          el('p', { class: 'service-desc' }, s.desc),
          el('span', { class: 'service-rule' }),
        ]));
      });
      wrap.appendChild(el('div', { class: 'area', 'data-area': area.id }, [head, grid]));
    });
  }

  function renderProjects() {
    $('#projects-kicker').textContent = t().projects.kicker;
    $('#projects-title').textContent = t().projects.title;
    $('#projects-note').textContent = t().projects.note;
    const list = $('#projects-list');
    list.innerHTML = '';
    t().projects.items.forEach((p, idx) => {
      const chips = el('div', { class: 'chips' });
      p.chips.forEach(c => chips.appendChild(el('span', { class: 'chip' }, c)));
      const metricsWrap = el('div', { class: 'metrics' });
      (p.metrics || []).forEach(m => metricsWrap.appendChild(el('span', { class: 'metric' }, m)));

      // Image slot: shows real image if provided, otherwise a styled placeholder
      const slot = el('div', { class: 'project-slot' });
      if (p.image) {
        slot.appendChild(el('img', { src: p.image, alt: p.title, loading: 'lazy' }));
      } else {
        slot.classList.add('is-placeholder');
        slot.innerHTML = `
          <span class="ps-grid"></span>
          <span class="ps-label">PROJECT&nbsp;//&nbsp;${String(idx + 1).padStart(2, '0')}</span>
          <span class="ps-shape"></span>
          <span class="ps-tag">${p.tag}</span>
        `;
      }

      const card = el('article', { class: 'project' + (p.link ? ' project-linked' : '') }, [
        slot,
        el('div', { class: 'project-body' }, [
          el('div', { class: 'project-meta' }, [
            el('span', { class: 'project-tag' }, p.tag),
            el('span', { class: 'project-status' }, p.status),
          ]),
          el('h3', {}, p.title),
          el('p', {}, p.summary),
          chips,
          metricsWrap,
          p.link ? el('a', { href: p.link, class: 'project-link' }, [
            el('span', {}, state.lang === 'es' ? 'Ver Caso de Éxito | 2026' : 'View Case Study | 2026'),
            el('span', { class: 'arr' }, '→'),
          ]) : null,
        ]),
      ]);
      if (p.link) {
        card.style.cursor = 'pointer';
        card.addEventListener('click', (e) => {
          if (e.target.closest('a')) return;
          window.location.href = p.link;
        });
      }
      list.appendChild(card);
    });
  }

  function renderExperience() {
    $('#experience-kicker').textContent = t().experience.kicker;
    $('#experience-title').textContent = t().experience.title;
    const tl = $('#experience-list');
    tl.innerHTML = '';
    t().experience.items.forEach(it => {
      tl.appendChild(el('div', { class: 'tl-item' }, [
        el('div', { class: 'tl-period' }, it.period),
        el('div', {}, [
          el('h4', { class: 'tl-role' }, it.role),
          el('div', { class: 'tl-org' }, it.org),
          el('p', { class: 'tl-desc' }, it.desc),
        ]),
      ]));
    });
  }

  function renderEducation() {
    $('#education-kicker').textContent = t().education.kicker;
    $('#education-title').textContent = t().education.title;
    const list = $('#education-list');
    list.innerHTML = '';
    t().education.items.forEach(it => {
      list.appendChild(el('div', { class: 'edu-item' }, [
        el('div', { class: 'edu-year' }, it.year),
        el('div', {}, [
          el('h4', {}, it.title),
          el('div', { class: 'org' }, it.org),
        ]),
      ]));
    });
    $('#courses-kicker-sub').textContent = t().courses.kicker;
    const cl = $('#courses-list');
    cl.innerHTML = '<ul></ul>';
    const ul = cl.querySelector('ul');
    t().courses.items.forEach(c => ul.appendChild(el('li', {}, c)));
  }

  function renderSkills() {
    $('#skills-kicker').textContent = t().skills.kicker;
    $('#skills-title').textContent = t().skills.title;
    const grid = $('#skills-grid');
    grid.innerHTML = '';
    t().skills.groups.forEach(g => {
      const chips = el('div', { class: 'skill-chips' });
      g.items.forEach(i => chips.appendChild(el('span', { class: 'skill-chip' }, i)));
      grid.appendChild(el('div', { class: 'skill-group' }, [
        el('h4', { class: 'skill-group-label' }, g.label),
        chips,
      ]));
    });

    const ll = $('#langs-list');
    ll.innerHTML = '';
    t().languages.items.forEach(l => {
      ll.appendChild(el('div', { class: 'lang-item' }, [
        el('span', { class: 'lang-name' }, l.lang),
        el('span', { class: 'lang-level' }, l.level),
      ]));
    });
  }

  function renderFaq() {
    $('#faq-kicker').textContent = t().faq.kicker;
    $('#faq-title').textContent = t().faq.title;
    const list = $('#faq-list');
    list.innerHTML = '';
    t().faq.items.forEach((it, i) => {
      const details = el('details', { class: 'faq-item' }, [
        el('summary', {}, [
          el('span', { class: 'faq-num' }, String(i + 1).padStart(2, '0')),
          el('span', { class: 'faq-q' }, it.q),
          el('span', { class: 'faq-toggle' }, '+'),
        ]),
        el('div', { class: 'faq-a' }, it.a),
      ]);
      if (i === 0) details.setAttribute('open', '');
      list.appendChild(details);
    });
  }

  function renderContact() {
    $('#contact-kicker').textContent = t().contact.kicker;
    $('#contact-title').textContent = t().contact.title;
    $('#contact-sub').textContent = t().contact.sub;
    $('#contact-cta-text').textContent = t().contact.cta;

    // Form labels
    const setLabel = (id, txt) => { const e = $(id); if (e) e.textContent = txt; };
    const setPlaceholder = (id, txt) => { const e = $(id); if (e) e.setAttribute('placeholder', txt); };
    setLabel('#form-label-name', t().contact.formName);
    setLabel('#form-label-email', t().contact.formEmail);
    setPlaceholder('#form-msg', t().contact.formMessage);

    const info = $('#contact-info');
    info.innerHTML = '';
    const items = [
      { label: 'EMAIL', value: meta().email, href: 'mailto:' + meta().email },
      { label: 'LINKEDIN', value: 'linkedin.com/in/sergioguillenpampliega', href: meta().linkedin },
      { label: 'INSTAGRAM', value: 'instagram.com/sergiogp.ia', href: meta().instagram },
      { label: state.lang === 'es' ? 'TELÉFONO' : 'PHONE', value: meta().phone, href: 'tel:' + meta().phone.replace(/\s/g, '') },
      { label: 'WEB', value: meta().handle, href: 'https://' + meta().handle },
    ];
    items.forEach(it => {
      info.appendChild(el('a', { href: it.href, target: it.href.startsWith('http') ? '_blank' : '_self', rel: 'noopener' }, [
        el('div', {}, [
          el('div', { class: 'label' }, it.label),
          el('div', { class: 'val' }, it.value),
        ]),
        el('span', { class: 'arr' }, '↗'),
      ]));
    });

    const fy = new Date().getFullYear();
    $('#footer-tagline').textContent = t().footer.tagline;
    $('#footer-rights').textContent = `© ${fy} ${meta().name}. ${t().footer.rights}`;

    // Form submit
    const form = $('#contact-form');
    if (form && !form._bound) {
      form._bound = true;
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const sent = $('#contact-sent');
        if (sent) {
          sent.textContent = t().contact.formSent;
          sent.classList.add('show');
          form.reset();
          setTimeout(() => sent.classList.remove('show'), 4000);
        }
      });
    }
  }

  function setActiveLang() {
    $$('.lang-switch button').forEach(b => b.classList.toggle('active', b.dataset.lang === state.lang));
    document.documentElement.lang = state.lang;
  }

  function setLang(lang) {
    state.lang = lang;
    localStorage.setItem('sgp-lang', lang);
    setActiveLang();
    renderAll();
  }

  function renderAll() {
    renderNav();
    renderHero();
    renderAbout();
    renderServices();
    renderProjects();
    renderSkills();
    renderExperience();
    renderEducation();
    renderFaq();
    renderContact();
    setupReveal();
  }

  let observer;
  function setupReveal() {
    if (observer) observer.disconnect();
    observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.02, rootMargin: '0px 0px 80px 0px' });
    $$('.reveal').forEach(n => observer.observe(n));
  }


  function setupNavScroll() {
    const onScroll = () => {
      const y = window.scrollY + 120;
      let active = NAV_IDS[0];
      for (const id of NAV_IDS) {
        const sec = document.getElementById(id);
        if (sec && sec.offsetTop <= y) active = id;
      }
      $$('.nav-links a').forEach(a => a.classList.toggle('active', a.dataset.nav === active));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function setupClock() {
    const tick = () => {
      const d = new Date();
      const hh = String(d.getHours()).padStart(2, '0');
      const mm = String(d.getMinutes()).padStart(2, '0');
      const ss = String(d.getSeconds()).padStart(2, '0');
      const clock = document.getElementById('hero-clock');
      if (clock) clock.textContent = `${hh}:${mm}:${ss} CET · ONLINE`;
    };
    tick();
    setInterval(tick, 1000);
  }

  function closeMobileMenu() {
    const menu = $('#mobile-menu');
    const btn = $('#hamburger');
    if (menu) menu.classList.remove('open');
    if (btn) btn.classList.remove('open');
    document.body.classList.remove('menu-open');
  }

  document.addEventListener('DOMContentLoaded', () => {
    $$('.lang-switch button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));
    setActiveLang();
    renderAll();
    setupNavScroll();
    setupClock();

    // Hamburger toggle
    const hamburger = $('#hamburger');
    if (hamburger) {
      hamburger.addEventListener('click', () => {
        const menu = $('#mobile-menu');
        const isOpen = menu.classList.toggle('open');
        hamburger.classList.toggle('open');
        document.body.classList.toggle('menu-open', isOpen);
      });
    }
  });
})();
