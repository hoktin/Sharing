import { For } from 'solid-js';
import { Slide, Head, Body, Photo, YearDivider, YC } from '../components/Layout';
import { CourseGrid, SemesterTag } from '../components/Course';
import { InternshipTimeline } from '../components/Figures';
import Icon from '../components/Icon';
import { SE, NAT } from '../data/assets';
import { Y3S1, Y3S2 } from '../data/curriculum';

/* Year 3 — Generation 2. The specialist year: nine courses, two of them very
   large (Internet Programming at 5 credits, Mobile Application Development at
   6), and the first Capstone. This is the year their portfolio either starts
   existing or doesn't. */

export const S8 = {
  id: '3.8', title: 'Year 3 — opener',
  notes:
    'Nine courses, 33 credits — fewer units than last year but each one much bigger. Say the headline: this is ' +
    'the year you build things other people can open. By June they should have a web application and a mobile ' +
    'application they can show, plus a capstone. That is a portfolio, and almost nobody arrives at an interview with one.',
  el: (p) => (
    <YearDivider n={p.n} numeral="3" track="y3" photo={SE.cohort} pos="center 48%"
      title="Core Software Engineering"
      sub="The year your name goes on something that runs"
      tags={['33 credits', '9 courses', 'Capstone Computing Project 1']} />
  ),
};

export const S9 = {
  id: '3.9', title: 'Year 3 · Semester 1',
  notes:
    'Internet Programming is five credits and 112 hours — the single largest teaching unit in the degree, and it ' +
    'sits next to Software System Architecture with the same lecturer, which is deliberate: you build it in one ' +
    'and learn why it is shaped that way in the other. IT Project Management is not an admin course; it is where ' +
    'they learn to make trade-offs, which is exactly the judgement AI does not have.',
  el: (p) => (
    <Slide n={p.n} track="y3">
      <Head kicker="Year 3 · Semester 1" small tight bar="linear-gradient(90deg,#60a5fa,#3b82f6)">
        Semester 1 — build it, then learn why
      </Head>
      <Body class="grid grid-cols-[1fr_326px] gap-8">
        <div>
          <SemesterTag label="Semester 1" credits="17.0" year="y3" note="5 courses" />
          <CourseGrid courses={Y3S1} cols="grid-cols-1" />
        </div>
        <div class="flex min-h-0 flex-col gap-4">
          <div class="rounded-2xl border-2 border-gold-500 bg-gold-50 p-5">
            <div class="flex items-center gap-2.5 text-gold-700">
              <Icon name="alert" size={25} weight={2.2} />
              <span class="text-[23px] font-black">The biggest unit in the degree</span>
            </div>
            <div class="mt-2 text-[21px] font-bold leading-snug text-slate-700">
              Internet Programming — 5 credits, 112 hours. Nothing else in five years is this large.
            </div>
          </div>
          <Photo src={SE.labB} class="min-h-0 flex-1" caption="Project work, not lecture notes"
                 sub="Mr. CHUN Thavorac teaches both IP and SSA — treat them as one subject" />
        </div>
      </Body>
    </Slide>
  ),
};

export const S10 = {
  id: '3.10', title: 'Year 3 · Semester 2',
  notes:
    'Four courses, but Mobile Application Development alone is six credits and 128 hours — the largest unit in ' +
    'the whole programme. Capstone Computing Project 1 is four credits and it is the first piece of work that ' +
    'looks like a job. Tell them to choose the capstone topic early and choose it because they want the thing ' +
    'to exist, not because it looks easy to mark.',
  el: (p) => (
    <Slide n={p.n} track="y3">
      <Head kicker="Year 3 · Semester 2" small tight bar="linear-gradient(90deg,#60a5fa,#3b82f6)">
        Semester 2 — four courses, two of them enormous
      </Head>
      <Body class="grid grid-cols-[1fr_326px] gap-8">
        <div>
          <SemesterTag label="Semester 2" credits="16.0" year="y3" note="4 courses" />
          <CourseGrid courses={Y3S2} cols="grid-cols-1" />
          <div class="mt-4 flex items-center gap-4 rounded-2xl border-2 border-gold-500 bg-gold-50 px-6 py-4">
            <Icon name="rocket" size={32} class="shrink-0 text-gold-700" />
            <span class="text-[22px] font-bold leading-snug text-slate-700">
              Pick your Capstone topic because you want the thing to exist — not because it looks easy to mark.
            </span>
          </div>
        </div>
        <div class="flex min-h-0 flex-col gap-4">
          <div class="rounded-2xl border-2 p-5" style={{ 'border-color': YC.y3 + '55', background: YC.y3 + '0f' }}>
            <div class="font-display text-[46px] font-black leading-none" style={{ color: YC.y3 }}>6.0</div>
            <div class="mt-1 text-[22px] font-black text-navy-900">credits · Mobile App Development</div>
            <div class="mt-1.5 text-[19px] font-semibold text-slate-600">
              128 hours — the largest unit in the five years.
            </div>
          </div>
          <Photo src={SE.cyberA} class="min-h-0 flex-1" caption="Cybersecurity workshop"
                 sub="Run for Year 2 and Year 3" />
        </div>
      </Body>
    </Slide>
  ),
};

