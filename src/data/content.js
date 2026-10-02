/* Programme facts, people, partners and the shared national-programme
   resources the international students are entitled to use.

   Sources are named per block. Anything that could not be verified from a
   document in SE_Program/ or from itc.edu.kh is listed in section 3 of
   ../../slide_content_prompts.md and must be confirmed before presenting. */

/* ---------------------------------------------------------------- people */

export const LEADERS = [
  { name: 'Dr. CHEA Samneang', role: 'Head, International Engineering School', icon: 'user', tone: 'navy' },
  { name: 'Mr. HOK TIN', role: 'Coordinator — Software Engineering', icon: 'user', tone: 'azure' },
  { name: 'Ms. CHAB Sreylen', role: 'Program Officer — Software Engineering', icon: 'user', tone: 'cyan' },
];

export const CONTACT = {
  /* A314 is the International Engineering School office and the admission
     office — one room, which is why there is no separate admissions line. */
  office: 'Room A314, Building A',
  officeNote: 'The International Engineering School office',
  facebook: 'facebook.com/itcinternationalengineeringschool',
  facebookUrl: 'https://www.facebook.com/itcinternationalengineeringschool/',
  site: 'itc.edu.kh/international-engineering-program-2026',
  siteUrl: 'https://itc.edu.kh/international-engineering-program-2026/',
  email: 'se.info@itc.edu.kh',
  phone: '(+855) 96 5 698 698',
  moodle: 'moodle.itc.edu.kh',
  address: 'PO Box 86, Russian Federation Blvd, Phnom Penh',
};

/* ------------------------------------------------- AI & the engineer (A2)
   Adapted from the national-programme deck's AI block, re-pointed at the SE
   course codes. The argument is unchanged; the evidence column is ours.     */

export const AI_STRONG = [
  'Boilerplate, CRUD APIs, UI components',
  'Unit tests · documentation · SQL',
  'Refactoring · translating between languages',
  'Debugging common errors · fast prototypes',
];

export const AI_HUMAN = [
  ['System architecture and large-scale design', 'warn'],
  ['Understanding what the business actually needs', 'warn'],
  ['Trade-offs: cost, speed, risk', 'warn'],
  ['Security and reliability decisions', 'warn'],
  ['Owning a production system when it breaks', 'stop'],
  ['Deciding what should be built at all', 'stop'],
];

/* Skills that survive the shift, mapped onto the SE course that teaches them. */
export const AI_MAP = [
  ['Data structures & algorithms', 'Data Structures & Algorithms', 'y2'],
  ['Requirements & analysis',      'Intro to Software Eng.',  'y2'],
  ['Databases',                    'Introduction to Database',       'y2'],
  ['Operating systems',            'Operating Systems',              'y2'],
  ['Software architecture',        'Software Architecture',   'y3'],
  ['Testing & quality',            'Automated Testing',     'y3'],
  ['Project & people judgement',   'IT Project Management',          'y3'],
  ['Shipping a real product',      'Capstone Project 1',   'y3'],
  ['Scale & reliability',          'Distributed Systems',            'y4'],
  ['Security & privacy',           'Data Security & Privacy',      'y4'],
  ['Cloud & delivery',             'Cloud Computing · DevOps',       'y4'],
  ['AI itself',                    'Machine Learning',               'y4'],
];

/* ------------------------------------------------------------ opportunity */

/* Partner universities. Logos are in public/img; the brochure and
   itc.edu.kh/international-engineering-program-2026 are the sources. */
export const UNIS = [
  { key: 'curtin',    name: 'Curtin University',      country: 'Australia · Malaysia', src: './img/uni_curtin.png',    note: 'Foundation pathway' },
  { key: 'ucm',       name: 'University of Central Missouri', country: 'United States', src: './img/uni_ucm.png',      note: '2+2 articulation · double degree' },
  { key: 'macquarie', name: 'Macquarie University',   country: 'Australia',  src: './img/uni_macquarie.png', note: '2+2 pathway' },
  { key: 'uga',       name: 'Université Grenoble Alpes', country: 'France',  src: './img/uni_uga.png',       note: 'Exchange' },
  { key: 'insa',      name: 'INSA Toulouse',          country: 'France',     src: './img/uni_insa.png',      note: 'Exchange' },
  { key: 'ensiie',    name: 'ENSIIE',                 country: 'France',     src: './img/uni_ensiie.png',    note: 'Exchange' },
  { key: 'namur',     name: 'Université de Namur',    country: 'Belgium',    src: './img/uni_namur.png',     note: 'Erasmus+' },
  { key: 'ganesha',   name: 'Universitas Pendidikan Ganesha', country: 'Indonesia', src: './img/uni_ganesha.png', note: 'Exchange' },
];

