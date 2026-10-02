# Slide Content Prompts — SE Orientation 2026–27 (Year 2 / Year 3 / Year 4)

**Deliverable:** three separate sessions, one per year group. Each now runs **~25 minutes**
plus Q&A — the duration cap was lifted so the registry's own timetable and calendar could go
in, which is the material students actually act on.
**Audience:** Software Engineering students in the **International Engineering School**, ITC.

| Session | Cohort | Entered | Students on roll (2025–26) |
|---|---|---|---|
| **Year 2** | Generation 3 | 2025–26 | 62 in Year 1, both groups, majors not yet split in the list |
| **Year 3** | Generation 2 | 2024–25 | 31 SE (+19 AIECS) |
| **Year 4** | Generation 1 | 2023–24 | 14 SE (+13 AIECS) |

There is **no Year 5 session**: the programme moved from four years to five, the Year 5
curriculum is written, and Generation 1 will be the first cohort to sit it in 2028–29.

**Sources used:**
`01Curriculumn/4_Years_Curriculum.xlsx`, sheet **`2026_5_Years_Program`** (Prepared 2026,
saved 24 Sep — authoritative curriculum: course codes, credits and named lecturers; it
supersedes `5_year_curriculum.xlsx` of 22 Sep) · `02ProgramSpecs/Curriculum_Document_of_International_Program_in_Software_Engineering.pdf`
(PEOs, PLOs, ITC grading scale, late-assessment policy, Curtin pathway) ·
`02ProgramSpecs/SE_PEO_Program_2026.xlsx` · `00Ads/4YPromotionBrochure/Software Engineering Brochure.html`
(fees, partner list, competencies) · `05StudentLists/` (cohort sizes) ·
`04Timetables/2627/International Program Schedule.xlsx` — **sheets `I2_SE`, `I3_SE`, `I4_SE`
only**; the workbook also holds `I1_SE` and four AIECS sheets, which are not this audience and
are deliberately not read · `04Timetables/2627/FV Academic calendar_2026-2027.pdf` (only the
dates labelled "Y2, Y3, Y4") · `07Activities/` (all photography) ·
itc.edu.kh/international-engineering-program-2026 ·
facebook.com/itcinternationalengineeringschool · and the national-programme deck at
`../../GICProgram/slide_content_prompts.md` for the shared blocks noted in §4.

---

## 0. Global design rules (apply to every slide)

- **Max 6 bullets per slide. Max 8 words per bullet.** No paragraphs on the slide.
- **Type scale:** Title 40–44 pt · Bullets 28–32 pt · Captions 18–20 pt. Never below 18 pt.
- **Every slide carries a visual.** Target ~50% of slide area as figure, photo or diagram.
- **One idea per slide.** If it needs two, split it.
- **Colour** is the ITC International Engineering School palette from the SE 2026 brochure:
  navy `#0B1E3F` primary, azure `#3B82F6`, cyan `#22D3EE`, gold `#F5B942` for anything
  that asks the student to *act*.
- **Year colour coding**, used on the journey map, course grids, hub buttons and AI mapping:
  Y1 slate `#94A3B8` · **Y2 cyan `#06B6D4`** · **Y3 azure `#3B82F6`** · **Y4 violet `#8B5CF6`** ·
  Y5 gold `#F5B942` (drawn dashed — nobody has sat it yet).
- **Speaker notes carry the detail.** The slide holds the headline; the numbers and the
  stories live in the notes.
- **No salary claim anywhere.** The national deck quotes department figures; this programme
  has no graduates and therefore no tracer data. Do not borrow someone else's number.

---

## 0b. Photo library

Everything is real departmental photography. Nothing is stock and nothing is generated.

**`07Activities/` — our own students.**

| File | What it shows | Used on |
|---|---|---|
| `group_photos/year3_students.png` | The cohort + staff under the ITC sign at Building A | Hub, every title slide, every close |
| `workshops/year2and3_cyber*.png` | Cybersecurity workshop — severity assessment, students on laptops | Y2.10, Y3.10, Y4.10 |
| `exchange/year2annd3.png` | Eight students at the Harbin Institute of Technology campus stone | Abroad |
| `exchange/year2.png` | HIT International Invitational Tournament of Intelligent Competitive Robots 2026, certificate in hand | Abroad |
| `exchange/year3.png` | Students on the flight out | spare |
| `scholarship/year3.png` | "Congratulations" card — DIM Ponhakvontey & VAN Sotheany, UCM 2+2 | Abroad |
| `scholarship/Year2.png` | UCM Global Partner Award flyer, costs and English requirements | spare / handout |
| `SiteVisit/ABA_Site_Visit/Image/*.JPG` | ABA Bank visit — cohort seated, boardroom briefing | Y4 divider, Y4.9 |
| `SiteVisit/Daikin_company/*.png` | Daikin Cambodia briefing | Y4.9 |
| `SiteVisit/SiemReap_Annaul_Trip/*.png` | Siem Reap annual trip, museum | spare |
| `00Ads/.../student_activities/activity1–2.png` | Lab and project work from the brochure shoot | Y2 divider, Y2.9, Y3.9 |

**Shared from the national programme** (`../../GICProgram/presentation_slides/public/img`):
the Vacation Crash Course 2025 poster, Huawei ICT APAC Final, Honda Y-E-S 2025, the prize
presentation, **three internship-defence photographs** (all three now carry the Defence Day
slide in the Year 3 and Year 4 sessions), the outreach booth and the seminar shot.
Use these **only** on the slides that are explicitly about shared departmental resources —
never as if they showed SE international students.

**Preparing them.** Photographs at 1500 px / JPEG q82, text-bearing cards at 1200 px / q90:

```bash
magick in.png -auto-orient -resize '1500x1500>' -strip -interlace Plane -quality 82 out.jpg
magick card.png -auto-orient -resize '1200x1200>' -strip -interlace Plane -quality 90 out.jpg
```

That is 61 files and 6.5 MB for the whole deck.

---

## 1. Timing plan — identical spine, three sessions

**Year 2 is 23 slides, Year 3 is 26 and Year 4 is 27.** The year divider and the photo-led
slides run fast and buy time back for the timetable, which is the slide the room will
photograph. The per-block minutes below are the presenter's own budget — they appear in the
overview grid (`O`) and **nowhere on the slides or the cover**.

| Block | Y2 | Y3 | Y4 | Min | Changes per session? |
|---|---|---|---|---|---|
| **A. Welcome & who we are** | 3 | 3 | 3 | 3.0 | Title and cohort only |
| **B. Where you are** | 1 | 1 | 1 | 1.5 | Journey map lights a different year |
| **C. AI & the engineer** | 3 | 3 | 3 | 3.5 | Identical; the mapping rings their year |
| **D. Your year** | 9 | 9 | 9 | 10.0 | **Entirely different** — includes the week and the calendar |
| **E. The road ahead** | 1 | **2** | **2** | 1.5 / 3.0 | **Scales with how close they are to graduating** |
| **F. Internship & opportunity** | 5 | **7** | **8** | 5.0 / 6.0 | **The defence slide is Year 4 only** |
| **G. Close** | 1 | 1 | 1 | 0.5 | Five actions differ |

