import { For, Show } from 'solid-js';
import { YC } from './Layout';
import { DAYS } from '../data/timetable';

/* The weekly grid, drawn as a real table because that is what a timetable is
   and students will photograph it. Lectures are tinted in the year colour,
   practicals in gold — the split matters more than the course names, which
   are small on purpose. An empty cell is left genuinely empty so the gaps
   read as gaps. */
export function TimetableGrid(props) {
  const yk = () => `y${props.year}`;
  const col = () => YC[yk()];

  return (
    <div class="overflow-hidden rounded-2xl border border-slate-200">
      <table class="w-full table-fixed border-collapse">
        <thead>
          <tr>
            <th class="w-[108px] border-b border-r border-slate-200 bg-slate-50 px-2 py-2
                       text-[17px] font-black text-slate-500">
              Time
            </th>
            <For each={DAYS}>
              {(d) => (
                <th class="border-b border-r border-slate-200 px-2 py-2 text-[20px] font-black text-white
                           last:border-r-0"
                    style={{ background: col() }}>
                  {d}
                </th>
              )}
            </For>
          </tr>
        </thead>
        <tbody>
          <For each={props.data.rows}>
            {(row, i) => (
              <tr class={i() % 2 ? 'bg-slate-50/60' : ''}>
                <td class="border-b border-r border-slate-200 px-2 py-1.5 text-center align-middle
                           text-[15px] font-bold tabular-nums leading-tight text-slate-500">
                  {row.time}
                </td>
                <For each={DAYS}>
                  {(d) => {
                    const c = row.cells[d];
                    return (
                      <td class="border-b border-r border-slate-200 px-1.5 py-1 align-middle last:border-r-0">
                        <Show when={c}>
                          <div class="rounded-md px-2 py-1"
                               style={{
                                 background: c.t === 'P' ? '#fff7e6' : col() + '18',
                                 'border-left': `4px solid ${c.t === 'P' ? '#f5b942' : col()}`,
                               }}>
                            <div class="truncate text-[15px] font-black leading-tight text-navy-900">
                              {c.c}
                            </div>
                            <div class="truncate text-[13px] font-semibold leading-tight text-slate-500">
                              <span class="mr-1 font-black"
                                    style={{ color: c.t === 'P' ? '#c98a12' : col() }}>
                                {c.t === 'P' ? 'TP' : 'LEC'}
                              </span>
                              {c.w}
                            </div>
                          </div>
                        </Show>
                      </td>
                    );
                  }}
                </For>
              </tr>
            )}
          </For>
        </tbody>
      </table>
    </div>
  );
}

/* Small legend + weekly totals, used under the grid. */
export function TimetableLegend(props) {
  const col = () => YC[`y${props.year}`];
  return (
    <div class="flex items-center gap-6">
      <span class="flex items-center gap-2 text-[19px] font-bold text-slate-600">
        <span class="h-[18px] w-[18px] rounded" style={{ background: col() }} />
        Lecture
      </span>
      <span class="flex items-center gap-2 text-[19px] font-bold text-slate-600">
        <span class="h-[18px] w-[18px] rounded bg-gold-500" />
        TP / TD — practical
      </span>
      <span class="ml-auto text-[19px] font-bold text-slate-500">
        <span class="font-display text-[24px] font-black text-navy-900">{props.data.slots}</span>
        {' '}slots a week ·{' '}
        <span class="font-display text-[24px] font-black text-navy-900">{props.data.lectures}</span>
        {' '}lecture ·{' '}
        <span class="font-display text-[24px] font-black text-gold-700">{props.data.practicals}</span>
        {' '}practical
      </span>
    </div>
  );
}
