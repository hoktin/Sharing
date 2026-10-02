import { createSignal, createEffect, onCleanup, onMount, For, Show } from 'solid-js';
import { Dynamic as Dyn } from 'solid-js/web';
import { TRACKS, TRACK_BY_KEY, ALL_SLIDES } from './slides';
import { YC } from './components/Layout';
import Icon from './components/Icon';
import Hub from './slides/Hub';

const W = 1280, H = 720;
const PARAMS = new URLSearchParams(typeof location !== 'undefined' ? location.search : '');

/* URL modes
     ?track=y2|y3|y4   open straight into one session (what you use in the room)
     ?print            every session stacked, page-broken — Cmd+P for a PDF
     ?print&track=y3   one session only
     ?slide=N          one slide alone, for thumbnails and screenshots         */

function PrintSheet(props) {
  return (
    <div style={{ background: '#fff' }}>
      <For each={props.tracks}>
        {(t) => (
          <>
            <div class="slide-root flex flex-col items-center justify-center"
                 style={{ 'page-break-after': 'always', 'break-after': 'page', background: '#0b1e3f' }}>
              <div class="font-display text-[170px] font-black leading-none" style={{ color: YC[t.key] }}>
                {t.year}
              </div>
              <div class="mt-4 text-[44px] font-black text-white">Year {t.year} session</div>
              <div class="mt-2 text-[26px] font-semibold text-white/60">{t.theme} · {t.cohort}</div>
            </div>
            <For each={t.slides}>
              {(s, i) => (
                <div class="slide-root" style={{ 'page-break-after': 'always', 'break-after': 'page' }}>
                  <Dyn component={s.el} n={i() + 1} />
                </div>
              )}
            </For>
          </>
        )}
      </For>
    </div>
  );
}

