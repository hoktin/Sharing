/* ---------------------------------------------------------------------------
   Teaching timetable, Semester 1 2026–27, Weeks 1–8.

   Source: `04Timetables/2627/International Program Schedule.xlsx`, sheets
   **I2_SE, I3_SE and I4_SE** only — the workbook also holds I1_SE and four
   AIECS sheets, which are not this audience and are deliberately not read.

   Each sheet publishes one block: Semester 1, Weeks 1–8, from 05/10/2026.
   Weeks 9 onward are not in the file yet, which is why the slides say so.

   `t` is 'L' for a lecture slot and 'P' for TP/TD (practical or tutorial).
   Course names are shortened to roughly 22 characters so they fit a day
   column without truncating; the full titles are in curriculum.js. Lecturer honorifics are stripped for the same reason.

   Two things the timetable settles that the curriculum workbook left open:
     - Enterprise Resource Planning IS staffed — Ms. Choeun Chakrya teaches it
     - UI/UX is taught by Mr. OL Phearun, not Mrs. Seak Leng
   And one new spelling variant: the grid says "Mr. KHEM Thay" where the
   curriculum sheet says "Mr. KEM Thay".
--------------------------------------------------------------------------- */

export const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

export const TIMETABLE_META = {
  semester: 'Semester 1',
  weeks: 'Weeks 1–8',
  from: 'from Monday 5 October 2026',
  note: 'Weeks 9 onward are not published yet',
};

