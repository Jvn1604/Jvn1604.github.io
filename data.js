/* ═══════════════════════════════════════════════════════════════
   Jeeven · DETAIL VIEW DATA + ROUTING
   ═══════════════════════════════════════════════════════════════
   Edit any entry below to update its detail page.
   Add new entries by following the same shape.

   IMAGE PATHS expect this structure (PNG/JPG, missing files
   gracefully show "no media" placeholders):

     assets/media/
       projects/<slug>/cover.jpg
       projects/<slug>/01-<name>.jpg, 02-…, 03-…
       experience/<slug>/cover.jpg + 01-…
       education/<slug>/cover.jpg + certificate.jpg
       achievements/<slug>/cover.jpg + certificate.jpg

   See ASSETS_STRUCTURE.md for the full naming convention.
   ═══════════════════════════════════════════════════════════════ */

window.JEEVEN_DETAILS = {

  /* ╔══ PROJECTS ══════════════════════════════════════════════ */

  'project/escape-the-debt': {
    type: 'project',
    label: 'PROJECT · FEATURED',
    title: 'Escape The Debt',
    subtitle: 'Unity 6 URP · First-Person Serious Game · UTeM FYP',
    cover: 'assets/media/projects/escape-the-debt/cover.jpg',
    desc: 'A first-person serious-game prototype that teaches Malaysian undergrads (20–25 y/o) about debt management. Players guide <strong>Kayal</strong> through three escape-room levels: the PTPTN Office, a Credit Card Dungeon, and a BNPL Shopping Trap — solving puzzles around compounding interest, repayment paths and stress management.',
    meta: {
      STATUS:  'In production',
      ENGINE:  'Unity 6 URP',
      ROLE:    'Solo developer',
      TYPE:    'FYP · Serious Game',
      TIME:    '~8 months',
      RELEASE: 'Mid 2026',
    },
    tags: ['Unity 6', 'C#', 'Serious Game', 'FYP', 'Solo Dev', 'First-Person', 'URP', 'Blender', 'Figma'],
    media: [
      { type: 'video', embed: 'https://www.youtube.com/embed/nqNphGQWkg8',
        thumb: 'https://img.youtube.com/vi/nqNphGQWkg8/hqdefault.jpg',
        caption: 'Gameplay Demo — full walkthrough on YouTube' },
      { type: 'image', src: 'assets/media/projects/escape-the-debt/01-main-menu.jpg',  caption: 'Main Menu — Duelyst-inspired holographic aesthetic' },
      { type: 'image', src: 'assets/media/projects/escape-the-debt/02-kayal-organizer.jpg', caption: 'Kayal Organizer — inventory modal with 4 colour-coded tabs' },
      { type: 'image', src: 'assets/media/projects/escape-the-debt/03-hud-v3.jpg',     caption: 'HUD V3 — stress gradient bar, day pill, event feed' },
      { type: 'image', src: 'assets/media/projects/escape-the-debt/04-ptptn-office.jpg', caption: 'Level 1 — PTPTN Office puzzle room' },
      { type: 'image', src: 'assets/media/projects/escape-the-debt/05-credit-card.jpg', caption: 'Level 2 — Credit Card Dungeon (interest = closing walls)' },
      { type: 'image', src: 'assets/media/projects/escape-the-debt/06-bnpl-trap.jpg',  caption: 'Level 3 — BNPL Shopping Trap' },
    ],
    sections: [
      { label: '// THE PROBLEM', heading: 'Why this game exists', body:
        `<p>Malaysian undergraduates aged 20–25 carry an outsized share of national consumer debt — PTPTN study loans with compounding interest, credit cards picked up casually after graduation, and the BNPL ("Buy Now Pay Later") boom that turned every checkout into a 4-payment trap. Financial literacy gets taught in slides; debt is felt in real life. The gap is well documented and growing.</p>
         <p>How do you teach <em>felt</em> consequences without making someone actually default? You simulate it.</p>` },
      { label: '// THE APPROACH', heading: 'Three levels of debt', body:
        `<p>Players guide <em>Kayal</em> — a fresh graduate — through three escape-room levels, each modelling a real Malaysian debt mechanic. The escape room format works because it forces the player to <em>understand</em> the system to progress; you can't button-mash through compound interest.</p>
         <ul>
           <li><strong>Level 1 — PTPTN Office:</strong> Shredded document reconstruction → balance scale repayment-path choice → compound interest simulation device → debt-meter-linked failure state.</li>
           <li><strong>Level 2 — Credit Card Dungeon:</strong> Players experience compounding interest as a literal closing wall — the longer you take to solve, the smaller the room gets.</li>
           <li><strong>Level 3 — BNPL Shopping Trap:</strong> Multiple "harmless" 4-instalment commitments stack into an unmanageable monthly burn rate.</li>
         </ul>` },
      { label: '// CORE SYSTEMS', heading: '5 game systems shipped', stats: [
          { label: 'METER 01', val: 'Income' },
          { label: 'METER 02', val: 'Debt' },
          { label: 'METER 03', val: 'Pending Instalments' },
          { label: 'SYS 01',   val: 'DebtTicker' },
          { label: 'SYS 02',   val: 'Kayal Organizer' },
          { label: 'SCENE',    val: 'Results / Defense' },
      ]},
      { label: '// TECH STACK', heading: 'Tools used', techs: ['Unity 6 URP', 'C#', 'Blender', 'Figma', 'Visual Studio 2022', 'GitHub', 'Serious Game Design'] },
      { label: '// LEARNINGS', heading: 'What I learned', body:
        `<ul>
           <li>Educational defense layer matters more than puzzle design — without the Results scene tying mechanics to real consequences, players just remember the puzzles.</li>
           <li>Iterative prototyping methodology (4 puzzle revisions on Level 1 alone) was non-negotiable for getting the difficulty curve right.</li>
           <li>Solo full-stack game dev forces hard scope cuts. Three levels with deep mechanics beats five shallow ones.</li>
         </ul>` },
    ],
    actions: [
      { label: 'WATCH GAMEPLAY', href: 'https://youtu.be/nqNphGQWkg8', icon: 'play-circle', primary: true },
      { label: 'VIEW REPO',      href: 'https://github.com/Jvn1604',   icon: 'github' },
    ],
  },

  'project/blind-test-system': {
    type: 'project',
    label: 'PROJECT',
    title: 'Blind Test System',
    subtitle: 'Django · QA Automation · Deployed at Top Glove',
    cover: 'assets/media/projects/blind-test-system/cover.jpg',
    desc: 'An internal Django web application that replaced a fully paper-based QA blind-testing process at <strong>Top Glove Sdn. Bhd.</strong> — the world\'s largest rubber glove manufacturer.',
    meta: {
      STATUS:  'Deployed',
      ROLE:    'Sole developer',
      CONTEXT: 'Industrial Training',
      TIME:    '5 months',
      USERS:   'QA operators + supervisors',
    },
    tags: ['Python', 'Django', 'MySQL', 'Bootstrap 5', 'Internal Tool', 'Industrial'],
    media: [
      { type: 'image', src: 'assets/media/projects/blind-test-system/01-dashboard.jpg',  caption: 'Supervisor dashboard' },
      { type: 'image', src: 'assets/media/projects/blind-test-system/02-test-form.jpg',  caption: 'Operator blind-test form (tablet-optimised)' },
      { type: 'image', src: 'assets/media/projects/blind-test-system/03-results.jpg',    caption: 'Results &amp; report export' },
    ],
    sections: [
      { label: '// THE PROBLEM', heading: 'Paper QA at scale doesn\'t scale', body:
        `<p>Top Glove's QA team ran blind product tests entirely on paper — operators manually recorded results, supervisors keyed them into Excel, and reports were assembled by hand at month-end. Each step lost data, introduced typos, and slowed feedback to the production line.</p>` },
      { label: '// THE APPROACH', heading: 'One source of truth', body:
        `<p>I built an internal Django app accessible from the QA floor. Blind tests are configured once by a supervisor, served to operators as randomised forms (preventing bias), and results feed straight into MySQL with full audit logging.</p>
         <ul>
           <li>Configurable test templates (any product line, any test type)</li>
           <li>Randomised sample order to enforce true blind testing</li>
           <li>Real-time dashboards with filterable reports</li>
           <li>Role-based access — operators see only what they need</li>
           <li>Bootstrap 5 front-end designed for tablet use on the factory floor</li>
         </ul>` },
      { label: '// IMPACT', heading: 'Measurable outcome', stats: [
          { label: 'PROCESS',     val: 'Paper → Digital' },
          { label: 'REPORT TIME', val: 'Days → Minutes' },
          { label: 'DEPLOYED',    val: 'QA Department' },
          { label: 'STILL_USED',  val: 'Yes' },
      ]},
      { label: '// TECH STACK', heading: 'Tools used', techs: ['Python', 'Django', 'MySQL', 'Bootstrap 5', 'HTML/CSS', 'JavaScript'] },
      { label: '// LEARNINGS', heading: 'What I learned', body:
        `<ul>
           <li>Real users care whether tomorrow's shift is easier than today's. Every UX decision came from sitting with operators for a morning.</li>
           <li>Industrial deployment means designing for unreliable WiFi, gloved fingers, and shift handovers.</li>
           <li>The hardest part of automating a manual process is convincing the people who run it that you understand it. Walk-throughs &gt; specs.</li>
         </ul>` },
    ],
    actions: [
      { label: 'ASK FOR DETAILS', href: '#contact', icon: 'mail', primary: true },
    ],
  },

  'project/biometric-attendance': {
    type: 'project',
    label: 'PROJECT · DIPLOMA FYP',
    title: 'Biometric Attendance & Payroll System',
    subtitle: 'PHP / MySQL · Hardware + Software · Politeknik Mersing',
    cover: 'assets/media/projects/biometric-attendance/cover.jpg',
    desc: 'Final-year project for the Diploma in Digital Technology. Automated employee attendance via fingerprint scanning, with overtime and monthly payroll computation in an admin dashboard.',
    meta: {
      STATUS:  'Shipped (Diploma FYP)',
      ROLE:    'Solo developer',
      CONTEXT: 'Politeknik Mersing · Diploma',
      YEAR:    '2022',
      GRADE:   'Dean\'s List semester',
    },
    tags: ['PHP', 'MySQL', 'HTML', 'Fingerprint', 'Hardware', 'Payroll'],
    media: [
      { type: 'image', src: 'assets/media/projects/biometric-attendance/01-fingerprint.jpg', caption: 'Fingerprint scanner integration' },
      { type: 'image', src: 'assets/media/projects/biometric-attendance/02-dashboard.jpg',   caption: 'Admin payroll dashboard' },
    ],
    sections: [
      { label: '// SUMMARY', heading: 'What it does', body:
        `<p>Operators clock in/out by fingerprint. The system calculates overtime, generates monthly payroll, and lets an admin filter and export records.</p>` },
      { label: '// TECH STACK', heading: 'Tools used', techs: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript', 'Fingerprint Module'] },
    ],
    actions: [
      { label: 'ASK FOR DETAILS', href: '#contact', icon: 'mail', primary: true },
    ],
  },

  'project/svc-global-website': {
    type: 'project',
    label: 'PROJECT · WORK',
    title: 'SVC Global Company Website',
    subtitle: 'HTML · CSS · JavaScript · Astro broadcast affiliate',
    cover: 'assets/media/projects/svc-global-website/cover.jpg',
    desc: 'Designed and shipped a professional company website for an Astro broadcast affiliate. Focused on brand presentation, service comms and lead capture.',
    meta: { STATUS: 'Shipped', ROLE: 'Designer + Dev', CONTEXT: 'SVC Global (Marketing Exec)', YEAR: '2022—2023' },
    tags: ['HTML', 'CSS', 'JavaScript', 'Marketing', 'Brand'],
    media: [
      { type: 'image', src: 'assets/media/projects/svc-global-website/01-homepage.jpg', caption: 'Homepage' },
    ],
    sections: [
      { label: '// SUMMARY', heading: 'What it does', body:
        `<p>A multi-page corporate site with services overview, brand showcase and contact form — built from scratch without a CMS.</p>` },
      { label: '// TECH STACK', heading: 'Tools used', techs: ['HTML', 'CSS', 'JavaScript', 'Figma'] },
    ],
    actions: [
      { label: 'ASK FOR DETAILS', href: '#contact', icon: 'mail', primary: true },
    ],
  },

  'project/library-management-system': {
    type: 'project',
    label: 'PROJECT · ACADEMIC',
    title: 'Library Management System',
    subtitle: 'C / C++ · UTeM Workshop I',
    cover: 'assets/media/projects/library-management-system/cover.jpg',
    desc: 'Console-based Library Borrowing System in C/C++. Full CRUD, Admin + User modules, automated due-date tracking, overdue penalties and hardened input validation.',
    meta: { STATUS: 'Shipped (Course)', ROLE: 'Solo developer', CONTEXT: 'UTeM Workshop I', YEAR: '2024' },
    tags: ['C', 'C++', 'CRUD', 'Console App'],
    media: [
      { type: 'image', src: 'assets/media/projects/library-management-system/01-console.jpg', caption: 'Console UI' },
    ],
    sections: [
      { label: '// SUMMARY', heading: 'What it does', body:
        `<p>Two-role console app (Admin / User) for managing a library catalog: book CRUD, member CRUD, borrow/return flow, overdue penalty calculation, and rugged input validation against bad data.</p>` },
      { label: '// TECH STACK', heading: 'Tools used', techs: ['C', 'C++', 'File I/O'] },
    ],
    actions: [
      { label: 'ASK FOR DETAILS', href: '#contact', icon: 'mail', primary: true },
    ],
  },

  'project/wheel-of-consequences': {
    type: 'project',
    label: 'PROJECT · VR · TEAM',
    title: 'Wheel of Consequences — VR Quiz Game',
    subtitle: 'Unity · SteamVR · UTeM Workshop II',
    cover: 'assets/media/projects/wheel-of-consequences/cover.jpg',
    desc: 'VR quiz game built in a 4-person team. As <strong>Game Designer</strong>, I owned phase-based progression, branching UI, scoring + penalty logic, and full UI/UX flowboards across 7 knowledge categories.',
    meta: { STATUS: 'Shipped (Course)', ROLE: 'Game Designer', TEAM: '4 members', CONTEXT: 'UTeM Workshop II', YEAR: '2024' },
    tags: ['Unity', 'C#', 'SteamVR', 'VR', 'Game Design', 'Team Project'],
    media: [
      { type: 'image', src: 'assets/media/projects/wheel-of-consequences/01-vr-setup.jpg', caption: 'In-VR view' },
      { type: 'image', src: 'assets/media/projects/wheel-of-consequences/02-quiz-ui.jpg',  caption: 'Quiz UI flow' },
    ],
    sections: [
      { label: '// MY ROLE', heading: 'Game Designer', body:
        `<p>Owned the design pillars: phase progression, branching UI, scoring &amp; penalty logic, and end-to-end UX flowboards for all 7 categories. Coordinated handoff with engineers and artists.</p>` },
      { label: '// TECH STACK', heading: 'Tools used', techs: ['Unity', 'C#', 'SteamVR', 'Figma'] },
    ],
    actions: [
      { label: 'ASK FOR DETAILS', href: '#contact', icon: 'mail', primary: true },
    ],
  },

  /* ╔══ EXPERIENCE ════════════════════════════════════════════ */

  'experience/top-glove': {
    type: 'experience',
    label: 'EXPERIENCE · INDUSTRIAL TRAINING',
    title: 'Top Glove Sdn. Bhd.',
    subtitle: 'Industrial Training Intern · QA Department · Mar — Jul 2022',
    cover: 'assets/media/experience/top-glove/cover.jpg',
    desc: 'Five-month industrial training at <strong>Top Glove</strong> — the world\'s largest rubber glove manufacturer. Posted to the QA Department.',
    meta: {
      ROLE:     'QA Intern',
      LOCATION: 'Top Glove HQ',
      DURATION: 'Mar — Jul 2022',
      OUTCOME:  'Shipped internal system',
    },
    tags: ['Internship', 'QA', 'Python', 'Django', 'MySQL', 'Industrial'],
    media: [
      { type: 'image', src: 'assets/media/experience/top-glove/01-qa-lab.jpg',  caption: 'QA department' },
      { type: 'image', src: 'assets/media/experience/top-glove/02-system.jpg',  caption: 'Blind Test System (the deliverable)' },
    ],
    sections: [
      { label: '// THE BRIEF', heading: 'What I was asked to do', body:
        `<p>Two-fold: (1) day-to-day QA database data entry, reporting and maintenance; (2) build a tool that automated the blind-testing workflow the team ran on paper.</p>` },
      { label: '// DELIVERABLE', heading: 'Blind Test System', body:
        `<p>Django + MySQL + Bootstrap 5 internal app, deployed to the QA department. Replaced a fully paper-based process; see the <em>Blind Test System</em> project page for the deep dive.</p>` },
      { label: '// WHAT I LEARNED', heading: 'Production reality', body:
        `<ul>
           <li>Real users will tell you what's broken — if you sit with them long enough.</li>
           <li>Enterprise constraints (security, role separation, audit trails) shape design more than features do.</li>
           <li>Five-month internships are long enough to ship; short enough to require ruthless scoping.</li>
         </ul>` },
    ],
    actions: [
      { label: 'VIEW PROJECT', href: '#detail=project/blind-test-system', icon: 'external-link', primary: true },
    ],
  },

  'experience/svc-global': {
    type: 'experience',
    label: 'EXPERIENCE · FULL-TIME',
    title: 'SVC Global',
    subtitle: 'Marketing Executive · Astro broadcast affiliate · Oct 2022 — 2023',
    cover: 'assets/media/experience/svc-global/cover.jpg',
    desc: 'Marketing Executive role at SVC Global — an Astro broadcast affiliate. Owned marketing operations and built the company website from scratch.',
    meta: { ROLE: 'Marketing Executive', DURATION: 'Oct 2022 — 2023', OUTPUT: 'Website + campaigns' },
    tags: ['Marketing', 'Web Dev', 'HTML/CSS/JS', 'Brand'],
    media: [
      { type: 'image', src: 'assets/media/experience/svc-global/01-website.jpg', caption: 'Company website' },
    ],
    sections: [
      { label: '// SCOPE', heading: 'What I owned', body:
        `<ul>
           <li>Built and shipped the company website (HTML, CSS, JS) from scratch</li>
           <li>Managed marketing operations and client communications</li>
           <li>Coordinated promotional campaigns</li>
         </ul>` },
    ],
    actions: [{ label: 'VIEW PROJECT', href: '#detail=project/svc-global-website', icon: 'external-link', primary: true }],
  },

  'experience/svc-tuisyen': {
    type: 'experience',
    label: 'EXPERIENCE · PART-TIME',
    title: 'SVC Tuisyen Centre',
    subtitle: 'Admin & IT Assistant',
    cover: 'assets/media/experience/svc-tuisyen/cover.jpg',
    desc: 'Part-time admin and IT support role at SVC Tuisyen Centre.',
    meta: { ROLE: 'Admin · IT Assistant' },
    tags: ['Admin', 'IT Support'],
    media: [],
    sections: [
      { label: '// SCOPE', heading: 'What I did', body:
        `<ul>
           <li>Maintained student records, scheduling and fee-collection systems</li>
           <li>Day-to-day IT support using office software systems</li>
         </ul>` },
    ],
    actions: [],
  },

  /* ╔══ EDUCATION ═════════════════════════════════════════════ */

  'education/utem': {
    type: 'education',
    label: 'EDUCATION · UNIVERSITY · ONGOING',
    title: 'B. Information Technology (Game Technology)',
    subtitle: 'Universiti Teknikal Malaysia Melaka · UTeM · 2023 — present',
    cover: 'assets/media/education/utem/cover.jpg',
    desc: 'Year 3, Semester 2 of the <strong>Bachelor of Information Technology, specialising in Game Technology</strong> at UTeM. Currently in production on the Final Year Project.',
    meta: {
      DEGREE:      'B. IT (Game Technology)',
      INSTITUTION: 'UTeM',
      YEAR:        'Year 3 · Sem 2',
      DURATION:    '2023 — present',
      STATUS:      'Ongoing',
    },
    tags: ['University', 'Game Tech', 'FYP', 'UTeM'],
    media: [
      { type: 'image', src: 'assets/media/education/utem/01-campus.jpg', caption: 'UTeM campus' },
    ],
    sections: [
      { label: '// COURSEWORK', heading: 'Key courses', body:
        `<ul>
           <li>Game Design Fundamentals · Workshop I &amp; II</li>
           <li>Unity / C# game programming</li>
           <li>Database systems (MySQL · Oracle)</li>
           <li>Software engineering · Linux systems · Networking (Cisco Packet Tracer)</li>
         </ul>` },
      { label: '// FYP', heading: 'Final Year Project', body:
        `<p>Solo-shipping <em>Escape The Debt</em>, a Unity 6 URP serious game on Malaysian student debt management. See the dedicated project page for the deep dive.</p>` },
    ],
    actions: [{ label: 'VIEW FYP', href: '#detail=project/escape-the-debt', icon: 'gamepad-2', primary: true }],
  },

  'education/politeknik-mersing': {
    type: 'education',
    label: 'EDUCATION · DIPLOMA · GRADUATED',
    title: 'Diploma in Digital Technology',
    subtitle: 'Politeknik Mersing · Graduated 2022',
    cover: 'assets/media/education/politeknik-mersing/cover.jpg',
    desc: 'Graduated with a Diploma in Digital Technology from Politeknik Mersing, achieving <strong>Dean\'s List × 2 consecutive semesters</strong>.',
    meta: {
      DEGREE:      'Diploma · Digital Tech',
      INSTITUTION: 'Politeknik Mersing',
      GRADUATED:   '2022',
      HONOURS:     'Dean\'s List × 2',
    },
    tags: ['Diploma', 'Dean\'s List', 'Politeknik Mersing'],
    media: [
      { type: 'image', src: 'assets/media/education/politeknik-mersing/01-campus.jpg',       caption: 'Politeknik Mersing' },
      { type: 'image', src: 'assets/media/education/politeknik-mersing/deans-list-cert.jpg', caption: 'Dean\'s List certificate' },
    ],
    sections: [
      { label: '// COURSEWORK', heading: 'Focus areas', body:
        `<ul>
           <li>Programming fundamentals (C, PHP, JavaScript)</li>
           <li>Database systems · Web development</li>
           <li>Hardware integration (sensors, fingerprint modules)</li>
           <li>Final-year project: Biometric Attendance &amp; Payroll System</li>
         </ul>` },
      { label: '// HONOURS', heading: 'Dean\'s List × 2', body:
        `<p>Top-tier academic standing for two consecutive semesters.</p>` },
    ],
    actions: [{ label: 'VIEW DIPLOMA FYP', href: '#detail=project/biometric-attendance', icon: 'external-link', primary: true }],
  },

  /* ╔══ ACHIEVEMENTS ══════════════════════════════════════════ */

  'achievement/deans-list': {
    type: 'achievement',
    label: 'ACHIEVEMENT · ACADEMIC',
    title: 'Dean\'s List × 2',
    subtitle: 'Politeknik Mersing · 2021 — 2022',
    cover: 'assets/media/achievements/deans-list/cover.jpg',
    desc: 'Top-tier academic standing for two consecutive semesters in the Diploma of Digital Technology programme.',
    meta: { TYPE: 'Academic Honour', INSTITUTION: 'Politeknik Mersing', SEMESTERS: '2 consecutive', YEARS: '2021 — 2022' },
    tags: ['Academic', 'Dean\'s List', 'GPA > 3.50'],
    media: [
      { type: 'image', src: 'assets/media/achievements/deans-list/certificate.jpg', caption: 'Dean\'s List certificate' },
    ],
    sections: [
      { label: '// CRITERIA', heading: 'What it means', body:
        `<p>Awarded for sustained top-tier academic performance — typically a GPA above 3.50 with no failed subjects, across the full semester load.</p>` },
    ],
    actions: [{ label: 'VIEW EDUCATION', href: '#detail=education/politeknik-mersing', icon: 'graduation-cap', primary: true }],
  },

  'achievement/top-glove-shipped': {
    type: 'achievement',
    label: 'ACHIEVEMENT · INDUSTRY',
    title: 'QA System Deployed at Top Glove',
    subtitle: 'Industrial Training · 2022',
    cover: 'assets/media/achievements/top-glove-shipped/cover.jpg',
    desc: 'Built and deployed an internal Blind Test System (Django + MySQL + Bootstrap 5) that automated a fully manual QA workflow for the world\'s largest rubber glove manufacturer.',
    meta: { TYPE: 'Production Deployment', YEAR: '2022', CONTEXT: 'Industrial Training' },
    tags: ['Internship', 'Production', 'Django', 'MySQL'],
    media: [],
    sections: [
      { label: '// IMPACT', heading: 'What changed', body:
        `<p>Manual paper QA → digital system used by operators and supervisors. Report assembly time cut from days to minutes. System still in use by the QA department.</p>` },
    ],
    actions: [{ label: 'VIEW PROJECT', href: '#detail=project/blind-test-system', icon: 'external-link', primary: true }],
  },

  'achievement/wheel-of-consequences': {
    type: 'achievement',
    label: 'ACHIEVEMENT · TEAM',
    title: 'VR Game — Wheel of Consequences',
    subtitle: 'UTeM Workshop II · 4-person team · 2024',
    cover: 'assets/media/achievements/wheel-of-consequences/cover.jpg',
    desc: 'Game Designer role on a SteamVR edutainment game across 7 knowledge categories — designed branching UI, phase progression, scoring & penalty logic.',
    meta: { ROLE: 'Game Designer', TEAM: '4', YEAR: '2024', CONTEXT: 'UTeM Workshop II' },
    tags: ['Game Design', 'SteamVR', 'Team Project'],
    media: [],
    sections: [
      { label: '// MY CONTRIBUTION', heading: 'Design ownership', body:
        `<p>Owned the phase-based progression, branching UI design, scoring + penalty logic, and the UI/UX flowboards for all 7 categories.</p>` },
    ],
    actions: [{ label: 'VIEW PROJECT', href: '#detail=project/wheel-of-consequences', icon: 'external-link', primary: true }],
  },

  'achievement/escape-the-debt': {
    type: 'achievement',
    label: 'ACHIEVEMENT · LIVE',
    title: 'Escape The Debt — FYP in Production',
    subtitle: 'UTeM Final Year Project · 2025 — 2026',
    cover: 'assets/media/achievements/escape-the-debt/cover.jpg',
    desc: 'Solo-shipping a Unity 6 URP serious game teaching debt management to Malaysian undergrads. 3 levels (PTPTN · Credit Card · BNPL), 5 game systems, custom HUD &amp; inventory.',
    meta: { ROLE: 'Solo Dev', ENGINE: 'Unity 6 URP', STATUS: 'In production', CONTEXT: 'UTeM · FYP' },
    tags: ['Unity 6', 'Solo Dev', 'FYP', 'Serious Game'],
    media: [],
    sections: [
      { label: '// PROGRESS', heading: 'Where it stands', body:
        `<p>Core systems shipped (HUD V3, Kayal Organizer, three meters). Currently iterating on Level 1 puzzle design and the Results/Defense scene. Target completion: mid-2026.</p>` },
    ],
    actions: [{ label: 'VIEW PROJECT', href: '#detail=project/escape-the-debt', icon: 'gamepad-2', primary: true }],
  },

};

/* ─────────── DETAIL VIEW RENDERER + ROUTER ─────────── */
(function() {
  const DETAILS = window.JEEVEN_DETAILS;
  const view    = document.getElementById('detail-view');
  if (!view) return;

  const breadcrumbEl = document.getElementById('dv-breadcrumb');
  const labelEl      = document.getElementById('dv-hero-label');
  const titleEl      = document.getElementById('dv-title');
  const subtitleEl   = document.getElementById('dv-subtitle');
  const stageEl      = document.getElementById('dv-media-stage');
  const captionEl    = document.getElementById('dv-media-caption');
  const thumbsEl     = document.getElementById('dv-media-thumbs');
  const coverEl      = document.getElementById('dv-cover');
  const descEl       = document.getElementById('dv-desc');
  const metaEl       = document.getElementById('dv-meta');
  const tagsEl       = document.getElementById('dv-tags');
  const actionsEl    = document.getElementById('dv-actions');
  const sectionsEl   = document.getElementById('dv-sections');
  const footerREl    = document.getElementById('dv-footer-r');
  const prevBtn      = document.getElementById('dv-prev');
  const nextBtn      = document.getElementById('dv-next');
  const backBtn      = document.getElementById('dv-back');
  const footerBackBtn = document.getElementById('dv-footer-back');

  const typeLabels = {
    project:     'Projects',
    experience:  'Experience',
    education:   'Education',
    achievement: 'Accolades',
  };
  const sectionAnchors = {
    project:     '#projects',
    experience:  '#experience',
    education:   '#education',
    achievement: '#achievements',
  };

  let currentSlug = null;

  function siblings(slug) {
    const [type] = slug.split('/');
    return Object.keys(DETAILS).filter(k => k.startsWith(type + '/'));
  }
  function neighbour(slug, dir) {
    const sibs = siblings(slug);
    const i = sibs.indexOf(slug);
    const j = i + dir;
    return j >= 0 && j < sibs.length ? sibs[j] : null;
  }

  function img(srcOrEmpty, altText, emptyHint) {
    if (!srcOrEmpty) return `<div class="dv-stage-empty"><i data-lucide="image-off"></i><strong>${emptyHint || 'NO IMAGE'}</strong></div>`;
    return `<img src="${srcOrEmpty}" alt="${altText || ''}" loading="lazy"
      onerror="this.outerHTML='<div class=&quot;dv-stage-empty&quot;><i data-lucide=&quot;image-off&quot;></i><strong>IMAGE NOT FOUND</strong><code>${(srcOrEmpty||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/\"/g,'&quot;')}</code></div>'; if(window.lucide)lucide.createIcons();" />`;
  }

  function renderMediaStage(item) {
    if (!item) {
      stageEl.innerHTML = `<div class="dv-stage-empty"><i data-lucide="image-off"></i><strong>NO MEDIA YET</strong><code>add files under assets/media/…/</code></div>`;
      captionEl.textContent = '';
      return;
    }
    if (item.type === 'video') {
      stageEl.innerHTML = `<iframe src="${item.embed}" title="${item.caption || 'Gameplay'}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>`;
    } else {
      stageEl.innerHTML = img(item.src, item.caption, 'IMAGE MISSING');
    }
    stageEl.innerHTML += `
      <div class="dv-stage-hud-tl">REC ●</div>
      <div class="dv-stage-hud-tr">MEDIA // ${item.type.toUpperCase()}</div>
      <div class="dv-stage-hud-br">Jeeven</div>`;
    captionEl.textContent = item.caption || '';
  }

  function renderThumbs(media) {
    thumbsEl.innerHTML = '';
    media.forEach((m, i) => {
      const btn = document.createElement('button');
      btn.className = 'dv-thumb' + (i === 0 ? ' active' : '');
      btn.type = 'button';
      const thumbSrc = m.thumb || (m.type === 'image' ? m.src : '');
      btn.innerHTML = thumbSrc
        ? `<img src="${thumbSrc}" alt="" loading="lazy" onerror="this.outerHTML='<div class=&quot;dv-thumb-empty&quot;><i data-lucide=&quot;image-off&quot;></i></div>';if(window.lucide)lucide.createIcons();">`
        : `<div class="dv-thumb-empty"><i data-lucide="image-off"></i></div>`;
      if (m.type === 'video') {
        btn.innerHTML += `<div class="dv-thumb-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div>`;
      }
      btn.addEventListener('click', () => {
        thumbsEl.querySelectorAll('.dv-thumb').forEach(t => t.classList.remove('active'));
        btn.classList.add('active');
        renderMediaStage(m);
        if (window.lucide) lucide.createIcons();
      });
      thumbsEl.appendChild(btn);
    });
  }

  function renderSection(sec) {
    let inner = '';
    if (sec.body) inner += sec.body;
    if (sec.techs) {
      inner += `<div class="dv-techs">${sec.techs.map(t => `<span>${t}</span>`).join('')}</div>`;
    }
    if (sec.stats) {
      inner += `<div class="dv-stats-grid">${sec.stats.map(s =>
        `<div class="dv-stat"><div class="dv-stat-label">${s.label}</div><div class="dv-stat-val">${s.val}</div></div>`
      ).join('')}</div>`;
    }
    return `<div class="dv-section">
      <div class="dv-section-label">${sec.label}</div>
      <h3>${sec.heading}</h3>
      ${inner}
    </div>`;
  }

  function populate(slug) {
    const data = DETAILS[slug];
    if (!data) return false;
    currentSlug = slug;

    const typeName = typeLabels[data.type] || data.type;
    const typeAnchor = sectionAnchors[data.type] || '#';

    breadcrumbEl.innerHTML =
      `<span class="crumb" data-go-main>Home</span>
       <span class="sep">›</span>
       <span class="crumb" data-go-section="${typeAnchor}">${typeName}</span>
       <span class="sep">›</span>
       <span class="crumb current">${data.title}</span>`;

    labelEl.textContent  = data.label || '';
    titleEl.textContent  = data.title;
    subtitleEl.textContent = data.subtitle || '';

    coverEl.innerHTML = data.cover
      ? img(data.cover, data.title + ' cover', 'NO COVER')
      : `<div class="dv-cover-empty">${data.title.split(' ').slice(0,2).join(' ')}</div>`;
    descEl.innerHTML = data.desc || '';

    metaEl.innerHTML = Object.entries(data.meta || {}).map(([k,v]) =>
      `<div class="dv-meta-row"><span class="dv-meta-key">${k}</span><span class="dv-meta-val">${v}</span></div>`
    ).join('');

    tagsEl.innerHTML = (data.tags || []).map(t => `<span>${t}</span>`).join('');

    actionsEl.innerHTML = (data.actions || []).map(a =>
      `<a class="dv-action${a.primary ? ' primary' : ''}" href="${a.href}" ${a.href.startsWith('http') ? 'target="_blank" rel="noopener"' : ''}>
         <i data-lucide="${a.icon}"></i>${a.label}
       </a>`
    ).join('');

    sectionsEl.innerHTML = (data.sections || []).map(renderSection).join('');

    // media
    if (data.media && data.media.length > 0) {
      renderMediaStage(data.media[0]);
      renderThumbs(data.media);
    } else {
      renderMediaStage(null);
      thumbsEl.innerHTML = '';
    }

    // prev/next footer hint
    const prev = neighbour(slug, -1);
    const next = neighbour(slug, +1);
    footerREl.innerHTML = '';
    if (prev) footerREl.innerHTML += `<a class="dv-pn" href="#detail=${prev}"><i data-lucide="chevron-left"></i><span><span class="dv-pn-dir">PREV</span> <span class="dv-pn-title">${DETAILS[prev].title}</span></span></a>`;
    if (next) footerREl.innerHTML += `<a class="dv-pn" href="#detail=${next}"><span><span class="dv-pn-dir">NEXT</span> <span class="dv-pn-title">${DETAILS[next].title}</span></span><i data-lucide="chevron-right"></i></a>`;

    prevBtn.disabled = !prev;
    nextBtn.disabled = !next;
    prevBtn.dataset.target = prev || '';
    nextBtn.dataset.target = next || '';

    if (window.lucide) lucide.createIcons();
    view.scrollTop = 0;
    return true;
  }

  function openDetail(slug) {
    if (!populate(slug)) return;
    view.classList.add('open');
    view.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (location.hash !== '#detail=' + slug) {
      history.pushState({ detail: slug }, '', '#detail=' + slug);
    }
    // re-init AOS in case any animations are inside
    if (window.AOS) window.AOS.refresh?.();
  }
  function closeDetail(pushHash = true) {
    view.classList.remove('open');
    view.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    currentSlug = null;
    if (pushHash && location.hash.startsWith('#detail=')) {
      history.pushState({}, '', location.pathname + location.search);
    }
  }

  // bindings
  document.querySelectorAll('[data-detail]').forEach(el => {
    el.addEventListener('click', e => {
      // don't trigger if user clicked a link/button inside the card
      if (e.target.closest('a, button')) return;
      e.preventDefault();
      openDetail(el.dataset.detail);
    });
  });

  backBtn?.addEventListener('click', () => closeDetail());
  footerBackBtn?.addEventListener('click', () => closeDetail());

  prevBtn?.addEventListener('click', () => {
    const t = prevBtn.dataset.target;
    if (t) openDetail(t);
  });
  nextBtn?.addEventListener('click', () => {
    const t = nextBtn.dataset.target;
    if (t) openDetail(t);
  });

  // breadcrumb clicks
  breadcrumbEl?.addEventListener('click', e => {
    const goMain = e.target.closest('[data-go-main]');
    const goSect = e.target.closest('[data-go-section]');
    if (goMain) {
      closeDetail();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (goSect) {
      closeDetail();
      const id = goSect.dataset.goSection.replace('#','');
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 50);
    }
  });

  // any "AVAILABLE TO HIRE" inside detail view → close + scroll to contact
  document.querySelectorAll('[data-go-contact]').forEach(b => {
    b.addEventListener('click', () => {
      closeDetail();
      setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 50);
    });
  });

  // keyboard: Esc closes, ← / → navigate
  document.addEventListener('keydown', e => {
    if (!view.classList.contains('open')) return;
    if (e.key === 'Escape') closeDetail();
    if (e.key === 'ArrowLeft'  && prevBtn?.dataset.target) openDetail(prevBtn.dataset.target);
    if (e.key === 'ArrowRight' && nextBtn?.dataset.target) openDetail(nextBtn.dataset.target);
  });

  // hash routing — handle direct landing + back/forward
  function handleHash() {
    const m = location.hash.match(/^#detail=(.+)$/);
    if (m && DETAILS[m[1]]) {
      openDetail(m[1]);
    } else if (view.classList.contains('open')) {
      closeDetail(false);
    }
  }
  window.addEventListener('popstate', handleHash);
  window.addEventListener('hashchange', handleHash);
  // intercept any internal #detail=… link clicks (footer prev/next, related cards inside detail)
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#detail="]');
    if (!a) return;
    e.preventDefault();
    const slug = a.getAttribute('href').replace('#detail=', '');
    openDetail(slug);
  });

  // landing on a direct #detail=... URL
  if (location.hash.startsWith('#detail=')) {
    // wait for boot loader, then open
    setTimeout(handleHash, 100);
  }
})();
