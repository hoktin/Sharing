/* ---------------------------------------------------------------------------
   Curriculum: "4_Years_Curriculum.xlsx" — sheet `2026_5_Years_Program`,
   Prepared 2026, saved 24 Sep. That sheet supersedes `5_year_curriculum.xlsx`
   (22 Sep) and is the authoritative source; every course code, title, credit
   value and named lecturer below is copied from it verbatim.

   What changed when the source was switched:
     - Year 1 seminar codes  PDFI11SPI/SPII -> PDFI11PSI/PSII
     - Year 2 codes          SEY21… and SEY22… -> FPI21… and FPI22…
     - DevOps                SEY42DevO      -> SEY42DO
     - Capstone 2            SEY42CCP       -> SEY42CCP2
     - Secure DevOps         SEY51SD        -> SEY51SDO
     - Machine Learning      Dr. VALY Dona  -> Dr. PHAUK Sokkhey
     - Data Structures       Mrs. SEAK Leng -> Ms. SEAK Leng
   Credits and course titles are unchanged in every case.

   Two lecturer names are spelled two ways inside the workbook itself. The deck
   uses the spelling that appears more often, and the variant is noted here so
   nobody "corrects" it back:
     - Dr. MAY Raksmey   (Engineering History) vs "Dr. MAY Reaksmey" (IISS)
     - Dr. PHAUK Sokkhey (Eng. Maths I, Linear Algebra) vs "Dr. Phauk Sokhey" (ML)

   Per-year credits are RE-SUMMED from the course rows rather than taken from
   the workbook's own TOTAL cells, because the workbook's "TOTAL YEAR 1" cell
   reads 30.0 while its own Y1 courses add to 33.0 (and its grand total 146.0
   therefore under-counts by 3.0). See "Items to verify" in
   ../../slide_content_prompts.md.
                   Course rows   Summed credits   Workbook total
     Year 1            13             33.0             30.0  <- disagrees
     Year 2            12             33.0             33.0
     Year 3             9             33.0             33.0
     Year 4             9             27.0             27.0
     Year 5             4 + 2 int.    23.0             23.0
     Programme         47 + 2        149.0            146.0  <- disagrees
--------------------------------------------------------------------------- */

/* [code, title, credits, icon, lecturer, highlight?] */

export const Y1S1 = [
  ['PDFI11ECS',  'Effective Communication Skills', 2.0, 'users',   'Mr. SIEN Bross'],
  ['PDFI11EMI',  'Engineering Mathematics I',      3.5, 'sigma',   'Dr. PHAUK Sokkhey'],
  ['PDFI11PC',   'Programming C++',                3.0, 'code',    'Mr. HOK Tin'],
  ['PDFI11PEI',  'Physics for Engineering I',      3.0, 'flask',   'Mr. LONG Sovann'],
  ['PDFI11ICT5', 'Information & Communication Tech', 2.0, 'wifi',  'Mr. HENG Rathpisey'],
  ['PDFI11PSI',  'Project and Seminar I',          1.5, 'rocket',  'Mr. TIM Hoksong'],
];
export const Y1S2 = [
  ['PDFI11EMII', 'Engineering Mathematics II',     3.5, 'sigma',   'Dr. HAS Sothea'],
  ['PDFI11CE',   'Chemistry for Engineering',      3.0, 'flask',   'Dr. HOUNG Peany'],
  ['PDFI11PEII', 'Physics for Engineering II',     3.0, 'flask',   'Mr. LONG Sovann'],
  ['PDFI11WRS',  'Writing and Research Skills',    2.0, 'file',    'Ms. CHHE Sreyvatnak'],
  ['PDFI11CT',   'Critical Thinking Skills',       3.0, 'brain',   'Ms. CHHE Sreyvatnak'],
  ['PDFI11EH',   'Engineering History',            2.0, 'book',    'Dr. MAY Raksmey'],
  ['PDFI11PSII', 'Project and Seminar II',         1.5, 'rocket',  'Mr. TIM Hoksong'],
];

export const Y2S1 = [
  ['FPI21PDI',   'Programming Design & Implementation', 3.5, 'code',     'Mr. BOU Channa', true],
  ['FPI21ISE',   'Introduction to Software Engineering', 3.0, 'layers',  'Mr. TAL Tongsreng', true],
  ['FPI21FCDS',  'Fundamental Concepts of Data Security', 3.0, 'shield', 'Mr. PICH Reatrey'],
  ['FPI21IISS',  'Integrating Indigenous Science & STEM', 3.5, 'globe',  'Dr. MAY Raksmey'],
  ['FPI21UIUX',  'UI / UX Design',                  2.0, 'palette',  'Mr. OL Phearun'],
  ['FPI21PSIII', 'Project and Seminar III',         1.5, 'rocket',   'Dr. SRANG Sarot'],
];
export const Y2S2 = [
  ['FPI22DSA',   'Data Structures and Algorithms',  3.0, 'sigma',    'Ms. SEAK Leng', true],
  ['FPI22OOP',   'Object Oriented Programming',     3.0, 'code',     'Mr. HOK Tin', true],
  ['FPI22ID',    'Introduction to Database',        3.0, 'database', 'Mr. NOP Phearum', true],
  ['FPI22OS',    'Operating Systems',               3.0, 'terminal', 'Mr. HENG Rathpisey'],
  ['FPI22LASE',  'Linear Algebra & Statistics',     3.0, 'chart',    'Dr. PHAUK Sokkhey'],
  ['FPI22PSIV',  'Project and Seminar IV',          1.5, 'rocket',   'Dr. SRANG Sarot'],
];

