
'use client';

import Image from 'next/image';
import {
  Activity, BarChart2, Building2, Download, Github, Linkedin, Mail, Menu, MessageSquare,
  Moon, Search, ShieldAlert, Sun, TrendingUp, Workflow, X,
} from 'lucide-react';
import { useEffect, useState } from 'react';

const PROFILE = {
  name: 'Emmanuel Darkwa',
  headline: 'I build data systems and the products they power.',
  email: 'emmandark7@gmail.com',
  resume: '/Emmanuel_Darkwa_Resume.pdf',
  socials: {
    github: 'https://github.com/edark3',
    linkedin: 'https://www.linkedin.com/in/emmanuel-darkwa-b83641250/',
  },
};

/* All six, including the two separate pages. Six links plus the name, the
   theme toggle and the Resume button need about 780px, so the full bar only
   appears at lg and the compact menu covers everything below it. */
const NAV_LINKS: [string, string][] = [
  ['Work', 'work'],
  ['Projects', 'projects'],
  ['About', 'about'],
  ['Certifications', 'certs'],
  ['LinkedIn', '/linkedin'],
  ['Creatives', '/creatives'],
];

/* ------------------------------------------------------------------ data */

const FOCUS = [
  {
    title: 'Data engineering and platforms',
    body: 'Ingest, model, serve. Contracts that do not break, pipelines that recover on their own, and surfaces that drive a decision rather than sit in a folder.',
    tools: 'Python · SQL / Postgres · dbt · REST APIs & OAuth 2.0 · FTP/FTPS · pandas · Power BI',
  },
  {
    title: 'Cybersecurity',
    body: 'Security is an architecture decision, not a checklist at the end. Least-privilege access, auditable flows, explainable outputs, and secure defaults built in from day one.',
    tools: 'Threat modeling · IAM · Audit trails · Secrets management · CompTIA Security+',
  },
  {
    title: 'Product',
    body: 'I own the problem, not the ticket. Discovery, metric, ship, iterate. I have written the PRDs, run the stakeholder reviews, and held the line on scope when it mattered.',
    tools: 'PRDs · North-star metrics · Stakeholder alignment · SAFe POPM certified',
  },
  {
    title: 'Health data and systems',
    body: 'Applied analytics for public health and care delivery: surveillance, forecasting, cohorting, and FHIR/HL7 mapping with privacy designed in rather than bolted on.',
    tools: 'Epidemiology · Time series · Clinical NLP · FHIR/HL7 · De-identification',
  },
];

