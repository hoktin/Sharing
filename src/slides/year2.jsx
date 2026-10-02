import { For } from 'solid-js';
import { Slide, Head, Body, Photo, YearDivider, YC } from '../components/Layout';
import { CourseGrid, SemesterTag } from '../components/Course';
import { InternshipTimeline } from '../components/Figures';
import Icon from '../components/Icon';
import { SE, NAT } from '../data/assets';
import { Y2S1, Y2S2 } from '../data/curriculum';

/* Year 2 — Generation 3, the cohort that finished the foundation year in
   2025-26. This is the first year that is actually Software Engineering, and
   the first year where the work compounds: everything in Year 3 assumes they
   can already program, model data and read their own stack traces. */

export const S8 = {
  id: '2.8', title: 'Year 2 — opener',
  notes:
    'Say the transition out loud: last year was shared science with every international programme in the building. ' +
    'From now on the courses carry an SE code and they are yours. This is also the year the gap between students ' +
    'opens up, and it opens on practice, not on talent.',
  el: (p) => (
    <YearDivider n={p.n} numeral="2" track="y2" photo={SE.labB} pos="center 40%"
      title="Core ICT & Programming"
      sub="The first year that is actually Software Engineering"
      tags={['33 credits', '12 courses', 'Two Project & Seminar units']} />
  ),
};

export const S9 = {
  id: '2.9', title: 'Year 2 · Semester 1',
  notes:
    'Programming Design and Implementation is the heaviest unit at 3.5 credits and it is the one that decides ' +
    'how Semester 2 feels. Introduction to Software Engineering is where the vocabulary comes from — requirements, ' +
    'design, review — so it is not the soft option it looks like. Point out that Mr. PICH Reatrey also coordinates ' +
    'the AIECS programme, and Dr. SRANG Sarot runs both Project & Seminar units across the year.',
  el: (p) => (
    <Slide n={p.n} track="y2">
      <Head kicker="Year 2 · Semester 1" small tight bar="linear-gradient(90deg,#22d3ee,#06b6d4)">
        Semester 1 — the vocabulary year
      </Head>
      <Body class="grid grid-cols-[1fr_326px] gap-8">
        <div>
          <SemesterTag label="Semester 1" credits="16.5" year="y2" note="6 courses" />
          <CourseGrid courses={Y2S1} cols="grid-cols-1" />
        </div>
        <div class="flex min-h-0 flex-col gap-4">
          <Photo src={SE.labA} class="min-h-0 flex-1" caption="Lab work from week one" />
          <div class="rounded-2xl border-2 border-gold-500 bg-gold-50 p-5">
            <div class="flex items-center gap-2.5 text-gold-700">
              <Icon name="alert" size={25} weight={2.2} />
              <span class="text-[23px] font-black">Sets the pace</span>
            </div>
            <div class="mt-2 text-[21px] font-bold leading-snug text-slate-700">
              Programming Design &amp; Implementation — 3.5 credits, 80 hours. If you fall behind here,
              Semester 2 is unrecoverable.
            </div>
          </div>
        </div>
      </Body>
    </Slide>
  ),
};

export const S10 = {
  id: '2.10', title: 'Year 2 · Semester 2',
  notes:
    'Four of these six are the foundation the rest of the degree stands on: Data Structures and Algorithms, ' +
    'Object Oriented Programming, Introduction to Database and Operating Systems. Say clearly that these four ' +
    'are also exactly what an internship interview asks about in two years. ' +
    'Mention that you teach OOP yourself, so they will see you in a classroom, not only at orientation.',
  el: (p) => (
    <Slide n={p.n} track="y2">
      <Head kicker="Year 2 · Semester 2" small tight bar="linear-gradient(90deg,#22d3ee,#06b6d4)">
        Semester 2 — the four everything else sits on
      </Head>
      <Body class="grid grid-cols-[1fr_326px] gap-8">
        <div>
          <SemesterTag label="Semester 2" credits="16.5" year="y2" note="6 courses" />
          <CourseGrid courses={Y2S2} cols="grid-cols-1" />
        </div>
        <div class="flex min-h-0 flex-col gap-4">
          <div class="rounded-2xl border-2 border-gold-500 bg-gold-50 p-5">
            <div class="text-[23px] font-black text-gold-700">These four are interview questions</div>
            <div class="mt-2 text-[21px] font-bold leading-snug text-slate-700">
              Data Structures · OOP · Database · Operating Systems.
              In two years someone will ask you about them across a table.
            </div>
          </div>
          <Photo src={SE.cyberB} class="min-h-0 flex-1" caption="Cybersecurity workshop"
                 sub="Year 2 and Year 3 together" />
        </div>
      </Body>
    </Slide>
  ),
};

