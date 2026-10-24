// All copy lives here. Facts come from Yash Portfolio/lib/content.ts —
// don't add a claim Yash can't back up in an interview.

export const person = {
  name: 'Yash Goel',
  first: 'Yash',
  email: 'ygoel0810@gmail.com',
  linkedin: 'https://linkedin.com/in/yashgoel0810',
  resume: `${import.meta.env.BASE_URL}resume.pdf`, // drop the PDF into site/public/resume.pdf
  location: 'Gurgaon, India',
  // Typed under the name in the splash and hero, one after another.
  roles: ['AI builder', 'automation nerd', 'shop-floor kid'],
}

export const hero = {
  line: "I build AI agents and automations that take the busywork off real businesses. I learned how businesses run on the floor of my family's jewellery shop.",
  hint: "my board, but go ahead and move things around",
  // Swap `src` for real photos: put files in /public and use '/me.jpg'.
  photos: [
    { id: 'p1', caption: 'the family shop', pin: '#e0566a', tint: 'linear-gradient(135deg,#a8545f,#3d0f16)', x: 6, y: 8, r: -6 },
    { id: 'p2', caption: 'first Shopify sale', pin: '#f3c96b', tint: 'linear-gradient(135deg,#d9a38f,#7a1f2b)', x: 73, y: 6, r: 5 },
    { id: 'p3', caption: 'bootcamp cohort 01', pin: '#7fb0e8', tint: 'linear-gradient(135deg,#6e2a33,#c97b6b)', x: 4, y: 58, r: 4 },
    { id: 'p4', caption: 'agent stack, 2am', pin: '#a98be0', tint: 'linear-gradient(135deg,#efc9b8,#8c3440)', x: 80, y: 60, r: -4 },
  ],
  note: {
    kicker: 'Off the clock',
    title: "Hi, I'm Yash. The weekend version.",
    lists: [
      { h: "Things I can't stop doing", items: ['Cars', 'Jewellery design', 'Building side projects', 'Teaching people AI'] },
      { h: 'Habits', items: ["Ship before it's ready", 'Negotiate everything', 'Write it down'] },
    ],
  },
  sticky: { text: 'Build the boring fix first.', sub: 'my one rule' },
  pass: { from: 'MRT', fromCity: 'Meerut', to: 'GGN', toCity: 'Gurgaon', seat: '28A' },
}

