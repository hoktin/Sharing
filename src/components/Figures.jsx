import { For, Show } from 'solid-js';
import { PATHS } from './Icon';
import { YEARS } from '../data/curriculum';

const C = {
  y1: '#94a3b8', y2: '#06b6d4', y3: '#3b82f6', y4: '#8b5cf6', y5: '#f5b942',
  navy: '#0b1e3f', azure: '#3b82f6', cyan: '#22d3ee', gold: '#f5b942', slate: '#94a3b8',
};

const pt = (cx, cy, r, deg) => {
  const a = ((deg - 90) * Math.PI) / 180;
  return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
};
function arc(cx, cy, rOut, rIn, a0, a1) {
  const [x0, y0] = pt(cx, cy, rOut, a0);
  const [x1, y1] = pt(cx, cy, rOut, a1);
  const [x2, y2] = pt(cx, cy, rIn, a1);
  const [x3, y3] = pt(cx, cy, rIn, a0);
  const big = a1 - a0 > 180 ? 1 : 0;
  return `M${x0},${y0} A${rOut},${rOut} 0 ${big} 1 ${x1},${y1} L${x2},${y2} A${rIn},${rIn} 0 ${big} 0 ${x3},${y3} Z`;
}

/* ================================================= 1. Five-year journey map
   `now` lights the year the room is sitting in; everything behind it is done
   and goes flat, everything ahead stays outlined. Year 5 is drawn dashed —
   no cohort has reached it yet and the deck should not pretend otherwise.  */
export function JourneyMap(props) {
  const now = () => props.now ?? 0;
  const W = 1160, baseY = 368, stepH = 52, colW = 206, gap = 18;
  const colX = (i) => 14 + i * (colW + gap);

  /* Break a theme onto two lines at the last space before 22 characters, so a
     long one ("Advanced Systems & Capstone") cannot run past its column. */
  const wrap = (t) => {
    if (t.length <= 22) return [t, null];
    const cut = t.lastIndexOf(' ', 22);
    return [t.slice(0, cut), t.slice(cut + 1)];
  };

  return (
    <svg viewBox={`0 0 ${W} 530`} class="h-full w-full">
      <For each={YEARS}>
        {(yr, i) => {
          const x = colX(i());
          const h = 108 + i() * stepH;
          const y = baseY - h;
          const col = C[yr.key];
          const state = yr.y < now() ? 'done' : yr.y === now() ? 'now' : 'next';
          const future = yr.y === 5;
          const [l1, l2] = wrap(yr.theme);
          return (
            <g>
              <rect x={x} y={y} width={colW} height={h} rx="18"
                    fill={col} opacity={state === 'now' ? 0.16 : state === 'done' ? 0.07 : 0.05}
                    stroke={state === 'now' ? col : 'transparent'} stroke-width="3" />
              <rect x={x} y={y} width={colW} height="8" rx="4" fill={col}
                    opacity={state === 'next' ? 0.5 : 1}
                    stroke-dasharray={future ? '10 7' : undefined} />

              <text x={x + 18} y={y + 64} font-size="50" font-weight="900" fill={col}
                    font-family="Space Grotesk, Inter, sans-serif"
                    opacity={state === 'next' ? 0.55 : 1}>{yr.y}</text>
              <text x={x + colW - 18} y={y + 38} font-size="20" font-weight="800" fill={col}
                    text-anchor="end" font-family="Space Grotesk, Inter, sans-serif">
                {yr.credits.toFixed(0)} cr
              </text>

              <text x={x + 18} y={y + 92} font-size="17" font-weight="800" fill="#16233d"
                    opacity={state === 'next' ? 0.55 : 0.95}>{l1}</text>
              <Show when={l2}>
                <text x={x + 18} y={y + 113} font-size="17" font-weight="800" fill="#16233d"
                      opacity={state === 'next' ? 0.55 : 0.95}>{l2}</text>
              </Show>
            </g>
          );
        }}
      </For>

      <line x1="14" y1={baseY} x2={W - 14} y2={baseY} stroke="#cbd5e1" stroke-width="3" />

      {/* status row — one marker per year, all on the same baseline */}
      <For each={YEARS}>
        {(yr, i) => {
          const cx = colX(i()) + colW / 2;
          const state = yr.y < now() ? 'done' : yr.y === now() ? 'now' : 'next';
          const col = C[yr.key];
          if (state === 'now') return (
            <g>
              <rect x={cx - 82} y={baseY + 14} width="164" height="36" rx="18" fill={col} />
              <text x={cx} y={baseY + 39} font-size="18" font-weight="900" fill="#fff"
                    text-anchor="middle" letter-spacing="1.4">YOU ARE HERE</text>
            </g>
          );
          if (state === 'done') return (
            <g transform={`translate(${cx - 12},${baseY + 20})`} fill="none" stroke={col}
               stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 6L9 17l-5-5" />
            </g>
          );
          if (yr.y === 5) return (
            <text x={cx} y={baseY + 39} font-size="17" font-weight="800" fill={col}
                  text-anchor="middle">no cohort yet · opens 2028–29</text>
          );
          return null;
        }}
      </For>

      {/* internships — one flag under the year each actually falls in */}
      <g>
        <line x1={colX(3) + colW / 2} y1={baseY + 58} x2={colX(3) + colW / 2} y2={baseY + 74}
              stroke={C.gold} stroke-width="3" />
        <rect x={colX(3)} y={baseY + 74} width={colW} height="40" rx="20" fill={C.gold} />
        <text x={colX(3) + colW / 2} y={baseY + 101} font-size="17" font-weight="900" fill="#3b2a05"
              text-anchor="middle">Internship 1 · 2 cr</text>
      </g>
      <g>
        <rect x={colX(4)} y={baseY + 74} width={colW} height="40" rx="20"
              fill="none" stroke={C.gold} stroke-width="2.5" stroke-dasharray="8 6" />
        <text x={colX(4) + colW / 2} y={baseY + 101} font-size="17" font-weight="800" fill={C.gold}
              text-anchor="middle">Final internship · 9 cr</text>
      </g>
    </svg>
  );
}