const PITFALLS = [
  ['Letting AI write your first programs', 'You cannot review what you were never able to write', 'stop'],
  ['Treating Project & Seminar as filler', 'It is the only presentation practice you get', 'warn'],
  ['Starting the lab the night before', '80-hour units do not compress', 'stop'],
  ['Leaving English until Year 4', 'Every exchange route tests it first', 'warn'],
];

export const S11 = {
  id: '2.11', title: 'Year 2 — what goes wrong',
  notes:
    'This is the one slide in the Year 2 deck worth slowing down for. The AI point is not a rule and should not ' +
    'sound like one — frame it the way a mathematician talks about mental arithmetic. Calculators exist and you ' +
    'still learn to add, because otherwise you cannot tell when the calculator was given the wrong input. ' +
    'Use AI to explain, not to produce, until they can produce it themselves.',
  el: (p) => (
    <Slide n={p.n} track="y2">
      <Head kicker="Avoid these four" accent small tight>What goes wrong in Year 2</Head>
      <Body class="flex flex-col gap-5 pb-10">
        <div class="grid min-h-0 flex-1 grid-cols-2 gap-4">
          <For each={PITFALLS}>
            {(r) => (
              <div class={`rounded-2xl border-2 p-6 ${r[2] === 'stop' ? 'border-stop/30 bg-stop/5' : 'border-warn/35 bg-warn/5'}`}>
                <div class={`flex items-start gap-3 ${r[2] === 'stop' ? 'text-stop' : 'text-warn'}`}>
                  <Icon name={r[2] === 'stop' ? 'x' : 'alert'} size={26} weight={2.5} class="mt-1 shrink-0" />
                  <span class="text-[25px] font-black leading-tight">{r[0]}</span>
                </div>
                <div class="mt-2.5 pl-[38px] text-[20px] font-semibold leading-snug text-slate-600">{r[1]}</div>
              </div>
            )}
          </For>
        </div>
        <div class="flex shrink-0 items-center gap-5 rounded-2xl bg-navy-900 px-8 py-5">
          <Icon name="bulb" size={36} class="shrink-0 text-cyan-400" />
          <span class="text-[26px] font-bold leading-snug text-white">
            Calculators exist and mathematicians still learn to add. Write your own code this year —
            use AI to explain it, not to produce it.
          </span>
        </div>
      </Body>
    </Slide>
  ),
};

const ACTIONS = [
  ['Install Git this week', 'git', 'Commit every single lab'],
  ['Code every day', 'terminal', 'Thirty minutes beats one long Sunday'],
  ['Finish one small thing', 'rocket', 'Per semester. Small, finished, yours'],
  ['Join a club', 'users', 'Software · web · mobile · network'],
  ['Book the English test', 'globe', 'Every route abroad checks it first'],
];

