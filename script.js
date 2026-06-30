/* ═══════════════════════════════════════════════════════════════
   JVN_04 · CYBERPUNK PORTFOLIO · style.css
   ═══════════════════════════════════════════════════════════════ */

/* ── RESET ─────────────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
img { max-width: 100%; display: block; }
button { font: inherit; cursor: pointer; border: none; background: none; color: inherit; }
a { color: inherit; text-decoration: none; }
ul { list-style: none; }

/* ── TOKENS ────────────────────────────────────────────────── */
:root {
  /* signature palette */
  --cp-yellow:        #FCEE0A;
  --cp-yellow-dim:    #E6D900;
  --cp-yellow-glow:   rgba(252, 238, 10, 0.18);
  --cp-cyan:          #00F0FF;
  --cp-cyan-dim:      #00BAC4;
  --cp-magenta:       #FF003C;

  /* surfaces · DARK = night city */
  --bg:               #0A0A0A;
  --bg-2:             #111111;
  --bg-3:             #181818;
  --panel:            #131313;
  --panel-2:          #1A1A1A;
  --border:           rgba(252, 238, 10, 0.22);
  --border-strong:    rgba(252, 238, 10, 0.55);
  --hairline:         rgba(255, 255, 255, 0.08);

  /* text */
  --text:             #EAEAEA;
  --text-strong:      #FFFFFF;
  --muted:            #9A9A9A;

  /* type */
  --display:          'Orbitron', sans-serif;
  --body:             'Rajdhani', sans-serif;
  --mono:             'Share Tech Mono', ui-monospace, monospace;

  /* metrics */
  --side:             240px;
  --max-w:            1240px;
  --radius:           0; /* sharp corners */
  --radius-sm:        2px;

  /* easings */
  --ease:             cubic-bezier(0.65, 0, 0.35, 1);
}

[data-theme="light"] {
  /* LIGHT = "Day City" · warm cream bg, white panels, yellow as accent only */
  --bg:               #EFEAD2;   /* warm cream — easy on the eyes */
  --bg-2:             #E5DEB8;   /* alt section, slightly darker cream */
  --bg-3:             #DBD2A0;
  --panel:            #FFFFFF;   /* clean white cards */
  --panel-2:          #FAFAF0;
  --border:           rgba(10, 10, 10, 0.22);
  --border-strong:    rgba(10, 10, 10, 0.55);
  --hairline:         rgba(10, 10, 10, 0.10);
  --text:             #1A1A1A;
  --text-strong:      #000000;
  --muted:            #555555;
  --cp-yellow-glow:   rgba(212, 184, 0, 0.25);
}

/* ── BASE ──────────────────────────────────────────────────── */
body {
  font-family: var(--body);
  background: var(--bg);
  color: var(--text);
  line-height: 1.55;
  overflow-x: hidden;
  font-weight: 500;
  letter-spacing: 0.01em;
  cursor: none;
  -webkit-font-smoothing: antialiased;
  transition: background 0.4s var(--ease), color 0.4s var(--ease);
}
@media (hover: none) { body { cursor: auto; } .cursor-dot, .cursor-ring { display: none !important; } }

::selection { background: var(--cp-yellow); color: #0A0A0A; }

/* ╔═══════════════════════════════════════════════════════════╗
   ║  BOOT LOADER                                              ║
   ╚═══════════════════════════════════════════════════════════╝ */
#boot-loader {
  position: fixed; inset: 0; z-index: 9999;
  background: #050505;
  display: flex; align-items: center; justify-content: center;
  font-family: var(--mono);
  color: var(--cp-yellow);
  transition: opacity 0.6s var(--ease), visibility 0.6s var(--ease);
}
#boot-loader.done { opacity: 0; visibility: hidden; }
.boot-inner { width: min(92%, 520px); position: relative; z-index: 2; }
.boot-logo {
  font-family: var(--display);
  font-size: 2.4rem; font-weight: 900;
  letter-spacing: 0.1em;
  margin-bottom: 1.6rem;
  text-align: center;
  text-shadow: 0 0 30px var(--cp-yellow-glow);
}
.boot-bracket { color: var(--cp-cyan); }
.boot-lines p {
  font-size: 0.92rem;
  opacity: 0;
  animation: bootLine 0.4s var(--ease) forwards;
  margin-bottom: 0.35rem;
}
.boot-lines p:nth-child(1) { animation-delay: 0.2s; }
.boot-lines p:nth-child(2) { animation-delay: 0.7s; }
.boot-lines p:nth-child(3) { animation-delay: 1.2s; }
.boot-lines p:nth-child(4) { animation-delay: 1.8s; }
.boot-prompt { color: var(--cp-cyan); margin-right: 0.4rem; }
.boot-ok { color: var(--cp-cyan); }
.boot-dots::after { content: ''; animation: dots 1s steps(4) infinite; }
@keyframes dots {
  0%   { content: ''; }
  25%  { content: '.'; }
  50%  { content: '..'; }
  75%  { content: '...'; }
}
@keyframes bootLine { from { opacity: 0; transform: translateX(-8px); } to { opacity: 1; transform: translateX(0); } }
.boot-bar {
  margin-top: 1.4rem;
  height: 4px; width: 100%;
  background: rgba(252, 238, 10, 0.12);
  border: 1px solid var(--border);
  overflow: hidden;
}
.boot-bar-fill {
  height: 100%; width: 0;
  background: var(--cp-yellow);
  box-shadow: 0 0 12px var(--cp-yellow);
  animation: bootFill 2.6s var(--ease) forwards;
}
@keyframes bootFill { to { width: 100%; } }
.boot-status {
  margin-top: 1.4rem;
  text-align: center;
  font-family: var(--display);
  font-weight: 700;
  letter-spacing: 0.3em;
  font-size: 0.78rem;
  color: var(--cp-cyan);
  opacity: 0;
  animation: bootStatus 0.6s var(--ease) 2.5s forwards;
}
@keyframes bootStatus { to { opacity: 1; } }
.boot-scanlines {
  position: absolute; inset: 0; pointer-events: none;
  background-image: repeating-linear-gradient(
    0deg, rgba(252,238,10,0.04) 0 1px, transparent 1px 3px
  );
}

/* ╔═══════════════════════════════════════════════════════════╗
   ║  CUSTOM CURSOR                                            ║
   ╚═══════════════════════════════════════════════════════════╝ */
.cursor-dot, .cursor-ring {
  position: fixed; top: 0; left: 0;
  pointer-events: none;
  z-index: 10000;
  will-change: transform;
}
.cursor-dot {
  width: 6px; height: 6px;
  background: var(--cp-yellow);
  box-shadow: 0 0 12px var(--cp-yellow);
  margin: -3px 0 0 -3px;
}
.cursor-ring {
  width: 32px; height: 32px;
  border: 1px solid var(--cp-yellow);
  margin: -16px 0 0 -16px;
  transition: width 0.18s var(--ease), height 0.18s var(--ease), margin 0.18s var(--ease), background 0.18s var(--ease);
}
.cursor-ring.active {
  width: 50px; height: 50px;
  margin: -25px 0 0 -25px;
  background: rgba(252, 238, 10, 0.1);
}

/* ╔═══════════════════════════════════════════════════════════╗
   ║  SCROLL PROGRESS                                          ║
   ╚═══════════════════════════════════════════════════════════╝ */
.scroll-progress {
  position: fixed; top: 0; left: 0; right: 0;
  height: 2px;
  background: rgba(252, 238, 10, 0.08);
  z-index: 200;
}
.scroll-progress-bar {
  height: 100%; width: 0;
  background: linear-gradient(90deg, var(--cp-yellow), var(--cp-cyan));
  box-shadow: 0 0 12px var(--cp-yellow);
  transition: width 0.08s linear;
}

/* ╔═══════════════════════════════════════════════════════════╗
   ║  TOPBAR (mobile)                                          ║
   ╚═══════════════════════════════════════════════════════════╝ */
.topbar {
  position: fixed; top: 0; left: 0; right: 0;
  height: 56px; z-index: 90;
  display: none; align-items: center; justify-content: space-between;
  padding: 0 1.2rem;
  background: rgba(10, 10, 10, 0.92);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
}
[data-theme="light"] .topbar { background: rgba(252, 238, 10, 0.92); }
.topbar-logo {
  font-family: var(--display);
  font-weight: 800; font-size: 1.1rem;
  letter-spacing: 0.15em;
  color: var(--cp-yellow);
}
[data-theme="light"] .topbar-logo { color: var(--text); }

.hamburger {
  width: 36px; height: 36px;
  display: flex; flex-direction: column; justify-content: center; gap: 5px;
  padding: 0 8px;
  border: 1px solid var(--border);
}
.hamburger span {
  display: block; height: 2px; width: 100%;
  background: var(--cp-yellow);
  transition: transform 0.25s var(--ease), opacity 0.2s;
}
[data-theme="light"] .hamburger span { background: var(--text); }
.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* ╔═══════════════════════════════════════════════════════════╗
   ║  SIDEBAR NAV                                              ║
   ╚═══════════════════════════════════════════════════════════╝ */
.sidebar {
  position: fixed; top: 0; left: 0; bottom: 0;
  width: var(--side); z-index: 80;
  background: var(--bg-2);
  border-right: 1px solid var(--border);
  display: flex; flex-direction: column;
  padding: 1.6rem 0;
  transition: transform 0.35s var(--ease);
}
[data-theme="light"] .sidebar {
  background: #0A0A0A;
  color: #E8E8E8;
  border-right: 1px solid rgba(252, 238, 10, 0.4);
}