**The internship block is the difference between the sessions.** For Year 2 it is three
years away, so they get the timeline and the defence format and nothing more. Year 3 and
Year 4 get the whole thing as the national programme already runs it — the rules, the
placement long tail, the 25-minute format and defence-day photography. Year 3 gave up the
competency wheel to make room; the figure is still in `Figures.jsx` if a slot reopens.

---

## 2. The cover (hub)

**Prompt:** Generate a cover that is also a menu. It stays on screen while the room fills
and it is the thing you click to start.

- Masthead: ITC crest + **INTERNATIONAL ENGINEERING SCHOOL** / Institute of Technology of Cambodia
- Kicker: *Orientation* · Title: **Software Engineering** · Sub: *Choose your session*
- **Three large buttons, one per year**, each with: the numeral in its year colour, the
  year theme, the generation and entry year, three chips, and the slide count
- Footer: Dr. CHEA Samneang · Mr. HOK TIN · Ms. CHAB Sreylen, then Room A314 and the Facebook handle

| Button | Theme | Cohort | Chips |
|---|---|---|---|
| **2** | Core ICT & Programming | Generation 3 — entered 2025–26 | 33 credits · 12 courses · First SE year |
| **3** | Core Software Engineering | Generation 2 — entered 2024–25 | 33 credits · 9 courses · Capstone 1 |
| **4** | Advanced Systems & Capstone | Generation 1 — entered 2023–24 | 27 credits · 9 courses · Internship in 12 months |

Each button also shows its slide count — 23, 26, 27. **No session length is shown on the
cover**; the per-block budget lives in the overview grid for the presenter only.

**Figure:** full-bleed cohort photograph under a navy gradient, with a cyan radial glow top-right.

**Keyboard:** `2`, `3`, `4` jump straight into a session; `Esc` comes back here.

---

## BLOCK A — Welcome & who we are (slides 1–3, 3 min)

### Slide 1 — Title
**Prompt:** One giant year numeral, the theme under it, and one sentence that tells this
cohort why their year is different.

| Year | Line under the title |
|---|---|
| 2 | The year you stop being a science student and start being an engineer |
| 3 | The year your name goes on something that runs |
| 4 | The senior year — and the first cohort to reach Year 5 |

**Figure:** cohort photo, navy gradient, ITC + International Engineering School lockup top-left,
presenter block bottom-right (HOK TIN · Coordinator of Software Engineering · October 2026).

**Speaker note:** 20 s. Name the cohort. State the contract out loud — 20 minutes from you,
10 minutes of questions from them, and the questions are the part that matters.

---

### Slide 2 — Agenda
**Prompt:** Four icon steps, not a list. AI first, because that is what they arrived worrying about.

1. **Will AI replace us?** — the honest answer
2. **Your Year N** — the year theme
3. **How you are graded** — and the rules that cost marks
4. **What is already yours** — labs, network, internships, abroad

Closing bar: **20 minutes from me · 10 minutes of questions from you — the second half is the useful half.**

---

### Slide 3 — Who runs Software Engineering
**Prompt:** Three people, one room, three channels. Nothing else.

- **Dr. CHEA Samneang** — Head, International Engineering School
- **Mr. HOK TIN** — Coordinator, Software Engineering
- **Ms. CHAB Sreylen** — Program Officer, Software Engineering
- **Room A314, Building A** — the International Engineering School office
- facebook.com/itcinternationalengineeringschool · itc.edu.kh/international-engineering-program-2026
- se.info@itc.edu.kh · (+855) 96 5 698 698

**Speaker note:** A314 is the International Engineering School office *and* the admission
office — one room, so it is the door for anything official: nomination letters, transcripts,
lists. Point at Ms. CHAB Sreylen for anything administrative so students stop queuing at the
wrong desk, and say the Facebook page is the fastest route for a question that does not need
a desk.

---

## BLOCK B — Where you are (slide 4, 1.5 min)

### Slide 4 — The five-year journey map
**Prompt:** The spine of the talk and the slide to spend the most design effort on. An
ascending five-step staircase, one step per year, with the **current year outlined and
labelled YOU ARE HERE**, completed years ticked and flattened, and **Year 5 drawn dashed**.

| Year | Theme | Credits | S1 | S2 | Courses |
|---|---|---|---|---|---|
| 1 | Foundations in STEM | 33.0 | 15.0 | 18.0 | 13 |
| 2 | Core ICT & Programming | 33.0 | 16.5 | 16.5 | 12 |
| 3 | Core Software Engineering | 33.0 | 17.0 | 16.0 | 9 |
| 4 | Advanced Systems & Capstone | 27.0 | 14.0 | 13.0 | 9 |
| 5 | Specialisation & Internship | 23.0 | 12.0 | 11.0 | 4 + 2 internships |

Two internship flags below the baseline: **Internship 1 · 2 cr · after Year 4** (solid) and
**Final internship · 9 cr** (dashed, under Year 5).

> **These credits are re-summed from the course rows, not copied from the workbook's total
> row.** Both workbooks record TOTAL YEAR 1 as 30.0 while their own Year 1 courses
> add to 33.0, so its grand total of 146.0 under-counts by 3.0. The summed programme total
> is **149.0**. See §3.

**Speaker note:** Walk it left to right once, slowly, and stop on their year. Be straight
about Year 5 — the courses are written, nobody has sat them. For the Year 4 room, add that
they are the first cohort and their feedback shapes it.

---

## BLOCK C — AI & the engineer (slides 5–7, 3.5 min)

Adapted from the national-programme deck. The argument is unchanged; the evidence column is ours.

### Slide 5 — "Will AI replace software engineers?"
**Prompt:** Almost no text. The question at 62 pt on navy, then two panels:

- Left, struck through and grey: **AI vs. the engineer** — *the framing everyone arrives with, and the wrong one*
- Right, gold: **Engineer with AI vs. engineer without** — *this is the comparison that will decide your first job*

Then, large: **Not the profession. Some of the tasks.**

**Speaker note:** Admit the worry is reasonable — do not wave it away. AI is genuinely good
at producing code. Then draw the line: AI is becoming very good at *producing* software;
people still decide what software should exist, why, and under what constraints.

---

### Slide 6 — What AI does well, what still needs you
**Prompt:** Two columns with a three-bar capability meter on every row. Green bars left,
amber and red right — the colour gradient tells the story before anyone reads it.

**AI is already strong at** — boilerplate, CRUD APIs, UI components · unit tests, documentation,
SQL · refactoring and translating between languages · debugging common errors, fast prototypes

**Still needs an engineer** — system architecture *(amber)* · understanding what the business
actually needs *(amber)* · trade-offs of cost, speed, risk *(amber)* · security and reliability
decisions *(amber)* · **owning a production system when it breaks** *(red)* · **deciding what
should be built at all** *(red)*

**Speaker note:** Be generous about the left column; that honesty is what makes the right
column credible. The red rows are the ones nobody can delegate.

---

### Slide 7 — Everything AI cannot do, this programme already teaches
**Prompt:** Twelve skill→course pairs in two columns, each with a year-coloured bar. The rows
matching **the session's own year get a ring around them**. Closing bar, centred, on navy:
**"AI may write the code — but engineers must understand the code."**

