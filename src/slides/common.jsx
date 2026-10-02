import { For, Show } from 'solid-js';
import { Slide, Head, Body, Bullets, Photo, Logo, Card, YC } from '../components/Layout';
import { JourneyMap, AIPipeline, DefenceDonut, PathwayTree, InternshipTimeline, Meter } from '../components/Figures';
import Icon from '../components/Icon';
import { BRAND, SE, NAT } from '../data/assets';
import {
  LEADERS, CONTACT, AI_STRONG, AI_HUMAN, AI_MAP, UNIS, OUTCOMES,
  SHARED, PLACEMENTS, INTERN_FACTS, INTERN_SUPPORT, PLACEMENT_STATS,
  FUTURE_READY, AFTER_DEGREE,
} from '../data/content';
import { GRADES, LATE_POLICY, SEMESTERS, YEARS } from '../data/curriculum';
import { TimetableGrid, TimetableLegend } from '../components/Timetable';
import { TIMETABLE, TIMETABLE_META, DAYS, CALENDAR_S1, CALENDAR_BREAKS, CALENDAR_S2 } from '../data/timetable';

/* Every factory below takes the year of the session (2, 3 or 4) and returns a
   slide object. The spine of the talk is identical across the three sessions;
   what changes is which year is lit up, which courses are named, and what the
   student is being asked to do next. Keeping it one component per idea means
   a correction lands in all three decks at once. */

const yk = (y) => `y${y}`;

const TRACK_META = {
  2: {
    cohort: 'Generation 3 · entered 2025–26',
    theme: 'Core ICT & Programming',
    line: 'The year you stop being a science student and start being an engineer',
  },
  3: {
    cohort: 'Generation 2 · entered 2024–25',
    theme: 'Core Software Engineering',
    line: 'The year your name goes on something that runs',
  },
  4: {
    cohort: 'Generation 1 · entered 2023–24',
    theme: 'Advanced Systems & Capstone',
    line: 'The year employers look at — and the first cohort to reach Year 5',
  },
};

/* --------------------------------------------------------------- 1. Title */
export const title = (y) => ({
  id: `${y}.1`, title: 'Title',
  notes:
    `20 seconds. Name the cohort in the room — ${TRACK_META[y].cohort}. Say the shape of the session out loud: ` +
    'about twenty-five minutes from you, then questions, and the questions are the part that matters. ' +
    `Do not read the slide.`,
  el: (p) => (
    <Slide n={p.n} bare dark track={yk(y)}>
      <div class="relative h-full w-full">
        <img src={SE.cohort} alt="" class="absolute inset-0 h-full w-full object-cover" style={{ 'object-position': 'center 42%' }} />
        <div class="absolute inset-0 bg-gradient-to-br from-navy-950/96 via-navy-900/90 to-navy-800/70" />
        <div class="relative flex h-full flex-col justify-center px-20">
          <div class="mb-7 inline-flex w-fit items-center gap-5 rounded-2xl bg-white px-6 py-4 shadow-lg">
            <img src={BRAND.itc} alt="ITC" class="h-[62px] w-auto" />
            <div class="h-[46px] w-px bg-slate-200" />
            <div class="leading-tight">
              <div class="text-[19px] font-black text-navy-900">INTERNATIONAL ENGINEERING SCHOOL</div>
              <div class="text-[16px] font-bold text-slate-500">Institute of Technology of Cambodia</div>
            </div>
          </div>
          <div class="t-kicker mb-3" style={{ color: YC[yk(y)] }}>Orientation 2026–27 · Software Engineering</div>
          <h1 class="font-display text-[86px] font-black leading-[0.95] tracking-tight text-white">
            YEAR {y}
          </h1>
          <p class="mt-4 text-[38px] font-bold" style={{ color: YC[yk(y)] }}>{TRACK_META[y].theme}</p>
          <p class="mt-5 max-w-[720px] border-l-[5px] pl-6 text-[25px] font-semibold leading-snug text-azure-200"
            style={{ 'border-color': YC[yk(y)] }}>
            {TRACK_META[y].line}
          </p>
        </div>
        <div class="absolute bottom-10 right-16 text-right">
          <div class="text-[26px] font-black text-white/90">HOK TIN</div>
          <div class="mt-1 text-[21px] font-bold leading-snug text-white/70">
            Coordinator of Software Engineering<br />International Engineering School
          </div>
          <div class="mt-2 text-[20px] font-semibold text-white/45">October 2026</div>
        </div>
      </div>
    </Slide>
  ),
});

/* -------------------------------------------------------------- 2. Agenda */
export const agenda = (y) => {
  const rows = [
    { t: 'Will AI replace us?', s: 'The honest answer', i: 'brain', c: '#f5b942' },
    { t: `Your Year ${y}`, s: TRACK_META[y].theme, i: 'book', c: YC[yk(y)] },
    { t: 'Your week', s: 'Timetable and the dates that bind', i: 'calendar', c: '#0b1e3f' },
    { t: 'What is already yours', s: 'Labs, network, internships, abroad', i: 'globe', c: '#3b82f6' },
  ];
  return {
    id: `${y}.2`, title: 'Agenda',
    notes:
      'Signal that the AI question comes first because it is the one they arrived worrying about. ' +
      'Promise the last block explicitly: everything in it is free and most students never claim it. ' +
      'Then say the timing contract out loud — roughly twenty-five minutes, then the floor is theirs, and you will hold to it.',
    el: (p) => (
      <Slide n={p.n} track={yk(y)}>
        <Head kicker="About 25 minutes, then your questions">What we will cover</Head>
        <Body class="flex flex-col">
          <div class="grid grid-cols-4 items-start gap-5 pt-1">
            <For each={rows}>
              {(a, i) => (
                <div class="relative">
                  <div class="flex h-[100px] w-[100px] items-center justify-center rounded-2xl text-white"
                    style={{ background: a.c }}>
                    <Icon name={a.i} size={50} weight={1.7} />
                  </div>
                  <div class="mt-5 text-[29px] font-black leading-tight text-navy-900">{a.t}</div>
                  <div class="mt-2 text-[22px] font-medium text-slate-500">{a.s}</div>
                  <Show when={i() < 3}>
                    <div class="absolute right-[-22px] top-[42px] text-slate-300">
                      <Icon name="arrowRight" size={28} weight={2.4} />
                    </div>
                  </Show>
                </div>
              )}
            </For>
          </div>
          <div class="mt-auto flex items-center gap-5 rounded-2xl bg-navy-900 px-8 py-5">
            <Icon name="clock" size={36} class="shrink-0 text-cyan-400" />
            <span class="text-[27px] font-bold text-white">
              Twenty-five minutes from me · then the floor is yours — that is the half that is actually useful
            </span>
          </div>
        </Body>
      </Slide>
    ),
  };
};

