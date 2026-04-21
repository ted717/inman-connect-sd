export const EVENT = {
  name: "Inman Connect San Diego",
  shortName: "Connect San Diego",
  dates: "July 28 - 30, 2026",
  startISO: "2026-07-28T09:00:00-07:00",
  superEarlyBirdEnds: "2026-07-25T23:59:59-07:00",
  city: "San Diego",
  venue: "Marriott Marquis San Diego Marina",
  heroHeadline: "The future won't wait. Neither should you.",
  heroSub:
    "Join 4,000+ agents, brokers, and industry leaders at the must-attend real estate event. Real strategies. Real networking. Real results.",
};

export const STATS = [
  { n: "4,000+", label: "real estate pros" },
  { n: "250+", label: "expert speakers" },
  { n: "80+", label: "sessions & workshops" },
  { n: "3", label: "days that change everything" },
];

export const TRUSTED_BY = [
  "Compass",
  "Redfin",
  "RE/MAX",
  "Keller Williams",
  "eXp Realty",
  "Side",
  "Howard Hanna",
  "Coldwell Banker",
  "Zillow",
  "Douglas Elliman",
];

export const WHY_CONNECT = {
  eyebrow: "Why Connect",
  headline: "Commissions shifted. AI arrived. The playbook changed.",
  copy: "Inman Connect is where the industry converges — and where those doing it best share what's really working, so you can achieve big results too.",
  cards: [
    {
      title: "Win in a tougher market",
      body: "No-fluff strategies from top producers who are closing deals right now — not theory, execution.",
    },
    {
      title: "Master AI before it masters you",
      body: "Live demos, prompt libraries, and real brokerage deployments. Leave with tools you can use Monday morning.",
    },
    {
      title: "Adapt to the new commission reality",
      body: "Buyer agreements, value articulation, compensation models. Walk away with scripts and systems.",
    },
    {
      title: "Network with the industry's top 1%",
      body: "CEOs, mega-team leaders, proptech founders. The Connect Pass app makes meaningful intros effortless.",
    },
    {
      title: "Recharge. Reinvest in you.",
      body: "Your business grows to the size of your own growth. Three days to sharpen the most important asset — you.",
    },
  ],
};

export type Speaker = {
  initials: string;
  name: string;
  role: string;
  org: string;
  persona: "ceo" | "agent" | "economist" | "proptech" | "icon" | "author";
};

export const SPEAKERS: Speaker[] = [
  { initials: "GK", name: "Glenn Kelman", role: "CEO", org: "Redfin", persona: "ceo" },
  { initials: "AF", name: "Andy Florance", role: "Founder & CEO", org: "CoStar Group", persona: "ceo" },
  { initials: "BC", name: "Barbara Corcoran", role: "Founder", org: "The Corcoran Group", persona: "icon" },
  { initials: "BB", name: "Brian Buffini", role: "Chairman & Founder", org: "Buffini & Company", persona: "author" },
  { initials: "DF", name: "Daryl Fairweather", role: "Chief Economist", org: "Redfin", persona: "economist" },
  { initials: "EC", name: "Erik Carlson", role: "CEO", org: "RE/MAX Holdings", persona: "ceo" },
  { initials: "JA", name: "Jon Acuff", role: "NYT Bestselling Author", org: "Acuff Ideas", persona: "author" },
  { initials: "CP", name: "Clelia Peters", role: "Managing Partner", org: "Era Ventures", persona: "proptech" },
  { initials: "HL", name: "Holly Meyer Lucas", role: "Principal", org: "Meyer Lucas Team", persona: "agent" },
  { initials: "GG", name: "Guy Gal", role: "CEO & Co-Founder", org: "Side", persona: "ceo" },
  { initials: "DU", name: "Drew Uher", role: "Founder & CEO", org: "HomeLight", persona: "proptech" },
  { initials: "AL", name: "Anthony Lamacchia", role: "Broker/Owner & CEO", org: "Lamacchia Realty", persona: "agent" },
];

