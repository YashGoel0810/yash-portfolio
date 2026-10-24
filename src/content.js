// All copy lives here. Facts come from Yash Portfolio/lib/content.ts and Yash's own notes —
// don't add a claim Yash can't back up in an interview.

const BASE = import.meta.env.BASE_URL

export const person = {
  name: 'Yash Goel',
  first: 'Yash',
  email: 'ygoel0810@gmail.com',
  linkedin: 'https://linkedin.com/in/yashgoel0810',
  resume: `${BASE}resume.pdf`, // drop the PDF into site/public/resume.pdf
  location: 'Gurgaon, India',
  // Typed under the name in the splash and hero, one after another.
  roles: ['software builder', 'full-stack in progress', 'problem fixer'],
}

export const hero = {
  line: 'Commerce student turned builder. I make software for messy, real-world business problems, and I learn something new with every one.',
  hint: 'my board, but go ahead and move things around',
  // Swap `src` for real photos: put files in /public and use `${BASE}me.jpg`.
  photos: [
    { id: 'p1', caption: 'the first build', pin: '#e0566a', tint: 'linear-gradient(135deg,#a8545f,#3d0f16)', x: 6, y: 8, r: -6 },
    { id: 'p2', caption: 'poker night', pin: '#f3c96b', tint: 'linear-gradient(135deg,#d9a38f,#7a1f2b)', x: 73, y: 6, r: 5 },
    { id: 'p3', caption: 'snooker, again', pin: '#7fb0e8', tint: 'linear-gradient(135deg,#6e2a33,#c97b6b)', x: 4, y: 58, r: 4 },
    { id: 'p4', caption: '2am, one more fix', pin: '#a98be0', tint: 'linear-gradient(135deg,#efc9b8,#8c3440)', x: 80, y: 60, r: -4 },
  ],
  note: {
    kicker: 'Off the clock',
    title: "Hi, I'm Yash. The weekend version.",
    lists: [
      { h: "Things I can't stop doing", items: ['Thinking up AI projects', 'Snooker, or any sport going', 'Hosting poker nights'] },
      { h: 'Habits', items: ['Figure out the whole problem', 'Write it down', "Ship before it's perfect"] },
    ],
  },
  sticky: { text: 'Build the boring fix first.', sub: 'my one rule' },
  pass: { from: 'MRT', fromCity: 'Meerut', to: 'GGN', toCity: 'Gurgaon', seat: '8A' },
}

// Story paragraph types itself in when it scrolls into view; the notes pop in after.
// Plain strings, plus marked phrases { t, mark } drawn with a hand-made marker.
// mark: 'hl-blue' | 'hl-yellow' | 'hl-pink' | 'hl-lilac' | 'circle' | 'wave' | 'underline'
export const story = {
  eyebrow: 'How I got here',
  parts: [
    'I started as a ',
    { t: 'commerce student', mark: 'hl-blue' },
    ', reading balance sheets and wondering why good businesses still got stuck. Then I got curious about ',
    { t: 'the fix', mark: 'circle' },
    ', not just the numbers. AI made building feel possible, so I ',
    { t: 'taught myself to make software', mark: 'wave' },
    ', ',
    { t: 'one real problem at a time', mark: 'hl-yellow' },
    '. Now I’m ',
    { t: 'working my way to full-stack', mark: 'hl-pink' },
    ', ',
    { t: 'and enjoying every bug on the way.', mark: 'underline' },
  ],
  notes: [
    { color: '#fbe7a1', tilt: -3, text: 'Commerce → code. Still a plot twist to my family.', sub: 'the short version' },
    { color: '#f8c9c0', tilt: 4, text: "Masters' Union, class of 2028. Every course runs on a live company brief.", sub: 'still in school, sort of' },
    {
      color: '#d6e6fb',
      tilt: -2,
      text: "I've worked with",
      chips: [
        { label: 'Real Ackres', c: '#5c1a24' },
        { label: 'D2C Insider', c: '#f0663a' },
        { label: 'YES Securities', c: '#0b4ea2' },
        { label: 'Housr', c: '#e0443b' },
        { label: 'SALS', c: '#111' },
      ],
    },
  ],
}