const PROJECTS = [
  {
    title: 'PhishNet AI',
    icon: ShieldAlert,
    tone: 'tone-teal',
    body:
      'Paste a suspicious message and get a risk score with the specific signals behind it. I rebuilt it after finding that v1 parsed model output with a regex and silently left the score at zero whenever that regex missed, rendering dangerous messages as a reassuring green. v2 constrains the model to a JSON schema, throws instead of defaulting, and recomputes the risk level from the score rather than trusting the model to keep them consistent. The API key now lives in a serverless function. It also includes a passphrase generator built to NIST SP 800-63B, with entropy computed from the real wordlist.',
    tools: 'Gemini API · Serverless · NIST SP 800-63B',
    links: [
      { label: 'Try it live', href: 'https://phishnet-ai-v2.vercel.app' },
      { label: 'Code', href: 'https://github.com/edark3/phishnet-ai-v2' },
    ],
  },
  {
    title: 'Basketball Personnel Reporting Tool',
    icon: Activity,
    tone: 'tone-orange',
    body:
      'A scouting and roster strategy dashboard across four leagues. A team-strength model with era-adjusted weights and exponential recency decay ranks programs over a ten-year window, and a valuation model estimates compensation for 1,000+ college players from performance, conference strength, and playing time.',
    tools: 'Next.js · TypeScript · Recharts · Data modeling',
    links: [
      { label: 'Try it live', href: 'https://basketball-piv-engine.vercel.app' },
      { label: 'Code', href: 'https://github.com/edark3/basketball-piv-engine' },
    ],
  },
  {
    title: 'Automated data pipeline, sports analytics integration',
    icon: Workflow,
    tone: 'tone-blue',
    body:
      'Replaced a manual multi-step download with automated Python pipelines pulling six data types across REST API and FTP channels. The API side uses OAuth 2.0 and parses 2,400+ session records. The FTP side filters a national data-sharing network from roughly 11,000 files (2.8 GB) down to the 110 that matter (23 MB), using MLSD batch listing to cut runtime.',
    tools: 'Python · OAuth 2.0 · FTP/FTPS · pandas · ETL',
    links: [],
  },
  {
    title: 'Financial operations forecasting',
    icon: TrendingUp,
    tone: 'tone-green',
    body:
      'Driver-based forecasting models and budget dashboards for a Division I athletics program. Historical actuals and forward-looking assumptions in one place, so leadership can scenario-plan live instead of waiting on a static spreadsheet.',
    tools: 'Power BI · Financial modeling · SQL',
    links: [{ label: 'Ask me about it', href: `mailto:${PROFILE.email}` }],
  },
  {
    title: 'Postgame survey NLP pipeline',
    icon: MessageSquare,
    tone: 'tone-blue',
    body:
      'Automated the full lifecycle of postgame survey analysis: ingestion, cleaning, topic modeling, and sentiment scoring, delivered as tagged weekly summaries with no manual effort. Raw feedback became structured, actionable insight.',
    tools: 'Python · NLP · Automation',
    links: [],
  },
  {
    title: 'Operational analytics dashboards',
    icon: BarChart2,
    tone: 'tone-orange',
    body:
      'Modeled KPIs end to end in dbt, wired them into a Power BI layer, and established a single source of truth across several systems. The measure of success was adoption: dashboards non-technical stakeholders actually kept using.',
    tools: 'SQL · dbt · Power BI',
    links: [],
  },
  {
    title: 'NASA Space Apps Challenge, urban planning tool',
    icon: Building2,
    tone: 'tone-purple',
    body:
      'Backend architecture for a tool helping Chicago planners spot environmental and socioeconomic patterns. API endpoints, data processing, and AI-powered insight modules over population density, air quality, income, and weather data, built under hackathon time constraints.',
    tools: 'Backend · APIs · Geospatial data',
    links: [{ label: 'Code', href: 'https://github.com/edark3/chicago-urban-planning-tool' }],
  },
  {
    title: 'Consumer product industry project',
    icon: Search,
    tone: 'tone-red',
    body:
      'Data workflows, product framing, and an AI search feature for a Fortune 500 company, letting internal users query across company data conversationally. Details are under NDA, but I am happy to walk through the approach.',
    tools: 'Product · Data engineering · AI integration',
    links: [],
  },
];

const CERTS = [
  { name: 'Certificate in Cybersecurity, Information Trust Institute, UIUC', status: 'Completed, Aug 2026', img: '/certs/iti_cyber.jpg' },
  { name: 'SAFe Product Owner / Product Manager', status: 'Completed', img: '/certs/safepopm.png' },
  { name: 'Cisco: Introduction to Cybersecurity', status: 'Completed', img: '/certs/ciscocyb.png' },
  { name: 'CompTIA Security+ (SY0-701)', status: 'In progress', img: '/certs/comptia.png' },
  { name: 'AWS Cloud Practitioner', status: 'In progress', img: '/certs/aws.jpeg' },
];

const BEYOND = [
  ['Sports', 'Lifelong hooper. The basketball tool exists because I care about the game, not only the data.'],
  ['Training', 'Certified personal trainer. Consistency is a system, not a mood. Same philosophy I bring to engineering.'],
  ['Creating', 'Content at the intersection of sports, tech, fashion, and hoops culture.'],
  ['Gear', 'I test gadgets and care about the last ten percent of the experience, the part most people skip.'],
];

/* --------------------------------------------------------------- pieces */

/*
 * Light is the default and the stored choice wins over the OS setting, which
 * is why the inline script in layout.tsx stamps data-theme before paint. This
 * component only reads what is already on <html>, so it never disagrees with
 * what the visitor is looking at.
 */