/* ------------------------------------------------------- 3. Who runs this */
export const people = (y) => ({
  id: `${y}.3`, title: 'Who runs the programme',
  notes:
    'Three names and one room. A314 is the International Engineering School office and also the admission ' +
    'office, so it is the door for anything official — nomination letters, transcripts, lists. ' +
    'Point at Ms. CHAB Sreylen as the person for anything administrative, so students stop queuing at the ' +
    'wrong desk, and say that the Facebook page is the fastest route for a question that does not need a desk.',
  el: (p) => (
    <Slide n={p.n} track={yk(y)}>
      <Head kicker="Your programme">Who runs Software Engineering</Head>
      <Body class="grid grid-cols-[1fr_440px] gap-9">
        <div class="flex flex-col gap-3.5">
          <For each={LEADERS}>
            {(s, i) => (
              <div class="flex items-center gap-4 rounded-2xl border-2 px-5 py-4"
                style={{
                  'border-color': ['#0b1e3f', '#3b82f6', '#22d3ee'][i()] + '33',
                  background: ['#0b1e3f', '#3b82f6', '#22d3ee'][i()] + '0a'
                }}>
                <span class="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full text-white"
                  style={{ background: ['#0b1e3f', '#3b82f6', '#0891b2'][i()] }}>
                  <Icon name="user" size={31} />
                </span>
                <div class="min-w-0">
                  <div class="text-[29px] font-black leading-tight text-navy-900">{s.name}</div>
                  <div class="text-[21px] font-semibold leading-tight text-slate-500">{s.role}</div>
                </div>
              </div>
            )}
          </For>
          <div class="mt-auto rounded-2xl border-2 border-gold-500 bg-gold-50 px-6 py-4">
            <div class="flex items-center gap-3 text-gold-700">
              <Icon name="pin" size={27} weight={2.1} />
              <span class="text-[26px] font-black">{CONTACT.office}</span>
            </div>
            <div class="mt-1 text-[20px] font-semibold text-slate-600">{CONTACT.officeNote}</div>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <Photo src={SE.labA} class="h-[246px]" caption="Software Engineering labs" sub="Institute of Technology of Cambodia" />
          <div class="rounded-2xl border border-slate-200 bg-white p-5">
            <div class="flex items-start gap-3">
              <Icon name="globe" size={26} class="mt-1 shrink-0 text-azure-500" />
              <div class="min-w-0">
                <div class="text-[19px] font-black text-navy-900">Facebook</div>
                <div class="truncate text-[18px] font-semibold text-slate-500">{CONTACT.facebook}</div>
              </div>
            </div>
            <div class="mt-3 flex items-start gap-3">
              <Icon name="link" size={26} class="mt-1 shrink-0 text-azure-500" />
              <div class="min-w-0">
                <div class="text-[19px] font-black text-navy-900">Programme page</div>
                <div class="truncate text-[18px] font-semibold text-slate-500">{CONTACT.site}</div>
              </div>
            </div>
            <div class="mt-3 flex items-start gap-3">
              <Icon name="mail" size={26} class="mt-1 shrink-0 text-azure-500" />
              <div class="min-w-0">
                <div class="text-[19px] font-black text-navy-900">{CONTACT.email}</div>
                <div class="text-[18px] font-semibold text-slate-500">{CONTACT.phone}</div>
              </div>
            </div>
          </div>
        </div>
      </Body>
    </Slide>
  ),
});

/* --------------------------------------------------- 4. Where you are now */
export const journey = (y) => ({
  id: `${y}.4`, title: 'Where you are in the five years',
  notes:
    'The spine of the talk. Walk it left to right once, slowly, and stop on their year. ' +
    'Be straight about Year 5: the programme moved from four years to five, the Year 5 courses are written ' +
    (y === 4
      ? 'and this room is the first cohort that will sit them — which means they get a say in how it runs.'
      : 'but no cohort has reached them yet. Year 4 is the senior year in the building today.') +
    ' Per-year credits here are summed from the 2026 curriculum workbook, not copied from its total row.',
  el: (p) => (
    <Slide n={p.n} track={yk(y)}>
      <Head kicker="Five years, one degree" small>Where you are standing today</Head>
      <Body class="pb-10"><div class="h-full"><JourneyMap now={y} /></div></Body>
    </Slide>
  ),
});

/* ------------------------------------------------------------- 5. AI, Q&A */
export const aiQuestion = (y) => ({
  id: `${y}.5`, title: 'Will AI replace software engineers?',
  notes:
    'Open by admitting the worry is reasonable — do not wave it away. AI is genuinely good at producing code. ' +
    'Then draw the line that runs through the next two slides: AI is becoming very good at producing software; ' +
    'people still decide what software should exist, why, and under what constraints. ' +
    'An engineer whose only claim is "I can write code" is exposed. One who can decide what to build is not.',
  el: (p) => (
    <Slide n={p.n} dark track={yk(y)}>
      <div class="relative flex h-full flex-col justify-center bg-navy-900 px-16">
        <div class="absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(34,211,238,.22), transparent 70%)' }} />
        <div class="relative">
          <h2 class="font-display text-[62px] font-black leading-tight text-white">
            Will AI replace software engineers?
          </h2>
          <div class="mt-9 grid grid-cols-2 gap-7">
            <div class="rounded-2xl border-2 border-white/15 bg-white/5 p-7">
              <div class="text-[27px] font-black text-slate-400 line-through decoration-stop decoration-4">
                AI vs. the engineer
              </div>
              <p class="mt-3 text-[22px] font-medium leading-snug text-slate-400">
                The framing everyone arrives with — and the wrong one.
              </p>
            </div>
            <div class="rounded-2xl border-2 border-gold-500 bg-gold-500/15 p-7">
              <div class="text-[27px] font-black text-gold-400">
                Engineer <span class="text-white">with</span> AI vs. engineer <span class="text-white">without</span>
              </div>
              <p class="mt-3 text-[22px] font-medium leading-snug text-azure-200">
                This is the comparison that will decide your first job.
              </p>
            </div>
          </div>
          <p class="mt-9 text-[36px] font-black text-white">
            Not the profession. <span class="text-cyan-400">Some of the tasks.</span>
          </p>
        </div>
      </div>
    </Slide>
  ),
});