export const process = {
  eyebrow: 'How I work',
  title: 'Find the bottleneck. Build the smallest thing that fixes it.',
  steps: [
    { t: 'Figure out the whole problem', d: 'Watch the real work before proposing anything.' },
    { t: 'Name the bottleneck', d: "One sentence, or it isn't understood yet." },
    { t: 'Check what exists', d: 'Most problems already have a boring fix.' },
    { t: 'Build the thin version', d: 'The smallest thing that proves it works.' },
    { t: 'Run it on real data', d: "Demos lie. Real inputs don't." },
    { t: 'Write it down, hand it over', d: 'Documented, so it runs without me.' },
  ],
}

export const projects = {
  eyebrow: "Software I've built",
  title: 'Problems I got tired of watching.',
  sub: "Each one started as somebody's headache. Tap a name to see the whole build.",
  items: [
    {
      n: '01',
      title: 'Real Ackres',
      tag: 'Client · real estate · live',
      color: '#f3c96b',
      summary:
        'A real estate team was losing leads between ad dashboards, property portals and phone calls. I built their whole stack: the public website, the admin panel and a CRM where every enquiry lands, gets an owner, and stays visible until someone closes it.',
      built: [
        'Public website at realackres.com, with enquiry forms wired straight into the CRM',
        'CRM that pulls in leads from the site, Meta and Google ads, and three property portals',
        'Auto-assignment to agents, with escalation when nobody picks a lead up',
        'Daily digests and SLA alerts, so nothing goes cold quietly',
        'Admin panel for listings and the team, self-hosted behind Cloudflare',
      ],
      result: [
        { v: '6', l: 'lead sources, one inbox' },
        { v: '3', l: 'products: site, admin, CRM' },
      ],
    },
    {
      n: '02',
      title: 'Pitaari',
      tag: 'Silver gifting · store, back office, SRM',
      color: '#c0c6d0',
      summary:
        "Everything a silver gifting brand runs on, built as three connected pieces: the store customers see, the back office they don't, and a supplier relationship manager (SRM) for finding who makes it.",
      built: [
        "Storefront that prices every piece live off the day's silver rate",
        'Back office for silver lots, karigar jobs and an SEO desk',
        'SRM with 3,716 vendors from trade fairs and B2B lists, moved through enquiry, quote and scoring',
        'Quotes ranked side by side instead of buried in WhatsApp',
      ],
      result: [
        { v: '3,716', l: 'vendors in the SRM' },
        { v: '2,324', l: 'automated tests passing' },
      ],
    },
    {
      n: '03',
      title: 'Gifting board',
      tag: 'Catalogue + hamper builder',
      color: '#7fb0e8',
      summary:
        'Sixty-five supplier PDFs turned into one catalogue you can actually trust, with a hamper builder on top: give it a budget, get back hampers that feel worth more than they cost.',
      built: [
        'Pulled 3,677 products out of 65 supplier PDFs',
        'Every price linked to the page it came from, so anyone can check it',
        'Caught 295 wrong prices, including one listed at ₹95 that was really ₹6,000',
        'Hamper builder that tries combinations within a budget, say ₹2,000, and ranks them on perceived value',
      ],
      result: [
        { v: '3,677', l: 'products, one board' },
        { v: '295', l: 'price errors caught' },
      ],
    },
    {
      n: '04',
      title: 'Munshi',
      tag: 'WhatsApp assistant for traders',
      color: '#5fbf8f',
      summary:
        'A munshi for the WhatsApp age. It answers customer enquiries, checks stock, matches supplier prices and keeps the udhaar book, inside the app traders already live in.',
      built: [
        'Replies to enquiries and matches them against live stock',
        'Compares supplier prices on the fly',
        'Tracks udhaar so nobody has to',
        'Demo mode to show a trader in two minutes',
      ],
      result: [{ v: '38/38', l: 'tests passing' }],
    },
    {
      n: '05',
      title: 'Forge',
      tag: 'My job search, as a pipeline',
      color: '#a98be0',
      summary:
        'Job hunting is a pipeline too. Forge finds roles, tailors a CV for each one, checks it, and waits for my yes before anything goes out.',
      built: [
        'Four agents, each with one job',
        'A Kanban board tracking every application',
        'CVs tailored per role, then audited',
        'One human approval gate: nothing is sent without me',
      ],
      result: [{ v: '4', l: 'agents, 1 approval gate' }],
    },
    {
      n: '06',
      title: 'Jewellery shoot pipeline',
      tag: 'Client tool · product photos',
      color: '#e0566a',
      summary:
        'A phone photo goes in, a studio-grade shot comes out, and the jewellery itself is never redrawn. What the customer sees is what they get.',
      built: ['Studio backgrounds and lighting around the real piece', 'Jewellery pixels stay untouched', 'A quality gate before any image is used'],
      result: [{ v: '0', l: 'pixels of jewellery redrawn' }],
    },
    {
      n: '07',
      title: 'Lead scoring & routing',
      tag: 'n8n pipeline',
      color: '#3b7de0',
      summary: 'Leads from several places, scored and sorted, so the hot ones reach a rep first.',
      built: ['Pulls leads in from multiple sources', 'Scores each one', 'Routes high-intent leads to the right rep'],
      result: [{ v: 'Multi-source', l: 'leads, one queue' }],
    },
    {
      n: '08',
      title: 'AI bootcamps for D2C founders',
      tag: 'D2C Insider · with Snitch’s CTO',
      color: '#f0663a',
      summary:
        "Two cohorts teaching D2C founders to put AI to work in their own businesses, run in partnership with Snitch's CTO, with founders from brands including Blue Tokai and Nicobar.",
      built: ['Designed the program end to end', 'Ran both cohorts live'],
      result: [
        { v: '54', l: 'founders taught' },
        { v: '₹13.5L', l: 'program revenue' },
      ],
    },
  ],
}

