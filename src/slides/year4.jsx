import { For } from 'solid-js';
import { Slide, Head, Body, Photo, YearDivider, YC } from '../components/Layout';
import { CourseGrid, SemesterTag } from '../components/Course';
import { InternshipTimeline } from '../components/Figures';
import Icon from '../components/Icon';
import { SE, NAT } from '../data/assets';
import { Y4S1, Y4S2, Y5S1, Y5S2 } from '../data/curriculum';

/* Year 4 — Generation 1, the senior cohort in the building and the first that
   will reach Year 5. Two things make this session different from the other
   two: their first internship is twelve months away and genuinely imminent,
   and Year 5 does not exist yet as a lived thing. Both deserve honesty. */

export const S8 = {
  id: '4.8', title: 'Year 4 — opener',
  notes:
    'Two sentences that only this room gets to hear. First: you are the most senior Software Engineering students ' +
    'in this building, and there is nobody ahead of you to copy. Second: the programme moved from four years to ' +
    'five, so you are the first cohort that will sit Year 5 — which means your feedback shapes it. ' +
    'Do not oversell that as glamorous; it also means some things will be arranged late, and they should say so when they are.',
  el: (p) => (
    <YearDivider n={p.n} numeral="4" track="y4" photo={SE.abaA} pos="center 35%"
      title="Advanced Systems & Capstone"
      sub="The senior year — and the first cohort to reach Year 5"
      tags={['27 credits', '9 courses', 'Capstone Computing Project 2']} />
  ),
};

export const S9 = {
  id: '4.9', title: 'Year 4 · Semester 1',
  notes:
    'Five courses, 14 credits — the lightest teaching load since the foundation year, and that is deliberate: ' +
    'the load moves to the capstone and the internship search. Distributed Systems and Data Security & Privacy ' +
    'are the two that interviewers probe, because they are where a graduate stops sounding like a student. ' +
    'Game Theory looks like an outlier; it is about reasoning under competing incentives, which is what product ' +
    'decisions actually are.',
  el: (p) => (
    <Slide n={p.n} track="y4">
      <Head kicker="Year 4 · Semester 1" small tight bar="linear-gradient(90deg,#a78bfa,#8b5cf6)">
        Semester 1 — you stop sounding like a student
      </Head>
      <Body class="grid grid-cols-[1fr_326px] gap-8">
        <div>
          <SemesterTag label="Semester 1" credits="14.0" year="y4" note="5 courses" />
          <CourseGrid courses={Y4S1} cols="grid-cols-1" />
        </div>
        <div class="flex min-h-0 flex-col gap-4">
          <div class="rounded-2xl border-2 border-gold-500 bg-gold-50 p-5">
            <div class="text-[23px] font-black text-gold-700">The lightest load since Year 1</div>
            <div class="mt-2 text-[21px] font-bold leading-snug text-slate-700">
              14 credits — on purpose. The rest of your capacity goes to Capstone 2 and finding an internship.
            </div>
          </div>
          <Photo src={SE.abaB} class="min-h-0 flex-1" caption="ABA Bank site visit"
                 sub="Inside a real engineering organisation" />
        </div>
      </Body>
    </Slide>
  ),
};