export const projects = {
  eyebrow: "Things I've built",
  title: 'Problems I got tired of watching.',
  sub: 'Each one started as somebody\'s headache. Tap a name to see what I did about it.',
  items: [
    {
      n: '01',
      title: 'Real Ackres CRM',
      tag: 'Client work · real estate',
      color: '#f3c96b',
      summary: 'A real estate team was losing leads between ad dashboards, property portals and phone calls. I built them one CRM where every enquiry lands, gets an owner, and stays visible until someone closes it.',
      built: [
        'Leads flow in on their own from the website, Meta and Google ads, and three property portals',
        'Each lead is assigned to an agent automatically, and escalates if nobody picks it up',
        'Daily digests and SLA alerts, so nothing goes cold quietly',
        'The public website and admin panel sit on top of the same system',
      ],
      result: [
        { v: '6', l: 'lead sources, one inbox' },
        { v: 'Live', l: 'at realackres.com' },
      ],
    },
    {
      n: '02',
      title: 'Gifting Board',
      tag: 'Pitaari · product catalogue',
      color: '#7fb0e8',
      summary: 'Sixty-five supplier PDFs turned into one catalogue you can actually trust, with every price traced back to the page it came from.',
      built: [
        'Pulled 3,677 products out of 65 supplier PDFs',
        'Linked each price to its source page so anyone can check it',
        'Caught 295 wrong prices, including one listed at ₹95 that was really ₹6,000',
      ],
      result: [
        { v: '3,677', l: 'products, one board' },
        { v: '295', l: 'price errors caught' },
      ],
    },
    {
      n: '03',
      title: 'Pitaari sourcing CRM',
      tag: 'Pitaari · supplier hunt',
      color: '#e0443b',
      summary: 'Finding the right supplier used to mean a hundred phone calls. Now it is a pipeline: find, enquire, compare quotes, score, decide.',
      built: [
        '3,716 vendors gathered from trade fairs and B2B lists',
        'Each vendor enriched, then moved through enquiry, quote and scoring',
        'Quotes ranked side by side instead of buried in WhatsApp',
      ],
      result: [{ v: '3,716', l: 'vendors in the pipeline' }],
    },
    {
      n: '04',
      title: 'Munshi',
      tag: 'WhatsApp assistant for traders',
      color: '#5fbf8f',
      summary: "A munshi for the WhatsApp age. It answers customer enquiries, checks stock, matches supplier prices and keeps track of udhaar, inside the app traders already live in.",
      built: [
        'Replies to enquiries and matches them against live stock',
        'Compares supplier prices on the fly',
        'Keeps the udhaar book so nobody has to',
        'Demo mode for showing it to a trader in two minutes',
      ],
      result: [{ v: '38/38', l: 'tests passing' }],
    },
    {
      n: '05',
      title: 'Forge',
      tag: 'My job search, on autopilot',
      color: '#a98be0',
      summary: 'Job hunting is a pipeline too. Forge finds roles, tailors a CV for each one, checks it, and waits for my yes before anything goes out.',
      built: [
        'Four agents, each with one job',
        'A Kanban board that tracks every application',
        'CVs tailored per role, then audited before use',
        'One human approval gate: nothing is sent without me',
      ],
      result: [{ v: '4', l: 'agents, 1 approval gate' }],
    },
    {
      n: '06',
      title: 'Pitaari commerce',
      tag: 'Silver gifting · store + back office',
      color: '#c0c6d0',
      summary: 'The store customers see, and the back office they don\'t: silver lots, karigar jobs and prices that move with the silver rate.',
      built: [
        'Storefront priced live off the day\'s silver rate',
        'Back office for silver lots and karigar job tracking',
        'An SEO desk to manage what search engines see',
      ],
      result: [{ v: 'Live', l: 'silver-rate pricing' }],
    },
    {
      n: '07',
      title: 'Hamper curation engine',
      tag: 'Pitaari · gifting',
      color: '#f0a27a',
      summary: 'Tell it a budget, say ₹2,000, and it puts together hampers that feel worth more than they cost.',
      built: [
        'Tries combinations from the catalogue within the budget',
        'Ranks them on how much value the customer feels, not just price',
      ],
      result: [{ v: '₹2,000', l: 'budget in, hampers out' }],
    },
    {
      n: '08',
      title: 'Jewellery shoot pipeline',
      tag: 'Client tool · product photos',
      color: '#e0566a',
      summary: 'A phone photo goes in, a studio-grade shot comes out, and the jewellery itself is never redrawn. What the customer sees is what they get.',
      built: [
        'Studio backgrounds and lighting around the real piece',
        'The jewellery pixels stay untouched',
        'A quality gate before any image is used',
      ],
      result: [{ v: '0', l: 'pixels of jewellery redrawn' }],
    },
    {
      n: '09',
      title: 'AI bootcamps for D2C founders',
      tag: 'D2C Insider · 2 cohorts',
      color: '#f0663a',
      summary: 'Two cohorts teaching D2C founders to put AI to work in their own businesses, with founders from brands including Blue Tokai and Nicobar.',
      built: ['Designed the program end to end', 'Ran both cohorts live'],
      result: [
        { v: '54', l: 'founders taught' },
        { v: '₹13.5L', l: 'program revenue' },
      ],
    },
    {
      n: '10',
      title: 'Lead scoring & sales routing',
      tag: 'n8n pipeline',
      color: '#3b7de0',
      summary: 'Leads from several places, scored and sorted, so the hot ones reach a rep first.',
      built: ['Pulls leads in from multiple sources', 'Scores each one', 'Routes high-intent leads to the right rep'],
      result: [{ v: 'Multi-source', l: 'leads, one queue' }],
    },
    {
      n: '11',
      title: 'My agent stack',
      tag: 'The system behind my week',
      color: '#f3c1b5',
      summary: "Agents with their own scopes, skills and memory. One runs my job search, one handles sourcing for a gifting brand, one runs content. I don't build the model; I build the system around it.",
      built: ['Separate scope, skills and memory per agent', 'n8n for the plumbing between them', 'Written down so someone else could run it'],
      result: [{ v: '3', l: 'agents at work' }],
    },
    {
      n: '12',
      title: 'Noctura Customs',
      tag: 'JDM accessories · 2023',
      color: '#c9a27a',
      summary: 'My first brand, run solo: the store, the product shots and the ads.',
      built: ['Built the Shopify store', 'Shot the product creative', 'Ran five Instagram campaigns'],
      result: [
        { v: '₹80K', l: 'revenue' },
        { v: '5', l: 'campaigns' },
      ],
    },
  ],
}