| What stays valuable | Where you learn it | Year |
|---|---|---|
| Data structures & algorithms | FPI22DSA · Data Structures and Algorithms | 2 |
| Requirements & analysis | FPI21ISE · Intro to Software Engineering | 2 |
| Databases | FPI22ID · Introduction to Database | 2 |
| Operating systems | FPI22OS · Operating Systems | 2 |
| Software architecture | SEY31SSA · Software System Architecture | 3 |
| Testing & quality | SEY32AST · Automated Software Testing | 3 |
| Project & people judgement | SEY31ITPM · IT Project Management | 3 |
| Shipping a real product | SEY32CCP1 · Capstone Computing Project 1 | 3 |
| Scale & reliability | SEY41DS · Distributed Systems | 4 |
| Security & privacy | SEY41DSP · Data Security and Privacy | 4 |
| Cloud & delivery | SEY42CC · Cloud Computing · SEY42DO · DevOps | 4 |
| AI itself | SEY42ML · Machine Learning | 4 |

**Speaker note:** Land this properly — it is what turns anxiety into motivation. If an AI
hands you 500 lines, the questions that matter are: is the algorithm right, is input
validated, is auth secure, will this hold at a million users, is that query efficient, what
happens when the network fails, can anyone maintain it, and does it even meet the
requirement? Every one of those comes from a course on this slide.
**For the Year 2 room only**, add the hard part: write your own code this year — you cannot
judge output you were never able to produce.

---

## BLOCK D — Your year (slides 8–16, 10 min)

> Order inside the block: divider → Semester 1 → Semester 2 → **your week → the calendar →
> who teaches you** → pitfalls → readiness → grading. The timetable sits *after* the course
> lists on purpose: the grid is unreadable until the course names mean something.

> This is the block that is genuinely different in each session. Course codes, credits and
> lecturer names below come straight from `4_Years_Curriculum.xlsx` → `2026_5_Years_Program`.

### — YEAR 2 SESSION —

#### Slide 2.8 — Divider
**YEAR 2 · Core ICT & Programming** · *The first year that is actually Software Engineering*
· chips: 33 credits · 12 courses · Two Project & Seminar units.
**Figure:** giant cyan "2" over the lab photograph.

**Speaker note:** Last year was shared science with every international programme in the
building. From now on the courses carry an SE code and they are yours. This is also the year
the gap between students opens up — and it opens on practice, not on talent.

#### Slide 2.9 — Semester 1 (16.5 cr, 6 courses)
| Code | Course | Cr | Lecturer |
|---|---|---|---|
| FPI21PDI | Programming Design & Implementation | 3.5 | Mr. BOU Channa |
| FPI21ISE | Introduction to Software Engineering | 3.0 | Mr. TAL Tongsreng |
| FPI21FCDS | Fundamental Concepts of Data Security | 3.0 | Mr. PICH Reatrey |
| FPI21IISS | Integrating Indigenous Science & STEM | 3.5 | Dr. MAY Raksmey |
| FPI21UIUX | UI / UX Design | 2.0 | Mr. OL Phearun |
| FPI21PSIII | Project and Seminar III | 1.5 | Dr. SRANG Sarot |

Side panel: **the one that sets the pace** — Programming Design & Implementation, 3.5 credits,
80 hours. Fall behind here and Semester 2 is unrecoverable.

#### Slide 2.10 — Semester 2 (16.5 cr, 6 courses)
| Code | Course | Cr | Lecturer |
|---|---|---|---|
| FPI22DSA | Data Structures and Algorithms | 3.0 | Mrs. SEAK Leng |
| FPI22OOP | Object Oriented Programming | 3.0 | Mr. HOK Tin |
| FPI22ID | Introduction to Database | 3.0 | Mr. NOP Phearum |
| FPI22OS | Operating Systems | 3.0 | Mr. HENG Rathpisey |
| FPI22LASE | Linear Algebra & Statistics | 3.0 | Dr. PHAUK Sokkhey |
| FPI22PSIV | Project and Seminar IV | 1.5 | Dr. SRANG Sarot |

Side panel: **these four are interview questions** — Data Structures · OOP · Database ·
Operating Systems. In two years someone will ask you about them across a table.

#### Slide 2.11 — What goes wrong in Year 2
Four cards, two red two amber: letting AI write your first programs · treating Project &
Seminar as filler · starting the lab the night before · leaving English until Year 4.
Closing bar: **Calculators exist and mathematicians still learn to add. Write your own code
this year — use AI to explain it, not to produce it.**

#### Slide 2.12 — Five things to start before November
Install Git this week · code every day · finish one small thing per semester · join a club ·
book the English test. Footer: *Your first internship is three years away. Everything that
makes it a good one starts this semester.*

### — YEAR 3 SESSION —

#### Slide 3.8 — Divider
**YEAR 3 · Core Software Engineering** · *The year your name goes on something that runs* ·
chips: 33 credits · 9 courses · Capstone Computing Project 1.

#### Slide 3.9 — Semester 1 (17.0 cr, 5 courses)
| Code | Course | Cr | Lecturer |
|---|---|---|---|
| SEY31IP | Internet Programming | **5.0** | Mr. CHUN Thavorac |
| SEY31SSA | Software System Architecture | 3.0 | Mr. CHUN Thavorac |
| SEY31SEC | Software Engineering Concepts | 3.0 | Mr. TAL Tongsreng |
| SEY31NSD | Networks System Design | 3.0 | Dr. KUY Movsun |
| SEY31ITPM | IT Project Management | 3.0 | Mr. TAL Tongsreng |

**Speaker note:** Internet Programming is 112 hours — the single largest teaching unit in the
degree — and it sits next to Software System Architecture with the same lecturer. That is
deliberate: you build it in one and learn why it is shaped that way in the other.

#### Slide 3.10 — Semester 2 (16.0 cr, 4 courses)
| Code | Course | Cr | Lecturer |
|---|---|---|---|
| SEY32MAD | Mobile Application Development | **6.0** | Mr. HOK Tin |
| SEY32CCP1 | Capstone Computing Project 1 | 4.0 | Mr. SOK Kimheng |
| SEY32AST | Automated Software Testing | 3.0 | Mr. TAL Tongsreng |
| SEY32EI | Entrepreneurship and Innovation | 3.0 | Ms. CHOEUN Chakriya |

Callout: **Pick your Capstone topic because you want the thing to exist — not because it
looks easy to mark.** Side stat: **6.0 credits · 128 hours — the largest unit in five years.**

#### Slide 3.11 — What people wish they had done in Year 3
Green column: deploy something publicly · keep a repository with a year of real commits ·
write the capstone report as you go · divide team work by component, never by "you code".
Red column: letting one person carry the capstone · choosing a topic because it is easy to
mark · pasting AI output you cannot defend out loud · finishing the year with nothing to show.

#### Slide 3.12 — Five things to start this semester
Ship one thing publicly · pick your capstone early · write as you build · talk to a lab ·
sit the English test. Footer: *In twelve months someone will ask what you have built. Decide
now what the answer is.*

#### Slide 3.7b — Competency wheel (extra slide, this session only)
Twelve-segment wheel, colour-coded by the year each competency is built, **Software Engineer**
in the hub. Programming, data structures, databases, UI/UX (Y2) · web, architecture, mobile,
testing (Y3) · distributed systems, cloud & DevOps, machine learning, security (Y4).