export const aiEvidence = (y) => ({
  id: `${y}.6`, title: 'What AI does well, what still needs you',
  notes:
    'Be generous about the left column — that honesty is what makes the right column credible. ' +
    'The red rows are the ones nobody can delegate: carrying responsibility for a live system, and ' +
    'deciding what should be built at all. Those are engineering, not typing.',
  el: (p) => (
    <Slide n={p.n} track={yk(y)}>
      <Head kicker="Be honest about both columns" small>What AI does well — and what still needs an engineer</Head>
      <Body class="grid grid-cols-2 gap-7">
        <div class="rounded-2xl border-2 border-good/30 bg-good/5 p-7">
          <div class="mb-4 flex items-center gap-3 text-good">
            <Icon name="check" size={29} weight={2.6} />
            <span class="text-[28px] font-black">AI is already strong at</span>
          </div>
          <ul class="space-y-3.5">
            <For each={AI_STRONG}>
              {(t) => (
                <li class="flex items-start gap-3.5">
                  <Meter level="good" />
                  <span class="text-[24px] font-semibold leading-snug text-slate-700">{t}</span>
                </li>
              )}
            </For>
          </ul>
        </div>
        <div class="rounded-2xl border-2 border-stop/25 bg-stop/5 p-7">
          <div class="mb-4 flex items-center gap-3 text-stop">
            <Icon name="user" size={29} weight={2.4} />
            <span class="text-[28px] font-black">Still needs an engineer</span>
          </div>
          <ul class="space-y-3">
            <For each={AI_HUMAN}>
              {(r) => (
                <li class="flex items-start gap-3.5">
                  <Meter level={r[1]} />
                  <span class={`text-[23px] leading-snug ${r[1] === 'stop' ? 'font-black text-stop' : 'font-semibold text-slate-700'}`}>
                    {r[0]}
                  </span>
                </li>
              )}
            </For>
          </ul>
        </div>
      </Body>
    </Slide>
  ),
});

export const aiCourses = (y) => ({
  id: `${y}.7`, title: 'Your courses are the answer',
  notes:
    'This is the slide that turns anxiety into motivation, so land it properly. If an AI hands you 500 lines, ' +
    'the questions that matter are: is the algorithm right, is input validated, is auth secure, will this hold ' +
    'at a million users, is that query efficient, what happens when the network fails, can anyone maintain it, ' +
    'and does it even meet the requirement? Every one of those comes from a course on this slide. ' +
    (y === 2
      ? 'Then say the hard thing for this room: write your own code this year. You cannot judge output you were never able to produce.'
      : 'Point at the rows in their colour — those are the ones they are sitting in right now.'),
  el: (p) => (
    <Slide n={p.n} track={yk(y)}>
      <Head kicker="The payoff" small tight>What AI cannot do, this programme teaches</Head>
      <Body class="flex flex-col pb-10">
        <div class="grid grid-cols-2 gap-x-7 gap-y-2">
          <For each={AI_MAP}>
            {(r) => {
              const mine = r[2] === yk(y);
              return (
                <div class={`flex items-center gap-3 rounded-xl px-4 py-2 ${mine ? 'bg-slate-50 ring-2' : ''}`}
                  style={mine ? { '--tw-ring-color': YC[r[2]] } : {}}>
                  <span class="w-[8px] shrink-0 self-stretch rounded-full" style={{ background: YC[r[2]] }} />
                  <span class="w-[204px] shrink-0 text-[19px] font-black leading-tight text-navy-900">{r[0]}</span>
                  <Icon name="arrowRight" size={18} class="shrink-0 text-slate-300" />
                  <span class="min-w-0 flex-1 truncate text-[18px] font-semibold text-slate-500">{r[1]}</span>
                </div>
              );
            }}
          </For>
        </div>
        <div class="mt-auto rounded-2xl bg-navy-900 px-8 py-5 text-center">
          <span class="text-[31px] font-black text-white">
            “AI may write the code — but engineers must understand the code.”
          </span>
        </div>
      </Body>
    </Slide>
  ),
});

