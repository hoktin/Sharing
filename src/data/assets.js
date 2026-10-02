/* Image map. Everything here is a real photograph or logo from this
   department — nothing is stock, nothing is generated.

   SE  — SE_Program/07Activities and 00Ads, imported 2026-10-02
   NAT — the national-programme deck (GICProgram/presentation_slides), reused
         deliberately where the resource itself is shared with GIC students */

const I = (f) => `./img/${f}`;

export const BRAND = {
  itc: I('brand_itc.png'),   // ITC crest, from the SE brochure assets
  gic: I('ori_image40.png'), // GIC department mark
  itcAlt: I('ori_image70.png'),
  bg: I('bg_network.jpg'),   // abstract network — title backgrounds only
};

/* --- our own students ---------------------------------------------------- */
export const SE = {
  cohort:      I('se_cohort.jpg'),       // the cohort + staff under the ITC sign, Building A
  labA:        I('se_lab_a.jpg'),        // lab work, from the brochure shoot
  labB:        I('se_lab_b.jpg'),        // project work, from the brochure shoot

  cyberA:      I('se_cyber_a.jpg'),      // cybersecurity workshop, speaker at the screen
  cyberB:      I('se_cyber_b.jpg'),
  cyberC:      I('se_cyber_c.jpg'),

  harbinGroup: I('se_harbin_group.jpg'), // 8 students at the HIT campus stone, Harbin
  harbinRobot: I('se_harbin_robot.jpg'), // robot tournament backdrop, certificate in hand
  travel:      I('se_travel.jpg'),       // students on the flight out

  abaA:        I('se_aba_a.jpg'),        // ABA Bank visit, the cohort seated
  abaB:        I('se_aba_b.jpg'),        // ABA Bank visit, boardroom briefing
  abaC:        I('se_aba_c.jpg'),
  daikinA:     I('se_daikin_a.jpg'),     // Daikin Cambodia briefing
  daikinB:     I('se_daikin_b.jpg'),
  siemreapA:   I('se_siemreap_a.jpg'),   // Siem Reap annual trip, museum
  siemreapB:   I('se_siemreap_b.jpg'),

  ucmOffer:    I('se_ucm_offer.jpg'),    // "Congratulations" card — UCM 2+2, Fall 2026
  ucmAward:    I('se_ucm_award.jpg'),    // UCM Global Partner Award flyer
};

/* --- shared with the national programme ---------------------------------- */
export const NAT = {
  crashCourse: I('new_crash_course.jpg'),   // GIC Vacation Crash Course 2025 poster
  huawei:      I('new_comp_huawei_a.jpg'),  // Huawei ICT Competition APAC Final 2024-25
  honda:       I('new_comp_honda.jpg'),     // Honda Y-E-S Award Ceremony 2025
  prize:       I('new_comp_prize.jpg'),     // prize presentation
  defenceA:    I('new_defence_a.jpg'),      // internship defence, cohort with jury
  defenceB:    I('new_defence_b.jpg'),      // internship defence, formal dress
  defenceC:    I('new_defence_c.jpg'),      // defence room, students with lecturers
  volunteer:   I('new_volunteer.jpg'),      // student outreach booth
  seminar:     I('new_meet_seminar.jpg'),   // department seminar
};

export const GRAPHIC = {
  industry4: I('ori_image18.png'),
  smartCity: I('ori_image7.png'),
  iot:       I('ori_image61.png'),
};

/* Two charts from the old national deck are deliberately NOT carried over:
     the employment pie (unverifiable 2020-23 figures) and the salary bar
     (superseded $650 figure). This deck makes no salary claim at all —
     there is no SE international tracer data yet. */