### — YEAR 4 SESSION —

#### Slide 4.8 — Divider
**YEAR 4 · Advanced Systems & Capstone** · *The senior year — and the first cohort to reach
Year 5* · chips: 27 credits · 9 courses · Capstone Computing Project 2.
**Figure:** giant violet "4" over the ABA Bank site-visit photograph.

**Speaker note:** Two sentences only this room gets to hear. You are the most senior SE
students in the building and there is nobody ahead of you to copy. And the programme moved
from four years to five, so you are the first cohort that will sit Year 5. Do not oversell
that — it also means some things will be arranged late, and they should say so when they are.

#### Slide 4.9 — Semester 1 (14.0 cr, 5 courses)
| Code | Course | Cr | Lecturer |
|---|---|---|---|
| SEY41DS | Distributed Systems | 3.0 | Mr. KEM Thay |
| SEY41DSP | Data Security and Privacy | 3.0 | Mr. PICH Reatrey |
| SEY41ERP | Enterprise Resource Planning | 3.0 | Ms. CHOEUN Chakriya |
| SEY41GT | Game Theory | 3.0 | Mr. SOK Kimheng |
| SEY41NSA | Networks System Administration | 2.0 | Dr. KUY Movsun |

Callout: **the lightest load since Year 1 — on purpose.** The rest of their capacity goes to
Capstone 2 and finding an internship.

#### Slide 4.10 — Semester 2 (13.0 cr, 4 courses)
| Code | Course | Cr | Lecturer |
|---|---|---|---|
| SEY42CCP2 | Capstone Computing Project 2 | 4.0 | Mr. SOK Kimheng |
| SEY42ML | Machine Learning | 3.0 | Dr. PHAUK Sokkhey |
| SEY42CC | Cloud Computing | 3.0 | Mr. HENG Rathpisey |
| SEY42DO | DevOps | 3.0 | Mr. TAL Tongsreng |

Callout on navy: **Dr. PHAUK Sokkhey taught your Linear Algebra and Statistics in Year 2.
Machine Learning is where that maths finally pays.**

#### Slide 4.11 — Year 5: what is actually there
Both Year 5 semesters side by side, gold-coded, with the honest sub-line *"Written in the
2026 curriculum. Teaching staff for Semester 1 are still being assigned."*

| Code | Course | Cr |
|---|---|---|
| SEY51SAED | Software Architecture & Extensible Design | 3.0 |
| SEY51SPM | Software Process Management | 3.0 |
| SEY51SDO | Secure DevOps | 3.0 |
| SEY51ASET | Advanced Software Engineering Testing | 3.0 |
| SEY52INT | Internship 1 — after Year 4 | 2.0 |
| SEY52FNT | Internship 2 — final year | 9.0 |

Gold panel: **You get a say in this.** Nobody has sat Year 5 yet. When the coordinator asks
what it should contain, answer properly — this is the one year of the degree they can still change.

#### Slide 4.12 — Five things with a deadline on them
Email three companies · finish the capstone well · pick a specialisation · apply for 2+2 or
exchange · ask about Year 5. Footer: **Two students from this programme fly to Missouri in
August. The difference between them and everyone else is that they applied.**

### Slides N.9a–N.9c — the week and the calendar *(all three sessions)*

Three slides built entirely from what the registry publishes. The data is in
`src/data/timetable.js`, generated from the spreadsheet rather than retyped.

#### Slide N.9a — Your week
**Prompt:** The real weekly grid as a **table** — time down the left, Mon–Fri across the top,
one tinted block per slot carrying the course, the type and the lecturer. Lectures in the
year colour, TP/TD in gold. Leave empty slots genuinely empty so the gaps read as gaps.
Header line: *Semester 1 · Weeks 1–8 · from Monday 5 October 2026*. Footer: a legend plus the
weekly totals.

| Group | Slots/week | Lecture | Practical | Heaviest day | Lightest |
|---|---|---|---|---|---|
| **I2-SE** | 21 | 10 | 11 | Tue (6) | Thu (3) |
| **I3-SE** | 22 | 12 | 10 | Tue (6) | Mon/Wed/Thu/Fri (4) |
| **I4-SE** | 20 | 10 | 10 | Fri (8) | Mon/Thu (2) |

Saturday is clear in all three. No group has anything before 7:00 or after 17:05.

**Speaker note:** Pause and tell them to photograph it — that is what the slide is for. Then
the three things they will not read off it: the practical half is where marks move and is the
half students treat as optional; the day load is lopsided, so put your own work in the gap;
and this grid is **Weeks 1–8 only** — the rest is not published yet, so watch the page.

#### Slide N.9b — Semester 1, dated
**Prompt:** The dated milestones down the left as colour-coded rows, the Semester 1
non-teaching days in a panel on the right, and one closing line on navy.

| Date | Event |
|---|---|
| **Fri 2 Oct** | Orientation — Y2, Y3, Y4 *(today)* |
| **Mon 5 Oct** | Commencement — teaching starts |
| Fri 23 Oct | New School Opening Ceremony |
| **Fri 22 Jan** | End of Semester 1 — Y2, Y3, Y4 |
| **Tue 26 Jan** | Exam preparation week |
| **Tue 2 Feb** | Exam week — Semester 1 |
| Wed 10 Feb | Correction week |
| **Mon 15 Feb** | Semester 2 starts |

Non-teaching days inside Semester 1: Pchum Ben (11 Oct) · King Father's Commemoration
(15 Oct) · Independence Day (9 Nov) · Pre-Concil (11 Nov) · Concil of students & university
life (18 Nov) · Water Festival (23–24 Nov) · Peace Day (29 Dec) · New Year's Day (1 Jan) ·
Victory Day (7 Jan).

Closing line: **Semester 1 ends 22 January; the exams are in February. The week between is
revision, not holiday.**

**Speaker note:** Commencement was Monday — teaching has already started, the first week is
not a warm-up. The gap between end-of-semester and exams is the only block of revision time
the calendar gives them. Semester 2 starts two weeks after the exams, so there is no long
break in the middle of this year.

#### Slide N.9c — Who teaches you this year
**Prompt:** Every lecturer for the year, two columns, each with a count badge showing how many
of the student's courses they carry and the course names underneath. Sort by count descending
so the people carrying two or three courses sit at the top. Closing bar: **Every one of them
has office hours. Almost nobody uses them.**

Year 2 has 11 lecturers across 12 courses, Year 3 has 6 across 9, Year 4 has 6 across 9.

**Speaker note:** The ones carrying two or three of their courses are the people worth
building a relationship with — that is who writes the recommendation, supervises the
internship and answers the email in two years.

---

### Slide 16 — How you are graded *(shared, all three sessions)*
**Prompt:** The ITC grading scale as eight compact chips on the left with the extension line
under it, then two cards on the right — what late work costs, and what missing class costs.

| % | Grade | GPA | | Late by | Penalty |
|---|---|---|---|---|---|
| 85–100 | A | 4.0 | | Within 24 h | **−5%** |
| 80–84 | B+ | 3.5 | | Each further 24 h | **−10%** |
| 70–79 | B | 3.0 | | After 7 days | **Zero** |
| 65–69 | C+ | 2.5 | | | |
| 50–64 | C | 2.0 | | | |
| 45–49 | D | 1.5 | | | |
| 30–44 | E | 1.0 | | | |
| < 30 | F | 0.0 | | | |