export const journey = {
  eyebrow: 'The journey',
  title: 'Six years, five stops.',
  sub: 'From a jewellery counter in 2020 to building agents. Scroll to walk the road.',
  stops: [
    { code: '01', icon: 'Gem', color: '#e0566a', title: 'Where I learned business', place: 'Family jewellery retail', year: '2020 → now', stat: '₹10L+', statLabel: 'B2B deals negotiated',
      desc: 'A 75-year-old family business. I handle inventory across 60+ SKUs, supplier terms, and the kind of negotiation that happens face to face.' },
    { code: '02', icon: 'Car', color: '#c9a27a', title: 'My first store, built solo', place: 'Noctura Customs', year: '2023', stat: '₹80K', statLabel: 'revenue, 5 campaigns',
      desc: 'A JDM auto-accessories brand. I built the Shopify store, shot the creative, and ran five Instagram campaigns myself.' },
    { code: '03', icon: 'Landmark', color: '#7fb0e8', title: 'Learning how regulated work runs', place: 'YES Securities', year: '2025', stat: '4', statLabel: 'NISM certifications',
      desc: 'Growth officer intern, working on client servicing and compliant documentation. Certified in Equity Derivatives, Mutual Funds, Securities Operations & Risk, and Research Analyst.' },
    { code: '04', icon: 'GraduationCap', color: '#f0663a', title: 'Teaching founders to use AI', place: 'D2C Insider', year: '2026', stat: '54', statLabel: 'founders taught',
      desc: 'Designed and ran two AI bootcamp cohorts for D2C founders, including Blue Tokai and Nicobar. ₹13.5L in program revenue.' },
    { code: '05', icon: 'Bot', color: '#f3c96b', title: 'Building my own agents', place: 'Independent · Masters’ Union', year: '2026', stat: '3', statLabel: 'agents put to work',
      desc: 'Sourcing and hamper curation agents for a gifting brand, and an n8n pipeline that scores leads and routes them to reps.' },
  ],
}

export const ventures = {
  eyebrow: "What I'm building",
  title: 'Ventures, labelled honestly.',
  sub: "Two are still being built and haven't launched. I'd rather say so.",
  items: [
    { name: 'Pitaari', kind: 'Silver gifting brand', badge: 'pre-launch', icon: 'Gift', tilt: -2, color: '#f6d6cf' },
    { name: 'Troofrnd', kind: 'LinkedIn content SaaS', badge: 'building', icon: 'PenLine', tilt: 1.5, color: '#fbe7b5' },
    { name: 'Noctura Customs', kind: 'JDM accessories · D2C', badge: 'shipped', icon: 'Car', tilt: -1, color: '#d9e6f5' },
    { name: 'D2C Insider bootcamp', kind: 'AI program for founders', badge: 'live', icon: 'GraduationCap', tilt: 2, color: '#e3d7f3' },
  ],
}