.sidebar-head { padding: 0 1.4rem 1.6rem; border-bottom: 1px solid var(--hairline); }
.sidebar-logo {
  font-family: var(--display);
  font-size: 1.15rem; font-weight: 800;
  letter-spacing: 0.1em;
  color: var(--cp-yellow);
}
.sl-bracket { color: var(--cp-cyan); font-weight: 500; }
.sidebar-tag {
  font-family: var(--mono);
  font-size: 0.68rem;
  color: var(--muted);
  margin-top: 0.4rem;
  letter-spacing: 0.05em;
}
[data-theme="light"] .sidebar-tag { color: #888; }

.sidebar-nav {
  flex: 1;
  padding: 1.4rem 0;
  display: flex; flex-direction: column; gap: 2px;
}
.nav-link {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 0.8rem;
  padding: 0.75rem 1.4rem;
  font-family: var(--display);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  color: var(--muted);
  position: relative;
  transition: color 0.2s, background 0.2s, padding-left 0.2s var(--ease);
}
[data-theme="light"] .nav-link { color: #999; }
.nav-link::before {
  content: '';
  position: absolute; left: 0; top: 0; bottom: 0;
  width: 3px; background: var(--cp-yellow);
  transform: scaleY(0); transform-origin: top;
  transition: transform 0.25s var(--ease);
}
.nav-link:hover { color: var(--cp-yellow); background: rgba(252,238,10,0.04); padding-left: 1.7rem; }
.nav-link.active { color: var(--cp-yellow); background: rgba(252,238,10,0.06); }
.nav-link.active::before { transform: scaleY(1); }
[data-theme="light"] .nav-link:hover, [data-theme="light"] .nav-link.active { color: var(--cp-yellow); }

.nav-num { font-family: var(--mono); font-size: 0.7rem; opacity: 0.6; }
.nav-link i { width: 14px; height: 14px; opacity: 0.7; }

.sidebar-foot {
  padding: 1.2rem 1.4rem;
  border-top: 1px solid var(--hairline);
  display: flex; flex-direction: column; gap: 0.9rem;
}
.theme-toggle {
  display: flex; align-items: center; gap: 0.6rem;
  padding: 0.55rem 0.8rem;
  border: 1px solid var(--border);
  font-family: var(--mono); font-size: 0.72rem;
  color: var(--text);
  background: rgba(252, 238, 10, 0.04);
  transition: border-color 0.2s, background 0.2s;
}
[data-theme="light"] .theme-toggle { color: #E8E8E8; }
.theme-toggle:hover { border-color: var(--cp-yellow); background: rgba(252, 238, 10, 0.1); }
.theme-toggle i { width: 14px; height: 14px; }
.theme-icon-light { display: none; }
[data-theme="light"] .theme-icon-dark { display: none; }
[data-theme="light"] .theme-icon-light { display: block; }
[data-theme="light"] .theme-label::after { content: '__DAY'; }

.sidebar-socials { display: flex; gap: 0.6rem; }
.sidebar-socials a {
  width: 32px; height: 32px;
  display: flex; align-items: center; justify-content: center;
  border: 1px solid var(--hairline);
  color: var(--muted);
  transition: color 0.2s, border-color 0.2s, transform 0.15s;
}
.sidebar-socials a:hover { color: var(--cp-yellow); border-color: var(--cp-yellow); transform: translateY(-2px); }
.sidebar-socials a i { width: 14px; height: 14px; }

/* ╔═══════════════════════════════════════════════════════════╗
   ║  MAIN                                                     ║
   ╚═══════════════════════════════════════════════════════════╝ */
.main { margin-left: var(--side); }

.section {
  position: relative;
  padding: 6rem 4rem;
  max-width: var(--max-w);
  margin: 0 auto;
}
.section-alt { background: var(--bg-2); max-width: none; padding-left: 4rem; padding-right: 4rem; }
.section-alt > * { max-width: var(--max-w); margin-left: auto; margin-right: auto; }
[data-theme="light"] .section-alt { background: var(--bg-3); }

.sec-head { margin-bottom: 3rem; }
.sec-label {
  font-family: var(--mono);
  font-size: 0.78rem;
  color: var(--cp-cyan);
  letter-spacing: 0.18em;
  margin-bottom: 0.6rem;
}
[data-theme="light"] .sec-label { color: var(--text); opacity: 0.7; }
.sec-title {
  font-family: var(--display);
  font-size: clamp(1.8rem, 3.4vw, 2.6rem);
  font-weight: 800;
  letter-spacing: 0.05em;
  color: var(--text-strong);
  text-transform: uppercase;
  position: relative;
  display: inline-block;
}
.sec-rule {
  width: 60px; height: 3px;
  background: var(--cp-yellow);
  margin-top: 0.9rem;
  box-shadow: 0 0 10px var(--cp-yellow);
}

/* glitch hover on titles */
[data-glitch] { position: relative; }
[data-glitch]:hover::before,
[data-glitch]:hover::after {
  content: attr(data-glitch);
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  overflow: hidden;
}
[data-glitch]:hover::before {
  color: var(--cp-cyan);
  animation: glitchA 0.45s steps(2) infinite;
  clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
}
[data-glitch]:hover::after {
  color: var(--cp-magenta);
  animation: glitchB 0.45s steps(2) infinite;
  clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
}
@keyframes glitchA { 0%,100% { transform: translate(0); } 50% { transform: translate(-2px, -1px); } }
@keyframes glitchB { 0%,100% { transform: translate(0); } 50% { transform: translate( 2px,  1px); } }

/* ╔═══════════════════════════════════════════════════════════╗
   ║  HERO                                                     ║
   ╚═══════════════════════════════════════════════════════════╝ */
.hero {
  min-height: 100vh;
  padding-top: 8rem; padding-bottom: 6rem;
  display: flex; flex-direction: column; justify-content: center;
  position: relative;
  overflow: hidden;
}

.hero-bg { position: absolute; inset: 0; z-index: 0; pointer-events: none; overflow: hidden; }
.hero-circuit {
  position: absolute; inset: 0; width: 100%; height: 100%;
  color: var(--cp-yellow);
  opacity: 0.10;
}
[data-theme="light"] .hero-circuit { opacity: 0.18; color: #0A0A0A; }
.hero-scanlines {
  position: absolute; inset: 0;
  background-image: repeating-linear-gradient(
    0deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 4px
  );
  pointer-events: none;
}
.hero-stripes {
  position: absolute; right: -10%; top: 0; bottom: 0; width: 55%;
  background-image: repeating-linear-gradient(
    115deg,
    transparent 0 80px,
    var(--cp-yellow-glow) 80px 82px,
    transparent 82px 160px,
    rgba(0, 240, 255, 0.08) 160px 162px
  );
  mask-image: linear-gradient(to left, black 30%, transparent 100%);
  -webkit-mask-image: linear-gradient(to left, black 30%, transparent 100%);
  pointer-events: none;
}
[data-theme="light"] .hero-stripes {
  background-image: repeating-linear-gradient(
    115deg,
    transparent 0 80px,
    rgba(10,10,10,0.18) 80px 82px,
    transparent 82px 160px,
    rgba(10,10,10,0.08) 160px 162px
  );
}

.hero-grid {
  position: relative; z-index: 1;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-meta {
  display: inline-flex; align-items: center; gap: 0.55rem;
  font-family: var(--mono);
  font-size: 0.78rem;
  color: var(--cp-cyan);
  letter-spacing: 0.12em;
  margin-bottom: 1.4rem;
  padding: 0.32rem 0.8rem;
  border: 1px solid rgba(0, 240, 255, 0.4);
  background: rgba(0, 240, 255, 0.06);
  width: fit-content;
}
[data-theme="light"] .hero-meta { color: var(--text); border-color: rgba(10,10,10,0.4); background: rgba(10,10,10,0.06); }
.meta-dot {
  width: 8px; height: 8px; background: var(--cp-cyan);
  box-shadow: 0 0 8px var(--cp-cyan);
  animation: pulse 1.4s ease-in-out infinite;
}
[data-theme="light"] .meta-dot { background: var(--text); box-shadow: none; }
@keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }

.hero-name {
  font-family: var(--display);
  font-size: clamp(2.4rem, 6vw, 4.6rem);
  font-weight: 900;
  letter-spacing: 0.02em;
  line-height: 1;
  color: var(--text-strong);
  margin-bottom: 0.15em;
  text-shadow: 0 0 30px rgba(252,238,10,0.15);
}
.hero-surname {
  font-family: var(--display);
  font-size: clamp(1.4rem, 3.4vw, 2.4rem);
  font-weight: 600;
  letter-spacing: 0.18em;
  color: var(--cp-yellow);
  margin-bottom: 1.6rem;
  text-shadow: 0 0 24px var(--cp-yellow-glow);
}
[data-theme="light"] .hero-surname { color: var(--text); text-shadow: none; }
.cursor-blink {
  display: inline-block;
  color: var(--cp-yellow);
  animation: blink 1s steps(2) infinite;
}
@keyframes blink { 50% { opacity: 0; } }

.hero-typed {
  font-family: var(--mono);
  font-size: 1.05rem;
  color: var(--cp-cyan);
  margin-bottom: 1.6rem;
  height: 1.4em;
}
[data-theme="light"] .hero-typed { color: var(--text); }
.typed-prefix { color: var(--cp-yellow); margin-right: 0.4rem; }
[data-theme="light"] .typed-prefix { color: #b8a500; }
.typed-caret { animation: blink 1s steps(2) infinite; margin-left: 2px; }

.hero-bio {
  font-size: 1.06rem;
  color: #C8C8C8;
  max-width: 540px;
  margin-bottom: 1.6rem;
  line-height: 1.65;
  font-weight: 500;
}
.hero-bio strong { color: #FFFFFF; font-weight: 700; }

.hero-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem; }
.tag {
  font-family: var(--mono);
  font-size: 0.72rem;
  padding: 0.3rem 0.7rem;
  border: 1px solid var(--border);
  color: var(--cp-yellow);
  background: var(--cp-yellow-glow);
  letter-spacing: 0.04em;
}
[data-theme="light"] .tag { color: var(--text); background: rgba(10,10,10,0.06); }

.hero-cta { display: flex; gap: 0.9rem; flex-wrap: wrap; margin-bottom: 2.6rem; }
.btn {
  display: inline-flex; align-items: center; gap: 0.55rem;
  padding: 0.85rem 1.6rem;
  font-family: var(--display);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  border: 1px solid;
  position: relative;
  overflow: hidden;
  transition: transform 0.15s var(--ease), box-shadow 0.2s var(--ease);
}
.btn i { width: 16px; height: 16px; }
.btn-arrow { font-family: var(--mono); margin-left: 0.2rem; }
.btn-primary {
  background: var(--cp-yellow);
  color: #0A0A0A;
  border-color: var(--cp-yellow);
}
.btn-primary:hover { box-shadow: 0 0 0 4px var(--cp-yellow-glow), 0 0 24px rgba(252,238,10,0.4); transform: translateY(-2px); }
.btn-outline {
  background: transparent;
  color: var(--cp-yellow);
  border-color: var(--cp-yellow);
}
[data-theme="light"] .btn-outline { color: var(--text); border-color: var(--text); }
.btn-outline:hover { background: var(--cp-yellow-glow); transform: translateY(-2px); }
.btn::before {
  content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
  transition: left 0.4s var(--ease);
}
.btn:hover::before { left: 100%; }

.hero-stats {
  display: flex; gap: 2.4rem;
  border-top: 1px dashed var(--border);
  padding-top: 1.4rem;
}
.hstat { display: flex; flex-direction: column; }
.hstat-num {
  font-family: var(--display);
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--cp-yellow);
  text-shadow: 0 0 14px var(--cp-yellow-glow);
}
[data-theme="light"] .hstat-num { color: var(--text); text-shadow: none; }
.hstat-lbl {
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--muted);
  letter-spacing: 0.1em;
}

/* ── HERO PHOTO ── */
.hero-right { display: flex; justify-content: center; }
.photo-frame {
  position: relative;
  width: 100%; max-width: 380px;
  padding: 1rem;
  border: 1px solid var(--cp-yellow);
  background: linear-gradient(135deg, rgba(252,238,10,0.04), transparent 60%);
}
[data-theme="light"] .photo-frame { background: rgba(10,10,10,0.08); border-color: var(--text); }

.photo-corner {
  position: absolute;
  width: 24px; height: 24px;
  border: 2px solid var(--cp-yellow);
}
[data-theme="light"] .photo-corner { border-color: var(--text); }
.photo-corner.tl { top: -1px; left: -1px; border-right: none; border-bottom: none; }
.photo-corner.tr { top: -1px; right: -1px; border-left: none; border-bottom: none; }
.photo-corner.bl { bottom: -1px; left: -1px; border-right: none; border-top: none; }
.photo-corner.br { bottom: -1px; right: -1px; border-left: none; border-top: none; }

.photo-img {
  position: relative;
  aspect-ratio: 1 / 1.15;
  overflow: hidden;
  background: var(--bg-3);
  border: 1px solid var(--hairline);
}
[data-theme="light"] .photo-img { background: var(--panel); }
.photo-img img {
  width: 100%; height: 100%; object-fit: cover;
  filter: contrast(1.05) saturate(0.85);
}
.photo-placeholder {
  position: absolute; inset: 0;
  display: none; flex-direction: column;
  align-items: center; justify-content: center;
  gap: 0.6rem;
  color: var(--muted);
  font-family: var(--mono);
  font-size: 0.72rem; text-align: center;
  letter-spacing: 0.06em;
}
.photo-placeholder i { width: 48px; height: 48px; opacity: 0.4; }

.photo-scan {
  position: absolute; inset: 0;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(252, 238, 10, 0.08) 50%,
    transparent 100%
  );
  background-size: 100% 8px;
  pointer-events: none;
  animation: scan 4s linear infinite;
}
@keyframes scan {
  0%   { background-position: 0 -100%; }
  100% { background-position: 0  200%; }
}
.photo-hud-tl, .photo-hud-tr, .photo-hud-bl, .photo-hud-br {
  position: absolute;
  font-family: var(--mono);
  font-size: 0.65rem;
  letter-spacing: 0.08em;
  color: var(--cp-yellow);
  background: rgba(10,10,10,0.65);
  padding: 0.2rem 0.4rem;
  border: 1px solid var(--border);
}
[data-theme="light"] .photo-hud-tl,
[data-theme="light"] .photo-hud-tr,
[data-theme="light"] .photo-hud-bl,
[data-theme="light"] .photo-hud-br { background: rgba(252,238,10,0.95); color: var(--text); border-color: var(--text); }
.photo-hud-tl { top: 8px; left: 8px; }
.photo-hud-tr { top: 8px; right: 8px; color: var(--cp-magenta); border-color: var(--cp-magenta); }
[data-theme="light"] .photo-hud-tr { color: var(--cp-magenta); border-color: var(--cp-magenta); }
.photo-hud-bl { bottom: 8px; left: 8px; line-height: 1.4; }
.photo-hud-br { bottom: 8px; right: 8px; color: var(--cp-cyan); border-color: var(--cp-cyan); }
[data-theme="light"] .photo-hud-br { color: var(--text); border-color: var(--text); }

.photo-label {
  margin-top: 0.8rem;
  font-family: var(--mono);
  font-size: 0.7rem;
  border-top: 1px dashed var(--border);
  padding-top: 0.7rem;
  display: flex; flex-direction: column; gap: 0.3rem;
}
.pl-row { display: flex; justify-content: space-between; gap: 1rem; }
.pl-row span:first-child { color: var(--muted); letter-spacing: 0.1em; }
.pl-row span:last-child { color: var(--cp-yellow); letter-spacing: 0.05em; }
[data-theme="light"] .pl-row span:last-child { color: var(--text); }

.hero-scroll {
  position: absolute; bottom: 1.6rem; left: 50%; transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center; gap: 0.3rem;
  font-family: var(--mono); font-size: 0.7rem;
  color: var(--muted);
  letter-spacing: 0.2em;
  z-index: 2;
}
.hero-scroll i { width: 16px; height: 16px; animation: bounce 1.6s ease-in-out infinite; }
@keyframes bounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(6px); } }

/* ╔═══════════════════════════════════════════════════════════╗
   ║  ABOUT                                                    ║
   ╚═══════════════════════════════════════════════════════════╝ */