Under the scale: **Ask for an extension before the deadline and it is a conversation. Ask
after, and it is a penalty.**

**Missing class**, as a two-step escalation in red:
> Attendance is counted in every course.
> **1 — A call to the International Engineering School's office**
> **2 — Too many absences: we contact your parent or guardian**
> *Come and talk to us before step 2. At step 1 it is almost always fixable.*

**Speaker note:** Say the attendance part plainly rather than as a threat. The call to the
office is the chance to fix it, and most problems at that stage turn out to be fixable.
Contacting a parent or guardian happens when it has stopped being only an academic matter.
Nobody wants to make that second call — tell them to come and talk to the coordinator before
it gets there.

---

## BLOCK E — The road ahead (1–2 slides, 1.5–3 min)

> The one block that scales with how close the student is to graduating. Year 2 sees all
> three remaining years at once because they are far away; Year 3 sees Year 4 and Year 5 in
> detail because they are the next decision; Year 4 sees Year 5 and then what comes after the
> degree. The capability text lives in `FUTURE_READY` and `AFTER_DEGREE` in `content.js`.

### Slide 17 — The road ahead *(Year 2 only)*
**Prompt:** Three columns, one per remaining year, each with the year numeral in its colour,
the theme, the credits and four capability lines. Equal-height headers so the columns align.

| Year | Theme | Credits | What it makes you able to do |
|---|---|---|---|
| **3** | Core Software Engineering | 33 | Build and deploy a web application end to end · ship a mobile app onto a real device · design a system before you code it · test automatically |
| **4** | Advanced Systems & Capstone | 27 | Design systems that stay up when one machine does not · deploy to the cloud and automate the pipeline · build and evaluate an ML model · treat security as a design constraint |
| **5** | Specialisation & Internship | 23 | Architect for change · run a software process · build security into the pipeline · test to a professional standard |

Closing bar: **Build it · scale it · own it. The year employers actually look at starts twelve
months from now.**

### Slides 17–18 — What Year N makes you able to do *(Year 3: years 4 and 5 · Year 4: year 5)*
**Prompt:** One year per slide. Five numbered capability lines down the left, phrased as verbs
so a student hears the difference between a syllabus and a capability. On the right: the
courses behind it as chips, a *Worth knowing now* panel, and a navy *What it unlocks* card.

| Year | Unlocks | Worth knowing now |
|---|---|---|
| **4** | The internship — and the three CV lines that currently move salaries most: cloud, DevOps, ML | The lightest teaching load since Year 1, on purpose |
| **5** | The engineer's degree, and the choice between industry, a master's and going abroad | Four taught courses, then the final internship at 9 credits. No cohort has sat it yet |

### Slide 18 — And then what *(Year 4 only)*
**Prompt:** Three doors as cards, each with the honest qualifier underneath.

- **Industry** — software, cloud, security, data, in Cambodia or on the partner network ·
  *the internship is usually the interview*
- **A master's degree** — at ITC or abroad through the partner universities ·
  *your GPA and your English decide this one*
- **Your own thing** — the Incubation Center takes student ventures ·
  *Entrepreneurship and Innovation is a Year 3 course for a reason*

Closing bar: **All three doors are already open. The only people who go through them are the
ones who ask.**

---

## BLOCK F — Internship & opportunity (5.5–6 min)

### Free things you are not using yet
**Prompt:** Six resource cards plus two photographs. Kicker must read **"Shared with the GIC
department"** so the provenance is unambiguous.

- **ViLa Lab** — Khmer NLP research under Dr. VALY Dona; the lab takes student research assistants
- **DADS Lab** — data analysis & data security, open to student research assistants
- **Lab F306** — free student access, high-speed internet
- **Incubation Center** — space, mentors, investors; running since February 2018
- **Student clubs** — software, web, mobile, network
- **Competitions** — Huawei ICT APAC · Technovation · SmartStart

**Figure:** the Vacation Crash Course 2025 poster (`object-contain`) and the Huawei APAC photo.

**Speaker note:** Say the framing out loud — being in the international programme does not cut
them off from the department, it adds to it. ViLa Lab takes student research assistants, so
that door opens with one email rather than an application. The Crash Course is taught **by**
students, so for this room it is an invitation to tutor, not to attend.

### The internship road *(differs by year)*
A single timeline bar with the internship band in gold, plus three cards.

**Year 2 and Year 4** keep the forward-looking version:

| Session | Band label | Three cards |
|---|---|---|
| Year 2 | Internship 1 · 2 credits | Two internships · You may find your own · A supervisor each |
| Year 4 | **Internship 1 · 2 credits · after Year 4** | **Write to three organisations this semester** · Have something to attach · Tell the coordinator |

Year 2 stops there — no defence format, no defence photography. Three years out, the useful
message is that it compounds, not how it will be marked.

**Year 3 gets a different slide entirely — "You have no internship this year. Go and find
one."** The five-year curriculum schedules Internship 1 *after Year 4*, so there is nothing
in the curriculum for Generation 2 this year: no placement, no credit, no defence. The slide
says so and turns it into an instruction:

- **Write to three organisations** — over the vacation; a short email with the capstone attached beats a CV
- **Ask for a nomination letter** — the department issues one even when the placement carries no credit
- **Then tell us** — if they find something good, it can often be made official

Closing bar: **An internship nobody made you do is the one an employer actually reads.**

**Speaker note:** Be straight about this, because it is the one thing this cohort will get
wrong on their own. An unassessed, self-arranged internship is worth more than a scheduled
one, because nobody made them do it and the company knows that.

---

### The rules, before you need them *(Year 3 and Year 4 only)*
**Prompt:** The department's existing internship rules, carried over wholesale from the
national programme. Four facts as a 2×2 of large numbers on the left, four things the
department does for you as stacked rows on the right.

| | |
|---|---|
| **When** | August – October — the window the department runs |
| **Internship 1** | min. 2 months · 2 credits, after Year 4 |
| **Final internship** | min. 3 months · 9 credits, in Year 5 |
| **To graduate** | 12 weeks total across both |

Right column, green for what you get and gold for what will catch you out:
- The department shares its partner list — *and you may arrange your own instead*
- Every student gets a faculty supervisor — *assigned, not negotiated*
- **We issue your nomination letter** — *companies expect one; ask the coordinator early*
- **No placement found?** — *the department assigns an in-school internship*

**Speaker note:** The nomination letter is the one that catches people — companies ask for a
letter from the institute, the department issues it, and students find this out the week they
need it. Say the last line plainly: nobody is left without a placement, but an in-school
internship is the fallback, not the plan, and the students who get the good ones started early.

---

### How an internship is defended *(Year 4 only)*
> **Year 4 only.** Year 3 has no internship scheduled for Generation 2 this year, so the
> assessment machinery is premature for that room — they get the "go and find one" slide
> instead. Year 2 is three years out and does not need the marking scheme yet. Year 4's
> internship is twelve months away and will be defended, so they get it.