/* Real, dated outcomes from SE_Program/07Activities. No invented names. */
export const OUTCOMES = [
  {
    src: './img/se_ucm_offer.jpg',
    title: '2+2 to the United States',
    names: 'DIM Ponhakvontey · VAN Sotheany',
    detail: 'BSc Cybersecurity, University of Central Missouri · F-1 visa · Fall 2026 intake',
  },
  {
    src: './img/se_harbin_group.jpg',
    title: 'Harbin Institute of Technology',
    names: 'Eight Year 2 & Year 3 students',
    detail: 'HIT International Summer School 2026 — "Intelligent Frontiers, Computing Future"',
  },
  {
    src: './img/se_harbin_robot.jpg',
    title: 'Robotics tournament, Harbin',
    names: 'Certificate winner',
    detail: 'International Invitational Tournament of Intelligent Competitive Robots 2026',
  },
];

/* Activities our own students have already done — the "this is us" evidence. */
export const ACTIVITIES = [
  { src: './img/se_aba_a.jpg', cap: 'ABA Bank site visit',       sub: 'Inside a production engineering organisation' },
  { src: './img/se_cyber_a.jpg', cap: 'Cybersecurity workshop',  sub: 'Severity assessment, hands on laptops' },
  { src: './img/se_daikin_a.jpg', cap: 'Daikin Cambodia visit',  sub: 'Engineering outside software' },
  { src: './img/se_siemreap_a.jpg', cap: 'Siem Reap annual trip', sub: 'The cohort, off campus' },
];

/* -------------------------------------------- shared with the GIC department
   These belong to the national programme and are open to international
   students too. Keep the labelling honest on the slides: this is the
   department's network, not a list of SE international placements.          */

export const SHARED = [
  { icon: 'flask',  name: 'ViLa Lab',
    sub: 'Khmer NLP research, led by Dr. VALY Dona — the lab takes student research assistants' },
  { icon: 'shield', name: 'DADS Lab',
    sub: 'Data analysis and data security — open to student research assistants' },
  { icon: 'cpu',    name: 'Lab F306',
    sub: 'Free student access, high-speed internet, shared with the national programme' },
  { icon: 'rocket', name: 'Incubation Center',
    sub: 'Space, mentors and introductions to investors — running since February 2018' },
  { icon: 'users',  name: 'Student clubs',
    sub: 'Software · web · mobile · network. Join one this year, then teach one' },
  { icon: 'trophy', name: 'Competitions',
    sub: 'Huawei ICT APAC · Technovation · SmartStart. Entering is most of the trick' },
];

/* 39 organisations that have taken a GIC department intern, grouped by sector.
   Source: department placement records, October 2026 (74 placements).
   No student counts on the slide — breadth is the message, not ranking.      */
export const PLACEMENTS = [
  { sector: 'Software & product', c: 'azure', names: [
    'Saat Tech', 'Norm Solution', 'Biz Solution', 'Proseth Solution', 'Codingate Technology',
    'Geek Digital', 'ByteDC Solutions', 'One Fraternity', 'Vectorasoft', 'Allweb IT Company',
    'Web Essentials', 'Biplan Global', 'KMaker', 'GBS Technology', 'Authentic Digital Solution',
    'NEWWAVE Tech Foundry', 'VP.Start Technology',
  ]},
  { sector: 'Fintech & banking', c: 'good', names: [
    'FinTech Center of FSA', 'BongLoy Payment', 'National Bank of Cambodia',
    'Sathapana Bank', 'EKYC Solution',
  ]},
  { sector: 'AI', c: 'y4', names: ['Cam Ai', 'GateKhmer.ai Technology'] },
  { sector: 'Telecom, media & tech', c: 'cyan', names: [
    'CamMob', 'Laor Media', 'X-Water Technology', 'Pisnuk Auto Tech',
    'Prestige Alliance', 'Angel Boss', 'Memotechs',
  ]},
  { sector: 'Education & training', c: 'y3', names: [
    'Bamnang Academy', 'DICHI Academy', 'Golden Gate American School',
    'Institute of Technology of Cambodia',
  ]},
  { sector: 'Government & public', c: 'gold', names: [
    'Ministry of Industry, Science, Technology & Innovation',
    'Ministry of Education, Youth and Sport',
    'General Dept. of Customs & Excise', 'Techo Startup Center',
  ]},
];

/* --------------------------------------------------------------- careers */

export const JOBS = [
  ['Software Engineer', 'terminal'], ['Web Developer', 'globe'], ['Mobile Developer', 'phoneApp'],
  ['Software Architect', 'layers'],  ['QA / Test Engineer', 'bug'], ['DevOps Engineer', 'git'],
  ['Cloud Engineer', 'cloud'],       ['ML Engineer', 'brain'],      ['Security Engineer', 'shield'],
  ['IT Project Manager', 'gauge'],   ['Entrepreneur', 'rocket'],    ['IT Consultant', 'handshake'],
];

/* Local company logos carried over from the national-programme deck — they
   illustrate the market these graduates enter, not a placement claim. */