/* --------------------------------------------------------- 13. Assessment */
export const grading = (y) => ({
  id: `${y}.13`, title: 'How you are graded',
  notes:
    'Thirty seconds on the scale, then spend the time on the right-hand column, because that is the part that ' +
    'changes behaviour. Late work: five per cent in the first day, ten per cent for every day after, zero after ' +
    'seven. An extension asked for before the deadline is a conversation; asked for afterwards it is a penalty. ' +
    'Then attendance, and say it plainly rather than as a threat. Attendance is counted in every course. ' +
    'Miss classes and you get a call to the office first — that call is the chance to fix it, and most problems ' +
    'at that stage turn out to be fixable. Keep missing and we contact your parent or guardian, because by then ' +
    'it is no longer only an academic matter. Nobody wants to make that second call; tell them to come and talk ' +
    'to the coordinator before it gets there.',
  el: (p) => (
    <Slide n={p.n} track={yk(y)}>
      <Head kicker="The rules that cost marks" small tight>How you are graded</Head>
      <Body class="grid grid-cols-[1fr_470px] gap-9 pb-12">
        <div class="grid grid-cols-2 content-start gap-2.5">
          <For each={GRADES}>
            {(g) => (
              <div class={`flex items-center gap-3 rounded-xl border px-4 py-2.5
                           ${g[1] === 'F' ? 'border-stop/40 bg-stop/5' : 'border-slate-200 bg-white'}`}>
                <span class={`flex h-[42px] w-[48px] shrink-0 items-center justify-center rounded-lg font-display text-[22px] font-black
                              ${g[1] === 'F' ? 'bg-stop text-white' : 'bg-azure-100 text-navy-800'}`}>
                  {g[1]}
                </span>
                <span class="flex-1 text-[20px] font-bold text-slate-700">{g[0]}</span>
                <span class="text-[19px] font-semibold text-slate-400">{g[3]}</span>
              </div>
            )}
          </For>
          <div class="col-span-2 mt-1 rounded-xl bg-navy-900 px-4 py-3">
            <div class="text-[19px] font-bold leading-snug text-white">
              Ask for an extension <span class="text-cyan-400">before</span> the deadline and it is a
              conversation. Ask after, and it is a penalty.
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-4">
          <div class="rounded-2xl border-2 border-gold-500 bg-gold-50 p-4">
            <div class="flex items-center gap-2.5 text-gold-700">
              <Icon name="clock" size={24} weight={2.2} />
              <span class="text-[22px] font-black">Submitting late</span>
            </div>
            <div class="mt-3 space-y-2">
              <For each={LATE_POLICY}>
                {(r) => (
                  <div class="flex items-center justify-between rounded-xl bg-white px-4 py-2">
                    <span class="text-[19px] font-bold text-slate-700">{r[0]}</span>
                    <span class={`font-display text-[23px] font-black ${r[1] === 'Zero' ? 'text-stop' : 'text-gold-700'}`}>
                      {r[1]}
                    </span>
                  </div>
                )}
              </For>
            </div>
          </div>

          <div class="rounded-2xl border-2 border-stop/35 bg-stop/5 p-4">
            <div class="flex items-center gap-2.5 text-stop">
              <Icon name="users" size={24} weight={2.2} />
              <span class="text-[22px] font-black">Missing class</span>
            </div>
            <div class="mt-1 text-[17px] font-semibold text-slate-600">
              Attendance is counted in every course.
            </div>
            <div class="mt-3 space-y-2">
              <div class="flex items-center gap-3 rounded-xl bg-white px-4 py-2">
                <span class="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full
                             bg-gold-500 text-[15px] font-black text-white">1</span>
                <span class="text-[18px] font-bold leading-tight text-slate-700">
                  A call to the International Engineering School's office
                </span>
              </div>
              <div class="flex items-center gap-3 rounded-xl bg-white px-4 py-2">
                <span class="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full
                             bg-stop text-[15px] font-black text-white">2</span>
                <span class="text-[18px] font-bold leading-tight text-slate-700">
                  Too many absences — we contact your parent or guardian
                </span>
              </div>
            </div>
            <div class="mt-2 text-[16px] font-semibold leading-snug text-slate-500">
              Come and talk to us before step 2. At step 1 it is almost always fixable.
            </div>
          </div>
        </div>
      </Body>
    </Slide>
  ),
});

/* ------------------------------------------- 14. Shared department resources */
export const resources = (y) => ({
  id: `${y}.14`, title: 'What is already yours',
  notes:
    'Say the framing out loud: being in the international programme does not cut them off from the department — ' +
    'it adds to it. The labs, the clubs, the Incubation Center and the competition routes are all GIC department ' +
    'resources and they are open to this room. ViLa Lab works on Khmer NLP under Dr. VALY Dona and takes student ' +
    'research assistants, so that door opens with one email rather than an application. The Crash Course is taught ' +
    'BY students — for this room it is an invitation to tutor, not to attend.',
  el: (p) => (
    <Slide n={p.n} track={yk(y)}>
      <Head kicker="Shared with the GIC department" small tight>Free things you are not using yet</Head>
      <Body class="grid grid-cols-[1fr_380px] gap-8">
        <div class="grid grid-cols-2 gap-2.5 content-start">
          <For each={SHARED}>
            {(s) => (
              <div class="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                <div class="flex items-center gap-3">
                  <span class="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-lg bg-azure-100 text-navy-700">
                    <Icon name={s.icon} size={21} weight={1.9} />
                  </span>
                  <span class="text-[21px] font-black leading-tight text-navy-900">{s.name}</span>
                </div>
                <div class="mt-1.5 text-[17px] font-semibold leading-snug text-slate-600">{s.sub}</div>
              </div>
            )}
          </For>
        </div>
        <div class="flex flex-col gap-4">
          <Photo src={NAT.crashCourse} fit="contain" class="h-[238px] bg-white" />
          <div class="-mt-2 text-[18px] font-bold leading-snug text-slate-600">
            Vacation Crash Course — <span class="text-gold-700">taught by students, so you can tutor it</span>
          </div>
          <Photo src={NAT.huawei} class="h-[168px]" pos="center 30%"
            caption="Huawei ICT Competition, APAC Final" />
        </div>
      </Body>
    </Slide>
  ),
});

/* ---------------------------------------------------------- 16. The network */
export const network = (y, withStat) => ({
  id: `${y}.16`, title: 'The internship network',
  notes:
    'Be precise about what this is: 39 organisations that have taken an intern from the GIC department. ' +
    'It is not a list of SE international placements — this programme has not reached its internship year yet. ' +
    'It is the network the department already has and will open for them. The point to land: most of these ' +
    'organisations took one or two students, which means one motivated student opened that door. ' +
    'It is a record of what people went out and arranged, not a fixed menu.',
  el: (p) => (
    <Slide n={p.n} track={yk(y)}>
      <Head kicker="39 organisations have taken a GIC intern — this network is open to you"
        small tight>
        Where the doors already are
      </Head>
      <Body class={withStat ? 'flex flex-col gap-3 pb-10' : 'pb-10'}>
        <div class="columns-3 gap-5">
          <For each={PLACEMENTS}>
            {(s) => (
              <div class="mb-3 break-inside-avoid">
                <div class="mb-1 flex items-center gap-2 text-[22px] font-extrabold" style={{ color: YC[s.c] ?? '#3b82f6' }}>
                  <span class="h-[12px] w-[12px] rounded-full"
                    style={{ background: ({ azure: '#3b82f6', good: '#16a34a', cyan: '#06b6d4', gold: '#f5b942' })[s.c] ?? YC[s.c] }} />
                  <span style={{ color: '#16233d' }}>{s.sector}</span>
                </div>
                <div class="flex flex-wrap gap-1">
                  <For each={s.names}>
                    {(n) => (
                      <span class="rounded-lg border border-slate-200 bg-slate-50 px-2 py-[3px] text-[19px] font-semibold leading-[1.3] text-slate-700">
                        {n}
                      </span>
                    )}
                  </For>
                </div>
              </div>
            )}
          </For>
        </div>
        <Show when={withStat}>
          <div class="flex shrink-0 items-center gap-4 rounded-2xl bg-navy-900 px-7 py-3.5">
            <Icon name="bulb" size={30} class="shrink-0 text-cyan-400" />
            <span class="text-[23px] font-bold text-white">{PLACEMENT_STATS.line}</span>
          </div>
        </Show>
      </Body>
    </Slide>
  ),
});