**Prompt:** The department's 25-minute format as a donut, labelled directly on the segments —
**10 min presentation · 5 min live demo · 10 min jury questions** — beside a gold panel titled
*Where marks actually go*: a demo that fails live, a report written in the last week, not being
able to explain your own code. Under it, on navy: *the jury is lecturers, and on some panels
people from industry. The format is the same for both internships, so you only learn it once.*

---

### Defence day *(Year 3 and Year 4 only)*
**Prompt:** A photo-led slide with almost no text — the room is the message. One large real
defence photograph on the left, two stacked on the right, and three captions across the
bottom on navy chips: **You present to a jury · You demo what you built · You defend your
choices.** Use `photos/thesis_defenses/` via `NAT.defenceA/B/C`.

**Speaker note:** Show them what they will be standing in before they have to stand in it.
Everyone in these photographs went through the same two internships. Point out the dress code
without making a rule of it. Then the line that lands: you are not defending the company's
project, you are defending your own decisions inside it — which is why a student who only did
what they were told has nothing to say.

### Where the doors already are
**Prompt:** A name wall of **39 organisations that have taken a GIC department intern**,
grouped into six sectors with coloured dots and flowed in three CSS columns so the long
first sector cannot strand the others. No counts, no ranking — breadth is the message.
The count sits in the kicker — *"39 organisations have taken a GIC intern — this network
is open to you"* — rather than in a sub-line, which keeps the wall inside the stage.

> **Label this precisely.** It is the department's network, open to these students. It is
> **not** a list of SE international placements — this programme has not reached its
> internship year yet. The slide sub-line says so.

**Software & product** — Saat Tech · Norm Solution · Biz Solution · Proseth Solution · Codingate
Technology · Geek Digital · ByteDC Solutions · One Fraternity · Vectorasoft · Allweb IT Company ·
Web Essentials · Biplan Global · KMaker · GBS Technology · Authentic Digital Solution · NEWWAVE
Tech Foundry · VP.Start Technology
**Fintech & banking** — FinTech Center of FSA · BongLoy Payment · National Bank of Cambodia ·
Sathapana Bank · EKYC Solution
**AI** — Cam Ai · GateKhmer.ai Technology
**Telecom, media & tech** — CamMob · Laor Media · X-Water Technology · Pisnuk Auto Tech ·
Prestige Alliance · Angel Boss · Memotechs
**Education & training** — Bamnang Academy · DICHI Academy · Golden Gate American School ·
Institute of Technology of Cambodia
**Government & public** — Ministry of Industry, Science, Technology & Innovation · Ministry of
Education, Youth and Sport · General Dept. of Customs & Excise · Techo Startup Center

**Typography exception:** a name wall is a figure, so 19 px names and 22 px sector headings
are allowed where the rest of the deck holds a 24 px floor. Do not shrink them further —
drop the sector headings before touching the names.

**Year 3 and Year 4 only — add the closing strip**, on navy, with the long tail from the
placement record:

> **23 of those 39 took exactly one student — because one student asked.**

**Speaker note:** That strip is the whole point of the slide for a senior room. 74 placements
across 39 organisations, and 23 of them took a single student. Those doors were not opened by
the department; they were opened by one person who wrote an email. It is a record of what
people went out and arranged, not a fixed menu.

### Students from this programme, abroad
**Prompt:** Three cards, people first, logos second. Kicker: *Already happened — not a brochure.*

| Card | Who | What |
|---|---|---|
| 2+2 to the United States | DIM Ponhakvontey · VAN Sotheany | BSc Cybersecurity, University of Central Missouri · F-1 visa · Fall 2026 intake |
| Harbin Institute of Technology | Eight Year 2 & Year 3 students | HIT International Summer School 2026 — "Intelligent Frontiers, Computing Future" |
| Robotics tournament, Harbin | Certificate winner | International Invitational Tournament of Intelligent Competitive Robots 2026 |

**Speaker note:** These are not exceptional outsiders; they sat in this room.

### Four ways out of this building
**Prompt:** A pathway tree from **SE at ITC** to four routes, with the eight partner logos below.

- **Curtin University** — Australia · Malaysia, after the foundation years
- **2+2 articulation** — University of Central Missouri · Macquarie University
- **Exchange semester** — Grenoble Alpes · INSA Toulouse · ENSIIE · Namur
- **Double degree** — University of Central Missouri, United States

Central Missouri carries both the 2+2 and the double degree, which is why it appears on two
rows; that is deliberate, and it matches the route DIM Ponhakvontey and VAN Sotheany took.
ECAM LaSalle has been removed from the routes and from the logo wall.

**Speaker note:** Selection everywhere is grades first, then English, then motivation and
evidence of doing things outside class. Fix the GPA this year, sit the English test early,
and ask Ms. CHAB Sreylen for the application calendar rather than waiting for an announcement.

## BLOCK G — Close (last slide, 0.5 min)

### Last slide — Your first two weeks
**Prompt:** Five numbered actions over a darkened cohort photograph, then **Questions. Ten
minutes — use them.** and the full contact block.

| Year 2 | Year 3 | Year 4 |
|---|---|---|
| Log in to Moodle | Form your capstone team | Email three companies |
| Follow the page | Deploy something | Deploy the capstone |
| Install Git | Follow the page | Book the English test |
| Join one club | Email one lab | Pick a specialisation |
| Meet one lecturer | Book the English test | Send us Year 5 feedback |

Footer on every version: Room A314 · se.info@itc.edu.kh · (+855) 96 5 698 698 ·
facebook.com/itcinternationalengineeringschool · itc.edu.kh/international-engineering-program-2026

---

## 3. Items to verify before presenting

These could not be settled from the documents in `SE_Program/`. The first six change what you
say out loud, so resolve them first.

1. **Dr. CHEA Samneang's exact title.** The name is confirmed and the deck now shows
   "Dr. CHEA Samneang · Head, International Engineering School". The *title* is still as
   supplied — nothing on itc.edu.kh states it — so confirm the formal wording if it matters
   in front of the room.
2. **Internship 1 timing for Generation 1.** Both curriculum workbooks list both internships
   under **Year 5 Semester 2** while labelling them "Internship 1 (year 4)" and "Internship 2
   (year 5)". The deck states Internship 1 falls *after Year 4* and the final internship in
   Year 5. The Year 4 session is built around that date, so confirm the actual month window
   (the national programme runs August–October) before stating it as fact.
3. **Year 5 Semester 1 lecturers.** The deck prints "To be assigned" against all four
   courses because **the lecturer column is empty for them in every sheet of both
   workbooks** — `2026_5_Years_Program` and `Course_Syllabus_Collection` in
   `4_Years_Curriculum.xlsx` (rows 63–66, column F) and `5_Years_Program` in
   `5_year_curriculum.xlsx`, whose `Workload by semester` sheet files all four under
   **(Unassigned)**. If the assignments exist somewhere else, supply the four names and
   slide 4.11 becomes accurate with a one-line edit to `Y5S1` in `curriculum.js`.
   Until then the slide says so out loud, which is the honest version for the one room
   that will actually sit those courses.

4. **Credit totals in the workbook.** TOTAL YEAR 1 reads 30.0 against 33.0 of listed courses;
   the grand total reads 146.0 against a summed 149.0. The deck uses the summed figures.
   Correct the workbook, or tell the coordinator which is right.

