import { For } from 'solid-js';
import Icon from '../components/Icon';
import { YC } from '../components/Layout';
import { BRAND, SE } from '../data/assets';
import { CONTACT } from '../data/content';
import { TRACKS } from './index';

/* The cover. Three buttons, one per session — this is what is on screen while
   the room fills up, and the thing you click to start. It is deliberately not
   counted in any track's slide numbering.

   The whole page has to live inside 720px, so the heights here are explicit
   rather than left to the content: masthead 72, title block 164, buttons 300,
   footer 56, with 32px of padding top and bottom. */

export default function Hub(props) {
  return (
    <div class="slide-root">
      <img src={SE.cohort} alt="" class="absolute inset-0 h-full w-full object-cover"
        style={{ 'object-position': 'center 42%' }} />
      <div class="absolute inset-0 bg-gradient-to-br from-navy-950/97 via-navy-900/94 to-navy-800/82" />
      <div class="absolute -right-28 -top-28 h-[440px] w-[440px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(34,211,238,.20), transparent 70%)' }} />

      <div class="relative flex h-full flex-col px-14 py-8">
        {/* masthead */}
        <div class="flex h-[72px] shrink-0 items-start justify-between">
          <div class="flex items-center gap-4 rounded-2xl bg-white px-5 py-2.5 shadow-lg">
            <img src={BRAND.itc} alt="ITC" class="h-[44px] w-auto" />
            <div class="h-[36px] w-px bg-slate-200" />
            <div class="leading-tight">
              <div class="text-[17px] font-black text-navy-900">INTERNATIONAL ENGINEERING SCHOOL</div>
              <div class="text-[14px] font-bold text-slate-500">Institute of Technology of Cambodia</div>
            </div>
          </div>
          <div class="text-right">
            <div class="text-[19px] font-black text-cyan-400">Academic year 2026–27</div>
            <div class="mt-0.5 text-[16px] font-semibold text-white/55">
              Three sessions · one per year group
            </div>
          </div>
        </div>

        {/* title */}
        <div class="mt-3 shrink-0">
          <div class="text-[19px] font-bold uppercase tracking-[.16em] text-cyan-400">Orientation</div>
          <h1 class="mt-1.5 font-display text-[62px] font-black leading-[0.98] tracking-tight text-white">
            Software Engineering
          </h1>
          <p class="mt-2 text-[24px] font-semibold text-azure-200">Choose your session</p>
        </div>

        {/* the three buttons */}
        <div class="mt-5 grid min-h-0 flex-1 grid-cols-3 gap-5">
          <For each={TRACKS}>
            {(t) => (
              <button
                onClick={() => props.onPick(t.key)}
                class="group relative flex flex-col overflow-hidden rounded-3xl border-2 border-white/20
                       bg-white/[0.07] px-6 pb-5 pt-6 text-left transition hover:-translate-y-1
                       hover:border-white/50 hover:bg-white/[0.14] focus:outline-none focus-visible:ring-4"
                style={{ '--tw-ring-color': YC[t.key] }}
              >
                <span class="absolute inset-x-0 top-0 h-[7px]" style={{ background: YC[t.key] }} />
                <span class="flex items-baseline gap-2.5">
                  <span class="font-display text-[60px] font-black leading-none" style={{ color: YC[t.key] }}>
                    {t.year}
                  </span>
                  <span class="text-[20px] font-black uppercase tracking-wider text-white/65">Year</span>
                </span>
                <span class="mt-2.5 flex h-[56px] items-start text-[23px] font-black leading-tight text-white">{t.theme}</span>
                <span class="text-[17px] font-semibold leading-snug text-white/55">{t.cohort}</span>

                <span class="mt-3 flex flex-wrap gap-1.5">
                  <For each={t.chips}>
                    {(c) => (
                      <span class="rounded-full border border-white/20 bg-white/10 px-3 py-[3px]
                                   text-[15px] font-bold text-white/85">{c}</span>
                    )}
                  </For>
                </span>

                <span class="mt-auto flex items-center gap-2 pt-4 text-[18px] font-black"
                  style={{ color: YC[t.key] }}>
                  {t.slides.length} slides
                  <Icon name="arrowRight" size={19} weight={2.6}
                    class="transition-transform group-hover:translate-x-1.5" />
                </span>
              </button>
            )}
          </For>
        </div>

        {/* footer */}
        <div class="mt-3.5 flex h-[40px] shrink-0 items-end justify-between gap-6">
          <div class="whitespace-nowrap text-[15px] font-semibold text-white/55">
            <span class="font-black text-white/85">Dr. CHEA Samneang</span> · Head
            <span class="mx-1.5 text-white/25">|</span>
            <span class="font-black text-white/85">Mr. HOK TIN</span> · SE Coordinator
            <span class="mx-1.5 text-white/25">|</span>
            <span class="font-black text-white/85">Ms. CHAB Sreylen</span> · Program Officer
          </div>
          <div class="whitespace-nowrap text-right text-[15px] font-semibold text-white/45">
            {CONTACT.office}
            <span class="mx-1.5 text-white/25">|</span>
            <span class="text-white/30">click a session, or press 2 / 3 / 4</span>
          </div>
        </div>
      </div>
    </div>
  );
}