/* ------------------------------------------------------ 17. Abroad, for real */
export const abroad = (y) => ({
  id: `${y}.17`, title: 'Going abroad is not theoretical',
  notes:
    'Lead with the people, not the logos. DIM Ponhakvontey and VAN Sotheany are from this programme and they ' +
    'leave for the University of Central Missouri in August 2026 on a 2+2 — a cybersecurity degree and an F-1 visa. ' +
    'Eight students went to Harbin for the 2026 summer school and one came back with a robotics certificate. ' +
    'These are not exceptional outsiders; they sat in this room.',
  el: (p) => (
    <Slide n={p.n} track={yk(y)}>
      <Head kicker="Already happened — not a brochure" small tight>Students from this programme, abroad</Head>
      <Body class="grid grid-cols-3 gap-5 pb-10">
        <For each={OUTCOMES}>
          {(o, i) => (
            <div class="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <img src={o.src} alt={o.title}
                class={`h-[262px] w-full ${i() === 0 ? 'object-contain bg-slate-50 p-1' : 'object-cover'}`} />
              <div class="flex flex-1 flex-col border-t border-slate-100 px-5 py-4">
                <div class="text-[23px] font-black leading-tight text-navy-900">{o.title}</div>
                <div class="mt-1 text-[20px] font-bold leading-tight text-azure-500">{o.names}</div>
                <div class="mt-2 text-[17px] font-medium leading-snug text-slate-500">{o.detail}</div>
              </div>
            </div>
          )}
        </For>
      </Body>
    </Slide>
  ),
});

export const pathways = (y) => ({
  id: `${y}.17b`, title: 'The routes out',
  notes:
    'Four routes, and they have different deadlines. Selection everywhere is grades first, then English, then ' +
    'motivation and evidence that you do things outside class. Tell them the honest sequencing: fix the GPA this ' +
    'year, sit the English test early, and ask Ms. CHAB Sreylen for the application calendar rather than waiting ' +
    'for an announcement.',
  el: (p) => (
    <Slide n={p.n} track={yk(y)}>
      <Head kicker="Eight partner universities" small tight>Four ways out of this building</Head>
      <Body class="flex flex-col gap-4 pb-10">
        <div class="h-[352px]"><PathwayTree /></div>
        <div class="grid grid-cols-8 gap-2.5">
          <For each={UNIS}>{(u) => <Logo src={u.src} name={u.name} h={38} class="h-[64px] p-2" />}</For>
        </div>
      </Body>
    </Slide>
  ),
});

/* ------------------------------------------------------- shared internship */
export const defence = (y) => ({
  id: `${y}.15b`, title: 'How an internship is assessed',
  notes:
    'The department runs the same 25-minute format for every internship defence: ten minutes presenting, five ' +
    'demonstrating, ten answering a jury that includes lecturers and sometimes people from industry. ' +
    'The marks most often lost are to a demo that fails live — rehearse it offline and carry a recording.',
  el: (p) => (
    <Slide n={p.n} track={yk(y)}>
      <Head kicker="The format, years ahead of time" small tight>How an internship is defended</Head>
      <Body class="grid grid-cols-[480px_1fr] gap-10 pb-10">
        <div class="h-full"><DefenceDonut /></div>
        <div class="flex flex-col justify-center gap-5">
          <div class="rounded-2xl border-2 border-gold-500 bg-gold-50 p-7">
            <div class="text-[27px] font-black text-gold-700">Where marks actually go</div>
            <ul class="mt-3.5 space-y-2.5 text-[22px] font-bold leading-snug text-slate-700">
              <li>A demo that fails live — rehearse offline, carry a recording</li>
              <li>A report written in the last week</li>
              <li>Not being able to explain your own code</li>
            </ul>
          </div>
          <div class="rounded-2xl bg-navy-900 px-7 py-5">
            <div class="text-[22px] font-bold leading-snug text-white">
              The jury is lecturers, and on some panels people from industry.
              The format is the same for both internships, so you only learn it once.
            </div>
          </div>
        </div>
      </Body>
    </Slide>
  ),
});

/* ------------------------------------------------------------ 18. The close */
export const close = (y, actions) => ({
  id: `${y}.18`, title: 'Your first two weeks',
  notes:
    'Five actions, all doable in a fortnight, none of them requiring permission. Read them out, then stop talking ' +
    'and open the floor — you have ten minutes and the questions are the reason they came. ' +
    'If the room is quiet, ask them one: "who has already picked what they want to be known for?"',
  el: (p) => (
    <Slide n={p.n} bare dark track={yk(y)}>
      <div class="relative h-full w-full">
        <img src={SE.cohort} alt="" class="absolute inset-0 h-full w-full object-cover" style={{ 'object-position': 'center 45%' }} />
        <div class="absolute inset-0 bg-navy-950/88" />
        <div class="relative flex h-full flex-col px-16 py-12">
          <div class="t-kicker" style={{ color: YC[yk(y)] }}>Before the end of October</div>
          <h2 class="mt-2 font-display text-[54px] font-black leading-tight text-white">Your first two weeks</h2>
          <div class="mt-7 grid grid-cols-5 gap-4">
            <For each={actions}>
              {(a, i) => (
                <div class="rounded-2xl border border-white/20 bg-white/10 p-5">
                  <div class="font-display text-[34px] font-black" style={{ color: YC[yk(y)] }}>0{i() + 1}</div>
                  <div class="mt-2 text-[23px] font-black leading-tight text-white">{a[0]}</div>
                  <div class="mt-1.5 text-[18px] font-medium leading-snug text-white/65 [overflow-wrap:anywhere]">{a[1]}</div>
                </div>
              )}
            </For>
          </div>
          <div class="mt-auto flex items-end justify-between">
            <div>
              <div class="font-display text-[40px] font-black text-white">Questions.</div>
              <div class="mt-1 text-[24px] font-semibold" style={{ color: YC[yk(y)] }}>Ten minutes — use them.</div>
            </div>
            <div class="text-right text-[20px] font-semibold leading-relaxed text-white/70">
              <div class="text-[23px] font-black text-white">{CONTACT.office}</div>
              <div>{CONTACT.email} · {CONTACT.phone}</div>
              <div>{CONTACT.facebook}</div>
              <div>{CONTACT.site}</div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  ),
});