5. **Lecturer names spelled two ways in the same workbook.** The deck uses the spelling that
   appears more often; do not let anyone "correct" it back without deciding which is right:
   **Dr. MAY Raksmey** (Engineering History) vs *Dr. MAY Reaksmey* (Integrating Indigenous
   Science & STEM), and **Dr. PHAUK Sokkhey** (Engineering Maths I, Linear Algebra) vs
   *Dr. Phauk Sokhey* (Machine Learning).

6. **Three courses the workbook flags as unstaffed despite naming someone.**
   `2026_5_Years_Program` carries the remark *"No lecturer yet"* against **UI/UX**
   (FPI21UIUX, "Phearun, Suiphing reserved"), **Enterprise Resource Planning** (SEY41ERP,
   "Ms. CHOEUN Chakriya") and **DevOps** (SEY42DO). The `Course_Syllabus_Collection` sheet
   disagrees further: it gives UI/UX to **Mrs. Seak Leng** and leaves ERP **blank**. The deck
   prints the names from `2026_5_Years_Program`. Settle UI/UX and ERP before the Year 2 and
   Year 4 sessions — both appear on a course slide.
7. **Four-year vs five-year on public material.** itc.edu.kh/international-engineering-program-2026
   and the 2026 brochure both still describe a **4-year** degree at 125 credits / 42 subjects.
   The 2026 curriculum workbooks and the ANNEX 9 revision are **5 years / 149 credits /
   47 subjects + 2 internships**. The deck follows the workbook. Note that
   `4_Years_Curriculum.xlsx` also carries a live 4-year plan on its
   `Updated_2026_4_Years_program` sheet, which lists **Capstone Computing Project 2**,
   **Software Architecture and Extensible Design** and **Software Process Management** under
   *Deleted courses*. Those three are in the deck because the 5-year sheet keeps them — but
   if the institute lands on the 4-year plan instead, slides 4.10 and 4.11 change. The website and brochure
   need updating, and students *will* bring this up in Q&A — have an answer ready.
8. **English entry requirement.** The brochure says IELTS ≥ 4.5, the website says IELTS ≥ 5.0 /
   TOEFL iBT ≥ 60, and the curriculum document says IELTS 5.5. Not presented in the deck, but
   it will come up when students ask about exchange eligibility.
9. **Moodle host.** The unit outlines say `moodle.itc.edu.kh`; the national programme uses
   `moodle.ccun.edu.kh`. The deck uses the former. Confirm which one Generation 3 is enrolled on.
10. **Current Year 2 SE headcount.** The 2025–26 Year 1 list has 62 students across groups A
   and B with no major column, so the SE/AIECS split for 2026–27 is not derivable from it.
   No headcount is shown on any slide; add one only if you want it.
11. **Techo Digital Talent allocation** for this year — the website's "65" is an intake figure,
   not a per-programme one. The slide deliberately says "ask the admission office".
12. **Lab F306 access** for international-programme students — inherited from the national
   deck. Confirm before promising it.

---

## 4. What was borrowed from the national programme, and why

The brief asked for shared resources to be reused for the international students' benefit.
These came across from `../../GICProgram/slide_content_prompts.md`:

| Borrowed | Where it lands | Changed how |
|---|---|---|
| The AI block (slides 5A–5D) | Slides 5–7, all sessions | Compressed 4 → 3 slides; the course mapping is re-pointed at SE codes |
| **Internship logistics (national slide 16)** | **"The rules, before you need them", Y3 + Y4** | Merged with the Year 5 duration rules from national slide 20; the nomination-letter line is new |
| The 39-organisation internship wall | "Where the doors already are", all sessions | Kept intact, **relabelled** as the department's network rather than SE placements |
| **Placement long tail (Appendix A)** | **Strip on that wall, Y3 + Y4 only** | 23 of 39 organisations took exactly one student — the single most useful line in the record |
| 25-minute defence format | "How an internship is defended", **Year 4 only** | Unchanged — the department runs one format for both internships |
| **Defence-day photography (national slide 17A)** | **"Defence day", Y3 + Y4** | Three real defences, three captions, no other text |
| ViLa / DADS labs, Lab F306, Incubation Center, clubs, competitions | "Free things you are not using yet" | Collected into one "shared with the GIC department" slide |
| Crash Course, Huawei APAC | Same slide | Used only on the slide about shared resources |
| Local company logo strip | Available in `content.js` as `CO_LOGOS` | Not placed on a slide — kept for a careers slide if you want one |

**Deliberately not borrowed:** the salary bars and the employment pie. This programme has no
graduates yet, so it has no tracer data, and borrowing the national programme's numbers would
be presenting someone else's outcomes as ours.

**Removed on request:** the fees-and-scholarships slide. Tuition, the merit bands and Techo
Digital Talent are admission-stage information and these students are already enrolled — the
admission office is the right place for it. `FEES` has been taken out of `content.js`; the
figures are still in `00Ads/4YPromotionBrochure/` and on the programme page if you want them
back as a handout.

---

## 5. This spec is already built

`presentation_slides/` is a working SolidJS + Tailwind v4 + Vite implementation of everything
above — a cover with three session buttons, then **20 slides for Year 2 and 22 each for
Year 3 and Year 4**, the difference being the internship block.

```bash
cd presentation_slides && npm install && npm run dev
```

| Key | Action |
|---|---|
| `2` / `3` / `4` | jump into that year's session, from anywhere |
| `→` / `Space` | next slide · `←` previous (back to the cover at slide 1) |
| `O` | overview grid, with buttons to switch session |
| `S` | speaker notes — every note in this file is in there |
| `F` | full screen · `Esc` close overlay, then back to the cover |

**URL modes.** `?track=y3` opens one session directly — use this in the room so a stray
keypress cannot wander into the wrong deck. `?print` stacks all three sessions with a divider
before each; ⌘P gives a PDF of everything. `?print&track=y4` prints one session.
`?slide=N&track=y2` renders a single slide for screenshots.

**Where to edit.**

- Course rows, credits, lecturers → `src/data/curriculum.js`
- People, contacts, partners, placements, outcomes → `src/data/content.js`
- Swap a photograph → `src/data/assets.js` (every entry is commented with what it shows)
- Year-specific slides → `src/slides/year2.jsx`, `year3.jsx`, `year4.jsx`
- Anything shared by all three → `src/slides/common.jsx`, which generates each shared slide
  per year, so one correction lands in all three decks
- **Which slides a session gets** → the `blocksFor` function in `src/slides/index.jsx`. The
  `senior` branch there is what gives Year 3 and Year 4 the extra internship slides
- Session order and block timings → `src/slides/index.jsx`

---

## Appendix A — Full five-year curriculum

From `01Curriculumn/4_Years_Curriculum.xlsx`, sheet `2026_5_Years_Program`, Prepared 2026
(saved 24 Sep; it supersedes `5_year_curriculum.xlsx` of 22 Sep).
Hours are L / T / P as recorded in the workbook.