.about-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 4rem;
  align-items: start;
}
.about-text p {
  color: #C8C8C8;
  margin-bottom: 1.1rem;
  font-size: 1.04rem;
  line-height: 1.75;
  font-weight: 500;
}
.about-text strong { color: #FFFFFF; font-weight: 700; }

.about-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.9rem;
}
.stat-card {
  border: 1px solid var(--border);
  background: var(--panel);
  padding: 1.2rem;
  position: relative;
  overflow: hidden;
  transition: border-color 0.2s, transform 0.2s;
}
[data-theme="light"] .stat-card { background: var(--panel); color: #E8E8E8; }
.stat-card::before {
  content: '';
  position: absolute; top: 0; right: 0;
  width: 18px; height: 18px;
  background: linear-gradient(135deg, transparent 50%, var(--cp-yellow) 50%);
}
.stat-card:hover { border-color: var(--cp-yellow); transform: translateY(-3px); }
.stat-icon { color: var(--cp-yellow); margin-bottom: 0.6rem; }
.stat-icon i { width: 20px; height: 20px; }
.stat-num {
  font-family: var(--display);
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--text-strong);
  margin-bottom: 0.1rem;
}
[data-theme="light"] .stat-num { color: #FFF; }
.stat-lbl {
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

/* ╔═══════════════════════════════════════════════════════════╗
   ║  SKILLS                                                   ║
   ╚═══════════════════════════════════════════════════════════╝ */
.skills-cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}
.skills-sub {
  font-family: var(--mono);
  font-size: 0.78rem;
  color: var(--cp-cyan);
  letter-spacing: 0.15em;
  margin-bottom: 1.6rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px dashed var(--border);
}
[data-theme="light"] .skills-sub { color: var(--text); }

.skill-row {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.5rem 1rem;
  margin-bottom: 1.1rem;
}
.skill-name {
  display: flex; align-items: center; gap: 0.5rem;
  font-family: var(--display);
  font-size: 0.85rem; font-weight: 600;
  letter-spacing: 0.05em;
}
.skill-name i { width: 14px; height: 14px; color: var(--cp-yellow); }
.skill-meta { font-family: var(--mono); font-size: 0.8rem; color: var(--cp-yellow); }
[data-theme="light"] .skill-meta { color: var(--text); }
.skill-track {
  grid-column: 1 / -1;
  height: 6px;
  background: rgba(252, 238, 10, 0.08);
  border: 1px solid var(--hairline);
  position: relative;
  overflow: hidden;
}
[data-theme="light"] .skill-track { background: rgba(10,10,10,0.08); }
.skill-fill {
  height: 100%; width: 0;
  background: linear-gradient(90deg, var(--cp-yellow), var(--cp-cyan));
  box-shadow: 0 0 10px var(--cp-yellow);
  transition: width 1.2s cubic-bezier(0.65, 0, 0.35, 1);
}
[data-theme="light"] .skill-fill { background: linear-gradient(90deg, var(--text), #444); box-shadow: none; }
.skill-row.animated .skill-fill { width: var(--target-pct, 0%); }

.stack-card {
  border: 1px solid var(--border);
  background: var(--panel);
  padding: 1.1rem 1.2rem;
  margin-bottom: 1rem;
  position: relative;
}
[data-theme="light"] .stack-card { color: #E8E8E8; }
.stack-title {
  display: flex; align-items: center; gap: 0.45rem;
  font-family: var(--display);
  font-size: 0.78rem; font-weight: 700;
  letter-spacing: 0.14em;
  color: var(--cp-yellow);
  margin-bottom: 0.7rem;
}
[data-theme="light"] .stack-title { color: var(--cp-yellow); }
.stack-title i { width: 14px; height: 14px; }
.stack-pills { display: flex; flex-wrap: wrap; gap: 0.35rem; }
.stack-pills span {
  font-family: var(--mono);
  font-size: 0.72rem;
  padding: 0.25rem 0.55rem;
  border: 1px solid var(--hairline);
  color: #E8E8E8;
}

/* ╔═══════════════════════════════════════════════════════════╗
   ║  EXPERIENCE TIMELINE                                      ║
   ╚═══════════════════════════════════════════════════════════╝ */
.timeline {
  position: relative;
  padding-left: 2.4rem;
  max-width: 880px;
}
.timeline::before {
  content: '';
  position: absolute; left: 6px; top: 8px; bottom: 8px;
  width: 1px;
  background: linear-gradient(180deg, var(--cp-yellow), var(--cp-cyan));
  opacity: 0.5;
}
.tl-item { position: relative; margin-bottom: 2.2rem; }
.tl-dot {
  position: absolute; left: -2.4rem; top: 1.2rem;
  width: 14px; height: 14px;
  background: var(--cp-yellow);
  box-shadow: 0 0 12px var(--cp-yellow);
  border: 2px solid var(--bg);
  z-index: 1;
}
.tl-dot::after {
  content: '';
  position: absolute; inset: -6px;
  border: 1px solid var(--cp-yellow);
  opacity: 0;
  animation: tlPulse 2s ease-out infinite;
}
@keyframes tlPulse { 0% { opacity: 0.6; transform: scale(0.6); } 100% { opacity: 0; transform: scale(1.4); } }

.tl-card {
  border: 1px solid var(--border);
  background: var(--panel);
  padding: 1.4rem 1.6rem;
  position: relative;
  transition: border-color 0.2s, transform 0.2s;
}
[data-theme="light"] .tl-card { color: #E8E8E8; }
.tl-card:hover { border-color: var(--cp-yellow); transform: translateX(4px); }
.tl-head { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.6rem; }
.tl-date {
  font-family: var(--mono);
  font-size: 0.75rem;
  color: var(--cp-cyan);
  letter-spacing: 0.08em;
}
[data-theme="light"] .tl-date { color: #00CFD8; }
.tl-tag {
  font-family: var(--mono);
  font-size: 0.65rem;
  color: var(--cp-yellow);
  padding: 0.18rem 0.5rem;
  border: 1px solid var(--cp-yellow);
  letter-spacing: 0.12em;
}
[data-theme="light"] .tl-tag { color: var(--cp-yellow); border-color: var(--cp-yellow); }
.tl-role {
  font-family: var(--display);
  font-size: 1.08rem;
  font-weight: 700;
  color: #FFF;
  letter-spacing: 0.02em;
  margin-bottom: 0.3rem;
}
.tl-company {
  font-family: var(--mono);
  font-size: 0.86rem;
  color: var(--cp-yellow);
  margin-bottom: 0.8rem;
  font-weight: 400;
}
[data-theme="light"] .tl-company { color: var(--cp-yellow); }
.tl-company span { color: #888; }
.tl-bullets { display: flex; flex-direction: column; gap: 0.4rem; }
.tl-bullets li {
  position: relative;
  padding-left: 1.2rem;
  font-size: 0.96rem;
  color: #D0D0D0;
  line-height: 1.6;
  font-weight: 500;
}
.tl-bullets li::before {
  content: '▸';
  position: absolute; left: 0; top: 0;
  color: var(--cp-yellow);
  font-weight: 700;
}
.tl-bullets strong { color: #FFF; font-weight: 700; }

/* ╔═══════════════════════════════════════════════════════════╗
   ║  PROJECTS                                                 ║
   ╚═══════════════════════════════════════════════════════════╝ */
.filter-bar {
  display: flex; flex-wrap: wrap; gap: 0.4rem;
  margin-bottom: 2rem;
  border-bottom: 1px dashed var(--border);
  padding-bottom: 1rem;
}
.filter-btn {
  font-family: var(--display);
  font-size: 0.76rem; font-weight: 700;
  letter-spacing: 0.14em;
  padding: 0.55rem 1rem;
  border: 1px solid var(--border);
  color: var(--muted);
  transition: color 0.2s, border-color 0.2s, background 0.2s;
}
.filter-btn:hover { color: var(--cp-yellow); border-color: var(--cp-yellow); }
.filter-btn.active {
  color: #0A0A0A;
  background: var(--cp-yellow);
  border-color: var(--cp-yellow);
}

/* — featured card — */
.featured {
  position: relative;
  border: 1px solid var(--cp-yellow);
  background: var(--panel);
  margin-bottom: 2rem;
  padding: 0;
  overflow: hidden;
  box-shadow: 0 0 0 1px rgba(252,238,10,0.1), 0 0 40px rgba(252,238,10,0.08);
}
[data-theme="light"] .featured { color: #E8E8E8; }
.featured-flag {
  position: absolute; top: 0; right: 0; z-index: 2;
  font-family: var(--mono);
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  color: #0A0A0A;
  background: var(--cp-yellow);
  padding: 0.32rem 0.8rem;
}
.featured-grid {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 0;
}
.featured-art {
  position: relative;
  padding: 2rem;
  background: linear-gradient(135deg, var(--cp-yellow) 0%, #d4c700 100%);
  color: #0A0A0A;
  display: flex; align-items: center; justify-content: center;
  min-height: 320px;
  overflow: hidden;
}
.featured-art::before {
  content: '';
  position: absolute; inset: 0;
  background-image:
    linear-gradient(0deg, rgba(0,0,0,0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px);
  background-size: 24px 24px;
  pointer-events: none;
}
.featured-art-inner { position: relative; z-index: 1; text-align: center; }
.featured-title-art {
  font-family: var(--display);
  font-size: clamp(1.8rem, 3.5vw, 3rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  line-height: 0.95;
  margin-bottom: 0.8rem;
}
.featured-sub-art {
  font-family: var(--mono);
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  margin-bottom: 1.2rem;
}
.featured-tape {
  display: inline-block;
  font-family: var(--mono);
  font-size: 0.7rem;
  background: #0A0A0A; color: var(--cp-yellow);
  padding: 0.35rem 0.7rem;
  letter-spacing: 0.1em;
}
.featured-scan {
  position: absolute; inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent 0 3px,
    rgba(0,0,0,0.04) 3px 4px
  );
  pointer-events: none;
}

.featured-meta {
  padding: 2rem;
  background: var(--panel);
}
[data-theme="light"] .featured-meta { background: var(--panel); }
.proj-badge {
  display: inline-block;
  font-family: var(--mono);
  font-size: 0.72rem;
  color: var(--cp-cyan);
  background: rgba(0, 240, 255, 0.08);
  padding: 0.32rem 0.7rem;
  border: 1px solid rgba(0, 240, 255, 0.3);
  margin-bottom: 1rem;
  letter-spacing: 0.06em;
}
[data-theme="light"] .proj-badge { color: #00CFD8; }
.proj-title {
  font-family: var(--display);
  font-size: 1.4rem;
  font-weight: 700;
  color: #FFF;
  margin-bottom: 0.7rem;
  letter-spacing: 0.02em;
}
.proj-desc {
  color: #CFCFCF;
  margin-bottom: 1rem;
  font-size: 0.98rem;
  line-height: 1.65;
  font-weight: 500;
}
.proj-desc strong { color: #FFF; font-weight: 700; }
.proj-points { display: flex; flex-direction: column; gap: 0.45rem; margin-bottom: 1.2rem; }
.proj-points li {
  display: flex; align-items: center; gap: 0.6rem;
  font-size: 0.92rem;
  color: #D0D0D0;
  font-weight: 500;
}
.proj-points i { width: 14px; height: 14px; color: var(--cp-yellow); flex-shrink: 0; }
.proj-tech { display: flex; flex-wrap: wrap; gap: 0.35rem; margin-bottom: 1.1rem; }
.tech-tag {
  font-family: var(--mono);
  font-size: 0.7rem;
  padding: 0.22rem 0.55rem;
  background: rgba(252, 238, 10, 0.06);
  border: 1px solid var(--hairline);
  color: var(--cp-yellow);
}
.proj-links { display: flex; gap: 1rem; flex-wrap: wrap; }
.proj-link {
  display: inline-flex; align-items: center; gap: 0.4rem;
  font-family: var(--mono);
  font-size: 0.78rem;
  color: var(--cp-cyan);
  border-bottom: 1px solid transparent;
  padding-bottom: 1px;
  transition: border-color 0.2s, color 0.2s;
}
.proj-link i { width: 14px; height: 14px; }
.proj-link:hover { border-color: var(--cp-cyan); color: var(--cp-yellow); }

/* — regular grid — */
.proj-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.2rem;
}
.proj-grid .project-card {
  border: 1px solid var(--border);
  background: var(--panel);
  padding: 1.4rem 1.4rem 1.5rem;
  position: relative;
  transition: border-color 0.2s, transform 0.2s;
  display: flex; flex-direction: column;
}
[data-theme="light"] .proj-grid .project-card { color: #E8E8E8; }
.proj-grid .project-card:hover { border-color: var(--cp-yellow); transform: translateY(-3px); }
.proj-grid .project-card::after {
  content: '';
  position: absolute; bottom: 0; left: 0;
  width: 100%; height: 2px;
  background: linear-gradient(90deg, var(--cp-yellow), transparent);
  transform: scaleX(0); transform-origin: left;
  transition: transform 0.3s var(--ease);
}
.proj-grid .project-card:hover::after { transform: scaleX(1); }
.proj-num {
  font-family: var(--mono);
  font-size: 0.78rem;
  color: var(--cp-yellow);
  margin-bottom: 0.7rem;
  letter-spacing: 0.06em;
}
.proj-grid .proj-title { font-size: 1.15rem; margin-bottom: 0.5rem; }
.proj-grid .proj-desc { font-size: 0.9rem; margin-bottom: 1rem; flex: 1; }
.proj-grid .proj-tech { margin-bottom: 0; }

/* ╔═══════════════════════════════════════════════════════════╗
   ║  EDUCATION                                                ║
   ╚═══════════════════════════════════════════════════════════╝ */
.edu-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
}
.edu-card {
  border: 1px solid var(--border);
  background: var(--panel);
  padding: 1.6rem;
  position: relative;
  transition: border-color 0.2s, transform 0.2s;
}
[data-theme="light"] .edu-card { color: #E8E8E8; }
.edu-card::before {
  content: '';
  position: absolute; top: 0; left: 0;
  width: 4px; height: 100%;
  background: var(--cp-yellow);
  box-shadow: 0 0 12px var(--cp-yellow-glow);
}
.edu-card:hover { border-color: var(--cp-yellow); transform: translateY(-3px); }
.edu-year {
  font-family: var(--mono);
  font-size: 0.75rem;
  color: var(--cp-cyan);
  letter-spacing: 0.1em;
  margin-bottom: 0.6rem;
}
[data-theme="light"] .edu-year { color: #00CFD8; }
.edu-degree {
  font-family: var(--display);
  font-size: 1.08rem;
  font-weight: 700;
  color: #FFF;
  margin-bottom: 0.4rem;
  line-height: 1.3;
}
.edu-degree span { color: var(--cp-yellow); font-weight: 500; }
.edu-school {
  font-family: var(--mono);
  font-size: 0.88rem;
  color: #CFCFCF;
  margin-bottom: 0.4rem;
}
.edu-status {
  font-family: var(--mono);
  font-size: 0.75rem;
  color: #888;
  letter-spacing: 0.04em;
}
.edu-badge {
  display: inline-flex; align-items: center; gap: 0.4rem;
  margin-top: 0.7rem;
  font-family: var(--mono);
  font-size: 0.75rem;
  padding: 0.35rem 0.65rem;
  background: rgba(252, 238, 10, 0.1);
  border: 1px solid var(--cp-yellow);
  color: var(--cp-yellow);
  letter-spacing: 0.04em;
}
.edu-badge i { width: 14px; height: 14px; }

/* ╔═══════════════════════════════════════════════════════════╗
   ║  CONTACT                                                  ║
   ╚═══════════════════════════════════════════════════════════╝ */
.contact-wrap { text-align: center; }
.contact-lead {
  max-width: 620px;
  margin: 0 auto 2rem;
  color: #C8C8C8;
  font-size: 1.06rem;
  line-height: 1.7;
  font-weight: 500;
}
.contact-lead strong { color: #FFFFFF; font-weight: 700; }

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  margin-bottom: 2.4rem;
  max-width: 980px; margin-left: auto; margin-right: auto;
}
.contact-card {
  border: 1px solid var(--border);
  background: var(--panel);
  padding: 1.4rem 1.2rem;
  text-align: left;
  position: relative;
  overflow: hidden;
  transition: border-color 0.2s, transform 0.2s;
}
[data-theme="light"] .contact-card { color: #E8E8E8; }
.contact-card::before {
  content: '';
  position: absolute; top: 0; left: -100%;
  width: 100%; height: 2px;
  background: var(--cp-yellow);
  transition: left 0.3s var(--ease);
}
.contact-card:hover { border-color: var(--cp-yellow); transform: translateY(-3px); }
.contact-card:hover::before { left: 0; }
.cc-icon { color: var(--cp-yellow); margin-bottom: 0.7rem; }
.cc-icon i { width: 22px; height: 22px; }
.cc-label {
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--muted);
  letter-spacing: 0.12em;
  margin-bottom: 0.2rem;
}
.cc-value {
  font-family: var(--display);
  font-size: 0.95rem;
  font-weight: 600;
  color: #FFF;
  letter-spacing: 0.02em;
  word-break: break-word;
}

.contact-cta { margin-top: 1.5rem; display: flex; justify-content: center; }

/* ╔═══════════════════════════════════════════════════════════╗
   ║  FOOTER                                                   ║
   ╚═══════════════════════════════════════════════════════════╝ */
.footer {
  margin-top: 4rem;
  padding-top: 1.6rem;
  border-top: 1px dashed var(--border);
}
.footer-row {
  display: flex; flex-wrap: wrap; justify-content: space-between; gap: 1rem;
  font-family: var(--mono);
  font-size: 0.72rem;
  color: var(--muted);
  letter-spacing: 0.08em;
}
.footer-heart { color: var(--cp-magenta); animation: pulse 1.4s ease-in-out infinite; }

/* ╔═══════════════════════════════════════════════════════════╗
   ║  CV MODAL                                                 ║
   ╚═══════════════════════════════════════════════════════════╝ */
.modal {
  position: fixed; inset: 0; z-index: 9000;
  background: rgba(0, 0, 0, 0.85);
  display: flex; align-items: center; justify-content: center;
  padding: 1.2rem;
  opacity: 0; visibility: hidden;
  transition: opacity 0.25s var(--ease), visibility 0.25s var(--ease);
  backdrop-filter: blur(6px);
}
.modal.open { opacity: 1; visibility: visible; }
.modal-card {
  width: 100%; max-width: 520px;
  background: #0A0A0A;
  border: 1px solid var(--cp-yellow);
  box-shadow: 0 0 0 1px rgba(252,238,10,0.1), 0 0 40px rgba(252,238,10,0.2);
  transform: translateY(20px) scale(0.96);
  transition: transform 0.3s var(--ease);
  position: relative;
}
.modal.open .modal-card { transform: translateY(0) scale(1); }
.modal-card::before {
  content: ''; position: absolute; inset: -1px;
  border-top: 1px solid var(--cp-magenta);
  width: 30%;
  pointer-events: none;
}
.modal-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 0.85rem 1.2rem;
  border-bottom: 1px solid var(--border);
  background: rgba(252, 238, 10, 0.05);
}
.modal-title {
  display: flex; align-items: center; gap: 0.5rem;
  font-family: var(--display);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: var(--cp-yellow);
}
.modal-title i { width: 16px; height: 16px; color: var(--cp-magenta); }
.modal-close {
  width: 28px; height: 28px;
  display: flex; align-items: center; justify-content: center;
  border: 1px solid var(--hairline);
  color: var(--muted);
  transition: color 0.2s, border-color 0.2s;
}
.modal-close:hover { color: var(--cp-magenta); border-color: var(--cp-magenta); }
.modal-close i { width: 14px; height: 14px; }
.modal-body { padding: 1.4rem 1.2rem; }
.modal-pre {
  font-family: var(--mono);
  font-size: 0.9rem;
  color: #E8E8E8;
  line-height: 1.6;
  white-space: pre-wrap;
}
.mp-key { color: var(--cp-cyan); }
.mp-val { color: var(--cp-yellow); }
.mp-blink { color: var(--cp-yellow); animation: blink 1s steps(2) infinite; }
.modal-actions {
  display: flex; gap: 0.5rem;
  padding: 0 1.2rem 1.2rem;
}
.btn-modal {
  flex: 1;
  font-family: var(--display);
  font-size: 0.82rem; font-weight: 700;
  letter-spacing: 0.12em;
  padding: 0.75rem 1rem;
  border: 1px solid;
  transition: transform 0.15s, box-shadow 0.2s;
}
.btn-modal .key { font-family: var(--mono); margin-right: 0.4rem; opacity: 0.7; }
.btn-cancel {
  background: transparent;
  color: var(--cp-magenta);
  border-color: var(--cp-magenta);
}
.btn-cancel:hover { background: rgba(255,0,60,0.1); }
.btn-confirm {
  background: var(--cp-yellow);
  color: #0A0A0A;
  border-color: var(--cp-yellow);
}
.btn-confirm:hover { box-shadow: 0 0 0 4px var(--cp-yellow-glow); transform: translateY(-2px); }

/* ╔═══════════════════════════════════════════════════════════╗
   ║  RESPONSIVE                                               ║
   ╚═══════════════════════════════════════════════════════════╝ */

@media (max-width: 1100px) {
  .hero-grid { grid-template-columns: 1fr; gap: 3rem; }
  .hero-right { justify-content: flex-start; }
  .photo-frame { max-width: 320px; }
  .about-grid { grid-template-columns: 1fr; gap: 2rem; }
  .skills-cols { grid-template-columns: 1fr; gap: 2.4rem; }
  .featured-grid { grid-template-columns: 1fr; }
  .featured-art { min-height: 220px; }
  .edu-grid { grid-template-columns: 1fr; }
  .section, .section-alt { padding-left: 3rem; padding-right: 3rem; }
}

@media (max-width: 900px) {
  :root { --side: 0px; }
  body { cursor: auto; }
  .cursor-dot, .cursor-ring { display: none; }
  .topbar { display: flex; }
  .main { margin-left: 0; padding-top: 56px; }

  /* sidebar becomes drawer */
  .sidebar {
    width: 280px;
    transform: translateX(-100%);
    box-shadow: 4px 0 30px rgba(0,0,0,0.5);
  }
  .sidebar.open { transform: translateX(0); }

  .section, .section-alt { padding: 4rem 1.5rem; }
  .hero { padding-top: 5rem; padding-bottom: 4rem; }
  .hero-name { font-size: 2.6rem; }
  .hero-surname { font-size: 1.5rem; }
  .hero-stats { flex-wrap: wrap; gap: 1.4rem; }
  .about-stats { grid-template-columns: 1fr 1fr; }
  .timeline { padding-left: 2rem; }
  .tl-dot { left: -2rem; }
  .footer-row { flex-direction: column; align-items: flex-start; gap: 0.5rem; }
}

@media (max-width: 560px) {
  .hero-cta { width: 100%; }
  .btn { flex: 1; justify-content: center; padding: 0.85rem 1rem; }
  .about-stats { grid-template-columns: 1fr; }
  .proj-grid { grid-template-columns: 1fr; }
  .modal-actions { flex-direction: column; }
  .photo-hud-bl { font-size: 0.6rem; }
  .featured-art { padding: 1.4rem; }
}

/* reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.001s !important;
    transition-duration: 0.001s !important;
  }
  .photo-scan, .tl-dot::after, .meta-dot, .footer-heart, .mp-blink, .cursor-blink, .typed-caret { animation: none !important; }
}

/* ╔═══════════════════════════════════════════════════════════╗
   ║  LIGHT MODE VISIBILITY OVERRIDES                          ║
   ║  In light mode, panels = white, bg = cream.               ║
   ║  Override hardcoded dark-mode text colors here so         ║
   ║  everything reads cleanly.                                ║
   ╚═══════════════════════════════════════════════════════════╝ */

/* ── Body paragraph copy (was light gray, needs dark on cream/white) ── */
[data-theme="light"] .hero-bio,
[data-theme="light"] .about-text p,
[data-theme="light"] .contact-lead,
[data-theme="light"] .tl-bullets li,
[data-theme="light"] .proj-desc,
[data-theme="light"] .proj-points li,
[data-theme="light"] .edu-school { color: #2A2A2A; }

[data-theme="light"] .hero-bio strong,
[data-theme="light"] .about-text strong,
[data-theme="light"] .contact-lead strong,
[data-theme="light"] .tl-bullets strong,
[data-theme="light"] .proj-desc strong { color: #000000; }

/* ── Card-level titles (were white, need black on white panels) ── */
[data-theme="light"] .tl-role,
[data-theme="light"] .proj-title,
[data-theme="light"] .cc-value,
[data-theme="light"] .edu-degree,
[data-theme="light"] .stat-num,
[data-theme="light"] .hstat-num { color: #000000; }

[data-theme="light"] .edu-degree span { color: #6B5A00; }

/* ── Card backgrounds were forced dark before — remove that ── */
[data-theme="light"] .tl-card,
[data-theme="light"] .stat-card,
[data-theme="light"] .stack-card,
[data-theme="light"] .edu-card,
[data-theme="light"] .contact-card,
[data-theme="light"] .featured-meta,
[data-theme="light"] .featured,
[data-theme="light"] .proj-grid .project-card { color: #1A1A1A; }

/* ── Tiny meta text (dates, captions) ── */
[data-theme="light"] .tl-company span,
[data-theme="light"] .edu-status,
[data-theme="light"] .footer-row,
[data-theme="light"] .stat-lbl,
[data-theme="light"] .hstat-lbl,
[data-theme="light"] .cc-label { color: #6A6A6A; }

/* ── Cyan accents were too light on white — darken ── */
[data-theme="light"] .tl-date,
[data-theme="light"] .edu-year,
[data-theme="light"] .skills-sub,
[data-theme="light"] .proj-link { color: #006C7A; }

[data-theme="light"] .proj-badge {
  color: #006C7A;
  background: rgba(0, 192, 200, 0.10);
  border-color: rgba(0, 192, 200, 0.40);
}

[data-theme="light"] .proj-link:hover {
  color: #6B5A00;
  border-bottom-color: #006C7A;
}

/* ── Yellow accents that need contrast on white/cream ── */
[data-theme="light"] .tl-company,
[data-theme="light"] .skill-name i,
[data-theme="light"] .stack-title,
[data-theme="light"] .stack-title i,
[data-theme="light"] .stat-icon,
[data-theme="light"] .cc-icon,
[data-theme="light"] .proj-num,
[data-theme="light"] .tl-bullets li::before { color: #6B5A00; }

[data-theme="light"] .tech-tag {
  color: #5A4A00;
  background: rgba(212, 184, 0, 0.14);
  border-color: rgba(10, 10, 10, 0.14);
}

[data-theme="light"] .stack-pills span {
  color: #1A1A1A;
  border-color: rgba(10, 10, 10, 0.18);
  background: rgba(212, 184, 0, 0.10);
}

/* ── Section titles were white-with-glow ── */
[data-theme="light"] .sec-title { color: #000000; text-shadow: none; }

/* ── Hero ── */
[data-theme="light"] .hero-name { text-shadow: none; }
[data-theme="light"] .cursor-blink,
[data-theme="light"] .typed-caret { color: #6B5A00; }
[data-theme="light"] .hero-typed { color: #1A1A1A; }
[data-theme="light"] .typed-prefix { color: #6B5A00; }

/* ── Skill bar fill (was bright yellow→cyan gradient — too washed out on cream) ── */
[data-theme="light"] .skill-fill {
  background: linear-gradient(90deg, #B89A00, #006C7A);
  box-shadow: none;
}
[data-theme="light"] .skill-meta { color: #6B5A00; }

/* ── Filter buttons ── */
[data-theme="light"] .filter-btn { color: #555; border-color: rgba(10, 10, 10, 0.30); }
[data-theme="light"] .filter-btn:hover { color: #000; border-color: #000; }
[data-theme="light"] .filter-btn.active {
  color: #000;
  background: var(--cp-yellow);
  border-color: var(--cp-yellow);
}

/* ── Tags need stronger border on cream ── */
[data-theme="light"] .tag {
  color: #5A4A00;
  background: rgba(212, 184, 0, 0.12);
  border-color: rgba(10, 10, 10, 0.30);
}

/* ── Edu badge ── */
[data-theme="light"] .edu-badge {
  color: #5A4A00;
  background: rgba(212, 184, 0, 0.15);
  border-color: rgba(212, 184, 0, 0.7);
}

/* ── Mobile topbar matches cream ── */
[data-theme="light"] .topbar { background: rgba(239, 234, 210, 0.95); }

/* ── Hero meta chip ── */
[data-theme="light"] .hero-meta {
  color: #006C7A;
  border-color: rgba(0, 108, 122, 0.4);
  background: rgba(0, 108, 122, 0.06);
}
[data-theme="light"] .meta-dot { background: #006C7A; box-shadow: 0 0 6px rgba(0, 108, 122, 0.5); }

/* ── Photo HUD elements: tone the cyan/magenta down ── */
[data-theme="light"] .photo-hud-br { color: #006C7A; border-color: #006C7A; background: rgba(255,255,255,0.95); }
[data-theme="light"] .photo-img { background: #F8F8F0; }

/* ── Scroll hint at bottom of hero ── */
[data-theme="light"] .hero-scroll { color: #555; }

/* ── Timeline gradient line ── */
[data-theme="light"] .timeline::before {
  background: linear-gradient(180deg, #B89A00, #006C7A);
  opacity: 0.7;
}

/* ── Timeline dot ── */
[data-theme="light"] .tl-dot {
  border-color: var(--bg);
  box-shadow: 0 0 8px rgba(212, 184, 0, 0.5);
}

/* ── Surname ── */
[data-theme="light"] .hero-surname { color: #000; text-shadow: none; }

/* ── stack-card subtle shadow for depth on cream ── */
[data-theme="light"] .stat-card,
[data-theme="light"] .stack-card,
[data-theme="light"] .tl-card,
[data-theme="light"] .edu-card,
[data-theme="light"] .contact-card,
[data-theme="light"] .proj-grid .project-card,
[data-theme="light"] .featured {
  box-shadow: 0 1px 0 rgba(10,10,10,0.06), 0 4px 12px rgba(10,10,10,0.04);
}

/* ╔═══════════════════════════════════════════════════════════╗
   ║  TIER 1 ADDITIONS                                         ║
   ║  Open-to-work banner · Status board · YouTube embed       ║
   ║  GitHub stats · Contact form                              ║
   ╚═══════════════════════════════════════════════════════════╝ */

/* ── HERO HIRE BANNER ─────────────────────────────────────── */
.hero-meta-hire {
  font-size: 0.82rem;
  color: var(--cp-yellow);
  border-color: var(--cp-yellow);
  background: rgba(252, 238, 10, 0.08);
  padding: 0.5rem 1rem;
  gap: 0.6rem;
  flex-wrap: wrap;
}
.hero-meta-hire .meta-dot {
  background: var(--cp-yellow);
  box-shadow: 0 0 10px var(--cp-yellow);
}
.hero-meta-hire .meta-label { font-weight: 700; letter-spacing: 0.12em; }
.hero-meta-hire .meta-window { color: var(--text); letter-spacing: 0.08em; }
.hero-meta-hire .meta-divider { color: var(--muted); }
.hero-meta-hire .meta-link {
  font-weight: 700;
  color: #0A0A0A;
  background: var(--cp-yellow);
  padding: 0.18rem 0.55rem;
  margin-left: 0.2rem;
  transition: transform 0.15s, box-shadow 0.2s;
}
.hero-meta-hire .meta-link:hover {
  transform: translateX(2px);
  box-shadow: 0 0 0 3px rgba(252, 238, 10, 0.25);
}
[data-theme="light"] .hero-meta-hire {
  color: #5A4A00;
  border-color: rgba(10, 10, 10, 0.5);
  background: rgba(252, 238, 10, 0.45);
}
[data-theme="light"] .hero-meta-hire .meta-dot { background: #B89A00; box-shadow: 0 0 8px rgba(184, 154, 0, 0.6); }
[data-theme="light"] .hero-meta-hire .meta-label { color: #000; }
[data-theme="light"] .hero-meta-hire .meta-window { color: #2A2A2A; }

/* ── STATUS BOARD ─────────────────────────────────────────── */
.status-section {
  padding-top: 0;
  padding-bottom: 4rem;
  margin-top: -3rem;
}
.status-board {
  border: 1px solid var(--cp-yellow);
  background: var(--panel);
  font-family: var(--mono);
  position: relative;
  box-shadow: 0 0 0 1px rgba(252, 238, 10, 0.08), 0 0 30px rgba(252, 238, 10, 0.04);
}
.status-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 0.45rem 0.95rem;
  background: var(--cp-yellow);
  color: #0A0A0A;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.18em;
}
.status-header-l { display: flex; gap: 0.3rem; }
.status-header-bracket { color: rgba(10, 10, 10, 0.5); }
.status-header-r { display: flex; align-items: center; gap: 0.4rem; font-size: 0.65rem; }
.status-led {
  width: 7px; height: 7px;
  background: var(--cp-magenta);
  box-shadow: 0 0 6px var(--cp-magenta);
  border-radius: 50%;
  animation: pulse 1.4s ease-in-out infinite;
}
.status-rows {
  padding: 1rem 1.2rem;
  display: flex; flex-direction: column;
  gap: 0.5rem;
}
.status-row {
  display: grid;
  grid-template-columns: 14px 200px 1fr;
  gap: 0.8rem;
  align-items: center;
  font-size: 0.88rem;
  padding: 0.35rem 0;
  border-bottom: 1px dashed var(--hairline);
}
.status-row:last-child { border-bottom: none; }
.status-row .status-dot {
  width: 8px; height: 8px;
  background: var(--cp-cyan);
  box-shadow: 0 0 6px var(--cp-cyan);
}
.status-row .status-key {
  color: var(--muted);
  letter-spacing: 0.1em;
  font-size: 0.78rem;
}
.status-row .status-val {
  color: var(--text);
  font-size: 0.92rem;
}
.status-row .status-val em {
  color: var(--cp-yellow);
  font-style: normal;
  font-weight: 700;
}
.status-row .status-val a {
  color: var(--cp-yellow);
  border-bottom: 1px solid var(--cp-yellow);
}
[data-theme="light"] .status-row .status-val em,
[data-theme="light"] .status-row .status-val a { color: #6B5A00; border-bottom-color: #6B5A00; }
[data-theme="light"] .status-row .status-dot { background: #006C7A; box-shadow: 0 0 6px rgba(0,108,122,0.5); }

/* ── YOUTUBE VIDEO EMBED ──────────────────────────────────── */
.video-play {
  display: block;
  width: 100%; height: 100%;
  min-height: 320px;
  position: relative;
  padding: 0; border: none;
  background: #000;
  overflow: hidden;
  cursor: pointer;
}
.video-play img {
  width: 100%; height: 100%;
  object-fit: cover;
  filter: contrast(1.05) brightness(0.78) saturate(1.1);
  transition: filter 0.3s, transform 0.4s;
}
.video-play:hover img { filter: contrast(1.05) brightness(0.95); transform: scale(1.02); }
.video-overlay {
  position: absolute; inset: 0;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  pointer-events: none;
  gap: 1rem;
}
.video-play-btn {
  width: 78px; height: 78px;
  display: flex; align-items: center; justify-content: center;
  background: var(--cp-yellow);
  color: #0A0A0A;
  border: 2px solid #fff;
  box-shadow: 0 0 0 4px rgba(252, 238, 10, 0.3), 0 0 40px rgba(252, 238, 10, 0.5);
  transition: transform 0.2s var(--ease);
}
.video-play:hover .video-play-btn { transform: scale(1.1); }
.video-play-btn svg { width: 32px; height: 32px; margin-left: 4px; }
.video-label {
  font-family: var(--mono);
  font-size: 0.78rem;
  color: #fff;
  background: rgba(0, 0, 0, 0.75);
  padding: 0.35rem 0.8rem;
  letter-spacing: 0.12em;
  border: 1px solid var(--cp-yellow);
}
.video-hud-tl, .video-hud-tr {
  position: absolute;
  font-family: var(--mono);
  font-size: 0.68rem;
  padding: 0.2rem 0.5rem;
  background: rgba(0, 0, 0, 0.75);
  letter-spacing: 0.1em;
}
.video-hud-tl { top: 12px; left: 12px; color: var(--cp-magenta); border: 1px solid var(--cp-magenta); }
.video-hud-tr { top: 12px; right: 12px; color: var(--cp-cyan); border: 1px solid var(--cp-cyan); }
.video-scan {
  position: absolute; inset: 0;
  background: repeating-linear-gradient(0deg, transparent 0 3px, rgba(0,0,0,0.06) 3px 4px);
  pointer-events: none;
}
.featured-art iframe {
  display: block;
  width: 100%; height: 100%;
  min-height: 360px;
  border: none;
  background: #000;
}

/* ── GITHUB ACTIVITY ─────────────────────────────────────── */
.gh-activity {
  margin-top: 2.5rem;
  padding-top: 1.6rem;
  border-top: 1px dashed var(--border);
  grid-column: 1 / -1;
}
.gh-activity-head {
  display: flex; align-items: center; gap: 0.6rem;
  font-family: var(--mono);
  font-size: 0.78rem;
  color: var(--cp-cyan);
  letter-spacing: 0.12em;
  margin-bottom: 1.2rem;
}
.gh-activity-head i { width: 16px; height: 16px; }
.gh-activity-head .gh-link {
  margin-left: auto;
  color: var(--cp-yellow);
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s;
}
.gh-activity-head .gh-link:hover { border-bottom-color: var(--cp-yellow); }
[data-theme="light"] .gh-activity-head { color: #006C7A; }
[data-theme="light"] .gh-activity-head .gh-link { color: #6B5A00; }
[data-theme="light"] .gh-activity-head .gh-link:hover { border-bottom-color: #6B5A00; }

.gh-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.gh-card {
  border: 1px solid var(--border);
  background: var(--panel);
  padding: 0.8rem;
  min-height: 180px;
  display: flex; align-items: center; justify-content: center;
  overflow: hidden;
}
.gh-card img { max-width: 100%; height: auto; display: block; }

/* ── CONTACT FORM ────────────────────────────────────────── */
.contact-form {
  max-width: 640px;
  margin: 0 auto 2.5rem;
  border: 1px solid var(--cp-yellow);
  background: var(--panel);
  padding: 1.6rem 1.6rem 1.4rem;
  text-align: left;
  position: relative;
  box-shadow: 0 0 0 1px rgba(252, 238, 10, 0.06), 0 0 30px rgba(252, 238, 10, 0.04);
}
.contact-form::before {
  content: '';
  position: absolute; top: -1px; left: 0;
  width: 50px; height: 3px;
  background: var(--cp-magenta);
}
.form-head {
  display: flex; align-items: center; gap: 0.55rem;
  font-family: var(--display);
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--cp-yellow);
  letter-spacing: 0.15em;
  margin-bottom: 1.3rem;
  padding-bottom: 0.7rem;
  border-bottom: 1px dashed var(--border);
}
.form-head i { width: 16px; height: 16px; }
.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.9rem;
}
.form-row {
  display: flex; flex-direction: column;
  gap: 0.35rem;
  margin-bottom: 0.9rem;
}
.form-row label {
  font-family: var(--mono);
  font-size: 0.72rem;
  color: var(--cp-cyan);
  letter-spacing: 0.12em;
}
.form-row input, .form-row textarea {
  font-family: var(--mono);
  font-size: 0.9rem;
  padding: 0.7rem 0.85rem;
  background: var(--bg);
  border: 1px solid var(--border);
  color: var(--text);
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
  resize: vertical;
  cursor: text;
}
.form-row input::placeholder, .form-row textarea::placeholder { color: var(--muted); opacity: 0.6; }
.form-row input:focus, .form-row textarea:focus {
  border-color: var(--cp-yellow);
  box-shadow: 0 0 0 2px rgba(252, 238, 10, 0.18);
  background: var(--bg-3);
}
.form-row textarea { min-height: 110px; line-height: 1.5; }
.btn-submit { width: 100%; justify-content: center; margin-top: 0.4rem; }
.form-status {
  font-family: var(--mono);
  font-size: 0.85rem;
  padding: 0.7rem 0.9rem;
  margin-top: 0.9rem;
  border: 1px solid;
  display: none;
}
.form-status.success {
  display: block;
  color: var(--cp-cyan);
  border-color: var(--cp-cyan);
  background: rgba(0, 240, 255, 0.08);
}
.form-status.error {
  display: block;
  color: var(--cp-magenta);
  border-color: var(--cp-magenta);
  background: rgba(255, 0, 60, 0.08);
}
.contact-divider {
  display: flex; align-items: center; justify-content: center;
  font-family: var(--mono);
  font-size: 0.72rem;
  color: var(--muted);
  letter-spacing: 0.2em;
  margin: 0 auto 1.4rem;
  max-width: 620px;
  gap: 0.8rem;
}
.contact-divider::before, .contact-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--border);
  background-image: repeating-linear-gradient(90deg, var(--border) 0 4px, transparent 4px 8px);
}

/* Light mode form */
[data-theme="light"] .form-row input,
[data-theme="light"] .form-row textarea {
  background: #FAFAF0;
  color: #1A1A1A;
  border-color: rgba(10, 10, 10, 0.3);
}
[data-theme="light"] .form-row input:focus,
[data-theme="light"] .form-row textarea:focus {
  border-color: #6B5A00;
  background: #FFFFFF;
  box-shadow: 0 0 0 2px rgba(212, 184, 0, 0.25);
}
[data-theme="light"] .form-row label { color: #006C7A; }
[data-theme="light"] .form-head { color: #6B5A00; }
[data-theme="light"] .contact-form { border-color: #6B5A00; }

/* responsive */
@media (max-width: 700px) {
  .form-grid { grid-template-columns: 1fr; }
  .status-row { grid-template-columns: 14px 1fr; }
  .status-row .status-key { font-size: 0.72rem; }
  .status-row .status-val { grid-column: 1 / -1; padding-left: 22px; font-size: 0.86rem; }
  .gh-cards { grid-template-columns: 1fr; }
  .hero-meta-hire { font-size: 0.74rem; }
  .video-play-btn { width: 64px; height: 64px; }
  .video-play-btn svg { width: 26px; height: 26px; }
}

/* ╔═══════════════════════════════════════════════════════════╗
   ║  TIER 2 ADDITIONS                                         ║
   ║  Languages · Achievements · Resume preview · Case studies ║
   ╚═══════════════════════════════════════════════════════════╝ */

/* ── LANGUAGES BLOCK ─────────────────────────────────────── */
.languages-block {
  margin-top: 2.5rem;
  padding-top: 1.6rem;
  border-top: 1px dashed var(--border);
  grid-column: 1 / -1;
}
.lang-head {
  display: flex; align-items: center; gap: 0.6rem;
  font-family: var(--mono);
  font-size: 0.78rem;
  color: var(--cp-cyan);
  letter-spacing: 0.12em;
  margin-bottom: 1.2rem;
}
.lang-head i { width: 16px; height: 16px; }
.lang-hint {
  margin-left: auto;
  color: var(--muted);
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: lowercase;
}
[data-theme="light"] .lang-head { color: #006C7A; }

.lang-rows {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.7rem 1.4rem;
}
.lang-row {
  display: grid;
  grid-template-columns: 38px 1fr auto;
  align-items: center;
  gap: 0.6rem 0.8rem;
  padding: 0.55rem 0.75rem;
  border: 1px solid var(--border);
  background: var(--panel);
  position: relative;
}
.lang-code {
  font-family: var(--display);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  color: #0A0A0A;
  background: var(--cp-yellow);
  padding: 0.3rem 0.4rem;
  text-align: center;
  border: 1px solid var(--cp-yellow);
}
.lang-name {
  font-family: var(--display);
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--text-strong);
}
.lang-level {
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--cp-cyan);
  letter-spacing: 0.1em;
}
[data-theme="light"] .lang-level { color: #006C7A; }
.lang-track {
  grid-column: 1 / -1;
  height: 4px;
  background: rgba(252, 238, 10, 0.08);
  border: 1px solid var(--hairline);
  overflow: hidden;
}
[data-theme="light"] .lang-track { background: rgba(10,10,10,0.08); }
.lang-fill {
  height: 100%; width: 0;
  background: linear-gradient(90deg, var(--cp-yellow), var(--cp-cyan));
  box-shadow: 0 0 8px var(--cp-yellow);
  transition: width 1.2s cubic-bezier(0.65, 0, 0.35, 1);
}
[data-theme="light"] .lang-fill {
  background: linear-gradient(90deg, #B89A00, #006C7A);
  box-shadow: none;
}
.lang-row.animated .lang-fill { width: var(--target-pct, 0%); }

/* ── ACHIEVEMENTS GRID ───────────────────────────────────── */
.ach-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  gap: 1rem;
}
.ach-card {
  position: relative;
  border: 1px solid var(--border);
  background: var(--panel);
  padding: 1.4rem 1.4rem 1.5rem;
  overflow: hidden;
  transition: border-color 0.2s, transform 0.2s;
  display: flex; flex-direction: column;
}
[data-theme="light"] .ach-card { color: #1A1A1A; }
.ach-card:hover { border-color: var(--cp-yellow); transform: translateY(-3px); }
.ach-card::after {
  content: '';
  position: absolute; bottom: 0; left: 0;
  width: 100%; height: 2px;
  background: linear-gradient(90deg, var(--cp-yellow), transparent);
  transform: scaleX(0); transform-origin: left;
  transition: transform 0.3s var(--ease);
}
.ach-card:hover::after { transform: scaleX(1); }

.ach-corner {
  position: absolute; top: 0; right: 0;
  font-family: var(--mono);
  font-size: 0.62rem;
  letter-spacing: 0.18em;
  padding: 0.25rem 0.6rem;
  color: #0A0A0A;
  background: var(--cp-yellow);
}
.ach-verified .ach-corner { background: var(--cp-yellow); color: #0A0A0A; }

.ach-icon { color: var(--cp-yellow); margin-bottom: 0.7rem; }
.ach-icon i { width: 28px; height: 28px; }
[data-theme="light"] .ach-icon { color: #6B5A00; }

.ach-year {
  font-family: var(--mono);
  font-size: 0.72rem;
  color: var(--cp-cyan);
  letter-spacing: 0.1em;
  margin-bottom: 0.4rem;
}
[data-theme="light"] .ach-year { color: #006C7A; }

.ach-title {
  font-family: var(--display);
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-strong);
  line-height: 1.3;
  margin-bottom: 0.3rem;
  letter-spacing: 0.01em;
}

.ach-issuer {
  font-family: var(--mono);
  font-size: 0.78rem;
  color: var(--cp-yellow);
  margin-bottom: 0.7rem;
}
[data-theme="light"] .ach-issuer { color: #6B5A00; }

.ach-desc {
  flex: 1;
  font-size: 0.9rem;
  color: #CFCFCF;
  line-height: 1.6;
  font-weight: 500;
  margin-bottom: 0.9rem;
}
[data-theme="light"] .ach-desc { color: #2A2A2A; }

.ach-tags { display: flex; flex-wrap: wrap; gap: 0.3rem; }
.ach-tags span {
  font-family: var(--mono);
  font-size: 0.7rem;
  padding: 0.22rem 0.55rem;
  background: rgba(252, 238, 10, 0.08);
  border: 1px solid var(--hairline);
  color: var(--cp-yellow);
}
[data-theme="light"] .ach-tags span {
  color: #5A4A00;
  background: rgba(212, 184, 0, 0.14);
  border-color: rgba(10, 10, 10, 0.14);
}

/* ── CV PREVIEW (wider modal) ────────────────────────────── */
.modal-card-wide { max-width: 900px; }
.modal-split {
  display: grid;
  grid-template-columns: 1fr 0.85fr;
  min-height: 0;
}
.cv-preview {
  border-right: 1px solid var(--border);
  background: #050505;
  display: flex; flex-direction: column;
  min-height: 0;
}
[data-theme="light"] .cv-preview { background: #F5F1DC; border-right-color: rgba(10,10,10,0.15); }

.cv-preview-head {
  display: flex; align-items: center; gap: 0.5rem;
  font-family: var(--mono);
  font-size: 0.72rem;
  color: var(--cp-yellow);
  letter-spacing: 0.1em;
  padding: 0.5rem 0.85rem;
  background: rgba(252, 238, 10, 0.06);
  border-bottom: 1px solid var(--border);
}
.cv-preview-led {
  width: 7px; height: 7px;
  background: var(--cp-cyan);
  box-shadow: 0 0 6px var(--cp-cyan);
  border-radius: 50%;
  animation: pulse 1.4s ease-in-out infinite;
}
[data-theme="light"] .cv-preview-head { color: #6B5A00; }
[data-theme="light"] .cv-preview-led { background: #006C7A; box-shadow: 0 0 6px rgba(0,108,122,0.5); }

.cv-preview-frame {
  flex: 1;
  position: relative;
  min-height: 380px;
  background: #0A0A0A;
}
[data-theme="light"] .cv-preview-frame { background: #FFFFFF; }
.cv-preview-frame iframe {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  border: none;
  background: #fff;
}
.cv-preview-fallback {
  position: absolute; inset: 0;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  gap: 0.4rem;
  font-family: var(--mono);
  color: var(--muted);
  text-align: center;
  padding: 1.5rem;
}
.cv-preview-fallback i { width: 48px; height: 48px; color: var(--cp-yellow); opacity: 0.5; margin-bottom: 0.6rem; }
.cv-preview-fallback strong {
  font-family: var(--display);
  font-size: 0.85rem;
  letter-spacing: 0.15em;
  color: var(--cp-yellow);
}
.cv-preview-fallback span { font-size: 0.85rem; color: var(--text); }
.cv-preview-fallback code {
  font-family: var(--mono);
  background: rgba(252, 238, 10, 0.1);
  padding: 0.1rem 0.4rem;
  color: var(--cp-yellow);
  font-size: 0.82rem;
}
.cv-preview-fallback small { font-size: 0.72rem; margin-top: 0.6rem; opacity: 0.7; }
.cv-preview-fallback.shown { display: flex; }
.cv-preview-frame.has-pdf .cv-preview-fallback { display: none; }
.cv-preview-frame:not(.has-pdf) iframe { display: none; }

.cv-preview-foot {
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--muted);
  padding: 0.5rem 0.85rem;
  border-top: 1px solid var(--border);
  background: rgba(0, 0, 0, 0.3);
}
[data-theme="light"] .cv-preview-foot { background: rgba(10,10,10,0.04); }

.cv-prompt { display: flex; flex-direction: column; }
.cv-prompt .modal-body { flex: 1; }
.cv-prompt .modal-actions { padding-bottom: 1.2rem; }

@media (max-width: 800px) {
  .modal-card-wide { max-width: 95vw; }
  .modal-split { grid-template-columns: 1fr; }
  .cv-preview { border-right: none; border-bottom: 1px solid var(--border); }
  .cv-preview-frame { min-height: 260px; }
}

/* ── CASE STUDY MODAL ────────────────────────────────────── */
.cs-trigger {
  display: inline-flex; align-items: center; gap: 0.4rem;
  font-family: var(--mono);
  font-size: 0.78rem;
  color: var(--cp-cyan);
  border-bottom: 1px solid transparent;
  padding-bottom: 1px;
  transition: border-color 0.2s, color 0.2s;
  cursor: pointer;
  background: none; border-left: none; border-right: none; border-top: none;
}
.cs-trigger i { width: 14px; height: 14px; }
.cs-trigger:hover { border-bottom-color: var(--cp-cyan); color: var(--cp-yellow); }
[data-theme="light"] .cs-trigger { color: #006C7A; }
[data-theme="light"] .cs-trigger:hover { color: #6B5A00; border-bottom-color: #006C7A; }

#cs-modal { z-index: 9100; }
.cs-card {
  width: 100%; max-width: 920px;
  max-height: 90vh;
  background: #0A0A0A;
  border: 1px solid var(--cp-yellow);
  box-shadow: 0 0 0 1px rgba(252,238,10,0.1), 0 0 50px rgba(252,238,10,0.15);
  display: flex; flex-direction: column;
  overflow: hidden;
  transform: translateY(20px) scale(0.97);
  transition: transform 0.3s var(--ease);
}
.modal.open .cs-card { transform: translateY(0) scale(1); }
[data-theme="light"] .cs-card { background: #FFFFFF; border-color: #6B5A00; box-shadow: 0 0 0 1px rgba(212,184,0,0.18), 0 8px 60px rgba(10,10,10,0.18); }

.cs-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 0.85rem 1.2rem;
  background: rgba(252, 238, 10, 0.06);
  border-bottom: 1px solid var(--border);
  flex-shrink: 0;
}
.cs-header-title {
  display: flex; align-items: center; gap: 0.5rem;
  font-family: var(--display);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: var(--cp-yellow);
}
[data-theme="light"] .cs-header-title { color: #6B5A00; }
.cs-header-title i { width: 16px; height: 16px; }

.cs-body {
  flex: 1;
  overflow-y: auto;
  padding: 0;
}
.cs-body::-webkit-scrollbar { width: 8px; }
.cs-body::-webkit-scrollbar-track { background: rgba(255,255,255,0.04); }
.cs-body::-webkit-scrollbar-thumb { background: var(--cp-yellow); }

.cs-hero {
  padding: 2rem 2rem 1.4rem;
  background: linear-gradient(135deg, rgba(252,238,10,0.06), transparent 60%);
  border-bottom: 1px dashed var(--border);
}
.cs-badge {
  display: inline-block;
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--cp-cyan);
  background: rgba(0, 240, 255, 0.08);
  border: 1px solid rgba(0, 240, 255, 0.3);
  padding: 0.25rem 0.6rem;
  margin-bottom: 0.8rem;
  letter-spacing: 0.1em;
}
[data-theme="light"] .cs-badge { color: #006C7A; background: rgba(0, 192, 200, 0.10); border-color: rgba(0, 192, 200, 0.40); }
.cs-title {
  font-family: var(--display);
  font-size: 1.7rem;
  font-weight: 800;
  color: var(--text-strong);
  letter-spacing: 0.02em;
  margin-bottom: 0.4rem;
}
.cs-sub {
  font-family: var(--mono);
  font-size: 0.85rem;
  color: var(--cp-yellow);
}
[data-theme="light"] .cs-sub { color: #6B5A00; }

.cs-section { padding: 1.4rem 2rem; border-bottom: 1px dashed var(--border); }
.cs-section:last-child { border-bottom: none; }
.cs-section-label {
  font-family: var(--mono);
  font-size: 0.72rem;
  color: var(--cp-cyan);
  letter-spacing: 0.15em;
  margin-bottom: 0.8rem;
}
[data-theme="light"] .cs-section-label { color: #006C7A; }
.cs-section h3 {
  font-family: var(--display);
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-strong);
  margin-bottom: 0.6rem;
}
.cs-section p {
  font-size: 0.96rem;
  color: #CFCFCF;
  line-height: 1.7;
  font-weight: 500;
  margin-bottom: 0.8rem;
}
[data-theme="light"] .cs-section p { color: #2A2A2A; }
.cs-section ul { display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 0.8rem; padding-left: 0; }
.cs-section ul li {
  position: relative;
  padding-left: 1.4rem;
  font-size: 0.94rem;
  color: #CFCFCF;
  font-weight: 500;
  line-height: 1.55;
}
[data-theme="light"] .cs-section ul li { color: #2A2A2A; }
.cs-section ul li::before {
  content: '▸';
  position: absolute; left: 0; top: 0;
  color: var(--cp-yellow);
  font-weight: 700;
}
[data-theme="light"] .cs-section ul li::before { color: #6B5A00; }

.cs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0.8rem;
}
.cs-stat {
  border: 1px solid var(--border);
  padding: 0.9rem;
  background: rgba(252, 238, 10, 0.03);
}
.cs-stat-label {
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--cp-cyan);
  letter-spacing: 0.1em;
  margin-bottom: 0.3rem;
}
[data-theme="light"] .cs-stat-label { color: #006C7A; }
.cs-stat-val {
  font-family: var(--display);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-strong);
}

.cs-techs { display: flex; flex-wrap: wrap; gap: 0.35rem; }
.cs-techs span {
  font-family: var(--mono);
  font-size: 0.74rem;
  padding: 0.3rem 0.65rem;
  background: rgba(252, 238, 10, 0.06);
  border: 1px solid var(--hairline);
  color: var(--cp-yellow);
}
[data-theme="light"] .cs-techs span { color: #5A4A00; background: rgba(212, 184, 0, 0.14); border-color: rgba(10, 10, 10, 0.14); }

.cs-links { display: flex; gap: 1rem; flex-wrap: wrap; padding: 1.2rem 2rem; background: rgba(0,0,0,0.3); border-top: 1px solid var(--border); flex-shrink: 0; }
[data-theme="light"] .cs-links { background: rgba(10,10,10,0.03); }
.cs-link {
  display: inline-flex; align-items: center; gap: 0.5rem;
  font-family: var(--mono);
  font-size: 0.82rem;
  color: var(--cp-yellow);
  border: 1px solid var(--cp-yellow);
  padding: 0.55rem 1rem;
  letter-spacing: 0.08em;
  transition: background 0.2s, transform 0.15s;
}
.cs-link:hover { background: rgba(252, 238, 10, 0.1); transform: translateY(-1px); }
.cs-link i { width: 14px; height: 14px; }

@media (max-width: 700px) {
  .lang-rows { grid-template-columns: 1fr; }
  .cs-hero, .cs-section, .cs-links { padding-left: 1.2rem; padding-right: 1.2rem; }
  .cs-title { font-size: 1.3rem; }
}

/* ╔═══════════════════════════════════════════════════════════╗
   ║  TIER 3 ADDITIONS                                         ║
   ║  Terminal · Character sheet · Konami · Time HUD · Audio   ║
   ╚═══════════════════════════════════════════════════════════╝ */

/* ── LIVE TIME HUD ───────────────────────────────────────── */
.time-hud {
  position: fixed;
  top: 12px;
  right: 14px;
  z-index: 95;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-family: var(--mono);
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  color: var(--cp-yellow);
  background: rgba(10, 10, 10, 0.82);
  border: 1px solid var(--border);
  padding: 0.35rem 0.65rem;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  user-select: none;
  pointer-events: none;
}
[data-theme="light"] .time-hud {
  color: #1A1A1A;
  background: rgba(255, 255, 255, 0.88);
  border-color: rgba(10, 10, 10, 0.3);
}
.time-hud-dot {
  width: 6px; height: 6px;
  background: var(--cp-cyan);
  box-shadow: 0 0 8px var(--cp-cyan);
  border-radius: 50%;
  animation: pulse 1.4s ease-in-out infinite;
}
[data-theme="light"] .time-hud-dot { background: #006C7A; box-shadow: 0 0 6px rgba(0,108,122,0.5); }
.time-hud-loc { color: var(--cp-yellow); font-weight: 700; }
[data-theme="light"] .time-hud-loc { color: #1A1A1A; }
.time-hud-sep { color: var(--muted); }
.time-hud-time { color: #FFF; font-weight: 700; min-width: 60px; }
[data-theme="light"] .time-hud-time { color: #000; }
.time-hud-day { color: var(--cp-cyan); }
[data-theme="light"] .time-hud-day { color: #006C7A; }
.time-hud-mode {
  color: #0A0A0A;
  background: var(--cp-yellow);
  padding: 0.05rem 0.3rem;
  font-size: 0.62rem;
  font-weight: 700;
}
[data-theme="light"] .time-hud-mode { color: #000; background: #B89A00; }
@media (max-width: 900px) { .time-hud { display: none; } }

/* ── SIDEBAR EXTRA BUTTONS (audio + terminal) ─────────────── */
.sidebar-extra {
  display: flex; flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 0.8rem;
}
.audio-toggle, .terminal-toggle {
  display: flex; align-items: center; gap: 0.5rem;
  padding: 0.5rem 0.7rem;
  border: 1px solid var(--hairline);
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--muted);
  background: rgba(252, 238, 10, 0.02);
  letter-spacing: 0.08em;
  transition: border-color 0.2s, color 0.2s, background 0.2s;
}
.audio-toggle:hover, .terminal-toggle:hover {
  color: var(--cp-yellow);
  border-color: var(--cp-yellow);
  background: rgba(252, 238, 10, 0.06);
}
.audio-toggle i, .terminal-toggle i { width: 14px; height: 14px; }
.audio-icon-on { display: none; }
.audio-toggle.on .audio-icon-on { display: inline-block; }
.audio-toggle.on .audio-icon-off { display: none; }
.audio-toggle.on { color: var(--cp-yellow); border-color: var(--cp-yellow); }
.audio-toggle.on .audio-state::before { content: 'ON'; color: var(--cp-cyan); }
.audio-state { margin-left: auto; font-weight: 700; }
.audio-toggle:not(.on) .audio-state::before { content: 'OFF'; color: var(--muted); }
.audio-state { /* clears default */ font-size: 0; }
.audio-state::before { font-size: 0.7rem; }
.terminal-toggle-label { letter-spacing: 0.1em; }
.terminal-toggle-key {
  margin-left: auto;
  color: var(--cp-cyan);
  font-weight: 700;
}
[data-theme="light"] .terminal-toggle-key { color: #006C7A; }

/* ── STATUS BOARD STATS BUTTON ───────────────────────────── */
.status-stats-btn {
  display: inline-flex; align-items: center; gap: 0.3rem;
  font-family: var(--mono);
  font-size: 0.62rem;
  letter-spacing: 0.15em;
  color: #0A0A0A;
  background: rgba(10, 10, 10, 0.15);
  padding: 0.18rem 0.5rem;
  border: 1px solid rgba(10, 10, 10, 0.5);
  margin-right: 0.6rem;
  transition: background 0.2s, transform 0.15s;
}
.status-stats-btn i { width: 11px; height: 11px; }
.status-stats-btn:hover { background: rgba(10, 10, 10, 0.3); transform: translateY(-1px); }

/* ╔═══════════════════════════════════════════════════════════╗
   ║  TERMINAL OVERLAY                                         ║
   ╚═══════════════════════════════════════════════════════════╝ */
.terminal-overlay {
  position: fixed; inset: 0;
  z-index: 9500;
  background: rgba(0, 0, 0, 0.78);
  backdrop-filter: blur(6px);
  display: flex; align-items: center; justify-content: center;
  padding: 1rem;
  opacity: 0; visibility: hidden;
  transition: opacity 0.22s, visibility 0.22s;
}
.terminal-overlay.open { opacity: 1; visibility: visible; }

.terminal-window {
  width: 100%; max-width: 780px;
  max-height: 80vh;
  background: #0A0A0A;
  border: 1px solid var(--cp-yellow);
  box-shadow: 0 0 0 1px rgba(252, 238, 10, 0.12), 0 0 60px rgba(252, 238, 10, 0.18);
  display: flex; flex-direction: column;
  overflow: hidden;
  transform: translateY(20px) scale(0.97);
  transition: transform 0.25s var(--ease);
  font-family: var(--mono);
}
.terminal-overlay.open .terminal-window { transform: translateY(0) scale(1); }

.terminal-titlebar {
  display: flex; align-items: center; justify-content: space-between;
  padding: 0.45rem 0.8rem;
  background: rgba(252, 238, 10, 0.06);
  border-bottom: 1px solid var(--border);
  flex-shrink: 0;
}
.terminal-tb-l { display: flex; align-items: center; gap: 0.7rem; }
.terminal-traffic { display: inline-flex; gap: 4px; }
.terminal-traffic span {
  width: 11px; height: 11px;
  border-radius: 50%;
  background: var(--cp-magenta);
}
.terminal-traffic span:nth-child(2) { background: var(--cp-yellow); }
.terminal-traffic span:nth-child(3) { background: var(--cp-cyan); }
.terminal-title {
  font-size: 0.74rem;
  color: var(--muted);
  letter-spacing: 0.08em;
}
.terminal-close {
  font-size: 1.4rem;
  color: var(--muted);
  width: 24px; height: 24px;
  display: flex; align-items: center; justify-content: center;
  line-height: 1;
  transition: color 0.2s;
}
.terminal-close:hover { color: var(--cp-magenta); }

.terminal-screen {
  flex: 1; min-height: 0;
  padding: 0.9rem 1rem;
  overflow-y: auto;
  font-size: 0.88rem;
  color: #E8E8E8;
  line-height: 1.45;
  background:
    linear-gradient(to bottom, rgba(252,238,10,0.02), transparent),
    #0A0A0A;
  position: relative;
}
.terminal-screen::before {
  content: '';
  position: absolute; inset: 0;
  background: repeating-linear-gradient(0deg, transparent 0 2px, rgba(255,255,255,0.018) 2px 3px);
  pointer-events: none;
}
.terminal-screen::-webkit-scrollbar { width: 6px; }
.terminal-screen::-webkit-scrollbar-track { background: transparent; }
.terminal-screen::-webkit-scrollbar-thumb { background: var(--cp-yellow); }

.term-line {
  white-space: pre-wrap;
  word-break: break-word;
  margin-bottom: 0.2rem;
}
.term-banner { color: var(--muted); margin-bottom: 0.8rem; }
.term-prompt-line { color: var(--cp-yellow); }
.term-prompt-line .term-cmd { color: #FFF; }
.term-y { color: var(--cp-yellow); }
.term-c { color: var(--cp-cyan); }
.term-m { color: var(--cp-magenta); }
.term-mute { color: var(--muted); }
.term-err { color: var(--cp-magenta); }
.term-ok  { color: var(--cp-cyan); }
.term-table { display: grid; grid-template-columns: 140px 1fr; gap: 0.2rem 1rem; margin: 0.4rem 0 0.6rem; }
.term-table .k { color: var(--cp-yellow); }
.term-table .v { color: #E8E8E8; }
.term-ascii {
  color: var(--cp-yellow);
  font-size: 0.7rem;
  line-height: 1.1;
  margin: 0.4rem 0;
  text-shadow: 0 0 8px rgba(252,238,10,0.3);
}

.terminal-input-line {
  display: flex; align-items: center;
  gap: 0.4rem;
  padding: 0.6rem 1rem;
  border-top: 1px solid var(--border);
  background: rgba(252,238,10,0.04);
  flex-shrink: 0;
}
.terminal-prompt {
  color: var(--cp-yellow);
  font-size: 0.88rem;
  white-space: nowrap;
}
.terminal-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-family: var(--mono);
  font-size: 0.88rem;
  color: #FFF;
  padding: 0.1rem 0;
  caret-color: var(--cp-yellow);
}
.terminal-caret {
  color: var(--cp-yellow);
  animation: blink 1s steps(2) infinite;
  font-size: 0.95rem;
}

/* mobile terminal sizing */
@media (max-width: 600px) {
  .terminal-window { max-height: 88vh; }
  .terminal-screen { font-size: 0.78rem; }
  .terminal-prompt, .terminal-input { font-size: 0.78rem; }
}

/* ╔═══════════════════════════════════════════════════════════╗
   ║  CHARACTER SHEET MODAL                                    ║
   ╚═══════════════════════════════════════════════════════════╝ */
#stats-modal { z-index: 9050; }
.stats-card {
  width: 100%; max-width: 980px;
  max-height: 92vh;
  background: #0A0A0A;
  border: 1px solid var(--cp-yellow);
  box-shadow: 0 0 0 1px rgba(252,238,10,0.1), 0 0 60px rgba(252,238,10,0.2);
  display: flex; flex-direction: column;
  overflow: hidden;
  transform: translateY(20px) scale(0.97);
  transition: transform 0.3s var(--ease);
}
.modal.open .stats-card { transform: translateY(0) scale(1); }
[data-theme="light"] .stats-card { background: #FFFFFF; border-color: #6B5A00; box-shadow: 0 0 0 1px rgba(212,184,0,0.2), 0 8px 60px rgba(10,10,10,0.18); }

.stats-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 0.7rem 1.2rem;
  background: var(--cp-yellow);
  color: #0A0A0A;
  flex-shrink: 0;
}
.stats-header-l, .stats-header-r {
  display: flex; align-items: center; gap: 0.55rem;
  font-family: var(--display);
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.15em;
}
.stats-header-l i { width: 18px; height: 18px; }
.stats-header-build {
  font-family: var(--mono);
  font-size: 0.7rem;
  font-weight: 500;
  padding: 0.18rem 0.5rem;
  background: rgba(10, 10, 10, 0.2);
  border: 1px solid rgba(10, 10, 10, 0.4);
  letter-spacing: 0.1em;
}
.stats-close {
  background: rgba(10, 10, 10, 0.1);
  border: 1px solid rgba(10, 10, 10, 0.4);
}
.stats-close:hover { background: rgba(10, 10, 10, 0.3); }

.stats-identity {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1rem;
  padding: 1.2rem 1.4rem;
  background: linear-gradient(135deg, rgba(252,238,10,0.06), transparent 60%);
  border-bottom: 1px dashed var(--border);
  align-items: end;
}
.stats-callsign {
  font-family: var(--display);
  font-size: 2rem;
  font-weight: 900;
  color: var(--cp-yellow);
  letter-spacing: 0.04em;
  text-shadow: 0 0 16px rgba(252,238,10,0.3);
}
[data-theme="light"] .stats-callsign { color: #000; text-shadow: none; }
.stats-realname {
  font-family: var(--mono);
  font-size: 0.85rem;
  color: var(--text);
  margin-top: 0.2rem;
}
.stats-title {
  font-family: var(--mono);
  font-size: 0.78rem;
  color: var(--cp-cyan);
  margin-top: 0.4rem;
  letter-spacing: 0.06em;
}
[data-theme="light"] .stats-title { color: #006C7A; }

.stats-id-r {
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 0.4rem;
}
.stats-id-cell {
  display: flex; flex-direction: column; align-items: center;
  padding: 0.4rem 0.7rem;
  border: 1px solid var(--border);
  background: rgba(252, 238, 10, 0.04);
  min-width: 56px;
}
.stats-id-cell span {
  font-family: var(--mono);
  font-size: 0.62rem;
  color: var(--muted);
  letter-spacing: 0.12em;
}
.stats-id-cell strong {
  font-family: var(--display);
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--cp-yellow);
}
[data-theme="light"] .stats-id-cell strong { color: #6B5A00; }

.stats-body {
  flex: 1; min-height: 0; overflow-y: auto;
  display: grid;
  grid-template-columns: 1.4fr 1fr;
}
.stats-body::-webkit-scrollbar { width: 6px; }
.stats-body::-webkit-scrollbar-thumb { background: var(--cp-yellow); }

.stats-attrs, .stats-equip { padding: 1.2rem 1.4rem; }
.stats-attrs { border-right: 1px dashed var(--border); }
.stats-section-label {
  font-family: var(--mono);
  font-size: 0.72rem;
  color: var(--cp-cyan);
  letter-spacing: 0.15em;
  margin-bottom: 0.9rem;
}
[data-theme="light"] .stats-section-label { color: #006C7A; }

.attr-row { margin-bottom: 1.1rem; }
.attr-head {
  display: flex; align-items: center; gap: 0.5rem;
  margin-bottom: 0.4rem;
}
.attr-num {
  font-family: var(--mono);
  font-size: 0.72rem;
  color: var(--muted);
}
.attr-name {
  font-family: var(--display);
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--text-strong);
  flex: 1;
}
.attr-val {
  font-family: var(--display);
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--cp-yellow);
  text-shadow: 0 0 10px rgba(252,238,10,0.2);
}
[data-theme="light"] .attr-val { color: #6B5A00; text-shadow: none; }
.attr-val small {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--muted);
  margin-left: 0.1rem;
}
.attr-bar {
  height: 6px;
  background: rgba(252, 238, 10, 0.08);
  border: 1px solid var(--hairline);
  overflow: hidden;
  position: relative;
  margin-bottom: 0.45rem;
}
[data-theme="light"] .attr-bar { background: rgba(10,10,10,0.08); }
.attr-fill {
  height: 100%; width: 0;
  background: linear-gradient(90deg, var(--cp-yellow), var(--cp-cyan));
  box-shadow: 0 0 8px var(--cp-yellow);
  transition: width 1.1s cubic-bezier(0.65, 0, 0.35, 1);
}
[data-theme="light"] .attr-fill { background: linear-gradient(90deg, #B89A00, #006C7A); box-shadow: none; }
.attr-row.animated .attr-fill { width: var(--target-pct, 0%); }

.attr-desc {
  font-family: var(--mono);
  font-size: 0.78rem;
  color: var(--muted);
  margin-bottom: 0.45rem;
  letter-spacing: 0.02em;
}
.attr-perks { display: flex; flex-wrap: wrap; gap: 0.3rem; }
.attr-perks span {
  font-family: var(--mono);
  font-size: 0.7rem;
  padding: 0.2rem 0.5rem;
  background: rgba(252, 238, 10, 0.06);
  border: 1px solid var(--hairline);
  color: var(--cp-yellow);
}
[data-theme="light"] .attr-perks span { color: #5A4A00; background: rgba(212,184,0,0.14); border-color: rgba(10,10,10,0.14); }

.equip-slot {
  display: grid;
  grid-template-columns: 110px 1fr;
  gap: 0.6rem;
  padding: 0.5rem 0;
  border-bottom: 1px dashed var(--hairline);
  align-items: center;
}
.equip-key {
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--cp-cyan);
  letter-spacing: 0.12em;
}
[data-theme="light"] .equip-key { color: #006C7A; }
.equip-val {
  font-family: var(--display);
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--text-strong);
  letter-spacing: 0.02em;
}
.equip-val span { font-family: var(--mono); font-weight: 400; color: var(--muted); font-size: 0.75rem; }

.quest-card {
  border: 1px solid var(--cp-yellow);
  background: rgba(252, 238, 10, 0.05);
  padding: 0.85rem;
  margin-top: 0.4rem;
}
.quest-name {
  font-family: var(--display);
  font-size: 0.95rem;
  font-weight: 800;
  color: var(--cp-yellow);
  letter-spacing: 0.04em;
  margin-bottom: 0.3rem;
}
[data-theme="light"] .quest-name { color: #6B5A00; }
.quest-status {
  font-family: var(--mono);
  font-size: 0.74rem;
  color: var(--muted);
  margin-bottom: 0.5rem;
}
.quest-status em { color: var(--cp-cyan); font-style: normal; }
[data-theme="light"] .quest-status em { color: #006C7A; }
.quest-prog {
  display: flex; align-items: center; gap: 0.5rem;
  margin-bottom: 0.4rem;
}
.quest-prog-bar {
  flex: 1; height: 8px;
  background: rgba(10, 10, 10, 0.4);
  border: 1px solid var(--hairline);
  overflow: hidden;
}
[data-theme="light"] .quest-prog-bar { background: rgba(10, 10, 10, 0.06); }
.quest-prog-bar > div {
  height: 100%;
  background: linear-gradient(90deg, var(--cp-yellow), var(--cp-cyan));
}
.quest-prog span { font-family: var(--mono); font-size: 0.78rem; color: var(--cp-yellow); }
[data-theme="light"] .quest-prog span { color: #6B5A00; }
.quest-reward {
  font-family: var(--mono);
  font-size: 0.74rem;
  color: var(--muted);
}
.quest-reward span { color: var(--text); }

.stats-footer {
  display: flex; justify-content: space-between; gap: 1rem;
  padding: 0.7rem 1.4rem;
  border-top: 1px solid var(--border);
  background: rgba(0, 0, 0, 0.35);
  font-family: var(--mono);
  font-size: 0.72rem;
  color: var(--muted);
  letter-spacing: 0.08em;
  flex-shrink: 0;
}
.stats-footer strong { color: var(--cp-yellow); }
[data-theme="light"] .stats-footer { background: rgba(10,10,10,0.03); }
[data-theme="light"] .stats-footer strong { color: #6B5A00; }

@media (max-width: 800px) {
  .stats-body { grid-template-columns: 1fr; }
  .stats-attrs { border-right: none; border-bottom: 1px dashed var(--border); }
  .stats-identity { grid-template-columns: 1fr; }
  .stats-id-r { justify-content: start; }
  .stats-callsign { font-size: 1.5rem; }
  .stats-header-build { display: none; }
}

/* ╔═══════════════════════════════════════════════════════════╗
   ║  KONAMI TOAST                                             ║
   ╚═══════════════════════════════════════════════════════════╝ */
.konami-toast {
  position: fixed;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%) scale(0.8);
  z-index: 10001;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.25s, visibility 0.25s, transform 0.25s var(--ease);
  pointer-events: none;
}
.konami-toast.show {
  opacity: 1;
  visibility: visible;
  transform: translate(-50%, -50%) scale(1);
}
.konami-toast-inner {
  display: flex; align-items: center; gap: 1.2rem;
  padding: 1.4rem 2rem;
  background: #0A0A0A;
  border: 2px solid var(--cp-yellow);
  box-shadow: 0 0 0 4px rgba(252,238,10,0.2), 0 0 60px rgba(252,238,10,0.6);
}
.konami-glyph {
  font-size: 3rem;
  color: var(--cp-yellow);
  text-shadow: 0 0 30px var(--cp-yellow);
  animation: spin 2s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
.konami-line-1 {
  font-family: var(--display);
  font-size: 1.4rem;
  font-weight: 900;
  letter-spacing: 0.15em;
  color: var(--cp-yellow);
  text-shadow: 0 0 12px rgba(252,238,10,0.5);
}
.konami-line-2 {
  font-family: var(--mono);
  font-size: 0.8rem;
  color: var(--cp-cyan);
  margin-top: 0.3rem;
  letter-spacing: 0.1em;
}

/* full-page glitch storm during konami activation */
body.konami-active {
  animation: konamiPulse 0.4s ease-in-out;
}
body.konami-active::after {
  content: '';
  position: fixed; inset: 0;
  z-index: 10000;
  pointer-events: none;
  background:
    repeating-linear-gradient(0deg, rgba(252,238,10,0.04) 0 2px, transparent 2px 4px),
    linear-gradient(90deg, rgba(0,240,255,0.06), rgba(255,0,60,0.06));
  mix-blend-mode: screen;
  animation: konamiFade 1.6s ease-out forwards;
}
@keyframes konamiPulse {
  0%, 100% { filter: none; }
  20% { filter: hue-rotate(60deg) saturate(2); }
  40% { filter: hue-rotate(-60deg) saturate(2) contrast(1.4); }
  60% { filter: hue-rotate(120deg); }
}
@keyframes konamiFade {
  0% { opacity: 1; }
  100% { opacity: 0; }
}