export type AgendaDay = {
  day: 1 | 2 | 3;
  date: string;
  title: string;
  sessions: string[];
};

export const AGENDA: AgendaDay[] = [
  {
    day: 1,
    date: "July 28",
    title: "The state of real estate",
    sessions: [
      "Opening keynote with Brad Inman",
      "Economist panel: where the market goes next",
      "Brokerage consolidation — winners & losers",
      "Opening night reception on the Marina",
    ],
  },
  {
    day: 2,
    date: "July 29",
    title: "AI, tech & the new agent stack",
    sessions: [
      "Live AI demos from top platforms",
      "The commission playbook workshop",
      "Team building masterclass",
      "Barbara Corcoran: staying relevant for decades",
    ],
  },
  {
    day: 3,
    date: "July 30",
    title: "Execution & growth",
    sessions: [
      "Closing strategies that convert",
      "Broker-owner private roundtables",
      "Marketing that actually generates leads",
      "Closing keynote: Your next 12 months",
    ],
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "I closed 3 deals in 82 days directly from relationships I made at Connect. Nothing else comes close.",
    name: "Maria R.",
    role: "Team Lead, Compass",
  },
  {
    quote:
      "The AI workshops alone paid for my ticket 10x over. I rebuilt my entire follow-up system on the flight home.",
    name: "David K.",
    role: "Broker/Owner, KW",
  },
  {
    quote:
      "You walk in an agent. You walk out with a plan, a playbook, and 50 new friends who get it.",
    name: "Jasmine P.",
    role: "Top Producer, eXp",
  },
];

export type PricingTier = {
  name: string;
  price: string;
  wasPrice?: string;
  cta: string;
  featured?: boolean;
  perks: string[];
};

export const PRICING: PricingTier[] = [
  {
    name: "Digital Pass",
    price: "$499",
    cta: "Go digital",
    perks: [
      "Livestream all keynotes",
      "90 days of on-demand replays",
      "Digital session notes",
      "Virtual networking lounge",
    ],
  },
  {
    name: "Super Early-Bird",
    price: "$1,199",
    wasPrice: "$1,999",
    featured: true,
    cta: "Lock in $800 off",
    perks: [
      "3 full days in San Diego",
      "All keynotes + breakouts",
      "Connect Pass networking app",
      "Opening night reception",
      "Hands-on workshops",
      "Certificate of attendance",
    ],
  },
  {
    name: "Broker / Team Bundle",
    price: "$899",
    wasPrice: "$1,599",
    cta: "Bundle & save",
    perks: [
      "Everything in Super Early-Bird",
      "Dedicated team check-in",
      "Private team lounge access",
      "Group photo with featured speakers",
      "Team broker-owner roundtable",
    ],
  },
];

export const FAQ = [
  {
    q: "Who should attend Inman Connect San Diego?",
    a: "Agents, team leads, brokers, proptech founders, and anyone serious about the next 12 months in real estate. If you're doing the work — you belong here.",
  },
  {
    q: "What's included with my pass?",
    a: "All keynotes, all breakout sessions, the Connect Pass networking app, the opening night reception, and 90 days of on-demand access to every recorded session.",
  },
  {
    q: "What if I can't make it?",
    a: "Every pass is 100% transferable up to 7 days before the event, or convertible to a Digital Pass anytime with a partial refund of the difference.",
  },
  {
    q: "Is there a group or team discount?",
    a: "Yes — the Broker / Team Bundle covers groups of 5+ and includes private team programming. Teams of 10+ can email us for custom pricing.",
  },
  {
    q: "Where is it held?",
    a: "Marriott Marquis San Diego Marina. Room block rates are available through our booking partner.",
  },
  {
    q: "Will sessions be recorded?",
    a: "Every keynote and main-stage session. Recordings are published to the Connect Pass app within 48 hours and stay available for 90 days.",
  },
];
