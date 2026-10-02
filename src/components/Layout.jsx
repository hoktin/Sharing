import { For, Show } from 'solid-js';
import Icon from './Icon';

/* Year colour tokens, mirrored in index.css so SVG and Tailwind agree. */
export const YC = { y1: '#94a3b8', y2: '#06b6d4', y3: '#3b82f6', y4: '#8b5cf6', y5: '#f5b942' };

/* ---------------------------------------------------------------- frame */

export function Slide(props) {
  return (
    <div class={`slide-root flex flex-col ${props.class ?? ''}`} style={props.style}>
      {props.children}
      <Show when={!props.bare}>
        <Footer n={props.n} dark={props.dark} track={props.track} />
      </Show>
    </div>
  );
}

function Footer(props) {
  return (
    <div class={`absolute bottom-0 left-0 right-0 h-[46px] px-12 flex items-center justify-between
                 ${props.dark ? 'text-white/45' : 'text-slate-400'}`}>
      <span class="text-[17px] font-semibold tracking-wide">
        International Engineering School · Software Engineering · ITC
      </span>
      <span class="flex items-center gap-3 text-[17px] font-bold tabular-nums">
        <Show when={props.track}>
          <span class="rounded-md px-2 py-0.5 text-[14px] font-black"
                style={{ background: YC[props.track] + '22', color: props.dark ? '#fff' : YC[props.track] }}>
            YEAR {props.track?.slice(1)}
          </span>
        </Show>
        {props.n}
      </span>
    </div>
  );
}

/* Standard content slide: kicker + title bar, then free body. */
export function Head(props) {
  return (
    <div class={`px-14 shrink-0 ${props.tight ? "pt-8 pb-3" : "pt-10 pb-5"}`}>
      <Show when={props.kicker}>
        <div class={`t-kicker mb-2.5 ${props.accent ? 'text-gold-600' : 'text-azure-500'}`}>
          {props.kicker}
        </div>
      </Show>
      <h2 class={`${props.small ? 't-title-sm' : 't-title'} text-navy-900 font-display`}>
        {props.children}
      </h2>
      <Show when={props.sub}>
        <p class="t-cap text-slate-500 mt-3 font-medium">{props.sub}</p>
      </Show>
      <div class={`h-[5px] w-[120px] rounded-full ${props.tight ? "mt-3.5" : "mt-5"}`}
           style={{ background: props.bar ?? 'linear-gradient(90deg,#22d3ee,#3b82f6)' }} />
    </div>
  );
}

export function Body(props) {
  return <div class={`flex-1 min-h-0 px-14 pb-14 ${props.class ?? ''}`}>{props.children}</div>;
}

/* ---------------------------------------------------------------- bullets */

export function Bullets(props) {
  const items = () => props.items ?? [];
  return (
    <ul class={`space-y-${props.gap ?? 5} ${props.class ?? ''}`}>
      <For each={items()}>
        {(it) => {
          const o = typeof it === 'string' ? { t: it } : it;
          return (
            <li class="flex items-start gap-4">
              <span class={`mt-[13px] shrink-0 rounded-full ${o.hi ? 'bg-gold-500' : 'bg-azure-500'}`}
                    style={{ width: '13px', height: '13px' }} />
              <span class={`${props.small ? 't-bullet-sm' : 't-bullet'} ${o.hi ? 'text-gold-700 font-bold' : 'text-slate-700'}`}>
                {o.t}
              </span>
            </li>
          );
        }}
      </For>
    </ul>
  );
}

/* ---------------------------------------------------------------- pieces */

export function Pill(props) {
  return (
    <span class={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[21px] font-bold
                  ${props.class ?? 'bg-azure-100 text-navy-800'}`}>
      {props.children}
    </span>
  );
}

export function Card(props) {
  return (
    <div class={`rounded-2xl border p-6 ${props.class ?? 'border-slate-200 bg-slate-50'}`}>
      {props.children}
    </div>
  );
}

export function IconTile(props) {
  return (
    <div class={`flex flex-col items-center justify-center gap-3 rounded-2xl p-5 text-center
                 ${props.class ?? 'bg-azure-50 text-navy-800'}`}>
      <Icon name={props.icon} size={props.iconSize ?? 42} weight={1.6} />
      <div class="text-[23px] font-bold leading-tight">{props.label}</div>
      <Show when={props.note}>
        <div class="text-[18px] opacity-70 leading-tight">{props.note}</div>
      </Show>
    </div>
  );
}

/* Photo with an optional caption strip. */
export function Photo(props) {
  return (
    <figure class={`relative overflow-hidden rounded-2xl bg-slate-100 ${props.class ?? ''}`}>
      <img src={props.src} alt={props.alt ?? ''}
           class={`h-full w-full ${props.fit === 'contain' ? 'object-contain' : 'object-cover'}`}
           style={{ 'object-position': props.pos ?? 'center' }} />
      <Show when={props.caption}>
        <figcaption class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent
                           px-5 pb-3 pt-10 text-white">
          <div class="text-[20px] font-bold leading-tight">{props.caption}</div>
          <Show when={props.sub}>
            <div class="mt-0.5 text-[16px] font-medium text-white/75">{props.sub}</div>
          </Show>
        </figcaption>
      </Show>
    </figure>
  );
}

/* Logo on a white chip — keeps mixed-quality partner logos visually even. */
export function Logo(props) {
  return (
    <div class={`flex items-center justify-center rounded-xl border border-slate-200 bg-white p-3
                 ${props.class ?? ''}`} title={props.name}>
      <img src={props.src} alt={props.name} class="max-h-full max-w-full object-contain"
           style={{ height: (props.h ?? 44) + 'px' }} />
    </div>
  );
}

export function StatBig(props) {
  return (
    <div class="text-center">
      <div class={`t-huge font-display ${props.class ?? 'text-navy-700'}`}>{props.value}</div>
      <div class="t-cap mt-1 font-bold text-slate-500">{props.label}</div>
    </div>
  );
}

/* Section divider — giant year numeral over a photograph. */
export function YearDivider(props) {
  const c = () => YC[`y${props.numeral}`] ?? '#3b82f6';
  return (
    <Slide n={props.n} dark track={props.track}>
      <div class="relative h-full w-full">
        <img src={props.photo} alt="" class="absolute inset-0 h-full w-full object-cover"
             style={{ 'object-position': props.pos ?? 'center' }} />
        <div class="absolute inset-0" style={{
          background: `linear-gradient(100deg, rgba(6,20,48,.96) 0%, rgba(11,30,63,.90) 46%, rgba(11,30,63,.58) 100%)`
        }} />
        <div class="absolute -left-4 top-1/2 -translate-y-1/2 select-none font-display font-black leading-none"
             style={{ 'font-size': '520px', color: c(), opacity: 0.13 }}>
          {props.numeral}
        </div>
        <div class="relative flex h-full flex-col justify-center px-16">
          <div class="t-kicker" style={{ color: c() }}>Year {props.numeral}</div>
          <h2 class="t-title mt-3 max-w-[780px] font-display text-white">{props.title}</h2>
          <p class="t-bullet mt-5 max-w-[660px] text-azure-200">{props.sub}</p>
          <div class="mt-7 flex flex-wrap gap-3">
            <For each={props.tags ?? []}>
              {(t) => (
                <span class="rounded-full border border-white/25 bg-white/10 px-5 py-2 text-[22px] font-bold text-white">
                  {t}
                </span>
              )}
            </For>
          </div>
        </div>
      </div>
    </Slide>
  );
}