export const TIMETABLE = {
  2: {
    group: 'I2-SE',
    slots: 21, lectures: 10, practicals: 11,
    perDay: {Mon: 4, Tue: 6, Wed: 4, Thu: 3, Fri: 4},
    rows: [
      { time: '7:00–7:55', cells: { Tue: { t: 'L', c: "Intro to SE", w: "TAL Tongsreng" }, Wed: { t: 'P', c: "Intro to SE", w: "TAL Tongsreng" } } },
      { time: '8:00–8:55', cells: { Tue: { t: 'L', c: "Intro to SE", w: "TAL Tongsreng" }, Wed: { t: 'P', c: "Intro to SE", w: "TAL Tongsreng" } } },
      { time: '9:10–10:05', cells: { Mon: { t: 'L', c: "Data Security Fund.", w: "PICH Reatrey" }, Tue: { t: 'L', c: "Prog. Design & Impl.", w: "BOU Channa" }, Wed: { t: 'L', c: "UI / UX", w: "OL Phearun" } } },
      { time: '10:10–11:05', cells: { Mon: { t: 'L', c: "Data Security Fund.", w: "PICH Reatrey" }, Tue: { t: 'L', c: "Prog. Design & Impl.", w: "BOU Channa" }, Wed: { t: 'L', c: "UI / UX", w: "OL Phearun" } } },
      { time: '13:00–13:55', cells: { Tue: { t: 'P', c: "Project & Seminar III", w: "SRANG Sarot" }, Thu: { t: 'P', c: "Prog. Design & Impl.", w: "BOU Channa" }, Fri: { t: 'L', c: "Indigenous Sci. & STEM", w: "MAY Raksmey" } } },
      { time: '14:00–14:55', cells: { Tue: { t: 'P', c: "Project & Seminar III", w: "SRANG Sarot" }, Thu: { t: 'P', c: "Prog. Design & Impl.", w: "BOU Channa" }, Fri: { t: 'L', c: "Indigenous Sci. & STEM", w: "MAY Raksmey" } } },
      { time: '15:10–16:05', cells: { Mon: { t: 'P', c: "Data Security Fund.", w: "PICH Reatrey" }, Thu: { t: 'P', c: "Prog. Design & Impl.", w: "BOU Channa" }, Fri: { t: 'P', c: "Indigenous Sci. & STEM", w: "MAY Raksmey" } } },
      { time: '16:10–17:05', cells: { Mon: { t: 'P', c: "Data Security Fund.", w: "PICH Reatrey" }, Fri: { t: 'P', c: "Indigenous Sci. & STEM", w: "MAY Raksmey" } } },
    ],
  },
  3: {
    group: 'I3-SE',
    slots: 22, lectures: 12, practicals: 10,
    perDay: {Mon: 4, Tue: 6, Wed: 4, Thu: 4, Fri: 4},
    rows: [
      { time: '7:00–7:55', cells: { Mon: { t: 'L', c: "Internet Programming", w: "CHUN Thavorac" }, Tue: { t: 'P', c: "Networks Design", w: "KUY Movsun" }, Wed: { t: 'L', c: "Internet Programming", w: "CHUN Thavorac" }, Thu: { t: 'L', c: "IT Project Management", w: "TAL Tongsreng" }, Fri: { t: 'L', c: "Software Architecture", w: "CHUN Thavorac" } } },
      { time: '8:00–8:55', cells: { Mon: { t: 'L', c: "Internet Programming", w: "CHUN Thavorac" }, Tue: { t: 'P', c: "Networks Design", w: "KUY Movsun" }, Wed: { t: 'L', c: "Internet Programming", w: "CHUN Thavorac" }, Thu: { t: 'L', c: "IT Project Management", w: "TAL Tongsreng" }, Fri: { t: 'L', c: "Software Architecture", w: "CHUN Thavorac" } } },
      { time: '9:10–10:05', cells: { Wed: { t: 'P', c: "Internet Programming", w: "CHUN Thavorac" }, Thu: { t: 'P', c: "SE Concepts", w: "TAL Tongsreng" }, Fri: { t: 'P', c: "Software Architecture", w: "CHUN Thavorac" } } },
      { time: '10:10–11:05', cells: { Wed: { t: 'P', c: "Internet Programming", w: "CHUN Thavorac" }, Thu: { t: 'P', c: "SE Concepts", w: "TAL Tongsreng" }, Fri: { t: 'P', c: "Software Architecture", w: "CHUN Thavorac" } } },
      { time: '13:00–13:55', cells: { Tue: { t: 'P', c: "IT Project Management", w: "TAL Tongsreng" } } },
      { time: '14:00–14:55', cells: { Tue: { t: 'P', c: "IT Project Management", w: "TAL Tongsreng" } } },
      { time: '15:10–16:05', cells: { Mon: { t: 'L', c: "Networks Design", w: "KUY Movsun" }, Tue: { t: 'L', c: "SE Concepts", w: "TAL Tongsreng" } } },
      { time: '16:10–17:05', cells: { Mon: { t: 'L', c: "Networks Design", w: "KUY Movsun" }, Tue: { t: 'L', c: "SE Concepts", w: "TAL Tongsreng" } } },
    ],
  },
  4: {
    group: 'I4-SE',
    slots: 20, lectures: 10, practicals: 10,
    perDay: {Mon: 2, Tue: 4, Wed: 4, Thu: 2, Fri: 8},
    rows: [
      { time: '7:00–7:55', cells: { Mon: { t: 'P', c: "Networks Sys. Admin.", w: "KUY Movsun" }, Tue: { t: 'L', c: "Distributed Systems", w: "KHEM Thay" }, Wed: { t: 'L', c: "Data Security & Privacy", w: "PICH Reatrey" }, Fri: { t: 'L', c: "Enterprise Res. Plan.", w: "Choeun Chakrya" } } },
      { time: '8:00–8:55', cells: { Mon: { t: 'P', c: "Networks Sys. Admin.", w: "KUY Movsun" }, Tue: { t: 'L', c: "Distributed Systems", w: "KHEM Thay" }, Wed: { t: 'L', c: "Data Security & Privacy", w: "PICH Reatrey" }, Fri: { t: 'L', c: "Enterprise Res. Plan.", w: "Choeun Chakrya" } } },
      { time: '9:10–10:05', cells: { Tue: { t: 'L', c: "Networks Sys. Admin.", w: "KUY Movsun" }, Fri: { t: 'P', c: "Enterprise Res. Plan.", w: "Choeun Chakrya" } } },
      { time: '10:10–11:05', cells: { Tue: { t: 'L', c: "Networks Sys. Admin.", w: "KUY Movsun" }, Fri: { t: 'P', c: "Enterprise Res. Plan.", w: "Choeun Chakrya" } } },
      { time: '13:00–13:55', cells: { Fri: { t: 'P', c: "Distributed Systems", w: "KHEM Thay" } } },
      { time: '14:00–14:55', cells: { Fri: { t: 'P', c: "Distributed Systems", w: "KHEM Thay" } } },
      { time: '15:10–16:05', cells: { Wed: { t: 'P', c: "Data Security & Privacy", w: "PICH Reatrey" }, Thu: { t: 'L', c: "Game Theory", w: "SOK Kimheng" }, Fri: { t: 'P', c: "Game Theory", w: "SOK Kimheng" } } },
      { time: '16:10–17:05', cells: { Wed: { t: 'P', c: "Data Security & Privacy", w: "PICH Reatrey" }, Thu: { t: 'L', c: "Game Theory", w: "SOK Kimheng" }, Fri: { t: 'P', c: "Game Theory", w: "SOK Kimheng" } } },
    ],
  },
};