function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'dark' : 'light');
  }, []);

  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* private browsing: the choice just does not persist */
    }
  }

  return (
    <button
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="p-2 rounded-full muted hover:text-ink transition"
    >
      {theme === 'dark' ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
    </button>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    // Opaque, not translucent: a sticky bar over running text has to hide what
    // passes under it, and a blur alone leaves headings ghosting through.
    <nav aria-label="Main" className="sticky top-0 z-50" style={{ background: 'var(--paper)' }}>
      <div className="container h-14 flex items-center justify-between gap-6">
        <a href="#home" className="font-medium whitespace-nowrap">{PROFILE.name}</a>

        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map(([label, id]) => (
            <a
              key={id}
              href={id.startsWith('/') ? id : `#${id}`}
              className="px-2.5 py-1 rounded-md text-sm muted hover:text-ink transition"
            >
              {label}
            </a>
          ))}
          <ThemeToggle />
          <a href="/resume" className="btn-primary ml-1">
            <Download className="w-4 h-4 mr-1.5" /> Resume
          </a>
        </div>

        <div className="lg:hidden flex items-center gap-1">
          <ThemeToggle />
          <button
            className="p-2 muted"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden px-5 pb-4 flex flex-col gap-1" style={{ background: 'var(--paper)' }}>
          {NAV_LINKS.map(([label, id]) => (
            <a
              key={id}
              href={id.startsWith('/') ? id : `#${id}`}
              onClick={() => setOpen(false)}
              className="px-2 py-2.5 rounded-md text-sm muted hover:text-ink"
            >
              {label}
            </a>
          ))}
          <a href="/resume" onClick={() => setOpen(false)} className="btn-primary mt-2 w-full">
            <Download className="w-4 h-4 mr-1.5" /> Resume
          </a>
        </div>
      )}
    </nav>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-20 sm:py-28 scroll-mt-20">
      <h2 className="section-title mb-10 sm:mb-14 text-center">{title}</h2>
      {children}
    </section>
  );
}

/* ----------------------------------------------------------------- page */

