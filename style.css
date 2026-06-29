/* ═══════════════════════════════════════════════════════════════
   JVN_04 · CYBERPUNK PORTFOLIO · script.js
   ═══════════════════════════════════════════════════════════════ */

(() => {
  'use strict';

  /* ─────────── LUCIDE ─────────── */
  if (window.lucide) lucide.createIcons();

  /* ─────────── BOOT LOADER ─────────── */
  const boot = document.getElementById('boot-loader');
  if (boot) {
    // hide boot after sequence completes (~3.4s)
    window.addEventListener('load', () => {
      setTimeout(() => boot.classList.add('done'), 2800);
      setTimeout(() => { boot.style.display = 'none'; }, 3600);
    });
  }

  /* ─────────── CUSTOM CURSOR ─────────── */
  const dot  = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  const isTouch = matchMedia('(hover: none)').matches;

  if (dot && ring && !isTouch) {
    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px)`;
    });
    (function loop() {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px)`;
      requestAnimationFrame(loop);
    })();

    // grow on interactive
    const grow = 'a, button, .nav-link, .filter-btn, .stat-card, .stack-card, .skill-row, .project-card, .contact-card, .tl-card, .edu-card, .photo-frame, [data-glitch]';
    document.querySelectorAll(grow).forEach(el => {
      el.addEventListener('mouseenter', () => ring.classList.add('active'));
      el.addEventListener('mouseleave', () => ring.classList.remove('active'));
    });

    // hide on leave window
    document.addEventListener('mouseleave', () => { dot.style.opacity = '0'; ring.style.opacity = '0'; });
    document.addEventListener('mouseenter', () => { dot.style.opacity = '1'; ring.style.opacity = '1'; });
  }

  /* ─────────── SCROLL PROGRESS ─────────── */
  const bar = document.querySelector('.scroll-progress-bar');
  if (bar) {
    const onScroll = () => {
      const h = document.documentElement;
      const max = (h.scrollHeight - h.clientHeight) || 1;
      bar.style.width = ((h.scrollTop || document.body.scrollTop) / max * 100) + '%';
    };
    document.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ─────────── SIDEBAR (mobile drawer) ─────────── */
  const sidebar   = document.querySelector('.sidebar');
  const hamburger = document.querySelector('.hamburger');
  const navLinks  = document.querySelectorAll('.nav-link');

  const closeNav = () => { sidebar?.classList.remove('open'); hamburger?.classList.remove('open'); };
  const openNav  = () => { sidebar?.classList.add('open');    hamburger?.classList.add('open'); };

  if (hamburger && sidebar) {
    hamburger.addEventListener('click', () => {
      sidebar.classList.contains('open') ? closeNav() : openNav();
    });
  }

  // close drawer when nav link clicked on mobile + add a subtle "route" glitch
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      if (window.innerWidth <= 900) closeNav();
      // mini glitch overlay
      flashGlitch();
    });
  });

  // close on outside click (mobile)
  document.addEventListener('click', e => {
    if (window.innerWidth > 900) return;
    if (!sidebar?.classList.contains('open')) return;
    if (sidebar.contains(e.target) || hamburger?.contains(e.target)) return;
    closeNav();
  });

  /* ─────────── ACTIVE SECTION INDICATOR (IntersectionObserver) ─────────── */
  const sections = document.querySelectorAll('main section[id]');
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const id = e.target.id;
      navLinks.forEach(l => l.classList.toggle('active', l.dataset.section === id));
      // update URL hash without scroll jump
      if (history.replaceState) {
        history.replaceState(null, '', '#' + id);
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
  sections.forEach(s => sectionObserver.observe(s));

  /* ─────────── TYPING ANIMATION ─────────── */
  const roles = [
    'Game Technology Student',
    'Full-Stack Developer · Django',
    'Unity / C# Engineer',
    'Arduino · IoT Tinkerer',
    'Currently shipping: Escape The Debt'
  ];
  const typed = document.querySelector('.typed-text');
  if (typed) {
    let ri = 0, ci = 0, deleting = false;
    const tick = () => {
      const word = roles[ri];
      if (!deleting) {
        typed.textContent = word.slice(0, ++ci);
        if (ci === word.length) {
          deleting = true;
          setTimeout(tick, 1700);
          return;
        }
      } else {
        typed.textContent = word.slice(0, --ci);
        if (ci === 0) {
          deleting = false;
          ri = (ri + 1) % roles.length;
        }
      }
      setTimeout(tick, deleting ? 30 : 65);
    };
    tick();
  }

  /* ─────────── SKILL BARS ─────────── */
  const skillRows = document.querySelectorAll('.skill-row');
  const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const row = e.target;
      const pct = row.dataset.pct || 0;
      row.style.setProperty('--target-pct', pct + '%');
      row.classList.add('animated');
      skillObserver.unobserve(row);
    });
  }, { threshold: 0.4 });
  skillRows.forEach(r => skillObserver.observe(r));

  /* ─────────── PROJECT FILTERS ─────────── */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      projectCards.forEach(card => {
        const cats = (card.dataset.cat || '').split(' ');
        const show = (f === 'all') || cats.includes(f);
        if (show) {
          card.style.display = '';
          // fade-in
          requestAnimationFrame(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(10px)';
            requestAnimationFrame(() => {
              card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            });
          });
        } else {
          card.style.display = 'none';
        }
      });
      flashGlitch();
    });
  });

  /* ─────────── THEME TOGGLE ─────────── */
  const themeBtn = document.querySelector('.theme-toggle');
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('jvn-theme') || 'dark';
  root.setAttribute('data-theme', savedTheme);
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('jvn-theme', next);
      flashGlitch();
    });
  }

  /* ─────────── CV DOWNLOAD MODAL ─────────── */
  const cvBtns  = document.querySelectorAll('.btn-cv');
  const modal   = document.getElementById('cv-modal');
  const modalClose = modal?.querySelector('.modal-close');
  const confirmBtn = modal?.querySelector('.btn-confirm');
  const cancelBtn  = modal?.querySelector('.btn-cancel');

  const openModal  = () => { modal?.classList.add('open'); document.body.style.overflow = 'hidden'; };
  const closeModal = () => { modal?.classList.remove('open'); document.body.style.overflow = ''; };

  cvBtns.forEach(b => b.addEventListener('click', e => { e.preventDefault(); openModal(); }));
  modalClose?.addEventListener('click', closeModal);
  cancelBtn?.addEventListener('click', closeModal);

  confirmBtn?.addEventListener('click', () => {
    closeModal();
    const a = document.createElement('a');
    // ← place your CV at this path in your repo
    a.href = 'assets/Jeeventhiran_CV.pdf';
    a.download = 'Jeeventhiran_Sivanantham_CV.pdf';
    document.body.appendChild(a);
    a.click();
    a.remove();
  });

  // close on backdrop click + Y/N/Esc shortcuts
  modal?.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => {
    if (!modal?.classList.contains('open')) return;
    const k = e.key.toLowerCase();
    if (k === 'y' || k === 'enter') confirmBtn?.click();
    if (k === 'n' || k === 'escape') cancelBtn?.click();
  });

  /* ─────────── GLITCH FLASH (route-switch effect) ─────────── */
  function flashGlitch() {
    const layer = document.createElement('div');
    Object.assign(layer.style, {
      position: 'fixed', inset: '0',
      pointerEvents: 'none', zIndex: '500',
      background: 'repeating-linear-gradient(0deg, rgba(252,238,10,0.05) 0 1px, transparent 1px 3px)',
      mixBlendMode: 'screen',
      opacity: '0.9',
      transition: 'opacity 0.25s ease'
    });
    document.body.appendChild(layer);
    requestAnimationFrame(() => {
      setTimeout(() => layer.style.opacity = '0', 80);
      setTimeout(() => layer.remove(), 380);
    });
  }

  /* ─────────── YOUTUBE LAZY EMBED ─────────── */
  document.querySelectorAll('.video-play').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.videoId;
      if (!id) return;
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;
      iframe.title = 'Escape The Debt — gameplay';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      iframe.loading = 'lazy';
      btn.replaceWith(iframe);
    });
  });

  /* ─────────── STATUS BOARD (live data) ─────────── */
  // Last commit "X days ago" calculated from the data-since date
  document.querySelectorAll('[data-since]').forEach(el => {
    const then = new Date(el.dataset.since);
    const now = new Date();
    const days = Math.max(0, Math.floor((now - then) / 86400000));
    let label;
    if (days === 0) label = 'today';
    else if (days === 1) label = 'yesterday';
    else if (days < 7) label = `${days} days ago`;
    else if (days < 30) label = `${Math.floor(days / 7)} week${Math.floor(days / 7) > 1 ? 's' : ''} ago`;
    else label = `${Math.floor(days / 30)} month${Math.floor(days / 30) > 1 ? 's' : ''} ago`;
    el.textContent = label;
  });

  // Live local time for Shah Alam (Malaysia is UTC+8)
  function updateLocalTime() {
    document.querySelectorAll('[data-localtime]').forEach(el => {
      const now = new Date();
      // get Malaysia time regardless of user's timezone
      const myTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kuala_Lumpur' }));
      const hh = String(myTime.getHours()).padStart(2, '0');
      const mm = String(myTime.getMinutes()).padStart(2, '0');
      el.textContent = `${hh}:${mm} MYT`;
    });
  }
  updateLocalTime();
  setInterval(updateLocalTime, 30000);

  /* ─────────── CONTACT FORM (Formspree) ─────────── */
  const form = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  if (form && formStatus) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      formStatus.className = 'form-status';
      formStatus.textContent = '';

      // If the user hasn't set up Formspree yet, show a friendly fallback
      const action = form.getAttribute('action');
      if (action.includes('YOUR_FORMSPREE_ID')) {
        formStatus.className = 'form-status error';
        formStatus.textContent = '> form not yet connected. open formspree.io, grab your form ID, paste it into the form action URL.';
        return;
      }

      const data = new FormData(form);
      try {
        const res = await fetch(action, {
          method: 'POST',
          body: data,
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          formStatus.className = 'form-status success';
          formStatus.textContent = '> TRANSMISSION_OK. message routed. expect a reply within 24h.';
          form.reset();
        } else {
          const json = await res.json().catch(() => ({}));
          formStatus.className = 'form-status error';
          formStatus.textContent = '> ERROR. ' + (json.errors?.[0]?.message || 'transmission failed. try email instead.');
        }
      } catch (err) {
        formStatus.className = 'form-status error';
        formStatus.textContent = '> NETWORK_ERROR. check connection or email directly.';
      }
    });
  }

  /* ─────────── GITHUB STATS THEME-AWARE SWAP ─────────── */
  function refreshGhStats() {
    const isDark = root.getAttribute('data-theme') === 'dark';
    const titleColor = isDark ? 'FCEE0A' : '6B5A00';
    const textColor  = isDark ? 'E8E8E8' : '1A1A1A';
    const iconColor  = isDark ? 'FCEE0A' : '006C7A';

    document.querySelectorAll('[data-gh-stats]').forEach(img => {
      const kind = img.dataset.ghStats;
      const base = (kind === 'langs')
        ? `https://github-readme-stats.vercel.app/api/top-langs/?username=Jvn1604&hide_border=true&bg_color=00000000&layout=compact&langs_count=8`
        : `https://github-readme-stats.vercel.app/api?username=Jvn1604&show_icons=true&hide_border=true&bg_color=00000000`;
      img.src = `${base}&title_color=${titleColor}&text_color=${textColor}&icon_color=${iconColor}`;
    });
  }
  refreshGhStats();
  // re-render when theme switches
  if (themeBtn) {
    themeBtn.addEventListener('click', () => setTimeout(refreshGhStats, 50));
  }

  /* ─────────── AOS INIT (with safety fallback) ─────────── */
  if (window.AOS) {
    AOS.init({
      duration: 700,
      offset: 80,
      easing: 'ease-out-cubic',
      once: true,
      disable: () => matchMedia('(prefers-reduced-motion: reduce)').matches
    });
  } else {
    // AOS didn't load (CDN block, offline, etc.) — force-reveal all content
    document.querySelectorAll('[data-aos]').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  }
  // belt + braces: 1.5s after load, force-reveal anything still hidden
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.querySelectorAll('[data-aos]:not(.aos-animate)').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
    }, 1500);
  });

  /* ─────────── GSAP HERO ENTRY (optional polish) ─────────── */
  if (window.gsap) {
    const tl = gsap.timeline({ delay: 3.0 }); // after boot
    tl.from('.hero-meta',    { y: 20, opacity: 0, duration: 0.5, ease: 'power2.out' })
      .from('.hero-name',    { y: 30, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
      .from('.hero-surname', { y: 20, opacity: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3')
      .from('.hero-typed',   { opacity: 0, duration: 0.4 }, '-=0.2')
      .from('.hero-bio',     { y: 16, opacity: 0, duration: 0.4 }, '-=0.2')
      .from('.hero-tags .tag', { y: 10, opacity: 0, duration: 0.3, stagger: 0.04 }, '-=0.2')
      .from('.hero-cta .btn',  { y: 10, opacity: 0, duration: 0.35, stagger: 0.06 }, '-=0.1')
      .from('.hero-stats .hstat', { y: 10, opacity: 0, duration: 0.3, stagger: 0.06 }, '-=0.1')
      .from('.photo-frame',  { scale: 0.92, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=1.4');
  }

  /* ─────────── INITIAL HASH (so refresh lands at section) ─────────── */
  if (location.hash) {
    setTimeout(() => {
      const el = document.querySelector(location.hash);
      el?.scrollIntoView({ behavior: 'instant', block: 'start' });
    }, 50);
  }

})();