/* ------------------------------------------------- internship, in detail
   Two slides carried over from the national-programme deck for the Year 3 and
   Year 4 sessions, where the internship stops being an abstraction. The rules
   are the department's existing ones; the photographs are real defences. */

export const internshipRules = (y) => ({
  id: `${y}.15c`, title: 'The rules, before you need them',
  notes:
    'These are the department’s existing internship rules — the same ones it runs for the national ' +
    'programme — and they apply to this cohort when it gets there. Read the four numbers out, then spend ' +
    'the time on the right-hand column, because that is the part students do not know. ' +
    'The nomination letter is the one that catches people: companies ask for a letter from the institute, ' +
    'the department issues it, and students discover this the week they need it. ' +
    'Say the last line plainly — nobody is left without a placement, but an in-school internship is the ' +
    'fallback, not the plan, and the students who get the good ones started early. ' +
    'Confirm the August–October window against this year’s academic calendar before stating it as fact.',
  el: (p) => (
    <Slide n={p.n} track={yk(y)}>
      <Head kicker="The department already runs this" small tight>
        The rules, before you need them
      </Head>
      <Body class="grid grid-cols-[1fr_1fr] gap-9 pb-12">
        <div class="grid grid-cols-2 gap-3.5">
          <For each={INTERN_FACTS}>
            {(f) => (
              <div class="flex flex-col justify-center rounded-2xl border-2 p-5"
                style={{ 'border-color': YC[yk(y)] + '44', background: YC[yk(y)] + '0d' }}>
                <div class="flex items-center gap-2.5">
                  <Icon name={f.icon} size={22} style={{ color: YC[yk(y)] }} />
                  <span class="text-[18px] font-black uppercase tracking-wider text-slate-400">{f.k}</span>
                </div>
                <div class="mt-2 font-display text-[29px] font-black leading-tight text-navy-900">{f.v}</div>
                <div class="mt-1 text-[18px] font-semibold leading-snug text-slate-500">{f.s}</div>
              </div>
            )}
          </For>
        </div>
        <div class="flex flex-col justify-between gap-3">
          <For each={INTERN_SUPPORT}>
            {(r) => (
              <div class={`flex items-start gap-3.5 rounded-2xl border-2 px-5 py-3.5
                           ${r[2] === 'warn' ? 'border-gold-500 bg-gold-50' : 'border-good/30 bg-good/5'}`}>
                <Icon name={r[2] === 'warn' ? 'alert' : 'check'} size={25} weight={2.3}
                  class={`mt-0.5 shrink-0 ${r[2] === 'warn' ? 'text-gold-700' : 'text-good'}`} />
                <div class="min-w-0">
                  <div class={`text-[22px] font-black leading-tight
                               ${r[2] === 'warn' ? 'text-gold-700' : 'text-navy-900'}`}>{r[0]}</div>
                  <div class="mt-1 text-[19px] font-semibold leading-snug text-slate-600">{r[1]}</div>
                </div>
              </div>
            )}
          </For>
        </div>
      </Body>
    </Slide>
  ),
});

export const defenceDay = (y) => ({
  id: `${y}.16b`, title: 'Defence day',
  notes:
    'Almost no words on this one — the room is the message. Show them what they will be standing in ' +
    'before they have to stand in it. Everyone in these photographs went through the same two internships. ' +
    'Point out the dress code without making a rule of it: students turn up formal because it matters to them. ' +
    'Then the line that actually lands: you are not defending the company’s project, you are defending ' +
    'your own decisions inside it — which is why a student who only did what they were told has nothing to say.',
  el: (p) => (
    <Slide n={p.n} track={yk(y)}>
      <Head kicker="This is where it ends up" small tight>Defence day</Head>
      <Body class="flex flex-col gap-4 pb-10">
        <div class="grid min-h-0 flex-1 grid-cols-[1.35fr_1fr] gap-4">
          <Photo src={NAT.defenceA} class="min-h-0" />
          <div class="grid min-h-0 grid-rows-2 gap-4">
            <Photo src={NAT.defenceB} class="min-h-0" />
            <Photo src={NAT.defenceC} class="min-h-0" />
          </div>
        </div>
        <div class="flex shrink-0 gap-3.5">
          <For each={['You present to a jury', 'You demo what you built', 'You defend your choices']}>
            {(t) => (
              <span class="flex-1 rounded-xl bg-navy-900 px-5 py-3 text-center text-[23px] font-bold text-white">
                {t}
              </span>
            )}
          </For>
        </div>
      </Body>
    </Slide>
  ),
});

/* ------------------------------------------------- timetable & calendar
   Four slides per session, built from the two files the registry actually
   publishes: the SE sheets of `International Program Schedule.xlsx` and the
   2026–27 academic calendar. Everything here is this cohort's own week. */

export const timetable = (y) => ({
  id: `${y}.9a`, title: 'Your week',
  notes:
    'Let them photograph it — that is what this slide is for, so pause and say so. ' +
    `Then three things they will not read off it themselves. One: ${TIMETABLE[y].slots} slots a week, of which ` +
    `${TIMETABLE[y].practicals} are TP — the practical half is where the marks actually move, and it is the half ` +
    'students treat as optional. Two: the day load is lopsided, so point at the heavy day and the light one and ' +
    'tell them to put their own work in the gap rather than going home. Three: this grid covers Weeks 1–8 only; ' +
    'the rest of the semester is not published yet, so watch the Facebook page rather than assuming it repeats.',
  el: (p) => (
    <Slide n={p.n} track={yk(y)}>
      <Head kicker={`${TIMETABLE_META.semester} · ${TIMETABLE_META.weeks} · ${TIMETABLE_META.from}`}
        small tight>
        Your week — group {TIMETABLE[y].group}
      </Head>
      <Body class="flex flex-col gap-3 pb-10">
        <TimetableGrid year={y} data={TIMETABLE[y]} />
        <TimetableLegend year={y} data={TIMETABLE[y]} />
      </Body>
    </Slide>
  ),
});