export const journey = {
  eyebrow: 'The journey',
  title: 'Six years, five stops.',
  sub: 'From commerce to code. Scroll to walk the road.',
  stops: [
    { code: '01', icon: 'Gem', color: '#e0566a', title: 'Learning how a business runs', place: 'Family jewellery business', year: '2020 → now', stat: '₹10L+', statLabel: 'B2B deals negotiated',
      desc: 'Business analyst in our 75-year-old family business: inventory across 60+ SKUs, supplier terms and negotiations.' },
    { code: '02', icon: 'Salad', color: '#5fbf8f', title: 'First venture, in college', place: 'Healthy meals & fruit', year: 'College', stat: '₹2L', statLabel: 'revenue in 2 months',
      desc: 'A healthy-meal and fresh-fruit service for students. Two months, ₹2L in revenue, ₹1L in profit.' },
    { code: '03', icon: 'Landmark', color: '#7fb0e8', title: 'Learning how regulated work runs', place: 'YES Securities', year: '2025', stat: '4', statLabel: 'NISM certifications',
      desc: 'Growth officer intern on client servicing and compliant documentation. Certified in Equity Derivatives, Mutual Funds, Securities Operations & Risk, and Research Analyst.' },
    { code: '04', icon: 'GraduationCap', color: '#f0663a', title: 'Teaching founders to use AI', place: 'D2C Insider', year: '2026', stat: '54', statLabel: 'founders taught',
      desc: "Two AI bootcamp cohorts for D2C founders, run with Snitch's CTO. ₹13.5L in program revenue." },
    { code: '05', icon: 'Bot', color: '#f3c96b', title: 'Building software for real', place: 'Independent · Masters’ Union', year: '2026', stat: '8', statLabel: 'builds on this site',
      desc: 'A live CRM for a real estate team, a full stack for a silver gifting brand, and tools traders and jewellers can use.' },
  ],
}

