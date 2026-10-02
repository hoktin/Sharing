# SE Orientation 2026–27 — three sessions in one deck

Orientation for **Software Engineering** students in the ITC **International
Engineering School**. One cover with three buttons, then a separate 20-minute
session for each year group, each followed by 10 minutes of Q&A.

| Session | Cohort | Slides |
|---|---|---|
| **Year 2** | Generation 3 — entered 2025–26 | 23 |
| **Year 3** | Generation 2 — entered 2024–25 | 26 |
| **Year 4** | Generation 1 — entered 2023–24 | 27 |

Per-block time budgets live in the overview grid (`O`) for the presenter; no
duration is shown on the cover or on any slide.

Two blocks scale with how senior the room is:

- **The road ahead** — Year 2 sees all three remaining years on one slide; Year 3 gets a
  slide each for Year 4 and Year 5; Year 4 gets Year 5 and then what comes after the degree.
- **Internship & opportunity** — Year 3 and Year 4 get the department's rules, the placement
  long tail and defence-day photography. **The 25-minute defence slide is Year 4 only**:
  Year 3 has no internship scheduled for Generation 2 this year, so its slide tells them to
  go and arrange an uncredited placement themselves, and Year 2 is three years out.

There is no Year 5 session. The programme moved from four years to five, the
Year 5 curriculum is written, and Generation 1 reaches it in 2028–29.

Built with **SolidJS + Tailwind v4 + Vite**. Content follows
`../slide_content_prompts.md`; curriculum comes from
`../../01Curriculumn/4_Years_Curriculum.xlsx`, sheet **`2026_5_Years_Program`**
(Prepared 2026, saved 24 Sep — it supersedes `5_year_curriculum.xlsx` of 22 Sep);
the weekly timetable comes from `../../04Timetables/2627/International Program
Schedule.xlsx` — **sheets `I2_SE`, `I3_SE` and `I4_SE` only**, since the workbook
also holds `I1_SE` and four AIECS sheets — and the dated milestones from
`../../04Timetables/2627/FV Academic calendar_2026-2027.pdf`; photography is
`../../07Activities/` plus the shared national-programme images noted below.

## Run it

```bash
npm install
npm run dev      # http://localhost:5181
npm run build    # static output in dist/
npm run preview
```

`dist/` is fully static and relative-pathed — copy it to a USB stick and open
`index.html`. Nothing is fetched at runtime except the Google Fonts stylesheet,
and the deck still renders without it.

## Presenting

| Key | Action |
|---|---|
| `2` / `3` / `4` | open that year's session, from anywhere |
| `→` / `Space` / `PageDown` | next slide |
| `←` / `PageUp` | previous — at slide 1 this returns to the cover |
| `Home` / `End` | first / last slide of the session |
| `O` | overview grid, with buttons to switch session |
| `S` | speaker notes |
| `F` | full screen |
| `Esc` | close the overlay, then back to the cover |

The slide area is a fixed 1280×720 stage scaled to fit any projector, so what
you see in the browser is exactly what the room sees.

**In the room, open the session directly** — `?track=y3` — so a stray keypress
cannot wander into another year's deck.

### URL modes

- `?track=y2|y3|y4` — start in that session, skipping the cover
- `?print` — all three sessions stacked with a divider before each. **⌘P → Save
  as PDF** gives the whole thing as a handout
- `?print&track=y4` — one session only
- `?slide=N&track=y2` — a single slide, no chrome, for screenshots

## Structure

```
src/
  App.jsx                presenter shell: hub routing, scaling, keys,
                         overview, notes, print modes
  components/
    Layout.jsx           Slide / Head / Body / Bullets / Photo / Logo /
                         YearDivider, plus the YC year-colour tokens
    Course.jsx           CourseGrid — one semester with codes and lecturers
    Timetable.jsx        TimetableGrid + TimetableLegend — the weekly table
    Icon.jsx             ~53 inline stroke icons, no icon dependency
    Figures.jsx          hand-built SVG: five-year journey map, AI pipeline,
                         defence donut, pathway tree, internship timeline,
                         competency wheel, capability meter
  data/
    curriculum.js        every course: code, title, credits, icon, lecturer
    content.js           people, contacts, partners, placements, outcomes
    timetable.js         the three SE weekly grids and the academic calendar,
                         generated from the spreadsheet rather than retyped
    assets.js            image map, each entry commented with what it shows
  slides/
    Hub.jsx              the cover with the three session buttons
    common.jsx           every slide shared by all three sessions, generated
                         per year — fix once, lands in all three decks
    year2.jsx            Year 2 divider, both semesters, pitfalls, readiness,
                         internship road, close actions
    year3.jsx            same for Year 3
    year4.jsx            same for Year 4, plus "Year 5 — what is actually there"
    index.jsx            the three tracks, block order and timings. The `senior`
                         branch in blocksFor() is what gives Year 3 and Year 4
                         the extra internship slides
public/img/              61 images · 6.5 MB
```