export const S11 = {
  id: '3.11', title: 'Year 3 — what graduates wish they had done',
  notes:
    'Frame this as hindsight rather than warning. The thing every graduate says is the same: I wish I had kept ' +
    'the work. A repository with a year of commits, a deployed URL and a README beats a transcript in an ' +
    'interview, because it is evidence rather than a claim. The second point is about the capstone team: ' +
    'a group that divides work by component ships; one that divides by "you do the coding" does not.',
  el: (p) => (
    <Slide n={p.n} track="y3">
      <Head kicker="Hindsight, borrowed" small tight>What people say they wish they had done in Year 3</Head>
      <Body class="grid grid-cols-2 gap-7">
        <div class="rounded-2xl border-2 border-good/30 bg-good/5 p-7">
          <div class="mb-4 flex items-center gap-3 text-good">
            <Icon name="check" size={29} weight={2.6} />
            <span class="text-[28px] font-black">Worth the effort</span>
          </div>
          <ul class="space-y-3.5 text-[23px] font-semibold leading-snug text-slate-700">
            <li>Deploy something publicly — a URL beats a screenshot</li>
            <li>Keep a repository with a year of real commits</li>
            <li>Write the capstone report as you go, not in June</li>
            <li>Divide team work by component, never by "you code"</li>
          </ul>
        </div>
        <div class="rounded-2xl border-2 border-stop/25 bg-stop/5 p-7">
          <div class="mb-4 flex items-center gap-3 text-stop">
            <Icon name="x" size={29} weight={2.6} />
            <span class="text-[28px] font-black">Costs more than it looks</span>
          </div>
          <ul class="space-y-3.5 text-[23px] font-semibold leading-snug text-slate-700">
            <li>Letting one person carry the capstone</li>
            <li>Choosing a topic because it is easy to mark</li>
            <li>Pasting AI output you cannot defend out loud</li>
            <li>Finishing the year with nothing you can show</li>
          </ul>
        </div>
      </Body>
    </Slide>
  ),
};

const ACTIONS = [
  ['Ship one thing publicly', 'globe', 'A live URL, this semester'],
  ['Pick your capstone early', 'rocket', 'And pick a team that argues well'],
  ['Write as you build', 'file', 'The report is marked, not forgiven'],
  ['Talk to a lab', 'flask', 'ViLa and DADS take students'],
  ['Sit the English test', 'plane', 'Exchange selection starts with it'],
];

export const S12 = {
  id: '3.12', title: 'Year 3 — readiness',
  notes:
    'The lab point is concrete and worth naming: Dr. VALY Dona runs ViLa Lab on Khmer NLP and the lab takes ' +
    'student research assistants, so a student who wants research only has to start the conversation. ' +
    'The English point has a deadline — the exchange and 2+2 routes all screen on it first, and a test booked ' +
    'in Year 4 is a test booked too late.',
  el: (p) => (
    <Slide n={p.n} track="y3">
      <Head kicker="Action" accent>Five things to start this semester</Head>
      <Body>
        <div class="grid grid-cols-5 gap-4">
          <For each={ACTIONS}>
            {(a, i) => (
              <div class="flex flex-col rounded-2xl border-2 p-5"
                   style={{ 'border-color': YC.y3 + '66', background: YC.y3 + '0f' }}>
                <div class="flex h-[56px] w-[56px] items-center justify-center rounded-xl text-white"
                     style={{ background: YC.y3 }}>
                  <Icon name={a[1]} size={29} weight={1.9} />
                </div>
                <div class="mt-4 text-[24px] font-black leading-tight text-navy-900">{a[0]}</div>
                <div class="mt-2 text-[19px] font-semibold leading-snug text-slate-600">{a[2]}</div>
                <div class="mt-auto pt-3 font-display text-[38px] font-black" style={{ color: YC.y3 + '66' }}>
                  0{i() + 1}
                </div>
              </div>
            )}
          </For>
        </div>
        <div class="mt-6 flex items-center gap-5 rounded-2xl bg-navy-900 px-8 py-5">
          <Icon name="bulb" size={36} class="shrink-0 text-cyan-400" />
          <span class="text-[26px] font-bold text-white">
            In twelve months someone will ask what you have built. Decide now what the answer is.
          </span>
        </div>
      </Body>
    </Slide>
  ),
};