export const ventures = {
  eyebrow: "What I've started",
  title: 'Ventures, labelled honestly.',
  sub: "Some made money, some are still being built. I'd rather say which is which.",
  items: [
    { name: 'Pitaari', kind: 'Silver gifting brand', badge: 'pre-launch', icon: 'Gift', tilt: -2, color: '#f6d6cf' },
    { name: 'Troofrnd', kind: 'LinkedIn content SaaS, with a co-founder', badge: 'building', icon: 'PenLine', tilt: 1.5, color: '#fbe7b5' },
    { name: 'Healthy meals & fruit', kind: 'College venture · ₹2L revenue, ₹1L profit in 2 months', badge: 'done', icon: 'Salad', tilt: -1, color: '#d4ecd9' },
    { name: 'Noctura Customs', kind: 'One-month dropshipping run · JDM accessories · ₹80K revenue', badge: 'done', icon: 'Car', tilt: 2, color: '#d9e6f5' },
    { name: 'Fuel station', kind: 'Fuel station venture', badge: 'running', icon: 'Fuel', tilt: -1.5, color: '#e3d7f3' },
  ],
}

// Grouped by the job each tool does. `si` = simple-icons export; `lucide` = fallback icon.
export const stack = {
  eyebrow: 'My toolkit',
  title: 'What I reach for, every day.',
  sub: 'Seventeen tools, grouped by the job they do. Hover one to see what it does for me.',
  groups: [
    {
      name: 'Build',
      tools: [
        { name: 'Claude Code', si: 'siClaude', line: 'My pair programmer for most of what I build.' },
        { name: 'Antigravity', lucide: 'Orbit', bg: '#3b6ef5', line: "Google's agent-first editor, for bigger refactors." },
        { name: 'Supabase', si: 'siSupabase', line: 'The database and auth behind my apps.' },
        { name: 'Vercel', si: 'siVercel', line: 'Where my sites go live.' },
        { name: 'Figma', si: 'siFigma', line: 'Rough layouts before anything gets built.' },
      ],
    },
    {
      name: 'Automate',
      tools: [
        { name: 'n8n', si: 'siN8n', line: 'Pipelines like lead scoring and routing.' },
        { name: 'Hermes', lucide: 'Feather', bg: '#2b2b2b', line: 'An open agent I run for always-on tasks.' },
        { name: 'Make', si: 'siMake', line: 'Quick no-code workflows.' },
        { name: 'Zapier', si: 'siZapier', line: 'Small links between apps.' },
      ],
    },
    {
      name: 'Create',
      tools: [
        { name: 'Higgsfield', lucide: 'Clapperboard', bg: '#c6f432', dark: true, line: 'AI image and video for campaigns.' },
        { name: 'kie.ai', lucide: 'WandSparkles', bg: '#6c3cf0', line: 'One API for image models. It painted the sky on this site.' },
        { name: 'ChatGPT', lucide: 'Sparkles', bg: '#10a37f', line: 'A second opinion on drafts and research.' },
        { name: 'Canva', lucide: 'Palette', bg: '#7d2ae8', line: 'Quick creative and social posts.' },
      ],
    },
    {
      name: 'Run',
      tools: [
        { name: 'Notion', si: 'siNotion', line: 'Briefs, docs and handover notes.' },
        { name: 'Slack', lucide: 'MessageSquare', bg: '#4a154b', line: 'Team chat, and where my alerts land.' },
        { name: 'Google Sheets', si: 'siGooglesheets', line: 'Inventory, leads and the numbers that matter.' },
        { name: 'Shopify', si: 'siShopify', line: 'Storefronts that need to sell tomorrow.' },
      ],
    },
  ],
}

export const contact = {
  title: ['Got a messy problem?', "Let's fix it."],
  sub: "Founders' offices, AI automation, product builds. Tell me what's broken and I'll tell you how I'd fix it.",
  keys: [
    { k: 'E', label: 'Email', icon: 'Mail', color: '#e0443b', note: 'Roles, projects, or just hi.', href: 'mailto:ygoel0810@gmail.com', copy: 'ygoel0810@gmail.com' },
    { k: 'L', label: 'LinkedIn', icon: 'Linkedin', color: '#0a66c2', note: 'The long version of my story.', href: 'https://linkedin.com/in/yashgoel0810' },
    { k: 'R', label: 'Resume', icon: 'ArrowDown', color: '#f3c96b', dark: true, note: 'My resume, one click away.', href: `${BASE}resume.pdf`, download: true },
  ],
}
