export type SourceKind = "reporting" | "statute" | "legislature" | "context";

export type Source = {
  id: string;
  n: number;
  kind: SourceKind;
  outlet: string;
  title: string;
  date?: string;
  url: string;
  note: string;
};

export const sources: Source[] = [
  {
    id: "reason",
    n: 1,
    kind: "reporting",
    outlet: "Reason",
    title: "Virginia Mom Gets 6-Month Suspended Jail Sentence for Letting 5-Year-Old Walk to the Pond",
    date: "September 2, 2026",
    url: "https://reason.com/2026/09/02/virginia-mom-gets-6-month-suspended-jail-sentence-for-letting-5-year-old-walk-to-the-pond/",
    note: "Lenore Skenazy’s on-the-record account of the walk, the route, the security encounter, the CPS Level 2 finding, the bench trial, and the suspended sentence. Primary source for sidewalk setback, two crosswalks, 25-mph limit, 24-hour security, and Judge Brian J. Smalls.",
  },
  {
    id: "wapo",
    n: 2,
    kind: "reporting",
    outlet: "The Washington Post",
    title: "Mother charged after 5-year-old walks to pond alone, stirring parenting debate",
    date: "September 6, 2026",
    url: "https://www.washingtonpost.com/dc-md-va/2026/09/06/5-year-old-walked-alone-gated-community-his-mom-was-sentenced/",
    note: "Juan Benn Jr. reports the June 5 walk, the subsequent conviction for contributing to the delinquency of a minor, the withheld-finding offer Parkinson declined, and confirmation from Williamsburg Commonwealth’s Attorney Nate Green.",
  },
  {
    id: "bi",
    n: 3,
    kind: "reporting",
    outlet: "Business Insider",
    title: "I let my 5-year-old walk half a mile alone. Four days later, there was a warrant for my arrest.",
    date: "September 9, 2026",
    url: "https://www.businessinsider.com/mom-cps-child-walk-alone-neighborhood-pond-2026-9",
    note: "First-person account by Karyann Parkinson, as told to Jane Ridley. Details the security-guard encounter, the CPS home visit, the mid-July substantiated finding, and the seven-year registry placement.",
  },
  {
    id: "cbs",
    n: 4,
    kind: "reporting",
    outlet: "CBS News",
    title: "Mom found guilty of abuse for letting 5-year-old walk outside alone speaks out",
    date: "September 7, 2026",
    url: "https://www.cbsnews.com/news/virginia-mom-child-abuse-conviction-walking-alone-karyann-parkinson/",
    note: "Parkinson’s on-camera account of the instruction she gave Sam; notes Virginia is one of 13 states with a reasonable-childhood-independence law; reports she plans to appeal, with a hearing expected in January.",
  },
  {
    id: "usatoday",
    n: 5,
    kind: "reporting",
    outlet: "USA Today",
    title: "Virginia mom guilty of abuse after 5-year-old walked alone. What now?",
    date: "September 9, 2026",
    url: "https://www.usatoday.com/story/life/health-wellness/2026/09/09/virginia-mom-abuse-charge-5-year-old-walked-alone-parenting-debate/91670047007/",
    note: "Places the walk on June 5 in Ford’s Colony; quotes the security guard telling Parkinson that unaccompanied children were not permitted and that he would call police.",
  },
  {
    id: "fox",
    n: 6,
    kind: "reporting",
    outlet: "Fox News",
    title: "Virginia mom placed on child abuse registry for 7 years after letting 5-year-old walk alone",
    date: "September 6, 2026",
    url: "https://www.foxnews.com/media/virginia-mom-placed-child-abuse-registry-7-years-letting-5-year-old-walk-alone",
    note: "Parkinson’s clarification that she sent Sam down a familiar path that happens to pass the pond to collect goose feathers, not to play unsupervised in the water.",
  },
  {
    id: "adler",
    n: 7,
    kind: "reporting",
    outlet: "The Free Press",
    title: "She Let Her Son Go for a Walk. Now She’s a Convicted Criminal.",
    date: "September 8, 2026",
    url: "https://www.thefp.com/p/she-let-her-son-go-walk-convicted-criminal-regulation-parenting-choice",
    note: "Jonathan Adler, who attended the trial, reports Sam was then 5 years and 8 months old; describes Ford’s Colony from the community’s own language; notes Parkinson has appealed and, under Virginia procedure from J&DR court, is entitled to a jury.",
  },
  {
    id: "volokh",
    n: 8,
    kind: "reporting",
    outlet: "Reason (Volokh Conspiracy)",
    title: "How Letting a Young Child Go for a Walk Can Become a Criminal Offense",
    date: "September 8, 2026",
    url: "https://reason.com/volokh/2026/09/08/how-letting-a-young-child-go-for-a-walk-can-become-a-criminal-offense/",
    note: "Adler’s companion essay: one can debate the parenting decision without treating it as a crime. Confirms the August bench trial in Williamsburg J&DR District Court.",
  },
  {
    id: "deseret",
    n: 9,
    kind: "reporting",
    outlet: "Deseret News",
    title: "A mother let her child walk to a pond. Criminal charges followed",
    date: "September 8, 2026",
    url: "https://www.deseret.com/family/2026/09/08/parenting-free-range-mother-case/",
    note: "Background on Parkinson’s work in Sen. Jill Vogel’s office and her internship at the Institute for Justice. Notes she believes the delinquency charge was an attempt to bypass the 2023 independence statute.",
  },
  {
    id: "code371",
    n: 10,
    kind: "statute",
    outlet: "Code of Virginia",
    title: "§ 18.2-371. Causing or encouraging acts rendering children delinquent, abused, etc.",
    url: "https://law.lis.virginia.gov/vacode/title18.2/chapter8/section18.2-371/",
    note: "The Class 1 misdemeanor under which Parkinson was convicted. It incorporates the juvenile-code definition of “abused or neglected” in § 16.1-228.",
  },
  {
    id: "code100",
    n: 11,
    kind: "statute",
    outlet: "Code of Virginia",
    title: "§ 63.2-100. Definitions — “abused or neglected child,” independent activities",
    url: "https://law.lis.virginia.gov/vacode/title63.2/chapter1/section63.2-100/",
    note: "Social-services definition. The independent-activity carve-out is the statutory heart of this essay.",
  },
  {
    id: "code228",
    n: 12,
    kind: "statute",
    outlet: "Code of Virginia",
    title: "§ 16.1-228. Definitions (juvenile and domestic relations)",
    url: "https://law.lis.virginia.gov/vacode/title16.1/chapter11/section16.1-228/",
    note: "The juvenile-code definition of “abused or neglected child,” which SB 1367 also amended. § 18.2-371 points here, not merely to the social-services title.",
  },
  {
    id: "vac30",
    n: 13,
    kind: "statute",
    outlet: "Virginia Administrative Code",
    title: "22VAC40-705-30. Types of abuse and neglect",
    url: "https://law.lis.virginia.gov/admincode/title22/agency40/chapter705/section30",
    note: "DSS regulation repeating the independent-activity carve-out in the physical-neglect section.",
  },
  {
    id: "sb1367",
    n: 14,
    kind: "legislature",
    outlet: "Virginia Legislative Information System",
    title: "SB 1367 (2023) — Child abuse or neglect; independent activities",
    date: "Chapter 568, approved March 26, 2023; effective July 1, 2023",
    url: "https://lis.virginia.gov/bill-details/20231/SB1367",
    note: "Chief patron Sen. Jill Holtzman Vogel. Senate 40–0; House 96–0; Senate agreed to House amendments 40–0. Amended both § 16.1-228 and § 63.2-100.",
  },
  {
    id: "legiscan",
    n: 15,
    kind: "legislature",
    outlet: "LegiScan",
    title: "VA SB1367 | 2023 | Regular Session",
    url: "https://legiscan.com/VA/bill/SB1367/2023",
    note: "Enrolled text and roll calls; chaptered as Acts of Assembly Chapter 568.",
  },
  {
    id: "letgrow",
    n: 16,
    kind: "legislature",
    outlet: "Let Grow",
    title: "Virginia — Reasonable Childhood Independence",
    url: "https://letgrow.org/state/virginia/",
    note: "Organization that drafted model independence language. Notes that Virginia’s criminal code was not separately rewritten in 2023 — a fact that makes the interaction with § 18.2-371 the appellate question.",
  },
  {
    id: "hingham-walk",
    n: 17,
    kind: "context",
    outlet: "Hingham Anchor",
    title: "Foster Elementary School Celebrated the International Walk & Bike & Roll to School Month",
    date: "October 19, 2021",
    url: "https://www.hinghamanchor.com/foster-elementary-school-celebrated-the-international-walk-bike-roll-to-school-month-on-friday/",
    note: "Documents a Hingham elementary Walk, Bike & Roll to School Day, with Hingham Police providing extra crossing-guard support. Used only as illustration, not as Virginia law.",
  },
  {
    id: "hms-handbook",
    n: 18,
    kind: "context",
    outlet: "Hingham Public Schools",
    title: "Hingham Middle School Student Handbook, 2025–2026",
    url: "https://files-backend.assets.thrillshare.com/documents/asset/uploaded_file/4900/Hms/b45c61e7-47d1-46c0-bb37-cfe0c1c1b198/HMS_2025-2026_Student_Handbook.pdf?disposition=inline",
    note: "On bicycles: “parents/guardians are in the best position to determine the ability of their child to ride a bicycle safely.” The same allocation of judgment Virginia’s statute writes into neglect law.",
  },
];

export const sourceById = Object.fromEntries(sources.map((s) => [s.id, s])) as Record<
  string,
  Source
>;

export type SourceId = (typeof sources)[number]["id"];

export const kindLabel: Record<SourceKind, string> = {
  reporting: "Reporting",
  statute: "Statutes & regulations",
  legislature: "Legislative history",
  context: "Context",
};