export default function Page() {
  return (
    <div className="min-h-screen">
      <a href="#main" className="skip-link">Skip to main content</a>
      <Nav />

      <main id="main" className="container">
        {/* HERO */}
        <section id="home" className="relative pt-20 sm:pt-28 pb-10 text-center">
          <div className="hero-bg" aria-hidden="true" />
          <p className="rise kicker">
            Data · Product · Security
          </p>

          <h1 className="rise display mt-5 mx-auto max-w-[20ch]">
            {PROFILE.headline}
          </h1>

          <div className="rise measure-wide mx-auto mt-7 space-y-5">
            <p className="lede">
              I am a data analyst at University of Illinois Athletics, building the pipelines,
              models, and dashboards people actually make decisions with.
            </p>
            <p className="muted leading-relaxed">
              I have also launched AI features and delivered analytics systems for a Fortune 500
              client. I own problems end to end, which usually means I am still the one building.
            </p>
          </div>

          <div className="rise mt-9 flex flex-wrap gap-3 justify-center">
            <a href="#projects" className="btn-primary">See the work</a>
            <a href={`mailto:${PROFILE.email}`} className="btn-secondary">
              <Mail className="w-4 h-4 mr-2" /> Email
            </a>
            <a href={PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
            </a>
            <a href={PROFILE.socials.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <Github className="w-4 h-4 mr-2" /> GitHub
            </a>
          </div>

          <figure className="mt-16 max-w-sm mx-auto">
            <div className="panel relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="/headshot-hero.jpg"
                alt="Emmanuel Darkwa"
                fill
                sizes="(max-width: 640px) 100vw, 384px"
                className="object-cover"
                priority
              />
            </div>
            <figcaption className="faint mt-4">
              B.S. Information Sciences, University of Illinois Urbana-Champaign. Minors in computer
              science, cybersecurity, and health technology.
            </figcaption>
          </figure>
        </section>

        {/* FOCUS */}
        <Section id="work" title="What I work on">
          <div className="grid lg:grid-cols-2 gap-x-14 gap-y-14">
            {FOCUS.map((f) => (
              <div key={f.title}>
                <h3 className="entry-title">{f.title}</h3>
                <p className="muted leading-relaxed mt-3 measure">{f.body}</p>
                <p className="tools mt-4">{f.tools}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* PROJECTS */}
        <Section id="projects" title="Selected work">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            {PROJECTS.map((p, i) => (
              /* Checkerboard rather than straight alternation: in a two column
                 grid, `i % 2` puts every dark tile in the right hand column,
                 which reads as two striped columns instead of a mix. */
              <article
                key={p.title}
                className={`${(Math.floor(i / 2) + i) % 2 === 1 ? 'card-invert' : 'panel'} ${p.tone} p-7 sm:p-9`}
              >
                <p.icon aria-hidden="true" strokeWidth={1.75} className="w-7 h-7 mb-4" style={{ color: 'var(--tone)' }} />
                <h3 className="entry-title">{p.title}</h3>
                <p className="muted leading-relaxed mt-3 measure">{p.body}</p>
                <p className="tools mt-4">{p.tools}</p>
                {p.links.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-4 text-sm">
                    {p.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target={l.href.startsWith('http') ? '_blank' : undefined}
                        rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="link-accent"
                      >
                        {l.label} →
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </Section>

        {/* ABOUT */}
        <Section id="about" title="About">
          <div className="measure-wide mx-auto space-y-5">
            <p className="muted leading-relaxed">
              I have been a builder since I was a kid. I was the Lego kid, dumping the whole bin
              out and building something that was not on the box. That never really left me, it
              just turned into software.
            </p>
            <p className="muted leading-relaxed">
              I am a product manager and data engineer out of the University of Illinois. I define
              what to build, ship it, and measure whether it worked. Most PMs hand off to
              engineering. I stay in the room because I can do the work.
            </p>
            <p className="muted leading-relaxed">
              My background spans data engineering, health informatics, and cybersecurity, which
              means I ask better questions early and catch the problems that surface late.
            </p>
            <p className="muted leading-relaxed">
              The best products come from people who understand the data underneath them. That is
              the edge I bring.
            </p>
          </div>
        </Section>

        {/* CERTS */}
        <Section id="certs" title="Certifications">
          <ul className="space-y-5 measure-wide mx-auto">
            {CERTS.map((c) => (
              <li key={c.name} className="flex items-baseline justify-between gap-6">
                <span>{c.name}</span>
                <span className="faint whitespace-nowrap">{c.status}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {CERTS.map((c) => (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img key={c.img} src={c.img} alt={c.name} loading="lazy" decoding="async" className="panel w-full h-auto" />
            ))}
          </div>
        </Section>

        {/* BEYOND */}
        <Section id="beyond" title="Beyond the work">
          <dl className="grid sm:grid-cols-2 gap-x-14 gap-y-8 measure-wide mx-auto">
            {BEYOND.map(([label, body]) => (
              <div key={label}>
                <dt className="font-medium">{label}</dt>
                <dd className="muted leading-relaxed mt-1">{body}</dd>
              </div>
            ))}
          </dl>
        </Section>

        {/* CONTACT */}
        <Section id="contact" title="Get in touch">
          <p className="lede measure-wide mx-auto text-center">
            Currently working full time. Always open to interesting conversations, collaborations,
            and ideas.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a href={`mailto:${PROFILE.email}`} className="btn-primary">
              <Mail className="w-4 h-4 mr-2" /> Email me
            </a>
            <a href={PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
            </a>
            <a href={PROFILE.socials.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <Github className="w-4 h-4 mr-2" /> GitHub
            </a>
          </div>
        </Section>
      </main>

      <footer className="container py-10 faint flex flex-wrap items-center justify-between gap-3">
        <span>© {new Date().getFullYear()} Emmanuel Darkwa</span>
        <span className="flex items-center gap-4">
          <a href="/linkedin" className="link-accent">LinkedIn highlights</a>
          <a href="/creatives" className="link-accent">Creatives</a>
        </span>
      </footer>
    </div>
  );
}