// `si` = simple-icons export name; `lucide` = fallback icon when the brand isn't in simple-icons.
export const stack = {
  eyebrow: 'My toolkit',
  title: 'What I reach for, every day.',
  sub: 'Twelve tools, from the first idea to the shipped workflow. Hover one to see what it does for me.',
  tools: [
    { name: 'Claude Code', si: 'siClaude', verb: 'Build', line: 'My go-to partner for thinking problems through.' },
    { name: 'n8n', si: 'siN8n', verb: 'Automate', line: 'Pipelines like lead scoring and sales routing.' },
    { name: 'Shopify', si: 'siShopify', verb: 'Sell', line: 'Built and ran the Noctura Customs store on it.' },
    { name: 'Notion', si: 'siNotion', verb: 'Organise', line: 'Briefs, docs and handover notes.' },
    { name: 'Figma', si: 'siFigma', verb: 'Sketch', line: 'Rough layouts before anything gets built.' },
    { name: 'Supabase', si: 'siSupabase', verb: 'Store', line: 'The database behind side projects.' },
    { name: 'Vercel', si: 'siVercel', verb: 'Ship', line: 'Where my sites go live.' },
    { name: 'ChatGPT', lucide: 'Sparkles', bg: '#10a37f', verb: 'Think', line: 'A second opinion on drafts and research.' },
    { name: 'Google Sheets', si: 'siGooglesheets', verb: 'Track', line: 'Inventory, leads and the numbers that matter.' },
    { name: 'Canva', lucide: 'Palette', bg: '#7d2ae8', verb: 'Create', line: 'Campaign creative and social posts.' },
    { name: 'Make', si: 'siMake', verb: 'Connect', line: 'Quick no-code workflows.' },
    { name: 'Zapier', si: 'siZapier', verb: 'Glue', line: 'Small links between apps.' },
  ],
}

// Story paragraph: plain strings, plus marked phrases { t, mark } drawn with a hand-made marker.
// mark: 'hl-blue' | 'hl-yellow' | 'hl-pink' | 'hl-lilac' | 'circle' | 'wave' | 'underline'
export const story = {
  eyebrow: 'How I got here',
  parts: [
    'I grew up on the floor of my family\u2019s ',
    { t: '75-year-old jewellery shop', mark: 'hl-blue' },
    ', ',
    { t: 'haggling with suppliers', mark: 'circle' },
    ' before I was old enough to have opinions. Then I spent a summer teaching D2C founders to use AI, and noticed ',
    { t: 'the gap was never the tech.', mark: 'wave' },
    ' It was someone willing to ',
    { t: 'sit with the messy problem', mark: 'hl-yellow' },
    ' and ',
    { t: 'build the thing that fixes it', mark: 'hl-pink' },
    '. ',
    { t: "That's been my job ever since.", mark: 'underline' },
  ],
  notes: [
    { kind: 'text', color: '#fbe7a1', tilt: -3, text: "Masters' Union, class of 2028. Every course runs on a live company brief.", sub: 'still in school, sort of' },
    { kind: 'text', color: '#f8c9c0', tilt: 4, text: '5+ years in the family business. ₹10L+ deals, 60+ SKUs.', sub: 'retail ops' },
    { kind: 'chips', color: '#d6e6fb', tilt: -2, text: "I've worked with", chips: [
      { label: "Masters' Union", c: '#111' },
      { label: 'D2C Insider', c: '#f0663a' },
      { label: 'YES Securities', c: '#0b4ea2' },
      { label: 'Housr', c: '#e0443b' },
      { label: 'SALS', c: '#5c1a24' },
    ] },
  ],
}

export const process = {
  eyebrow: 'How I work',
  title: 'Find the bottleneck. Build the smallest thing that fixes it.',
  steps: [
    { t: 'Sit with the problem', d: 'Watch the actual work before proposing anything.' },
    { t: 'Name the bottleneck', d: "One sentence, or it isn't understood yet." },
    { t: 'Check what exists', d: 'Most problems already have a boring fix.' },
    { t: 'Build the thin version', d: 'The smallest thing that proves it works.' },
    { t: 'Run it on real data', d: "Demos lie. Real inputs don't." },
    { t: 'Hand it over', d: 'Document it so it survives without me.' },
  ],
}

export const contact = {
  title: ['Got a messy problem?', "Let's fix it."],
  sub: "Founders' offices, AI automation, growth. Tell me what's broken and I'll tell you how I'd fix it.",
  keys: [
    { k: 'E', label: 'Email', icon: 'Mail', color: '#e0443b', note: 'Roles, projects, or just hi.', href: 'mailto:ygoel0810@gmail.com', copy: 'ygoel0810@gmail.com' },
    { k: 'L', label: 'LinkedIn', icon: 'Linkedin', color: '#0a66c2', note: 'The long version of my story.', href: 'https://linkedin.com/in/yashgoel0810' },
    { k: 'R', label: 'Resume', icon: 'ArrowDown', color: '#f3c96b', dark: true, note: 'My resume, one click away.', href: `${import.meta.env.BASE_URL}resume.pdf`, download: true },
  ],
}