export const Y3S1 = [
  ['SEY31IP',    'Internet Programming',            5.0, 'globe',    'Mr. CHUN Thavorac', true],
  ['SEY31SSA',   'Software System Architecture',    3.0, 'layers',   'Mr. CHUN Thavorac', true],
  ['SEY31SEC',   'Software Engineering Concepts',   3.0, 'clipboard','Mr. TAL Tongsreng'],
  ['SEY31NSD',   'Networks System Design',          3.0, 'network',  'Dr. KUY Movsun'],
  ['SEY31ITPM',  'IT Project Management',           3.0, 'gauge',    'Mr. TAL Tongsreng'],
];
export const Y3S2 = [
  ['SEY32MAD',   'Mobile Application Development',  6.0, 'phoneApp', 'Mr. HOK Tin', true],
  ['SEY32CCP1',  'Capstone Computing Project 1',    4.0, 'rocket',   'Mr. SOK Kimheng', true],
  ['SEY32AST',   'Automated Software Testing',      3.0, 'bug',      'Mr. TAL Tongsreng'],
  ['SEY32EI',    'Entrepreneurship and Innovation', 3.0, 'bulb',     'Ms. CHOEUN Chakriya'],
];

export const Y4S1 = [
  ['SEY41DS',    'Distributed Systems',             3.0, 'server',   'Mr. KEM Thay', true],
  ['SEY41DSP',   'Data Security and Privacy',       3.0, 'lock',     'Mr. PICH Reatrey'],
  ['SEY41ERP',   'Enterprise Resource Planning',    3.0, 'building', 'Ms. CHOEUN Chakriya'],
  ['SEY41GT',    'Game Theory',                     3.0, 'compass',  'Mr. SOK Kimheng'],
  ['SEY41NSA',   'Networks System Administration',  2.0, 'network',  'Dr. KUY Movsun'],
];
export const Y4S2 = [
  ['SEY42CCP2',   'Capstone Computing Project 2',    4.0, 'rocket',   'Mr. SOK Kimheng', true],
  ['SEY42ML',    'Machine Learning',                3.0, 'brain',    'Dr. PHAUK Sokkhey', true],
  ['SEY42CC',    'Cloud Computing',                 3.0, 'cloud',    'Mr. HENG Rathpisey'],
  ['SEY42DO',  'DevOps',                          3.0, 'git',      'Mr. TAL Tongsreng'],
];

/* Two Year 5 titles are shortened for the slide — the course grid truncates
   at roughly 34 characters. Full titles: "Software Architecture and Extensible
   Design" (SEY51SAED) and "Advanced Software Engineering Testing" (SEY51ASET).

   The lecturer column for all four Year 5 Semester 1 courses is EMPTY in every
   sheet of both workbooks, so "To be assigned" is what the source says rather
   than a placeholder. Replace these four strings when the names are confirmed —
   it is the only edit needed. */
export const Y5S1 = [
  ['SEY51SAED',  'Software Architecture & Ext. Design', 3.0, 'layers', 'To be assigned'],
  ['SEY51SPM',   'Software Process Management',     3.0, 'gauge',    'To be assigned'],
  ['SEY51SDO',    'Secure DevOps',                   3.0, 'shield',   'To be assigned'],
  ['SEY51ASET',  'Advanced SE Testing', 3.0, 'bug', 'To be assigned'],
];
export const Y5S2 = [
  ['SEY52INT',   'Internship 1 — after Year 4',     2.0, 'briefcase','Faculty supervisor', true],
  ['SEY52FNT',   'Internship 2 — final year',       9.0, 'cap',      'Faculty supervisor', true],
];

/* Years as the journey map and the hub need them. `credits` is the summed value. */
export const YEARS = [
  { y: 1, key: 'y1', theme: 'Foundations in STEM',           credits: 33.0, s1: 15.0, s2: 18.0,  courses: 13 },
  { y: 2, key: 'y2', theme: 'Core ICT & Programming',        credits: 33.0, s1: 16.5, s2: 16.5,  courses: 12 },
  { y: 3, key: 'y3', theme: 'Core Software Engineering',     credits: 33.0, s1: 17.0, s2: 16.0,  courses: 9 },
  { y: 4, key: 'y4', theme: 'Advanced Systems & Capstone',   credits: 27.0, s1: 14.0, s2: 13.0,  courses: 9 },
  { y: 5, key: 'y5', theme: 'Specialisation & Internship',   credits: 23.0, s1: 12.0, s2: 11.0,  courses: 4 },
];

export const SEMESTERS = {
  1: [Y1S1, Y1S2],
  2: [Y2S1, Y2S2],
  3: [Y3S1, Y3S2],
  4: [Y4S1, Y4S2],
  5: [Y5S1, Y5S2],
};

/* ITC grading scale, from the unit outlines in
   `02ProgramSpecs/Curriculum_Document_of_International_Program_in_Software_Engineering.pdf` */
export const GRADES = [
  ['85–100%', 'A',  4.0, 'Excellent'],
  ['80–84%',  'B+', 3.5, 'Very Good'],
  ['70–79%',  'B',  3.0, 'Good'],
  ['65–69%',  'C+', 2.5, 'Fairly Good'],
  ['50–64%',  'C',  2.0, 'Fair'],
  ['45–49%',  'D',  1.5, 'Poor'],
  ['30–44%',  'E',  1.0, 'Very Poor'],
  ['< 30%',   'F',  0.0, 'Failed'],
];

/* Late-submission penalty, same source. The numbers matter more than the prose. */
export const LATE_POLICY = [
  ['Within 24 h', '−5%',  'warn'],
  ['Each further 24 h', '−10%', 'warn'],
  ['After 7 days', 'Zero', 'stop'],
];
