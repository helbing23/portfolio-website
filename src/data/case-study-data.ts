import { CaseStudy } from "@/types/case-study";

const caseStudies: CaseStudy[] = [
  {
    slug: "ripple-ndt-invoicing",
    title: "Ripple NDT Invoicing",
    tagline: "Replacing spreadsheet billing with a role-based invoicing system for a nondestructive testing centre in Goa.",
    category: "Freelancing",
    technologies: ["Next.js", "TypeScript", "Prisma", "Supabase", "React-PDF", "Resend"],
    problem: [
      "Ripple Nondestructive Testing Centre ran job registrations, tax invoices and payment tracking across shared spreadsheets. Every invoice was retyped by hand, job records drifted out of sync with billing, and the directors had no live view of outstanding payments.",
      "A single wrong cell could mean a wrong tax invoice going out to a customer, and there was no trail of who changed what.",
    ],
    flow: [
      { label: "Job registration", detail: "Invoice staff register jobs against the customer database, so details are typed once." },
      { label: "Invoicing", detail: "Accountants raise tax invoices straight from job records, with PDF generation." },
      { label: "Payment tracking", detail: "Payments are logged against invoices, keeping outstanding balances current." },
      { label: "Director dashboard", detail: "Directors get a read-only summary of jobs, invoices and pending payments." },
    ],
    built: [
      "Four roles with their own modules and login redirects: admin, invoice staff, accountant and director.",
      "Custom authentication with email, password and a 6-digit OTP over Resend, rate limited, plus a separate PIN gate on settings.",
      "Job registration feeding invoicing directly, so numbers are entered once and reused.",
      "Payment tracking tied to invoices with running outstanding balances.",
      "PDF tax invoice generation with React-PDF.",
      "Prisma on Supabase Postgres, hosted on Vercel to keep running costs near zero for the client.",
    ],
    outcome: [
      "The manual spreadsheet workflow is gone. Each role sees only its own module, invoices come from job records instead of retyping, and the directors can check outstanding payments without asking anyone. Delivered as a Phase 1 MVP.",
    ],
  },
  {
    slug: "red-crm",
    title: "Red CRM",
    tagline: "Pre-sales CRM for Indian property developers, from lead capture to plot allotment.",
    category: "Freelancing",
    technologies: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Razorpay", "AWS"],
    problem: [
      "A property developer's pre-sales ran on phone calls, WhatsApp threads and spreadsheets. Leads arrived from Meta ads, property portals and walk-ins, landed with different people, and there was no shared pipeline.",
      "Plot availability lived in a spreadsheet nobody fully trusted, token payments were tracked by hand, and allotment letters were typed out in Word for every booking.",
    ],
    flow: [
      { label: "Lead capture", detail: "Web forms, Meta Ads, WhatsApp, walk-ins and portals feed one pipeline." },
      { label: "Qualification", detail: "Leads are tagged hot, warm or cold and assigned to sales agents." },
      { label: "Site visit", detail: "Visits are scheduled with Google Calendar sync." },
      { label: "Plot selection", detail: "An interactive SVG plot map shows real-time availability." },
      { label: "Booking and payment", detail: "Token and full payments go through Razorpay." },
      { label: "Allotment", detail: "Allotment letters are generated as PDFs automatically." },
    ],
    built: [
      "Multi-channel lead capture into a single qualification pipeline with hot, warm and cold tagging.",
      "Site visit scheduling synced to Google Calendar.",
      "An interactive 2D plot map in SVG with live availability status.",
      "Razorpay integration for token and full booking payments.",
      "Auto-generated allotment letter PDFs and WhatsApp Business notifications.",
      "Next.js frontend with a NestJS API on PostgreSQL and Prisma, single-company MVP with the architecture kept multi-tenant ready.",
    ],
    outcome: [
      "One pipeline covers the journey from ad click to allotment letter. Sales agents see plot availability live instead of phoning the office, and every payment and booking has a record behind it.",
    ],
  },
  {
    slug: "location-square",
    title: "Location Square",
    tagline: "Turning a WordPress brochure site into a service operations platform with bookings, vendors and property management.",
    category: "Freelancing",
    technologies: ["Next.js", "NestJS", "PostgreSQL", "Stripe", "AWS"],
    problem: [
      "Location Square started as a WordPress site. It could show services, but the actual business ran outside it: bookings over phone and email, vendors coordinated by hand, and residential block management tracked separately. The client needed an operations platform, and WordPress had nowhere left to grow.",
      "Off-the-shelf plugins could not model the real structure: customer bookings fulfilled by vendors, property blocks with their own billing, and content editing that should never touch operations.",
    ],
    flow: [
      { label: "WordPress audit", detail: "Mapped what the old site did, what the business actually needed, and migrated the content." },
      { label: "Modern rebuild", detail: "Next.js frontend with a NestJS API on PostgreSQL owning all business logic." },
      { label: "Service bookings", detail: "Customers book services, vendors fulfil them, Stripe handles payment." },
      { label: "Block management", detail: "A separate system for residential blocks with billing, issue reporting and its own authentication." },
      { label: "Content management", detail: "A CMS layer so site content stays editable without touching operations." },
    ],
    built: [
      "Three systems with strict boundaries: customer service bookings, block management and content management.",
      "Six roles across the platform, from customers and vendors to block admins and residents, each seeing only their own area.",
      "Stripe payments for service bookings, with offline payment tracking on the block side.",
      "A pnpm monorepo with a Next.js frontend and a NestJS API, deployed on AWS with Cognito authentication.",
      "A content editing role so the client updates the website without a developer, replacing what WordPress used to do.",
    ],
    outcome: [
      "The website went from describing the business to running it. Bookings, vendor fulfilment, block billing and content editing all live in one platform, and the WordPress ceiling is gone.",
    ],
  },
  {
    slug: "lee-care-services",
    title: "Lee Care Services",
    tagline: "Recovering a lost domain and rebuilding a care company's web presence, with a bespoke staff system instead of another subscription.",
    category: "Freelancing",
    technologies: ["Next.js", "TypeScript", "Framer Motion", "Resend"],
    problem: [
      "The old WordPress site and the domain itself sat with an offshore agency that had gone unresponsive. The owner had written both off and had no way to get his home care business back online, taking bookings or hiring carers.",
      "The usual fix for care companies is one of the hundred staff management products on the market, all tied to a monthly subscription that never ends.",
    ],
    flow: [
      { label: "Domain recovery", detail: "Worked the transfer process with the registrar until the client owned his domain again." },
      { label: "Architecture", detail: "Planned the new site and the staff application properly instead of patching the old WordPress build." },
      { label: "Website rebuild", detail: "A fast Next.js site with fourteen service pages, assessment booking and a careers application flow." },
      { label: "Staff management", detail: "A custom application for managing care staff, built for how this company actually works." },
      { label: "Handover", detail: "Delivered as a one-time cost. The client owns the domain, the site and the system outright." },
    ],
    built: [
      "Domain recovery from an unresponsive agency, putting ownership back in the client's hands.",
      "A Next.js website covering fourteen care services from live-in care to dementia care, each with its own page.",
      "Free assessment booking and a careers application flow with email handling through Resend.",
      "A bespoke care staff management application shaped around the company's own processes.",
      "One-time cost instead of a subscription: no monthly fees, no per-seat pricing, no lock-in.",
    ],
    outcome: [
      "The client went from locked out of his own business to owning every part of it. The new site takes assessments and job applications, staff management runs on his own system, and nothing bills him monthly.",
    ],
  },
  {
    slug: "solotrader-crm",
    title: "SoloTrader CRM",
    tagline: "One system for the business side of freelancing: leads, projects, team shares and invoices.",
    category: "Personal",
    technologies: ["Next.js", "Prisma", "Supabase", "Auth.js", "Bun", "Turborepo"],
    problem: [
      "Running freelance software work meant leads in email, proposals in documents, project status in chat, team profit splits in a spreadsheet and invoices in yet another tool. Nothing talked to anything else, and every handoff between those tools leaked time.",
      "I built SoloTrader for my own freelance practice first, then shaped it for other independent developers with the same problem.",
    ],
    flow: [
      { label: "Lead pipeline", detail: "Leads move through stages with proposals generated along the way." },
      { label: "Client conversion", detail: "Won leads become clients with projects attached." },
      { label: "Project phases", detail: "Work is tracked on a kanban across project phases." },
      { label: "Team shares", detail: "Team members and revenue shares are managed per project." },
      { label: "Invoicing", detail: "Invoices and payments close the loop, feeding dashboard analytics." },
    ],
    built: [
      "Lead management with proposal generation and client conversion.",
      "Project management with phase-based kanban boards.",
      "Team coordination with per-project revenue shares.",
      "Invoicing and payment tracking with dashboard analytics on recharts.",
      "Secure document and credential storage per client.",
      "A Bun and Turborepo monorepo where the Prisma schema, Zod validation and UI components are shared packages.",
    ],
    outcome: [
      "The whole client lifecycle runs in one place, from first contact to paid invoice. It manages my own freelance practice day to day.",
    ],
  },
  {
    slug: "career-ops-agentic-os",
    title: "Career-Ops Agentic OS",
    tagline: "An autonomous job-search loop that scans, evaluates, tailors and applies while I sleep.",
    category: "Personal",
    technologies: ["Claude Code", "Node.js", "Playwright", "launchd", "AI Agents"],
    githubUrl: "https://github.com/helbing23/career-ops",
    problem: [
      "A serious job search is a part-time job. Scanning boards, judging fit, tailoring a CV and filling the same application forms eats hours every day, while companies use AI to filter candidates on their side.",
      "The open source Career-Ops project gave me a strong multi-agent pipeline, but it still needed a human at the keyboard for every run. I wanted the whole loop to run unattended on my Mac.",
    ],
    flow: [
      { label: "Scan", detail: "API and Playwright browser scans across LinkedIn, Indeed, CV-Library, Reed and WTTJ.", phase: "Cloud half, daily at 09:00" },
      { label: "Evaluate", detail: "Each role gets an A to G fit score against my profile." },
      { label: "Tailor", detail: "High-fit roles get a tailored CV generated for them." },
      { label: "Queue", detail: "Approved roles land in a queue file as the handoff point." },
      { label: "Auto-fill and submit", detail: "A persistent Playwright profile drains the queue and fills forms from my data pack.", phase: "Local half, every 30 minutes" },
      { label: "Daily digest", detail: "A zero-LLM Gmail summary reports what was scanned, scored and submitted." },
    ],
    built: [
      "A two-half autonomous loop on macOS launchd: a cloud half that runs daily and a local half every 30 minutes.",
      "A Playwright scanner over five job boards using a persisted logged-in browser profile.",
      "A to G fit scoring and tailored CV generation through Claude Code multi-agent modes.",
      "A queue handoff between the halves with a full audit log of every submission.",
      "Safety rails: a kill switch, dry-run window, score thresholds, dedup against past applications, daily caps and anti-bot pacing.",
      "A zero-LLM daily email summary over Gmail SMTP with nodemailer.",
    ],
    outcome: [
      "The search runs itself. Applications go out daily with scores and an audit trail, and my involvement drops to reading the morning digest and taking interviews.",
    ],
  },
  {
    slug: "shreyanshs-app",
    title: "Shreyanshs App",
    tagline: "A mentorship marketplace and SRE training platform for Shreyanshs CIC, in one product.",
    category: "Personal",
    technologies: ["Next.js", "Supabase", "TypeScript"],
    status: "In development",
    problem: [
      "Shreyanshs CIC runs mentorship and SRE training as separate manual tracks. Mentors and mentees are matched over email and spreadsheets, training happens across scattered tools, and the organisation has no single view of a learner's journey.",
      "As CTO and Strategic Technology Advisor I own the platform architecture that brings those tracks together.",
    ],
    flow: [
      { label: "Mentee onboarding", detail: "Mentees sign up with goals and background." },
      { label: "Mentor matching", detail: "The marketplace matches mentees with mentors instead of email threads." },
      { label: "Sessions", detail: "Mentorship sessions are scheduled and tracked in the platform." },
      { label: "SRE training", detail: "Structured SRE training modules run alongside mentorship." },
      { label: "Progression", detail: "One record follows the learner from first session to job readiness." },
    ],
    built: [
      "A marketplace model connecting mentees with mentors.",
      "SRE training programs delivered inside the same platform.",
      "Career progression tracking across mentorship and training.",
      "A Next.js and Supabase foundation consistent with the organisation's main site.",
    ],
    outcome: [
      "Replaces email-and-spreadsheet matching with one platform and gives Shreyanshs CIC a single view of every learner. Currently in development, launching under Shreyanshs CIC.",
    ],
  },
];

export default caseStudies;