export const S15 = {
  id: '3.15', title: 'No internship is scheduled for you',
  notes:
    'Be straight about this, because it is the one thing this cohort will get wrong on their own. ' +
    'The five-year curriculum schedules Internship 1 AFTER Year 4 and the final internship in Year 5. ' +
    'There is nothing in the curriculum for Generation 2 this year — no placement, no credit, no defence. ' +
    'Which is exactly why they should go and arrange one themselves over the vacation. ' +
    'An unassessed, self-arranged internship is worth more than a scheduled one, because nobody made them do it ' +
    'and the company knows that. Tell them what to do: pick three organisations, write a short email with the ' +
    'capstone attached, and ask the coordinator for a nomination letter — the department will issue one even ' +
    'when the placement is not a credited one. Say the last part clearly: if they find something, tell us, ' +
    'because we can often make it official.',
  el: (p) => (
    <Slide n={p.n} track="y3">
      <Head kicker="Nothing is scheduled — which is the point" small tight>
        You have no internship this year. Go and find one.
      </Head>
      <Body class="flex flex-col gap-5 pb-10">
        <div class="h-[176px]">
          <InternshipTimeline
            band={[648, 252]} bandLabel="INTERNSHIP 1 · 2 CREDITS · AFTER YEAR 4"
            marks={[
              { x: 110, t: 'Year 3', s: 'you are here · nothing scheduled' },
              { x: 400, t: 'Year 4', s: 'Capstone 2' },
              { x: 774, t: 'after Year 4', s: 'internship 1' },
              { x: 980, t: 'Year 5', s: 'final · 9 cr' },
            ]} />
        </div>
        <div class="grid flex-1 grid-cols-3 gap-4">
          <div class="flex flex-col justify-center rounded-2xl border-2 border-gold-500 bg-gold-50 p-6">
            <Icon name="mail" size={30} class="text-gold-700" />
            <div class="mt-3 text-[23px] font-black leading-tight text-navy-900">Write to three organisations</div>
            <div class="mt-1.5 text-[19px] font-semibold leading-snug text-slate-600">
              Over the vacation. A short email with your capstone attached beats a CV.
            </div>
          </div>
          <div class="flex flex-col justify-center rounded-2xl border border-slate-200 bg-white p-6">
            <Icon name="file" size={30} class="text-azure-500" />
            <div class="mt-3 text-[23px] font-black leading-tight text-navy-900">Ask for a nomination letter</div>
            <div class="mt-1.5 text-[19px] font-semibold leading-snug text-slate-600">
              We issue one even when the placement carries no credit. Companies expect it.
            </div>
          </div>
          <div class="flex flex-col justify-center rounded-2xl border border-slate-200 bg-white p-6">
            <Icon name="handshake" size={30} class="text-azure-500" />
            <div class="mt-3 text-[23px] font-black leading-tight text-navy-900">Then tell us</div>
            <div class="mt-1.5 text-[19px] font-semibold leading-snug text-slate-600">
              If you find something good, we can often make it official.
            </div>
          </div>
        </div>
        <div class="flex shrink-0 items-center gap-5 rounded-2xl bg-navy-900 px-8 py-4">
          <Icon name="bulb" size={30} class="shrink-0 text-cyan-400" />
          <span class="text-[23px] font-bold text-white">
            An internship nobody made you do is the one an employer actually reads.
          </span>
        </div>
      </Body>
    </Slide>
  ),
};

export const CLOSE_ACTIONS = [
  ['Form your capstone team', 'Choose people who argue, not people who agree'],
  ['Deploy something', 'Anything. A live URL this month'],
  ['Follow the page', 'ITC International Engineering School, on Facebook'],
  ['Email one lab', 'ViLa or DADS — one paragraph is enough'],
  ['Book the English test', 'Before the exchange calendar opens'],
];
