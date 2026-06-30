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

  /* ─────────── SKILL BARS + LANGUAGE BARS ─────────── */
  const skillRows = document.querySelectorAll('.skill-row, .lang-row');
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

  const openModal  = () => {
    modal?.classList.add('open');
    document.body.style.overflow = 'hidden';
    // try to load the PDF into the preview iframe
    const frame = document.querySelector('.cv-preview-frame');
    const iframe = document.getElementById('cv-preview-iframe');
    if (frame && iframe) {
      // probe the PDF first — only swap to iframe view if it exists
      fetch('assets/Jeeventhiran_CV.pdf', { method: 'HEAD' })
        .then(r => {
          if (r.ok) {
            iframe.src = 'assets/Jeeventhiran_CV.pdf#page=1&toolbar=0&navpanes=0&view=FitH';
            frame.classList.add('has-pdf');
          } else {
            frame.classList.remove('has-pdf');
          }
        })
        .catch(() => frame.classList.remove('has-pdf'));
    }
  };
  const closeModal = () => {
    modal?.classList.remove('open');
    document.body.style.overflow = '';
    // unload iframe to stop any background activity
    const iframe = document.getElementById('cv-preview-iframe');
    if (iframe) setTimeout(() => { iframe.src = ''; }, 300);
  };

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
    const submitBtn = form.querySelector('.btn-submit');
    const submitLabel = submitBtn?.querySelector('span');
    const originalLabel = submitLabel?.textContent || 'TRANSMIT';

    // clear status the moment user starts editing again
    form.querySelectorAll('input, textarea').forEach(el => {
      el.addEventListener('input', () => {
        if (formStatus.className !== 'form-status') {
          formStatus.className = 'form-status';
          formStatus.textContent = '';
        }
      });
    });

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      formStatus.className = 'form-status';
      formStatus.textContent = '';

      const action = form.getAttribute('action');

      // friendly guard if user hasn't pasted their Formspree ID yet
      if (action.includes('YOUR_FORMSPREE_ID')) {
        formStatus.className = 'form-status error';
        formStatus.textContent = '> form not yet wired up. open formspree.io, grab your form ID, paste it into the form action URL (see the comment block above the <form> tag).';
        return;
      }

      // basic client-side validation (HTML5 catches most, but sanity-check)
      if (!form.checkValidity()) {
        formStatus.className = 'form-status error';
        formStatus.textContent = '> validation failed. fill out all required fields with valid data.';
        form.reportValidity?.();
        return;
      }

      // lock the button + show transmitting state
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.6';
        submitBtn.style.cursor = 'wait';
      }
      if (submitLabel) submitLabel.textContent = 'TRANSMITTING…';
      formStatus.className = 'form-status';
      formStatus.textContent = '';

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
          formStatus.textContent = '> ERROR. ' + (json.errors?.[0]?.message || 'transmission failed. try email directly: jeeven1604@gmail.com');
        }
      } catch (err) {
        formStatus.className = 'form-status error';
        formStatus.textContent = '> NETWORK_ERROR. check your connection — or email directly: jeeven1604@gmail.com';
      } finally {
        // restore button regardless
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.style.opacity = '';
          submitBtn.style.cursor = '';
        }
        if (submitLabel) submitLabel.textContent = originalLabel;
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


  /* ╔═══════════════════════════════════════════════════════════╗
     ║  TIER 3 FEATURES                                          ║
     ╚═══════════════════════════════════════════════════════════╝ */

  /* ─────────── #14 LIVE TIME / LOCATION HUD ─────────── */
  const timeHud = document.querySelector('.time-hud');
  function updateTimeHud() {
    if (!timeHud) return;
    const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Kuala_Lumpur' }));
    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    const ss = String(now.getSeconds()).padStart(2, '0');
    const days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    const t = timeHud.querySelector('.time-hud-time');
    const d = timeHud.querySelector('.time-hud-day');
    if (t) t.textContent = `${hh}:${mm}:${ss}`;
    if (d) d.textContent = days[now.getDay()];
  }
  updateTimeHud();
  setInterval(updateTimeHud, 1000);

  /* ─────────── #15 AMBIENT AUDIO (Web Audio API · zero dependencies) ─────────── */
  // Generates a subtle cyberpunk drone — no audio files needed.
  // Drop assets/ambient.mp3 if you want to override with a real track.
  const audioBtn = document.querySelector('.audio-toggle');
  let audioCtx = null, audioNodes = null, audioPlaying = false;

  function initAudio() {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return false;
    audioCtx = new Ctx();

    const master = audioCtx.createGain();
    master.gain.value = 0;
    master.connect(audioCtx.destination);

    // gentle low-pass with slow LFO sweep
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 600;
    filter.Q.value = 4;
    filter.connect(master);

    // 3 detuned oscillators → mellow pad
    const freqs = [55, 73.42, 110]; // A1, D2, A2 (Am chord)
    const oscs = freqs.map((f, i) => {
      const o = audioCtx.createOscillator();
      o.type = i === 0 ? 'sawtooth' : (i === 1 ? 'triangle' : 'sine');
      o.frequency.value = f;
      o.detune.value = (Math.random() - 0.5) * 18;
      const g = audioCtx.createGain();
      g.gain.value = i === 2 ? 0.5 : 1;
      o.connect(g); g.connect(filter);
      o.start();
      return o;
    });

    // slow LFO for filter movement (gives it the "wave" feel)
    const lfo = audioCtx.createOscillator();
    const lfoGain = audioCtx.createGain();
    lfo.frequency.value = 0.07;
    lfoGain.gain.value = 240;
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);
    lfo.start();

    audioNodes = { master, oscs, filter, lfo };
    return true;
  }

  function toggleAudio() {
    if (!audioCtx && !initAudio()) return;
    audioCtx.resume?.();
    if (audioPlaying) {
      audioNodes.master.gain.cancelScheduledValues(audioCtx.currentTime);
      audioNodes.master.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.8);
      audioPlaying = false;
      audioBtn?.classList.remove('on');
      audioBtn?.setAttribute('aria-pressed', 'false');
    } else {
      audioNodes.master.gain.cancelScheduledValues(audioCtx.currentTime);
      audioNodes.master.gain.linearRampToValueAtTime(0.035, audioCtx.currentTime + 1.5);
      audioPlaying = true;
      audioBtn?.classList.add('on');
      audioBtn?.setAttribute('aria-pressed', 'true');
    }
    localStorage.setItem('jvn-audio', audioPlaying ? '1' : '0');
  }
  audioBtn?.addEventListener('click', toggleAudio);
  // pause when tab hidden, resume when visible (be polite)
  document.addEventListener('visibilitychange', () => {
    if (!audioCtx) return;
    if (document.hidden) audioCtx.suspend?.();
    else if (audioPlaying) audioCtx.resume?.();
  });

  /* ─────────── #12 CHARACTER SHEET MODAL ─────────── */
  const statsModal = document.getElementById('stats-modal');
  const statsClose = statsModal?.querySelector('.stats-close');
  const statsTriggers = document.querySelectorAll('[data-open-stats]');

  function openStats() {
    if (!statsModal) return;
    statsModal.classList.add('open');
    document.body.style.overflow = 'hidden';
    // animate attribute bars
    statsModal.querySelectorAll('.attr-row').forEach((row, i) => {
      const pct = row.dataset.pct || 0;
      setTimeout(() => {
        row.style.setProperty('--target-pct', pct + '%');
        row.classList.add('animated');
      }, 200 + i * 100);
    });
  }
  function closeStats() {
    statsModal?.classList.remove('open');
    document.body.style.overflow = '';
  }
  statsTriggers.forEach(b => b.addEventListener('click', openStats));
  statsClose?.addEventListener('click', closeStats);
  statsModal?.addEventListener('click', e => { if (e.target === statsModal) closeStats(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && statsModal?.classList.contains('open')) closeStats();
  });

  /* ─────────── #11 HIDDEN TERMINAL ─────────── */
  const termOverlay = document.getElementById('terminal');
  const termScreen  = document.getElementById('terminal-screen');
  const termInput   = termOverlay?.querySelector('.terminal-input');
  const termClose   = termOverlay?.querySelector('.terminal-close');
  const termToggle  = document.querySelector('.terminal-toggle');
  const cmdHistory = [];
  let histIdx = -1;

  function openTerminal() {
    termOverlay?.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => termInput?.focus(), 100);
  }
  function closeTerminal() {
    termOverlay?.classList.remove('open');
    document.body.style.overflow = '';
  }

  termToggle?.addEventListener('click', openTerminal);
  termClose?.addEventListener('click', closeTerminal);
  termOverlay?.addEventListener('click', e => { if (e.target === termOverlay) closeTerminal(); });

  // global hotkeys: ` or ~ opens, ESC closes
  document.addEventListener('keydown', e => {
    // ignore if typing in an input/textarea, EXCEPT the terminal input itself
    const inEditable = ['INPUT','TEXTAREA'].includes(e.target.tagName);
    if ((e.key === '`' || e.key === '~') && !inEditable) {
      e.preventDefault();
      termOverlay?.classList.contains('open') ? closeTerminal() : openTerminal();
    }
    if (e.key === 'Escape' && termOverlay?.classList.contains('open')) closeTerminal();
  });

  // ── command registry ──
  function termWrite(html, cls = '') {
    const line = document.createElement('div');
    line.className = 'term-line ' + cls;
    line.innerHTML = html;
    termScreen.appendChild(line);
    termScreen.scrollTop = termScreen.scrollHeight;
  }
  function termClear() {
    termScreen.querySelectorAll('.term-line:not(.term-banner)').forEach(n => n.remove());
  }

  const COMMANDS = {
    help: () => {
      termWrite(`<span class="term-y">AVAILABLE COMMANDS:</span>
  <span class="term-y">help</span>       — show this menu
  <span class="term-y">whoami</span>     — display profile data
  <span class="term-y">about</span>      — bio summary
  <span class="term-y">projects</span>   — list projects
  <span class="term-y">skills</span>     — skill loadout
  <span class="term-y">stats</span>      — open character sheet
  <span class="term-y">cv</span>         — download CV
  <span class="term-y">contact</span>    — show contact info
  <span class="term-y">github</span>     — open github
  <span class="term-y">linkedin</span>   — open linkedin
  <span class="term-y">youtube</span>    — watch ETD gameplay
  <span class="term-y">theme</span>      — toggle theme
  <span class="term-y">audio</span>      — toggle ambient audio
  <span class="term-y">date</span>       — current time MYT
  <span class="term-y">cd &lt;sect&gt;</span>  — go to section (e.g. cd projects)
  <span class="term-y">clear</span>      — clear screen
  <span class="term-y">exit</span>       — close terminal`);
    },
    whoami: () => {
      termWrite(`<pre class="term-ascii"> ╔═══════════════════════════════════════════╗
 ║  JEEVENTHIRAN A/L SIVANANTHAM              ║
 ║  callsign: <span class="term-c">JVN_04</span>                          ║
 ║  class:    <span class="term-c">OPERATOR · GAME_TECH</span>            ║
 ║  base:     <span class="term-c">Shah Alam, Selangor, MY</span>         ║
 ╚═══════════════════════════════════════════╝</pre>
<div class="term-table">
  <span class="k">role</span><span class="v">Year 3 IT Undergrad · UTeM</span>
  <span class="k">stack</span><span class="v">Unity · Django · MySQL · Arduino</span>
  <span class="k">FYP</span><span class="v">Escape The Debt (Unity 6 URP)</span>
  <span class="k">lang</span><span class="v">EN · MS · TA · ML</span>
  <span class="k">status</span><span class="v"><span class="term-c">OPEN</span> for internships Jun—Dec 2026</span>
</div>`);
    },
    about: () => {
      termWrite(`Year 3 IT undergrad at UTeM specialising in <span class="term-y">Game Technology</span>.
Previously: Diploma in Digital Technology at Politeknik Mersing (Dean's List ×2).
Currently shipping <span class="term-y">Escape The Debt</span> — a Unity 6 URP serious game on Malaysian student debt.
Stack sits at the intersection of <span class="term-c">software · hardware · games</span>.
Type <span class="term-y">cd about</span> for the full bio section.`);
    },
    projects: () => {
      termWrite(`<span class="term-y">PROJECT INDEX:</span>
  [01] <span class="term-c">Escape The Debt</span>            Unity 6 · FYP · in production
  [02] <span class="term-c">Blind Test System</span>          Django · Top Glove (deployed)
  [03] <span class="term-c">Biometric Attendance</span>       PHP/MySQL · Diploma FYP
  [04] <span class="term-c">SVC Global Website</span>         HTML/CSS/JS
  [05] <span class="term-c">Library Mgmt System</span>        C/C++ · UTeM Workshop I
  [06] <span class="term-c">Wheel of Consequences</span>      Unity VR · UTeM Workshop II
type <span class="term-y">cd projects</span> to view in page.`);
    },
    skills: () => {
      termWrite(`<span class="term-y">LOADOUT:</span>
  <span class="term-c">Python / Django</span>      ████████░░  85%
  <span class="term-c">Unity · C#</span>           ████████░░  80%
  <span class="term-c">MySQL · SQL Server</span>   ████████░░  80%
  <span class="term-c">HTML · CSS · JS</span>      ███████░░░  75%
  <span class="term-c">Arduino · IoT</span>        ███████░░░  70%
  <span class="term-c">Linux · Git</span>          ███████░░░  70%
type <span class="term-y">stats</span> for full character sheet.`);
    },
    stats: () => {
      termWrite(`> launching <span class="term-y">CHARACTER_DATA.dat</span>...`);
      setTimeout(() => { closeTerminal(); openStats(); }, 400);
    },
    cv: () => {
      termWrite(`> downloading <span class="term-y">Jeeventhiran_CV.pdf</span>...`);
      setTimeout(() => { closeTerminal(); document.querySelector('.btn-cv')?.click(); }, 400);
    },
    contact: () => {
      termWrite(`<span class="term-y">CONTACT CHANNELS:</span>
  email     <span class="term-c">jeeven1604@gmail.com</span>
  phone     <span class="term-c">+60 16-527 2019</span>
  github    <span class="term-c">github.com/Jvn1604</span>
  linkedin  <span class="term-c">/in/jeeventhiran-sivanantham-b5abb9261</span>
  location  <span class="term-c">Shah Alam, Selangor, MY</span>`);
    },
    github:   () => { termWrite(`> opening <span class="term-c">github.com/Jvn1604</span>...`); setTimeout(() => window.open('https://github.com/Jvn1604','_blank'), 300); },
    linkedin: () => { termWrite(`> opening <span class="term-c">linkedin</span>...`); setTimeout(() => window.open('https://www.linkedin.com/in/jeeventhiran-sivanantham-b5abb9261/','_blank'), 300); },
    youtube:  () => { termWrite(`> opening <span class="term-c">Escape The Debt — gameplay</span>...`); setTimeout(() => window.open('https://youtu.be/nqNphGQWkg8','_blank'), 300); },
    theme: () => {
      const cur = root.getAttribute('data-theme');
      const next = cur === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('jvn-theme', next);
      termWrite(`> theme switched to <span class="term-y">${next}</span>`);
    },
    audio: () => {
      toggleAudio();
      termWrite(`> ambient audio <span class="term-y">${audioPlaying ? 'ON' : 'OFF'}</span>`);
    },
    date: () => {
      const now = new Date().toLocaleString('en-MY', { timeZone: 'Asia/Kuala_Lumpur', dateStyle: 'full', timeStyle: 'medium' });
      termWrite(`<span class="term-c">${now}</span> <span class="term-mute">// Asia/Kuala_Lumpur</span>`);
    },
    clear: () => termClear(),
    cls:   () => termClear(),
    exit:  () => closeTerminal(),
    quit:  () => closeTerminal(),
    q:     () => closeTerminal(),
    ls:    () => termWrite(`hero  status  about  skills  experience  projects  education  achievements  contact`),
    cd: (arg) => {
      if (!arg) { termWrite(`usage: cd &lt;section&gt;  (try: hero, about, projects, contact)`, 'term-mute'); return; }
      const target = arg.toLowerCase().replace(/^[#/]/, '');
      const el = document.getElementById(target);
      if (!el) { termWrite(`cd: no such section: <span class="term-err">${arg}</span>`, 'term-err'); return; }
      termWrite(`> navigating to <span class="term-y">/${target}</span>...`);
      setTimeout(() => { closeTerminal(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 300);
    },
    // easter eggs
    sudo: () => termWrite(`<span class="term-err">jvn is not in the sudoers file. this incident will be reported.</span>`),
    'rm':  () => termWrite(`<span class="term-err">rm: nice try, samurai. denied.</span>`),
    coffee: () => termWrite(`<span class="term-y">☕ brewing... done.</span>  +5 caffeine. +1 commit incoming.`),
    cyberpunk: () => { termWrite(`<span class="term-y">WAKE UP, SAMURAI. WE HAVE A CITY TO BURN.</span>`); flashGlitch(); },
    2077: () => { termWrite(`<span class="term-y">2077</span> — the year. <span class="term-c">v2.0.77</span> — this build.`); flashGlitch(); },
    kayal: () => termWrite(`<span class="term-y">Kayal</span> — protagonist of Escape The Debt. Recent grad. Drowning in PTPTN + BNPL. You're helping her get out.`),
    unity: () => termWrite(`<span class="term-y">Unity 6 URP</span> — current engine. Switched from built-in for HDR + better lighting on the FYP.`),
    konami: () => termWrite(`hint: ↑ ↑ ↓ ↓ ← → ← → B A`),
    matrix: () => termWrite(`there is no spoon. (and no Matrix easter egg. try <span class="term-y">konami</span>)`),
    hello: () => termWrite(`hi 👋  type <span class="term-y">help</span> to see what I can do.`),
    hi:    () => termWrite(`hi 👋  type <span class="term-y">help</span> to see what I can do.`),
  };

  function runCmd(raw) {
    const trimmed = raw.trim();
    // echo back the prompt + command
    termWrite(`<span class="term-prompt-line">jvn@portfolio<span class="term-c">:~$</span> <span class="term-cmd">${trimmed.replace(/</g,'&lt;')}</span></span>`);
    if (!trimmed) return;
    cmdHistory.unshift(trimmed); histIdx = -1;
    if (cmdHistory.length > 50) cmdHistory.pop();

    const [cmd, ...rest] = trimmed.split(/\s+/);
    const lower = cmd.toLowerCase();
    if (COMMANDS[lower]) {
      COMMANDS[lower](rest.join(' '));
    } else {
      termWrite(`command not found: <span class="term-err">${lower.replace(/</g,'&lt;')}</span>  ·  type <span class="term-y">help</span>`, 'term-err');
    }
  }

  termInput?.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      runCmd(termInput.value);
      termInput.value = '';
      return;
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      histIdx = Math.min(histIdx + 1, cmdHistory.length - 1);
      termInput.value = cmdHistory[histIdx] || '';
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      histIdx = Math.max(histIdx - 1, -1);
      termInput.value = histIdx === -1 ? '' : cmdHistory[histIdx];
      return;
    }
    if (e.key === 'Tab') {
      e.preventDefault();
      const v = termInput.value.toLowerCase();
      if (!v) return;
      const match = Object.keys(COMMANDS).find(k => k.startsWith(v));
      if (match) termInput.value = match;
      return;
    }
    if (e.key === 'l' && e.ctrlKey) { e.preventDefault(); termClear(); return; }
  });

  // click anywhere in terminal screen → refocus input
  termScreen?.addEventListener('click', () => termInput?.focus());

  /* ─────────── #13 KONAMI CODE ─────────── */
  const KONAMI = ['arrowup','arrowup','arrowdown','arrowdown','arrowleft','arrowright','arrowleft','arrowright','b','a'];
  let konamiIdx = 0;
  const konamiToast = document.getElementById('konami-toast');

  document.addEventListener('keydown', e => {
    const key = e.key.toLowerCase();
    const expected = KONAMI[konamiIdx];
    if (key === expected) {
      konamiIdx++;
      if (konamiIdx === KONAMI.length) { konamiIdx = 0; fireKonami(); }
    } else {
      // restart if matching first key, else reset
      konamiIdx = (key === KONAMI[0]) ? 1 : 0;
    }
  });

  function fireKonami() {
    document.body.classList.add('konami-active');
    flashGlitch();
    konamiToast?.classList.add('show');
    setTimeout(() => konamiToast?.classList.remove('show'), 2400);
    setTimeout(() => document.body.classList.remove('konami-active'), 1800);
    // open character sheet at the end of the glitch
    setTimeout(() => openStats(), 2600);
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