| Yr | Sem | Code | Course | Cr | Lecturer |
|---|---|---|---|---|---|
| 1 | S1 | PDFI11ECS | Effective Communication Skills | 2.0 | Mr. SIEN Bross |
| 1 | S1 | PDFI11EMI | Engineering Mathematic I | 3.5 | Dr. PHAUK Sokkhey |
| 1 | S1 | PDFI11PC | Programming C++ | 3.0 | Mr. HOK Tin |
| 1 | S1 | PDFI11PEI | Physic for Engineering I | 3.0 | Mr. LONG Sovann |
| 1 | S1 | PDFI11ICT5 | Information and Communication Technology | 2.0 | Mr. HENG Rathpisey |
| 1 | S1 | PDFI11PSI | Project and Seminar I | 1.5 | Mr. TIM Hoksong |
| 1 | S2 | PDFI11EMII | Engineering Mathematic II | 3.5 | Dr. HAS Sothea |
| 1 | S2 | PDFI11CE | Chemistry for Engineering | 3.0 | Dr. HOUNG Peany |
| 1 | S2 | PDFI11PEII | Physics for Engineering II | 3.0 | Mr. LONG Sovann |
| 1 | S2 | PDFI11WRS | Writing and Research Skills | 2.0 | Ms. CHHE Sreyvatnak |
| 1 | S2 | PDFI11CT | Critical Thinking Skills | 3.0 | Ms. CHHE Sreyvatnak |
| 1 | S2 | PDFI11EH | Engineering History | 2.0 | Dr. MAY Raksmey |
| 1 | S2 | PDFI11PSII | Project and Seminar II | 1.5 | Mr. TIM Hoksong |
| 2 | S1 | FPI21PDI | Programming Design and Implementation | 3.5 | Mr. BOU Channa |
| 2 | S1 | FPI21ISE | Introduction to Software Engineering | 3.0 | Mr. TAL Tongsreng |
| 2 | S1 | FPI21FCDS | Fundamental Concept of Data Security | 3.0 | Mr. PICH Reatrey |
| 2 | S1 | FPI21IISS | Integrating Indigenous Science and STEM | 3.5 | Dr. MAY Reaksmey |
| 2 | S1 | FPI21UIUX | UI/UX | 2.0 | Mr. OL Phearun |
| 2 | S1 | FPI21PSIII | Project and Seminar III | 1.5 | Dr. SRANG Sarot |
| 2 | S2 | FPI22OS | Operating Systems | 3.0 | Mr. HENG Rathpisey |
| 2 | S2 | FPI22DSA | Data structures and Algorithms | 3.0 | Mrs. SEAK Leng |
| 2 | S2 | FPI22LASE | Linear Algebra and Statistics for Engineers | 3.0 | Dr. PHAUK Sokkhey |
| 2 | S2 | FPI22ID | Introduction to Database | 3.0 | Mr. NOP Phearum |
| 2 | S2 | FPI22OOP | Object Oriented Programming | 3.0 | Mr. HOK Tin |
| 2 | S2 | FPI22PSIV | Project and Seminar IV | 1.5 | Dr. SRANG Sarot |
| 3 | S1 | SEY31IP | Internet Programming | 5.0 | Mr. CHUN Thavorac |
| 3 | S1 | SEY31NSD | Networks System Design | 3.0 | Dr. KUY Movsun |
| 3 | S1 | SEY31SEC | Software Engineering Concepts | 3.0 | Mr. TAL Tongsreng |
| 3 | S1 | SEY31SSA | Software System Architecture | 3.0 | Mr. CHUN Thavorac |
| 3 | S1 | SEY31ITPM | IT Project Management | 3.0 | Mr. TAL Tongsreng |
| 3 | S2 | SEY32MAD | Mobile Application Development | 6.0 | Mr. HOK Tin |
| 3 | S2 | SEY32AST | Automated Software Testing | 3.0 | Mr. TAL Tongsreng |
| 3 | S2 | SEY32EI | Entrepreneurship and Innovation | 3.0 | Ms. CHOEUN Chakriya |
| 3 | S2 | SEY32CCP1 | Capstone Computing Project 1 | 4.0 | Mr. SOK Kimheng |
| 4 | S1 | SEY41GT | Game Theory | 3.0 | Mr. SOK Kimheng |
| 4 | S1 | SEY41DS | Distributed Systems | 3.0 | Mr. KEM Thay |
| 4 | S1 | SEY41NSA | Networks System Administration | 2.0 | Dr. KUY Movsun |
| 4 | S1 | SEY41ERP | Enterprise Resource Planning | 3.0 | Ms. CHOEUN Chakriya |
| 4 | S1 | SEY41DSP | Data security and Privacy | 3.0 | Mr. PICH Reatrey |
| 4 | S2 | SEY42ML | Machine Learning | 3.0 | Dr. PHAUK Sokkhey |
| 4 | S2 | SEY42CC | Cloud Computing | 3.0 | Mr. HENG Rathpisey |
| 4 | S2 | SEY42DO | DevOps | 3.0 | Mr. TAL Tongsreng |
| 4 | S2 | SEY42CCP2 | Capstone Computing Project 2 | 4.0 | Mr. SOK Kimheng |
| 5 | S1 | SEY51SAED | Software Architecture and Extensible Design | 3.0 | *unassigned* |
| 5 | S1 | SEY51SPM | Software Process Management | 3.0 | *unassigned* |
| 5 | S1 | SEY51SDO | Secure DevOps | 3.0 | *unassigned* |
| 5 | S1 | SEY51ASET | Advanced Software Engineering Testing | 3.0 | *unassigned* |
| 5 | S2 | SEY52INT | Internship 1 (year 4) | 2.0 | — |
| 5 | S2 | SEY52FNT | Internship 2 (year 5) | 9.0 | — |

**47 teaching subjects + 2 internships · 149.0 credits summed** (workbook total reads 146.0 — see §3).

### Teaching load, for context

From the `Workload by semester` sheet of the **older** `5_year_curriculum.xlsx`, which is the
only sheet that computes it — so it still attributes Machine Learning to Dr. VALY Dona and
has not been recomputed since the 24 Sep revision. Treat the shape as indicative, not the
totals. The four Year 5 Semester 1 courses are listed there under **(Unassigned)**.

| Lecturer | Courses | Hours |
|---|---|---|
| Mr. TAL Tongsreng | 5 | 320 |
| Mr. HOK Tin | 3 | 264 |
| Mr. SOK Kimheng | 3 | 256 |
| Mr. CHUN Thavorac | 2 | 176 |
| Mr. HENG Rathpisey | 3 | 176 |

---

## Appendix B — Programme Educational Objectives

From `02ProgramSpecs/SE_PEO_Program_2026.xlsx`. Not on any slide — orientation is the wrong
place for them — but they are what the year themes are built to deliver, and they are the
right answer if a student asks what the programme is *for*.

1. **Technical & professional skills** — graduates who design, develop and maintain innovative
   software solutions meeting the demands of the technology industry nationally and internationally.
2. **Lifelong learning & professional ethics** — graduates who continuously update their
   knowledge, adapt to emerging technologies, and uphold ethical responsibility, professionalism
   and teamwork.
3. **Innovator / researcher** — graduates who engage in applied research and innovation, pursue
   advanced studies, and contribute solutions to local and global challenges.
4. **Entrepreneurial** — graduates with an entrepreneurial mindset and social responsibility who
   contribute to technology-driven initiatives supporting Cambodia's knowledge-based economy.