/* ================================================= 2. AI workflow pipeline */
export function AIPipeline() {
  const Row = (p) => (
    <g transform={`translate(0,${p.y})`}>
      <text x="0" y="-16" font-size="23" font-weight="800" fill={p.labelColor} letter-spacing="1.5">{p.label}</text>
      <For each={p.steps}>
        {(s, i) => {
          const w = p.w, gap = 14, x = i() * (w + gap);
          const hot = s.hot;
          return (
            <g transform={`translate(${x},0)`}>
              <rect width={w} height="78" rx="14"
                    fill={hot ? C.gold : (p.dim ? '#e2e8f0' : '#dbeafe')}
                    stroke={hot ? '#c98a12' : 'transparent'} stroke-width="2.5" />
              <text x={w / 2} y="46" font-size={s.sm ? 18 : 20} font-weight="800"
                    fill={hot ? '#3b2a05' : (p.dim ? '#475569' : '#122a55')} text-anchor="middle">{s.t}</text>
              {i() < p.steps.length - 1 && (
                <path d={`M${w + 2},39 L${w + gap - 2},39`} stroke="#94a3b8" stroke-width="2.5"
                      marker-end="url(#pa)" />
              )}
            </g>
          );
        }}
      </For>
    </g>
  );
  return (
    <svg viewBox="0 0 1120 300" class="h-full w-full">
      <defs>
        <marker id="pa" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 z" fill="#94a3b8" />
        </marker>
      </defs>
      <Row y={52} label="BEFORE" labelColor="#94a3b8" dim w={170}
           steps={[{ t: 'Design' }, { t: 'Code' }, { t: 'Test' }, { t: 'Deploy' }]} />
      <Row y={204} label="INCREASINGLY" labelColor={C.navy} w={140}
           steps={[
             { t: 'Define', sm: true }, { t: 'Architect', sm: true }, { t: 'Instruct AI', sm: true },
             { t: 'Review', hot: true, sm: true }, { t: 'Validate', hot: true, sm: true },
             { t: 'Integrate', sm: true }, { t: 'Deploy', sm: true },
           ]} />
    </svg>
  );
}

/* ================================================= 3. Internship timeline
   One bar, two internships, drawn against the calendar the room is living in. */