export const calendar = (y) => ({
  id: `${y}.9c`, title: 'Semester 1, dated',
  notes:
    'The dates that actually bind. Commencement was Monday — teaching has already started, so the first week ' +
    'is not a warm-up. Then the one most students get wrong: the semester ENDS on 22 January, but the exams are ' +
    'in February, with a preparation week between. That gap is not a holiday, it is the only block of revision ' +
    'time the calendar gives them, and it is the difference between a C and a B. ' +
    'Semester 2 starts 15 February, which is two weeks after the exams — there is no long break in the middle of this year.',
  el: (p) => (
    <Slide n={p.n} track={yk(y)}>
      <Head kicker="Academic calendar 2026–27" small tight>Semester 1, dated</Head>
      <Body class="grid grid-cols-[1.25fr_1fr] gap-8 pb-12">
        <div class="flex flex-col gap-2.5">
          <For each={CALENDAR_S1}>
            {(e) => {
              const tone = {
                now: { bd: YC[yk(y)], bg: YC[yk(y)] + '18', tx: 'text-navy-900' },
                key: { bd: '#0b1e3f', bg: '#f1f5fb', tx: 'text-navy-900' },
                warn: { bd: '#f5b942', bg: '#fffaf0', tx: 'text-gold-700' },
                event: { bd: '#cbd5e1', bg: '#ffffff', tx: 'text-slate-700' },
              }[e.tone];
              return (
                <div class="flex items-center gap-4 rounded-xl border-l-[6px] px-5 py-2.5"
                  style={{ 'border-color': tone.bd, background: tone.bg }}>
                  <span class="w-[128px] shrink-0 text-[21px] font-black tabular-nums text-slate-500">
                    {e.date}
                  </span>
                  <span class={`flex-1 text-[23px] font-black leading-tight ${tone.tx}`}>{e.label}</span>
                  <Show when={e.sub}>
                    <span class="shrink-0 text-[18px] font-semibold text-slate-400">{e.sub}</span>
                  </Show>
                </div>
              );
            }}
          </For>
        </div>
        <div class="flex flex-col gap-4">
          <div class="flex-1 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div class="mb-2.5 flex items-center gap-2.5 text-navy-900">
              <Icon name="calendar" size={24} weight={2} />
              <span class="text-[22px] font-black">No class in Semester 1</span>
            </div>
            <div class="space-y-1">
              <For each={CALENDAR_BREAKS}>
                {(b) => (
                  <div class="flex gap-3 text-[18px] leading-snug">
                    <span class="w-[118px] shrink-0 font-bold tabular-nums text-slate-500">{b[0]}</span>
                    <span class="font-semibold text-slate-700">{b[1]}</span>
                  </div>
                )}
              </For>
            </div>
          </div>
          <div class="rounded-2xl bg-navy-900 px-6 py-4">
            <div class="text-[20px] font-bold leading-snug text-white">
              Semester 1 ends 22 January; the exams are in February.
              <span class="text-cyan-400"> The week between is revision, not holiday.</span>
            </div>
          </div>
        </div>
      </Body>
    </Slide>
  ),
});

export const teachingTeam = (y) => {
  const [s1, s2] = SEMESTERS[y];
  const by = new Map();
  [...s1, ...s2].forEach(([code, name, cr, icon, who]) => {
    if (!by.has(who)) by.set(who, []);
    by.get(who).push(name);
  });
  const team = [...by.entries()].sort((a, b) => b[1].length - a[1].length);
  return {
    id: `${y}.9d`, title: 'Who teaches you this year',
    notes:
      'Names, so they stop saying "the teacher". The ones carrying two or three of their courses are the people ' +
      'worth building a relationship with — that is who writes the recommendation letter, supervises the ' +
      'internship and answers the email in two years. ' +
      'Say the practical thing: every one of these people has office hours, almost nobody uses them, and the ' +
      'students who do are the ones who get the opportunities first.',
    el: (p) => (
      <Slide n={p.n} track={yk(y)}>
        <Head kicker={`${team.length} lecturers · both semesters`} small tight>
          Who teaches you this year
        </Head>
        <Body class="flex flex-col gap-4 pb-12">
          <div class="grid grid-cols-2 gap-x-5 gap-y-2">
            <For each={team}>
              {(t) => (
                <div class="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-2">
                  <span class="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full
                               text-[16px] font-black text-white"
                    style={{ background: t[1].length > 1 ? YC[yk(y)] : '#94a3b8' }}>
                    {t[1].length}
                  </span>
                  <div class="min-w-0">
                    <div class="text-[20px] font-black leading-tight text-navy-900">{t[0]}</div>
                    <div class="truncate text-[16px] font-semibold leading-tight text-slate-500">
                      {t[1].join(' · ')}
                    </div>
                  </div>
                </div>
              )}
            </For>
          </div>
          <div class="flex shrink-0 items-center gap-5 rounded-2xl bg-navy-900 px-8 py-3.5">
            <Icon name="mail" size={28} class="shrink-0 text-cyan-400" />
            <span class="text-[22px] font-bold text-white">
              Every one of them has office hours. Almost nobody uses them.
            </span>
          </div>
        </Body>
      </Slide>
    ),
  };
};

/* ------------------------------------------------------- the road ahead
   Where the rest of the degree goes, told as capability rather than syllabus.
   Year 2 gets all three years on one slide because they are far away; the
   senior sessions get one slide per remaining year, because for them it is
   the next decision rather than the distant plan. */