export const CO_LOGOS = [
  { name: 'Smart',            src: './img/ori_image15.png' },
  { name: 'Cellcard',         src: './img/ori_image2.png'  },
  { name: 'Wing',             src: './img/ori_image5.png'  },
  { name: 'TrueMoney',        src: './img/ori_image28.png' },
  { name: 'CSX',              src: './img/ori_image14.png' },
  { name: 'Cambodia Airports',src: './img/ori_image16.png' },
  { name: 'Sabay',            src: './img/ori_image9.png'  },
  { name: 'EZECOM',           src: './img/ori_image21.png' },
  { name: 'KhmerDev',         src: './img/ori_image38.png' },
  { name: 'Web Essentials',   src: './img/ori_image31.png' },
  { name: 'DMI',              src: './img/ori_image10.png' },
  { name: 'BLEND',            src: './img/ori_image1.png'  },
  { name: 'ALLWEB',           src: './img/ori_image4.png'  },
  { name: 'CamMob',           src: './img/ori_image22.png' },
];

/* ---------------------------------------------------------------- internship
   The rules the department already runs for GIC internships. Nothing here is
   specific to the international programme — that is the point of showing it:
   the same machinery, the same supervisors, the same defence, applied to this
   cohort when it gets there. Source: the national-programme deck, slides 16
   and 20, plus the department's own nomination-letter process.               */

export const INTERN_FACTS = [
  { k: 'When',            v: 'August – October', s: 'the window the department runs', icon: 'calendar' },
  { k: 'Internship 1',    v: 'min. 2 months',    s: '2 credits, after Year 4',        icon: 'briefcase' },
  { k: 'Final internship',v: 'min. 3 months',    s: '9 credits, in Year 5',           icon: 'cap' },
  { k: 'To graduate',     v: '12 weeks total',   s: 'across both internships',        icon: 'check' },
];

export const INTERN_SUPPORT = [
  ['The department shares its partner list', 'And you may arrange your own placement instead', 'good'],
  ['Every student gets a faculty supervisor', 'Assigned by the department, not negotiated', 'good'],
  ['We issue your nomination letter', 'Companies expect one — ask the coordinator early', 'warn'],
  ['No placement found?', 'The department assigns an in-school internship', 'warn'],
];

/* The long tail is the most useful fact in the whole placement record: most of
   these doors were opened by exactly one student, who asked. */
export const PLACEMENT_STATS = {
  placements: 74,
  orgs: 39,
  singletons: 23,
  line: '23 of those 39 took exactly one student — because one student asked.',
};

/* --------------------------------------------------------- the road ahead
   What each remaining year makes a student able to do, and what that unlocks.
   The courses are in curriculum.js; this is the "so what" beside them, written
   as capabilities rather than syllabus so a student can hear the difference
   between a course list and a career.

   `unlocks` is the one line to say out loud if time is short. */

export const FUTURE_READY = {
  3: {
    theme: 'Core Software Engineering',
    credits: 33,
    icon: 'layers',
    able: [
      'Build and deploy a web application end to end',
      'Ship a mobile app onto a real device',
      'Design a system before you code it — and defend the design',
      'Test automatically instead of by hand',
      'Run a project with a plan, a budget and a deadline',
    ],
    unlocks: 'Your first portfolio piece — the Capstone — and the vocabulary interviewers use.',
    watch: 'Internet Programming is 5 credits and Mobile App Development is 6. Two courses, a third of the year.',
  },
  4: {
    theme: 'Advanced Systems & Capstone',
    credits: 27,
    icon: 'server',
    able: [
      'Design systems that stay up when one machine does not',
      'Deploy to the cloud and automate the pipeline',
      'Build and evaluate a machine-learning model',
      'Treat security and privacy as a design constraint',
      'Carry a second capstone from idea to delivery',
    ],
    unlocks: 'The internship — and the three CV lines that currently move salaries most: cloud, DevOps, ML.',
    watch: 'The lightest teaching load since Year 1, on purpose. The capacity goes to the capstone and the placement search.',
  },
  5: {
    theme: 'Specialisation & Internship',
    credits: 23,
    icon: 'cap',
    able: [
      'Architect for change, not just for today',
      'Run a software process, not only write software',
      'Build security into the pipeline — Secure DevOps',
      'Test to a professional standard',
      'Spend months inside a real organisation, then defend it',
    ],
    unlocks: "The engineer's degree, and the choice between industry, a master's and going abroad.",
    watch: 'Four taught courses, then the final internship at 9 credits. No cohort has sat it yet.',
  },
};

/* Where the degree actually ends — the three doors, for the senior sessions. */
export const AFTER_DEGREE = [
  { icon: 'briefcase', t: 'Industry', s: 'Software, cloud, security, data — in Cambodia or on the partner network',
    note: 'The internship is usually the interview' },
  { icon: 'cap', t: "A master's degree", s: 'At ITC, or abroad through the partner universities',
    note: 'Your GPA and your English decide this one' },
  { icon: 'rocket', t: 'Your own thing', s: 'The Incubation Center takes student ventures',
    note: 'Entrepreneurship and Innovation is a Year 3 course for a reason' },
];