export function InternshipTimeline(props) {
  const marks = props.marks ?? [];
  return (
    <svg viewBox="0 0 1080 200" class="h-full w-full">
      <rect x="40" y="70" width="1000" height="26" rx="13" fill="#e2e8f0" />
      <Show when={props.band}>
        <rect x={props.band[0]} y="70" width={props.band[1]} height="26" rx="13" fill={C.gold} />
        <text x={props.band[0] + props.band[1] / 2} y="52" font-size="23" font-weight="900"
              fill="#8a6410" text-anchor="middle">{props.bandLabel}</text>
      </Show>
      <For each={marks}>
        {(m) => (
          <g>
            <circle cx={m.x} cy="83" r="9" fill="#fff" stroke={C.navy} stroke-width="4" />
            <text x={m.x} y="132" font-size="22" font-weight="800" fill="#16233d" text-anchor="middle">{m.t}</text>
            <text x={m.x} y="158" font-size="18" font-weight="600" fill="#64748b" text-anchor="middle">{m.s}</text>
          </g>
        )}
      </For>
    </svg>
  );
}

/* ================================================= 4. Defence-day donut
   Same 25-minute format the department runs for GIC internship defences. */
export function DefenceDonut() {
  const segs = [
    { v: 10, c: '#122a55', l: 'Presentation' },
    { v: 5,  c: '#f5b942', l: 'Live demo' },
    { v: 10, c: '#22d3ee', l: 'Jury questions' },
  ];
  let acc = 0;
  return (
    <svg viewBox="0 0 560 470" class="h-full w-full">
      <For each={segs}>
        {(s) => {
          const a0 = (acc / 25) * 360; acc += s.v;
          const a1 = (acc / 25) * 360;
          const mid = (a0 + a1) / 2;
          const [tx, ty] = pt(280, 208, 143, mid);
          return (
            <g>
              <path d={arc(280, 208, 190, 104, a0 + 1, a1 - 1)} fill={s.c} />
              <text x={tx} y={ty + 2} font-size="42" font-weight="900"
                    fill={s.c === '#f5b942' ? '#3b2a05' : '#fff'} text-anchor="middle"
                    font-family="Space Grotesk, Inter, sans-serif">{s.v}</text>
              <text x={tx} y={ty + 26} font-size="17" font-weight="700"
                    fill={s.c === '#f5b942' ? '#3b2a05' : '#fff'} text-anchor="middle" opacity="0.85">min</text>
            </g>
          );
        }}
      </For>
      <text x="280" y="196" font-size="62" font-weight="900" fill={C.navy} text-anchor="middle"
            font-family="Space Grotesk, Inter, sans-serif">25</text>
      <text x="280" y="232" font-size="24" font-weight="700" fill="#64748b" text-anchor="middle">minutes</text>

      <g transform="translate(16,420)">
        <For each={segs}>
          {(s, i) => (
            <g transform={`translate(${i() * 180},0)`}>
              <rect width="20" height="20" rx="6" fill={s.c} />
              <text x="27" y="17" font-size="19" font-weight="700" fill="#16233d">{s.l}</text>
            </g>
          )}
        </For>
      </g>
    </svg>
  );
}

/* ================================================= 5. Mobility pathway tree */
export function PathwayTree() {
  const routes = [
    { y: 6,    c: C.cyan,  t: 'Curtin University',  s: 'Australia · Malaysia — after the foundation years' },
    { y: 104, c: C.azure, t: '2+2 articulation',   s: 'University of Central Missouri · Macquarie University' },
    { y: 202, c: '#8b5cf6', t: 'Exchange semester', s: 'Grenoble Alpes · INSA Toulouse · ENSIIE · Namur' },
    { y: 300, c: C.gold,  t: 'Double degree',      s: 'University of Central Missouri, United States' },
  ];
  return (
    <svg viewBox="0 0 1160 418" class="h-full w-full">
      <rect x="8" y="172" width="232" height="78" rx="18" fill={C.navy} />
      <text x="124" y="207" font-size="24" font-weight="800" fill="#fff" text-anchor="middle">SE at ITC</text>
      <text x="124" y="234" font-size="18" font-weight="600" fill="#9db8e6" text-anchor="middle">International Program</text>
      <For each={routes}>
        {(r) => (
          <g>
            <path d={`M240,211 C310,211 310,${r.y + 39} 380,${r.y + 39}`}
                  fill="none" stroke={r.c} stroke-width="3.5" />
            <rect x="380" y={r.y} width="772" height="78" rx="18" fill={r.c} opacity="0.1" />
            <rect x="380" y={r.y} width="7" height="78" rx="3.5" fill={r.c} />
            <text x="410" y={r.y + 34} font-size="25" font-weight="800" fill="#16233d">{r.t}</text>
            <text x="410" y={r.y + 61} font-size="19" font-weight="600" fill="#64748b">{r.s}</text>
          </g>
        )}
      </For>
    </svg>
  );
}