export const roadAhead = (y) => ({
  id: `${y}.14`, title: 'The road ahead',
  notes:
    'Three years on one slide, so keep it moving — one sentence per column, then the closing line. ' +
    'The point is not the course names, it is that each year makes them able to do something they cannot do ' +
    'today, and the order is deliberate: build it, scale it, own it. ' +
    'If one thing lands, make it the last line — the degree is five years, and the part employers look at ' +
    'starts in Year 3, which is twelve months away.',
  el: (p) => (
    <Slide n={p.n} track={yk(y)}>
      <Head kicker="What the rest of the degree makes you" small tight>The road ahead</Head>
      <Body class="flex flex-col gap-4 pb-12">
        <div class="grid flex-1 grid-cols-3 gap-5">
          <For each={[3, 4, 5]}>
            {(t) => {
              const f = FUTURE_READY[t];
              return (
                <div class="flex flex-col overflow-hidden rounded-2xl border-2"
                  style={{ 'border-color': YC[`y${t}`] + '55', background: YC[`y${t}`] + '0b' }}>
                  <div class="flex h-[76px] shrink-0 items-center gap-3 px-5" style={{ background: YC[`y${t}`] + '22' }}>
                    <span class="font-display text-[42px] font-black leading-none"
                      style={{ color: YC[`y${t}`] }}>{t}</span>
                    <div class="min-w-0">
                      <div class="text-[19px] font-black leading-tight text-navy-900">{f.theme}</div>
                      <div class="text-[16px] font-bold text-slate-500">{f.credits} credits</div>
                    </div>
                  </div>
                  <ul class="flex-1 space-y-2 px-5 py-4">
                    <For each={f.able.slice(0, 4)}>
                      {(a) => (
                        <li class="flex items-start gap-2.5">
                          <span class="mt-[9px] h-[7px] w-[7px] shrink-0 rounded-full"
                            style={{ background: YC[`y${t}`] }} />
                          <span class="text-[18px] font-semibold leading-snug text-slate-700">{a}</span>
                        </li>
                      )}
                    </For>
                  </ul>
                </div>
              );
            }}
          </For>
        </div>
        <div class="flex shrink-0 items-center gap-5 rounded-2xl bg-navy-900 px-8 py-4">
          <Icon name="arrowRight" size={30} weight={2.4} class="shrink-0 text-cyan-400" />
          <span class="text-[23px] font-bold text-white">
            Build it · scale it · own it. The year employers actually look at starts twelve months from now.
          </span>
        </div>
      </Body>
    </Slide>
  ),
});

export const yearAhead = (y, t) => {
  const f = FUTURE_READY[t];
  const [s1, s2] = SEMESTERS[t];
  const meta = YEARS.find((Y) => Y.y === t);
  return {
    id: `${y}.14.${t}`, title: `Year ${t} — what it makes you`,
    notes:
      `Not the course list again — they have seen credits. This is what Year ${t} makes them able to do, ` +
      'and the five lines are deliberately phrased as verbs so a student can hear the difference between ' +
      'a syllabus and a capability. ' +
      `Land the unlocks line: ${f.unlocks} ` +
      `And flag the shape of the year: ${f.watch}` +
      (t === 5
        ? ' For Year 5, add the honest caveat again — the courses are written, nobody has sat them, and the '
        + 'first cohort gets a say in how the year runs.'
        : ''),
    el: (p) => (
      <Slide n={p.n} track={yk(y)}>
        <Head kicker={`Year ${t} · ${f.theme} · ${meta.credits} credits`} small tight>
          What Year {t} makes you able to do
        </Head>
        <Body class="grid grid-cols-[1fr_440px] gap-9 pb-12">
          <div class="flex flex-col justify-center gap-2.5">
            <For each={f.able}>
              {(a, i) => (
                <div class="flex items-center gap-4 rounded-xl border-l-[6px] bg-slate-50 px-5 py-3"
                  style={{ 'border-color': YC[`y${t}`] }}>
                  <span class="font-display text-[24px] font-black tabular-nums"
                    style={{ color: YC[`y${t}`] }}>0{i() + 1}</span>
                  <span class="text-[21px] font-bold leading-snug text-slate-800">{a}</span>
                </div>
              )}
            </For>
          </div>
          <div class="flex flex-col gap-4">
            <div class="rounded-2xl border border-slate-200 bg-white p-4">
              <div class="mb-1.5 flex items-center gap-2.5">
                <Icon name={f.icon} size={22} style={{ color: YC[`y${t}`] }} />
                <span class="text-[19px] font-black text-navy-900">The courses behind it</span>
              </div>
              <div class="flex flex-wrap gap-1">
                <For each={[...s1, ...s2]}>
                  {(c) => (
                    <span class="rounded-lg border border-slate-200 bg-slate-50 px-2 py-[3px]
                                 text-[15px] font-semibold leading-tight text-slate-600">
                      {c[1]}
                    </span>
                  )}
                </For>
              </div>
            </div>
            <div class="rounded-2xl border-2 border-gold-500 bg-gold-50 p-4">
              <div class="text-[19px] font-black text-gold-700">Worth knowing now</div>
              <div class="mt-1 text-[17px] font-semibold leading-snug text-slate-700">{f.watch}</div>
            </div>
            <div class="rounded-2xl bg-navy-900 px-5 py-4">
              <div class="text-[16px] font-black uppercase tracking-wider text-cyan-400">What it unlocks</div>
              <div class="mt-1 text-[19px] font-bold leading-snug text-white">{f.unlocks}</div>
            </div>
          </div>
        </Body>
      </Slide>
    ),
  };
};

export const afterDegree = (y) => ({
  id: `${y}.14.end`, title: 'And then what',
  notes:
    'The last question of the degree, asked while there is still time to steer towards an answer. ' +
    'Three doors, and the honest thing about each: the internship is usually the interview, so the placement ' +
    "they arrange in Year 4 is the job application; a master's abroad is decided by GPA and English, both of " +
    'which are being set right now; and the Incubation Center takes student ventures, which is why ' +
    'Entrepreneurship and Innovation is a taught course rather than a club. ' +
    'Close by naming the two students going to Missouri — the door opened because they applied.',
  el: (p) => (
    <Slide n={p.n} track={yk(y)}>
      <Head kicker="After the engineer's degree" small tight>And then what</Head>
      <Body class="flex flex-col gap-5 pb-12">
        <div class="grid flex-1 grid-cols-3 gap-5">
          <For each={AFTER_DEGREE}>
            {(d) => (
              <div class="flex flex-col rounded-2xl border border-slate-200 bg-white p-6">
                <span class="flex h-[54px] w-[54px] items-center justify-center rounded-xl text-white"
                  style={{ background: YC[yk(y)] }}>
                  <Icon name={d.icon} size={28} weight={1.8} />
                </span>
                <div class="mt-4 text-[26px] font-black leading-tight text-navy-900">{d.t}</div>
                <div class="mt-2 text-[19px] font-semibold leading-snug text-slate-600">{d.s}</div>
                <div class="mt-auto pt-4 text-[17px] font-bold leading-snug"
                  style={{ color: YC[yk(y)] }}>{d.note}</div>
              </div>
            )}
          </For>
        </div>
        <div class="flex shrink-0 items-center gap-5 rounded-2xl bg-navy-900 px-8 py-4">
          <Icon name="plane" size={30} class="shrink-0 text-cyan-400" />
          <span class="text-[23px] font-bold text-white">
            All three doors are already open. The only people who go through them are the ones who ask.
          </span>
        </div>
      </Body>
    </Slide>
  ),
});