export default function App() {
  const urlTrack = PARAMS.get('track');
  const only = PARAMS.get('slide');

  if (only !== null) {
    const list = urlTrack && TRACK_BY_KEY[urlTrack] ? TRACK_BY_KEY[urlTrack].slides : ALL_SLIDES;
    const n = Math.max(1, Math.min(list.length, parseInt(only, 10) || 1));
    return <div class="slide-root"><Dyn component={list[n - 1].el} n={n} /></div>;
  }
  if (PARAMS.has('print')) {
    const list = urlTrack && TRACK_BY_KEY[urlTrack] ? [TRACK_BY_KEY[urlTrack]] : TRACKS;
    return <PrintSheet tracks={list} />;
  }

  /* null = the hub is showing */
  const [trackKey, setTrackKey] = createSignal(TRACK_BY_KEY[urlTrack] ? urlTrack : null);
  const [i, setI] = createSignal(0);
  const [scale, setScale] = createSignal(1);
  const [notes, setNotes] = createSignal(false);
  const [grid, setGrid] = createSignal(false);
  const [help, setHelp] = createSignal(false);

  const track = () => TRACK_BY_KEY[trackKey()];
  const slides = () => track()?.slides ?? [];
  const total = () => slides().length;
  const cur = () => slides()[i()];

  const openTrack = (k) => { setTrackKey(k); setI(0); setGrid(false); };
  const toHub = () => { setTrackKey(null); setI(0); setGrid(false); setNotes(false); };
  const go = (n) => {
    if (n < 0) { if (i() === 0) toHub(); return; }
    setI(Math.max(0, Math.min(total() - 1, n)));
  };

  /* fit the fixed stage into whatever the projector gives us */
  const fit = () => {
    const pad = notes() ? 300 : 0;
    setScale(Math.min(window.innerWidth / W, (window.innerHeight - pad) / H));
  };
  onMount(() => {
    fit();
    window.addEventListener('resize', fit);
    onCleanup(() => window.removeEventListener('resize', fit));
  });
  createEffect(() => { notes(); trackKey(); fit(); });

  const onKey = (e) => {
    const k = e.key;
    if (!trackKey()) {
      if (k === '2' || k === '3' || k === '4') { openTrack('y' + k); return; }
      if (k === 'f' || k === 'F') toggleFull();
      return;
    }
    if (k === 'ArrowRight' || k === 'PageDown' || k === ' ') { e.preventDefault(); go(i() + 1); }
    else if (k === 'ArrowLeft' || k === 'PageUp') { e.preventDefault(); go(i() - 1); }
    else if (k === 'Home') setI(0);
    else if (k === 'End') setI(total() - 1);
    else if (k === 's' || k === 'S') setNotes(!notes());
    else if (k === 'o' || k === 'O') setGrid(!grid());
    else if (k === '?' || k === 'h' || k === 'H') setHelp(!help());
    else if (k === 'f' || k === 'F') toggleFull();
    else if (k === '2' || k === '3' || k === '4') openTrack('y' + k);
    else if (k === 'Escape') {
      if (grid() || help()) { setGrid(false); setHelp(false); } else toHub();
    }
  };
  const toggleFull = () =>
    document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen();

  onMount(() => {
    window.addEventListener('keydown', onKey);
    onCleanup(() => window.removeEventListener('keydown', onKey));
  });

  return (
    <div class="relative h-full w-full select-none overflow-hidden bg-[#0a1426]">
      {/* ---------------- stage ---------------- */}
      <div class="absolute inset-0 flex items-start justify-center"
           style={{ bottom: notes() ? '300px' : '0px' }}>
        <div class="relative" style={{ width: W * scale() + 'px', height: H * scale() + 'px' }}>
          <div class="stage shadow-2xl" style={{ transform: `scale(${scale()})` }}>
            <Show when={trackKey()} fallback={<Hub onPick={openTrack} />}>
              <div class="anim-in h-full w-full" data-k={trackKey() + ':' + i()}>
                <Dyn component={cur().el} n={i() + 1} />
              </div>
            </Show>
          </div>
        </div>
      </div>

      {/* ---------------- progress ---------------- */}
      <Show when={trackKey()}>
        <div class="pointer-events-none absolute inset-x-0 top-0 z-30 h-[4px] bg-white/10">
          <div class="h-full transition-[width] duration-300"
               style={{ width: ((i() + 1) / total()) * 100 + '%', background: YC[trackKey()] }} />
        </div>
      </Show>

      {/* ---------------- chrome ---------------- */}
      <div class="absolute bottom-0 left-0 right-0 z-30 flex items-center gap-3 px-5 py-3 text-slate-400"
           style={{ bottom: notes() ? '300px' : '0px' }}>
        <Show when={trackKey()} fallback={
          <span class="text-[13px] font-semibold text-slate-500">
            Cover — pick a session, or press <b class="text-slate-300">2</b> / <b class="text-slate-300">3</b> / <b class="text-slate-300">4</b>
          </span>
        }>
          <button class="rounded-lg bg-white/10 px-3 py-1.5 hover:bg-white/20" title="Back to cover (Esc)"
                  onClick={toHub}>
            <Icon name="x" size={18} />
          </button>
          <button class="rounded-lg bg-white/10 px-3 py-1.5 hover:bg-white/20" onClick={() => go(i() - 1)}>
            <Icon name="arrowRight" size={18} class="rotate-180" />
          </button>
          <button class="rounded-lg bg-white/10 px-3 py-1.5 hover:bg-white/20" onClick={() => go(i() + 1)}>
            <Icon name="arrowRight" size={18} />
          </button>
          <span class="ml-1 rounded-md px-2 py-1 text-[12px] font-black text-slate-900"
                style={{ background: YC[trackKey()] }}>
            YEAR {track().year}
          </span>
          <span class="text-[13px] font-bold tabular-nums text-slate-300">{i() + 1} / {total()}</span>
          <span class="rounded-md bg-white/5 px-2 py-1 text-[12px] font-semibold text-slate-400">
            {cur().block} · {cur().blockName}
          </span>
          <span class="truncate text-[12px] text-slate-500">{cur().title}</span>
        </Show>
        <div class="ml-auto flex items-center gap-2 text-[12px] font-semibold">
          <Show when={trackKey()}>
            <Btn on={grid()} onClick={() => setGrid(!grid())} label="Overview" k="O" />
            <Btn on={notes()} onClick={() => setNotes(!notes())} label="Notes" k="S" />
          </Show>
          <Btn onClick={toggleFull} label="Full screen" k="F" />
          <Show when={trackKey()}>
            <Btn on={help()} onClick={() => setHelp(!help())} label="Keys" k="?" />
          </Show>
        </div>
      </div>

      {/* ---------------- speaker notes ---------------- */}
      <Show when={notes() && trackKey()}>
        <div class="absolute inset-x-0 bottom-0 z-40 h-[300px] overflow-y-auto border-t-2 bg-[#0f1b33] px-8 py-5 thin-scroll"
             style={{ 'border-color': YC[trackKey()] + '66' }}>
          <div class="mb-2 flex items-center gap-3">
            <span class="rounded-md px-2 py-0.5 text-[12px] font-black text-slate-900"
                  style={{ background: YC[trackKey()] }}>
              {cur().id}
            </span>
            <span class="text-[15px] font-bold text-white">{cur().title}</span>
          </div>
          <p class="max-w-[1100px] text-[17px] leading-relaxed text-slate-300">{cur().notes}</p>
          <Show when={i() + 1 < total()}>
            <p class="mt-4 text-[13px] font-semibold text-slate-500">Next — {slides()[i() + 1].title}</p>
          </Show>
        </div>
      </Show>

      {/* ---------------- overview ---------------- */}
      <Show when={grid() && trackKey()}>
        <div class="absolute inset-0 z-50 overflow-y-auto bg-[#0a1426]/98 p-8 thin-scroll">
          <div class="mb-6 flex items-center gap-3">
            <button class="rounded-lg bg-white/10 px-3 py-2 text-[13px] font-bold text-slate-300 hover:bg-white/20"
                    onClick={toHub}>← Cover</button>
            <For each={TRACKS}>
              {(t) => (
                <button class={`rounded-lg px-3 py-2 text-[13px] font-bold ${t.key === trackKey() ? 'text-slate-900' : 'bg-white/10 text-slate-300 hover:bg-white/20'}`}
                        style={t.key === trackKey() ? { background: YC[t.key] } : {}}
                        onClick={() => openTrack(t.key)}>
                  Year {t.year}
                </button>
              )}
            </For>
          </div>
          <For each={track().blocks}>
            {(b) => (
              <div class="mb-7">
                <div class="mb-3 flex items-baseline gap-3">
                  <span class="rounded-md px-2 py-0.5 text-[12px] font-black text-slate-900"
                        style={{ background: YC[trackKey()] }}>{b.key}</span>
                  <span class="text-[15px] font-bold text-white">{b.name}</span>
                  <span class="text-[13px] text-slate-500">{b.min} min · {b.slides.length} slides</span>
                </div>
                <div class="grid grid-cols-6 gap-4">
                  <For each={b.slides}>
                    {(s) => {
                      const idx = slides().findIndex((x) => x.id === s.id);
                      return (
                        <button class="group relative overflow-hidden rounded-lg border-2 text-left"
                                style={{ 'border-color': idx === i() ? YC[trackKey()] : 'rgba(255,255,255,.1)' }}
                                onClick={() => { setI(idx); setGrid(false); }}>
                          <div class="relative bg-white" style={{ width: '100%', 'padding-bottom': '56.25%' }}>
                            <div class="absolute inset-0 origin-top-left"
                                 style={{ width: W + 'px', height: H + 'px', transform: 'scale(0.158)' }}>
                              <Dyn component={s.el} n={idx + 1} />
                            </div>
                          </div>
                          <div class="flex items-center gap-2 bg-[#121d36] px-2 py-1.5">
                            <span class="text-[11px] font-black" style={{ color: YC[trackKey()] }}>{idx + 1}</span>
                            <span class="truncate text-[11px] text-slate-300">{s.title}</span>
                          </div>
                        </button>
                      );
                    }}
                  </For>
                </div>
              </div>
            )}
          </For>
        </div>
      </Show>

      {/* ---------------- help ---------------- */}
      <Show when={help()}>
        <div class="absolute right-5 z-50 rounded-xl border border-white/15 bg-[#121d36] p-5 text-[13px] text-slate-300 shadow-2xl"
             style={{ bottom: notes() ? '316px' : '64px' }}>
          <div class="mb-2 font-black text-white">Keyboard</div>
          <For each={[['→ / Space', 'next slide'], ['←', 'previous (back to cover at slide 1)'],
                      ['2 / 3 / 4', 'jump to that year’s session'], ['Home / End', 'first / last'],
                      ['O', 'overview grid'], ['S', 'speaker notes'], ['F', 'full screen'],
                      ['Esc', 'close overlay, then back to cover']]}>
            {(r) => (
              <div class="flex gap-4 py-0.5">
                <span class="w-[120px] font-bold text-cyan-400">{r[0]}</span>
                <span>{r[1]}</span>
              </div>
            )}
          </For>
        </div>
      </Show>
    </div>
  );
}

function Btn(props) {
  return (
    <button onClick={props.onClick}
            class={`rounded-lg px-2.5 py-1.5 ${props.on ? 'bg-cyan-400 text-slate-900' : 'bg-white/10 hover:bg-white/20'}`}>
      {props.label} <span class="opacity-50">{props.k}</span>
    </button>
  );
}