export const S10 = {
  id: '4.10', title: 'Year 4 · Semester 2',
  notes:
    'Capstone Computing Project 2 is the piece of work they will be talking about in interviews for the next ' +
    'three years, so it is worth more than four credits of effort. Machine Learning is taught by Dr. PHAUK Sokkhey, ' +
    'who also taught their Linear Algebra and Statistics in Year 2 — say that, because it reframes the maths they ' +
    'resented as the thing the ML course is built on. Cloud Computing and DevOps together are the two lines on a ' +
    'CV that currently move salaries most, and ViLa Lab is still the research route if anyone wants it.',
  el: (p) => (
    <Slide n={p.n} track="y4">
      <Head kicker="Year 4 · Semester 2" small tight bar="linear-gradient(90deg,#a78bfa,#8b5cf6)">
        Semester 2 — the work you keep talking about
      </Head>
      <Body class="grid grid-cols-[1fr_326px] gap-8">
        <div>
          <SemesterTag label="Semester 2" credits="13.0" year="y4" note="4 courses" />
          <CourseGrid courses={Y4S2} cols="grid-cols-1" />
          <div class="mt-4 flex items-center gap-4 rounded-2xl bg-navy-900 px-6 py-4">
            <Icon name="sigma" size={30} class="shrink-0 text-cyan-400" />
            <span class="text-[21px] font-bold leading-snug text-white">
              Dr. PHAUK Sokkhey taught your Linear Algebra and Statistics in Year 2.
              Machine Learning is where that maths finally pays.
            </span>
          </div>
        </div>
        <div class="flex min-h-0 flex-col gap-4">
          <div class="rounded-2xl border-2 p-5" style={{ 'border-color': YC.y4 + '55', background: YC.y4 + '0f' }}>
            <Icon name="rocket" size={32} style={{ color: YC.y4 }} />
            <div class="mt-2 text-[23px] font-black text-navy-900">Capstone 2</div>
            <div class="mt-1.5 text-[19px] font-semibold leading-snug text-slate-600">
              Four credits on the transcript. Three years of interview answers in practice.
            </div>
          </div>
          <Photo src={SE.cyberC} class="min-h-0 flex-1" caption="Workshops run through the year" />
        </div>
      </Body>
    </Slide>
  ),
};

export const S11 = {
  id: '4.11', title: 'Year 5 — what is actually there',
  notes:
    'Be straight here, because this room will notice spin. The Year 5 curriculum exists on paper: four specialist ' +
    'courses at three credits each, then the final internship at nine credits with a thesis and a jury defence. ' +
    'The lecturers for those four courses are not all assigned yet — say so plainly, and say that being the first ' +
    'cohort means they will be asked what the year should contain. That is a real invitation, so follow it up.',
  el: (p) => (
    <Slide n={p.n} track="y4">
      <Head kicker="You are the first cohort to get here" small tight
            sub="Written in the 2026 curriculum. Teaching staff for Semester 1 are still being assigned.">
        Year 5 — what is actually there
      </Head>
      <Body class="grid grid-cols-2 gap-7 pb-10">
        <div>
          <SemesterTag label="Year 5 · Semester 1" credits="12.0" year="y5" note="4 courses" />
          <CourseGrid courses={Y5S1} cols="grid-cols-1" />
        </div>
        <div class="flex flex-col">
          <SemesterTag label="Year 5 · Semester 2" credits="11.0" year="y5" note="internships" />
          <CourseGrid courses={Y5S2} cols="grid-cols-1" />
          <div class="mt-4 flex-1 rounded-2xl border-2 border-gold-500 bg-gold-50 p-6">
            <div class="flex items-center gap-3 text-gold-700">
              <Icon name="users" size={28} weight={2.1} />
              <span class="text-[25px] font-black">You get a say in this</span>
            </div>
            <div class="mt-3 text-[21px] font-bold leading-snug text-slate-700">
              Nobody has sat Year 5 yet. When the coordinator asks what it should contain,
              answer properly — this is the one year of your degree you can still change.
            </div>
          </div>
        </div>
      </Body>
    </Slide>
  ),
};