## Editing

- **Course rows, credits, lecturers** → `src/data/curriculum.js`
- **Weekly timetable and calendar dates** → `src/data/timetable.js`. Regenerate
  it from the spreadsheet if the registry publishes Weeks 9+ rather than editing
  the grids by hand
- **What each future year makes a student able to do** → `FUTURE_READY` and
  `AFTER_DEGREE` in `src/data/content.js`
- **People, contacts, partners, placements, outcomes, fees** → `src/data/content.js`
- **Swap a photograph** → `src/data/assets.js`; every entry says what the image
  actually shows, so a swap stays honest
- **A slide that appears in all three sessions** → `src/slides/common.jsx`. Each
  one is a function of the year, so one edit fixes all three decks
- **A slide specific to one year** → `src/slides/year2.jsx` / `year3.jsx` / `year4.jsx`
- **Which slides a session gets at all** → `blocksFor` in `src/slides/index.jsx`
- **Session order and block timings** → `src/slides/index.jsx`
- **Speaker notes** → the `notes` field on each slide object; they show in the
  `S` panel and nowhere on screen

## Design rules enforced in code

The stage is 1280×720, the same proportions as a 13.33in PowerPoint slide, so
**1pt = 1.333px**. The type scale in `src/index.css` maps the spec directly:

| Role | Spec | In code |
|---|---|---|
| Title | 40–44 pt | `.t-title` 56px / `.t-title-sm` 46px |
| Bullets | 28–32 pt | `.t-bullet` 38px / `.t-bullet-sm` 33px |
| Caption | 18–20 pt | `.t-cap` 25px |
| Name wall | figure | `.t-wall` 21px |

Nothing drops below 24px except the internship name wall, which is a figure
rather than a bullet list — the one exception the spec allows.

Colours are the ITC International Engineering School palette from the SE 2026
brochure: navy `#0B1E3F`, azure `#3B82F6`, cyan `#22D3EE`, gold `#F5B942` for
anything that asks a student to act. Years are colour-coded throughout —
Y2 cyan, Y3 azure, Y4 violet, Y5 gold and always drawn dashed, because no
cohort has sat it.

`CompetencyWheel` in `Figures.jsx` is built but not currently placed on a slide —
Year 3 traded it for the internship block. Drop it back into `blocksFor` if a
slot reopens.

## Photography

Everything is real departmental work. `SE` in `assets.js` is our own students —
the cohort under the ITC sign, the ABA Bank and Daikin site visits, the
cybersecurity workshop, Harbin, the UCM offer cards. `NAT` is the national
programme's: the Crash Course poster, Huawei APAC, the defence photographs.

**Use `NAT` images only on slides about shared departmental resources.** They
show GIC students, not SE international students, and the slides that carry
them say so.

Re-importing from `../../07Activities/`:

```bash
# photographs
magick in.png -auto-orient -resize '1500x1500>' -strip -interlace Plane -quality 82 out.jpg
# cards and posters, where text must stay sharp
magick card.png -auto-orient -resize '1200x1200>' -strip -interlace Plane -quality 90 out.jpg
```

## Before you present

Nine open questions are listed in §3 of `../slide_content_prompts.md`. Four of
them change what you say out loud:

1. **Dr. CHEA Samneang's exact title** — the name is confirmed; the title is still as supplied.
2. **Internship 1 timing for Generation 1** — the workbook files both internships
   under Year 5 S2 while labelling them "year 4" and "year 5". The Year 4 session
   is built on Internship 1 falling after Year 4.
3. **Year 5 Semester 1 lecturers** — the deck prints "To be assigned" because the
   lecturer column is empty for all four courses in every sheet of both workbooks.
   Supply the names and it is a one-line edit to `Y5S1` in `src/data/curriculum.js`.
4. **Credit totals** — the workbook's TOTAL YEAR 1 (30.0) contradicts its own
   course rows (33.0); the deck uses the summed figures and shows 149.0 overall.
5. **Four years vs five on public material** — the website and the 2026 brochure
   still say a 4-year, 125-credit degree. Students will ask.
6. **UI/UX and ERP staffing** — the two sheets in `4_Years_Curriculum.xlsx` name
   different lecturers for UI/UX and disagree on whether ERP has one at all. Both
   appear on a course slide.

The deck makes **no salary claim**. The national-programme deck quotes department
figures; this programme has no graduates and therefore no tracer data.

There is also **no fees-and-scholarships slide** — that is admission-stage information
and these students are already enrolled. The figures are in
`../../00Ads/4YPromotionBrochure/` if you ever want them as a handout.

On the mobility slide, **Central Missouri carries both the 2+2 and the double degree**,
so it appears on two rows. ECAM LaSalle has been removed from the routes and the logo
wall; `uni_ecam.png` is gone from `public/img` if you need it restored.
