import * as C from './common';
import * as Y2 from './year2';
import * as Y3 from './year3';
import * as Y4 from './year4';

/* ---------------------------------------------------------------------------
   Three sessions, one spine.

   The shared slides come from ./common and are generated per year, so a
   correction to the AI block, the timetable or the internship rules lands in
   all three decks at once. Slides whose id starts with the year number are
   that session's own.

   Block D carries the registry's own published material — the weekly timetable
   from the SE sheets of `International Program Schedule.xlsx` and the dated
   milestones from the 2026-27 academic calendar — which is why it is the
   longest block in every session.

   Block E is the forward look, and it is the one block that scales with how
   close the student is to graduating: Year 2 sees all three remaining years at
   once, Year 3 sees Year 4 and Year 5 in detail, Year 4 sees Year 5 and then
   what comes after the degree.

   Year 2 is lighter on the internship — it is three years away and the useful
   message is "this compounds". Year 3 and Year 4 get the full internship block
   carried over from the national-programme deck: the rules, the 25-minute
   defence format, defence-day photography, and the placement long tail. Year 4
   also gets the stat strip on the network wall, because for that room the
   internship is the nearest real deadline they have.

   The per-block minutes below are the presenter's own budget — they show in the
   overview grid (O) and nowhere on the slides.

   Block                        Y2   Y3   Y4   minutes
   A  Welcome & who we are       3    3    3     3.0
   B  Where you are              1    1    1     1.5
   C  AI & the engineer          3    3    3     3.5
   D  Your year                  9    9    9    10.0
   E  The road ahead             1    2    2     1.5 / 3.0
   F  Internship & opportunity   5    7    8     5.0 / 6.0
   G  Close                      1    1    1     0.5
                                --   --   --   ------
                                23   26   27
--------------------------------------------------------------------------- */

const blocksFor = (y, YR) => {
  const senior = y >= 3;

  /* Year 3 and Year 4 get the full internship treatment; Year 2 gets the
     timeline and the defence format only, which is as much as is useful
     when the thing is three years out. */
  const opportunity = senior
    ? [
        C.resources(y),
        YR.S15,                  // where the internship sits for this year
        C.internshipRules(y),    // the department's existing rules
        C.network(y, true),      // 39 organisations + the long-tail stat
        /* The 25-minute defence format is Year 4 only. Year 3 has no internship
           scheduled for Generation 2 this year, so the assessment machinery is
           premature — their slide tells them to go and arrange an uncredited
           placement instead. Year 2 is three years out and does not need the
           marking scheme yet. Year 4's internship is twelve months away and
           will be defended, so they get it. */
        ...(y === 4 ? [C.defence(y)] : []),
        C.defenceDay(y),         // what the room looks like
        C.abroad(y),
        C.pathways(y),
      ]
    : [
        C.resources(y),
        YR.S15,
        C.network(y, false),
        C.abroad(y),
        C.pathways(y),
      ];

  /* Where the rest of the degree goes. Year 2 is far enough out that all three
     remaining years fit on one slide; the senior sessions get a slide per year
     because for them it is the next decision, not the distant plan. */
  const ahead =
    y === 2 ? [C.roadAhead(y)]
  : y === 3 ? [C.yearAhead(y, 4), C.yearAhead(y, 5)]
            : [C.yearAhead(y, 5), C.afterDegree(y)];

  return [
    { key: 'A', name: 'Welcome & who we are', min: 3,
      slides: [C.title(y), C.agenda(y), C.people(y)] },

    { key: 'B', name: 'Where you are', min: 1.5,
      slides: [C.journey(y)] },

    { key: 'C', name: 'AI & the engineer', min: 3.5,
      slides: [C.aiQuestion(y), C.aiEvidence(y), C.aiCourses(y)] },

    /* Your year: the two semesters, then the week and the calendar as the
       registry actually publishes them, then who teaches it and how it is
       marked. The timetable block sits after the course lists because the
       grid only makes sense once the course names mean something. */
    { key: 'D', name: `Year ${y}`, min: 10,
      slides: [
        YR.S8, YR.S9, YR.S10,
        C.timetable(y), C.calendar(y), C.teachingTeam(y),
        YR.S11, YR.S12, C.grading(y),
      ] },

    { key: 'E', name: 'The road ahead', min: y === 2 ? 1.5 : 3, slides: ahead },

    { key: 'F', name: senior ? 'Internship & opportunity' : 'What is already yours',
      min: senior ? 6 : 5, slides: opportunity },

    { key: 'G', name: 'Close', min: 0.5,
      slides: [C.close(y, YR.CLOSE_ACTIONS)] },
  ];
};

const flatten = (blocks, trackKey) =>
  blocks.flatMap((b) =>
    b.slides.map((s) => ({ ...s, block: b.key, blockName: b.name, track: trackKey }))
  );

const build = (y, YR, meta) => {
  const blocks = blocksFor(y, YR);
  return {
    key: `y${y}`,
    year: y,
    ...meta,
    blocks,
    slides: flatten(blocks, `y${y}`),
  };
};

export const TRACKS = [
  build(2, Y2, {
    theme: 'Core ICT & Programming',
    cohort: 'Generation 3 — entered 2025–26',
    chips: ['33 credits', '12 courses', 'First SE year'],
  }),
  build(3, Y3, {
    theme: 'Core Software Engineering',
    cohort: 'Generation 2 — entered 2024–25',
    chips: ['33 credits', '9 courses', 'Capstone 1'],
  }),
  build(4, Y4, {
    theme: 'Advanced Systems & Capstone',
    cohort: 'Generation 1 — entered 2023–24',
    chips: ['27 credits', '9 courses', 'Internship in 12 months'],
  }),
];

export const TRACK_BY_KEY = Object.fromEntries(TRACKS.map((t) => [t.key, t]));

/* Every slide in presentation order, used by ?print and the PDF export. */
export const ALL_SLIDES = TRACKS.flatMap((t) => t.slides);