export const S15 = {
  id: '4.15', title: 'Your internship is twelve months away',
  notes:
    'The most actionable slide in any of the three sessions, so give it time. Internship 1 is two credits and ' +
    'falls after Year 4 — roughly the August to October window the department runs for GIC. Confirm this ' +
    'year\'s exact dates with the coordinator before stating them as fact; the five-year curriculum lists the ' +
    'internship rows under Year 5 Semester 2 while labelling them "year 4" and "year 5", and that wants ' +
    'clarifying for this cohort specifically. What is not in doubt: they should be approaching organisations ' +
    'this semester, not next June.',
  el: (p) => (
    <Slide n={p.n} track="y4">
      <Head kicker="The nearest real deadline you have" small tight>Your first internship is twelve months away</Head>
      <Body class="flex flex-col gap-5 pb-10">
        <div class="h-[188px]">
          <InternshipTimeline
            band={[560, 290]} bandLabel="INTERNSHIP 1 · 2 CREDITS · AFTER YEAR 4"
            marks={[
              { x: 90,  t: 'Now', s: 'start approaching companies' },
              { x: 400, t: 'Year 4 · S2', s: 'Capstone 2' },
              { x: 705, t: 'after Year 4', s: 'internship 1' },
              { x: 980, t: 'Year 5', s: 'final internship · 9 cr' },
            ]} />
        </div>
        <div class="grid flex-1 grid-cols-3 gap-4">
          <div class="flex flex-col justify-center rounded-2xl border-2 border-gold-500 bg-gold-50 p-6">
            <Icon name="mail" size={32} class="text-gold-700" />
            <div class="mt-3 text-[24px] font-black text-navy-900">Write to three organisations</div>
            <div class="mt-1.5 text-[20px] font-semibold leading-snug text-slate-600">
              This semester. Most of the department's 39 took one student because one student asked.
            </div>
          </div>
          <div class="flex flex-col justify-center rounded-2xl border border-slate-200 bg-white p-6">
            <Icon name="file" size={32} class="text-azure-500" />
            <div class="mt-3 text-[24px] font-black text-navy-900">Have something to attach</div>
            <div class="mt-1.5 text-[20px] font-semibold leading-snug text-slate-600">
              A repository and a deployed capstone beat a CV with no evidence in it.
            </div>
          </div>
          <div class="flex flex-col justify-center rounded-2xl border border-slate-200 bg-white p-6">
            <Icon name="users" size={32} class="text-azure-500" />
            <div class="mt-3 text-[24px] font-black text-navy-900">Tell the coordinator</div>
            <div class="mt-1.5 text-[20px] font-semibold leading-snug text-slate-600">
              No placement found means an assigned one — but only if we know in time.
            </div>
          </div>
        </div>
      </Body>
    </Slide>
  ),
};

const ACTIONS = [
  ['Email three companies', 'mail', 'This semester, not next June'],
  ['Finish the capstone well', 'rocket', 'It is your interview answer for three years'],
  ['Pick a specialisation', 'compass', 'Cloud, ML, security — be known for one'],
  ['Apply for 2+2 or exchange', 'plane', 'The calendar does not wait for you'],
  ['Ask about Year 5', 'users', 'You are the cohort that gets to shape it'],
];

export const S12 = {
  id: '4.12', title: 'Year 4 — readiness',
  notes:
    'Everything on this slide has a date attached, which is what separates the Year 4 session from the other two. ' +
    'Name the two students who are leaving for the University of Central Missouri in August — they applied, which ' +
    'is the entire difference between them and the people who did not. ' +
    'Close by saying the coordinator will bring the internship paperwork to them; they only have to start the conversations.',
  el: (p) => (
    <Slide n={p.n} track="y4">
      <Head kicker="Action" accent>Five things with a deadline on them</Head>
      <Body>
        <div class="grid grid-cols-5 gap-4">
          <For each={ACTIONS}>
            {(a, i) => (
              <div class="flex flex-col rounded-2xl border-2 p-5"
                   style={{ 'border-color': YC.y4 + '66', background: YC.y4 + '0f' }}>
                <div class="flex h-[56px] w-[56px] items-center justify-center rounded-xl text-white"
                     style={{ background: YC.y4 }}>
                  <Icon name={a[1]} size={29} weight={1.9} />
                </div>
                <div class="mt-4 text-[24px] font-black leading-tight text-navy-900">{a[0]}</div>
                <div class="mt-2 text-[19px] font-semibold leading-snug text-slate-600">{a[2]}</div>
                <div class="mt-auto pt-3 font-display text-[38px] font-black" style={{ color: YC.y4 + '66' }}>
                  0{i() + 1}
                </div>
              </div>
            )}
          </For>
        </div>
        <div class="mt-6 flex items-center gap-5 rounded-2xl bg-navy-900 px-8 py-5">
          <Icon name="plane" size={36} class="shrink-0 text-cyan-400" />
          <span class="text-[26px] font-bold text-white">
            Two students from this programme fly to Missouri in August. The difference between them
            and everyone else is that they applied.
          </span>
        </div>
      </Body>
    </Slide>
  ),
};

export const CLOSE_ACTIONS = [
  ['Email three companies', 'Internship 1 is twelve months away'],
  ['Deploy the capstone', 'A URL you can put in an email'],
  ['Book the English test', '2+2 and exchange screen on it first'],
  ['Pick a specialisation', 'Cloud, ML or security — choose one'],
  ['Send us Year 5 feedback', 'You are the cohort that shapes it'],
];