/* ---------------------------------------------------------------------------
   Academic calendar 2026–27, from `04Timetables/2627/FV Academic calendar_2026-2027.pdf`.
   Only the dates that carry the "Y2, Y3, Y4" label are listed — Year 1 runs on
   a different track and is not this audience.

   The PDF carries two parallel week-numbering tracks, so no week numbers are
   quoted here; the dated milestones are unambiguous and the week numbers are not.
--------------------------------------------------------------------------- */

export const CALENDAR_S1 = [
  { date: 'Fri 2 Oct',  label: 'Orientation',               sub: 'Y2, Y3, Y4 — today',        tone: 'now' },
  { date: 'Mon 5 Oct',  label: 'Commencement',              sub: 'teaching starts',           tone: 'key' },
  { date: 'Fri 23 Oct', label: 'New School Opening Ceremony', sub: '',                        tone: 'event' },
  { date: 'Fri 22 Jan', label: 'End of Semester 1',         sub: 'Y2, Y3, Y4',                tone: 'key' },
  { date: 'Tue 26 Jan', label: 'Exam preparation week',     sub: 'Y2, Y3, Y4',                tone: 'warn' },
  { date: 'Tue 2 Feb',  label: 'Exam week',                 sub: 'Semester 1, Y2, Y3, Y4',    tone: 'warn' },
  { date: 'Wed 10 Feb', label: 'Correction week',           sub: 'Y2, Y3, Y4',                tone: 'event' },
  { date: 'Mon 15 Feb', label: 'Semester 2 starts',         sub: 'Y2, Y3, Y4',                tone: 'key' },
];

/* Public holidays and university days that fall inside Semester 1. */
export const CALENDAR_BREAKS = [
  ['Sun 11 Oct',  'Pchum Ben Festival'],
  ['Thu 15 Oct',  "King Father's Commemoration Day"],
  ['Mon 9 Nov',   'Independence Day'],
  ['Wed 11 Nov',  'Pre-Concil of students & university life'],
  ['Wed 18 Nov',  'Concil of students & university life'],
  ['23–24 Nov',   'Water Festival'],
  ['Tue 29 Dec',  'Peace Day in Cambodia'],
  ['Fri 1 Jan',   "New Year's Day"],
  ['Thu 7 Jan',   'Victory Day'],
];

/* Where Semester 2 lands, for the years that will sit it. */
export const CALENDAR_S2 = [
  ['Mon 15 Feb', 'Semester 2 starts'],
  ['Fri 19 Jun', 'End of Semester 2'],
  ['Wed 23 Jun', 'Exam preparation week'],
  ['Tue 29 Jun', 'Exam week'],
  ['5–6 Jul',    'Correction week'],
];

