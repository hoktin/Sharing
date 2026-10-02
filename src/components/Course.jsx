import { For, Show } from 'solid-js';
import Icon from './Icon';
import { YC } from './Layout';

/* One semester as a course grid. Each row is
     [code, title, credits, icon, lecturer, highlight?]
   `highlight` marks the courses that carry the year — they get the gold
   treatment, which is the only thing a student will remember from the slide. */
export function CourseGrid(props) {
  return (
    <div class={`grid gap-2 ${props.cols ?? 'grid-cols-2'}`}>
      <For each={props.courses}>
        {(c) => {
          const [code, name, cr, icon, who, hi] = c;
          return (
            <div class={`flex items-center gap-3.5 rounded-xl border px-4 py-2
                         ${hi ? 'border-gold-500 bg-gold-50' : 'border-slate-200 bg-white'}`}>
              <span class={`flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-lg
                            ${hi ? 'bg-gold-500 text-white' : 'bg-azure-100 text-navy-700'}`}>
                <Icon name={icon} size={23} weight={1.9} />
              </span>
              <span class="min-w-0 flex-1">
                <span class={`block truncate text-[21px] font-bold leading-[1.15]
                              ${hi ? 'text-gold-700' : 'text-slate-800'}`}>{name}</span>
                <Show when={props.showWho !== false}>
                  <span class="block truncate text-[15px] font-semibold text-slate-400">
                    <span class="t-code mr-2 text-azure-500">{code}</span>{who}
                  </span>
                </Show>
              </span>
              <span class="shrink-0 text-[20px] font-black tabular-nums text-slate-400">{cr.toFixed(1)}</span>
            </div>
          );
        }}
      </For>
    </div>
  );
}

export function SemesterTag(props) {
  return (
    <div class="mb-3 flex items-baseline gap-3">
      <span class="font-display text-[27px] font-black" style={{ color: YC[props.year] ?? '#0b1e3f' }}>
        {props.label}
      </span>
      <span class="text-[22px] font-bold text-slate-400">{props.credits} credits</span>
      <Show when={props.note}>
        <span class="ml-auto text-[19px] font-semibold text-slate-400">{props.note}</span>
      </Show>
    </div>
  );
}