/* ================================================= 6. Capability meter */
export function Meter(props) {
  const map = { good: '#16a34a', warn: '#f59e0b', stop: '#dc2626' };
  const fill = { good: 3, warn: 2, stop: 1 }[props.level];
  return (
    <span class="inline-flex gap-[3px]" title={props.level}>
      <For each={[1, 2, 3]}>
        {(i) => (
          <span class="rounded-[3px]"
                style={{ width: '11px', height: '22px',
                         background: i <= fill ? map[props.level] : '#e2e8f0' }} />
        )}
      </For>
    </span>
  );
}

/* ================================================= 7. Competency wheel
   Not on a slide at the moment — the Year 3 session traded it for the
   internship block. Kept because it is the clearest one-picture answer to
   "what will I actually be able to do", if a slot ever opens up again. */
const WHEEL = [
  { l: 'Programming',        y: 'y2', i: 'code' },
  { l: 'Data structures',    y: 'y2', i: 'sigma' },
  { l: 'Databases',          y: 'y2', i: 'database' },
  { l: 'UI / UX',            y: 'y2', i: 'palette' },
  { l: 'Web & internet',     y: 'y3', i: 'globe' },
  { l: 'Architecture',       y: 'y3', i: 'layers' },
  { l: 'Mobile apps',        y: 'y3', i: 'phoneApp' },
  { l: 'Testing',            y: 'y3', i: 'bug' },
  { l: 'Distributed systems',y: 'y4', i: 'server' },
  { l: 'Cloud & DevOps',     y: 'y4', i: 'cloud' },
  { l: 'Machine learning',   y: 'y4', i: 'brain' },
  { l: 'Security',           y: 'y4', i: 'shield' },
];
export function CompetencyWheel() {
  const n = WHEEL.length, step = 360 / n, cx = 420, cy = 244;
  return (
    <svg viewBox="0 0 1160 490" class="h-full w-full">
      <For each={WHEEL}>
        {(w, idx) => {
          const a0 = idx() * step + 1.2, a1 = (idx() + 1) * step - 1.2;
          const mid = (a0 + a1) / 2;
          const [lx, ly] = pt(cx, cy, 190, mid);
          const [ix, iy] = pt(cx, cy, 146, mid);
          const right = Math.cos(((mid - 90) * Math.PI) / 180) > -0.05;
          return (
            <g>
              <path d={arc(cx, cy, 174, 88, a0, a1)} fill={C[w.y]} opacity="0.9" />
              <g transform={`translate(${ix},${iy}) scale(1.18) translate(-12,-12)`}
                 fill="none" stroke="#fff" stroke-width="1.9"
                 stroke-linecap="round" stroke-linejoin="round">
                <For each={PATHS[w.i].split(' M')}>
                  {(seg, k) => <path d={k() === 0 ? seg : 'M' + seg} />}
                </For>
              </g>
              <text x={lx} y={ly + 7} font-size="21" font-weight="800" fill="#16233d"
                    text-anchor={right ? 'start' : 'end'}>{w.l}</text>
            </g>
          );
        }}
      </For>
      <circle cx={cx} cy={cy} r="82" fill={C.navy} />
      <text x={cx} y={cy - 6} font-size="25" font-weight="800" fill="#fff" text-anchor="middle">Software</text>
      <text x={cx} y={cy + 24} font-size="25" font-weight="800" fill="#fff" text-anchor="middle">Engineer</text>

      <g transform="translate(930,166)">
        <text x="0" y="0" font-size="19" font-weight="800" fill="#64748b" letter-spacing="1.5">BUILT IN</text>
        <For each={[['y2', 'Year 2'], ['y3', 'Year 3'], ['y4', 'Year 4']]}>
          {(r, i) => (
            <g transform={`translate(0,${28 + i() * 40})`}>
              <rect width="22" height="22" rx="6" fill={C[r[0]]} />
              <text x="32" y="18" font-size="22" font-weight="700" fill="#16233d">{r[1]}</text>
            </g>
          )}
        </For>
      </g>
    </svg>
  );
}