export const S12 = {
  id: '2.12', title: 'Year 2 — readiness',
  notes:
    'Imperatives only. The Git point is practical rather than ceremonial: a commit history is the only evidence ' +
    'they will have in two years that the work was theirs, and it is what a supervisor looks at. ' +
    'The English point has a deadline attached — tell them to find out when the test sittings are, this month.',
  el: (p) => (
    <Slide n={p.n} track="y2">
      <Head kicker="Action" accent>Five things to start before November</Head>
      <Body>
        <div class="grid grid-cols-5 gap-4">
          <For each={ACTIONS}>
            {(a, i) => (
              <div class="flex flex-col rounded-2xl border-2 p-5"
                   style={{ 'border-color': YC.y2 + '66', background: YC.y2 + '0f' }}>
                <div class="flex h-[56px] w-[56px] items-center justify-center rounded-xl text-white"
                     style={{ background: YC.y2 }}>
                  <Icon name={a[1]} size={29} weight={1.9} />
                </div>
                <div class="mt-4 text-[24px] font-black leading-tight text-navy-900">{a[0]}</div>
                <div class="mt-2 text-[19px] font-semibold leading-snug text-slate-600">{a[2]}</div>
                <div class="mt-auto pt-3 font-display text-[38px] font-black" style={{ color: YC.y2 + '66' }}>
                  0{i() + 1}
                </div>
              </div>
            )}
          </For>
        </div>
        <div class="mt-6 flex items-center gap-5 rounded-2xl border-2 border-gold-500 bg-gold-50 px-8 py-5">
          <Icon name="calendar" size={34} class="shrink-0 text-gold-700" />
          <span class="text-[25px] font-bold text-slate-700">
            Your first internship is three years away. Everything that makes it a good one starts this semester.
          </span>
        </div>
      </Body>
    </Slide>
  ),
};

export const S15 = {
  id: '2.15', title: 'The road to your internship',
  notes:
    'Year 2 does not have an internship and should not be anxious about one — but they should know the shape ' +
    'of the thing they are walking towards, because the preparation is cumulative. Two internships, 11 credits ' +
    'between them, both defended in front of a jury. The 2026 curriculum places Internship 1 after Year 4 and ' +
    'the final internship in Year 5; confirm the dates with the coordinator before quoting a month.',
  el: (p) => (
    <Slide n={p.n} track="y2">
      <Head kicker="Three years out — but it compounds" small tight>The road to your internship</Head>
      <Body class="flex flex-col gap-5 pb-10">
        <div class="h-[196px]">
          <InternshipTimeline
            band={[640, 250]} bandLabel="INTERNSHIP 1 · 2 CREDITS"
            marks={[
              { x: 70,  t: 'Year 2', s: 'you are here' },
              { x: 330, t: 'Year 3', s: 'Capstone 1' },
              { x: 620, t: 'Year 4', s: 'Capstone 2' },
              { x: 905, t: 'Year 5', s: 'final internship · 9 cr' },
            ]} />
        </div>
        <div class="grid flex-1 grid-cols-3 gap-4">
          <div class="flex flex-col justify-center rounded-2xl border border-slate-200 bg-white p-6">
            <Icon name="briefcase" size={32} class="text-azure-500" />
            <div class="mt-3 text-[24px] font-black text-navy-900">Two internships</div>
            <div class="mt-1.5 text-[20px] font-semibold leading-snug text-slate-600">
              2 credits after Year 4, then 9 credits in the final year.
            </div>
          </div>
          <div class="flex flex-col justify-center rounded-2xl border border-slate-200 bg-white p-6">
            <Icon name="handshake" size={32} class="text-azure-500" />
            <div class="mt-3 text-[24px] font-black text-navy-900">You may find your own</div>
            <div class="mt-1.5 text-[20px] font-semibold leading-snug text-slate-600">
              The department shares its list — you are not restricted to it.
            </div>
          </div>
          <div class="flex flex-col justify-center rounded-2xl border border-slate-200 bg-white p-6">
            <Icon name="users" size={32} class="text-azure-500" />
            <div class="mt-3 text-[24px] font-black text-navy-900">A supervisor each</div>
            <div class="mt-1.5 text-[20px] font-semibold leading-snug text-slate-600">
              Every student gets a faculty supervisor and a jury defence.
            </div>
          </div>
        </div>
      </Body>
    </Slide>
  ),
};

export const CLOSE_ACTIONS = [
  ['Log in to Moodle', 'moodle.itc.edu.kh — unit outlines live there'],
  ['Follow the page', 'ITC International Engineering School, on Facebook'],
  ['Install Git', 'And commit your first lab to it'],
  ['Join one club', 'Any of them. Just one'],
  ['Meet one lecturer', 'Office hours exist and almost nobody uses them'],
];
