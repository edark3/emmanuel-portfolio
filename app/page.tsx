
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, ExternalLink, Sparkles, TrendingUp, MessageSquare, BarChart2, ShieldAlert, Activity, Building2, Database, HeartPulse, Shield, Lightbulb } from 'lucide-react';

const PROFILE = {
  name: 'Emmanuel Darkwa',
  headline:
    'Product manager who can build. I ship products, define the metrics, and write the pipeline if I have to.',
  sub:
    'I sit at the intersection of product thinking and data engineering. I\'ve launched AI features, built forecasting tools for Division I athletics, and delivered analytics systems for a Fortune 500 company. I own problems end-to-end.',
  email: 'emmandark7@gmail.com',
  resume: '/Emmanuel_Darkwa_Resume.pdf',
  socials: {
    github: 'https://github.com/edark3',
    linkedin: 'https://www.linkedin.com/in/emmanuel-darkwa-b83641250/',
  },
};

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Nav() {
  return (
    <div className="fixed top-0 inset-x-0 z-50 bg-[#0E0B14]/60 backdrop-blur-md">
      <div className="container h-14 flex items-center justify-between">
        <a href="#home" className="text-white/90 hover:text-white font-medium">
          Emmanuel Darkwa
        </a>
        <div className="hidden sm:flex items-center gap-2">
          {[
            ['About', 'about'],
            ['Work', 'work'],
            ['Projects', 'projects'],
            ['Certifications', 'certs'],
            ['LinkedIn', '/linkedin'],
            ['Creatives', '/creatives'],
            ['Contact', 'contact'],
          ].map(([label, id]) => (
            <a
              key={id}
              href={id.startsWith('/') ? id : `#${id}`}
              className="px-3 py-1 rounded-full text-white/75 hover:text-white hover:bg-white/10 text-sm"
            >
              {label}
            </a>
          ))}
          <a href="/resume" className="btn-primary ml-2">
            <Download className="w-4 h-4 mr-1" /> Resume
          </a>
        </div>
      </div>
      <div className="section-divider" />
    </div>
  );
}

function Section({ id, title, children }: { id: string; title?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-16 sm:py-20 scroll-mt-24">
      <div className="container">
        {title && (
          <div className="mb-6 flex items-center gap-4">
            <h2 className="text-2xl sm:text-3xl font-semibold">{title}</h2>
            <div className="flex-1 section-divider" />
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen">
      <div className="hero-bg" />
      <Nav />

      {/* HERO */}
      <section id="home" className="pt-24 sm:pt-28 pb-8">
        <div className="container grid md:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
          <div>
            <motion.p variants={fade} initial="hidden" animate="show" className="kicker">
              B.S. Information Sciences · Minors in CS, Health Technology & Cybersecurity · UIUC · 2026
            </motion.p>
            <motion.h1 variants={fade} initial="hidden" animate="show" className="display mt-2">
              {PROFILE.headline}
            </motion.h1>
            <motion.p
              variants={fade}
              initial="hidden"
              animate="show"
              className="mt-4 text-white/70 text-lg max-w-2xl"
            >
              {PROFILE.sub}
            </motion.p>
            <motion.div variants={fade} initial="hidden" animate="show" className="mt-6 flex flex-wrap gap-2">
              <a href="#projects" className="btn-primary">
                See work <ArrowRight className="w-4 h-4 ml-1" />
              </a>
              <a href={`mailto:${PROFILE.email}`} className="btn-secondary">
                <Mail className="w-4 h-4 mr-2" /> Contact
              </a>
              <a href={PROFILE.socials.linkedin} target="_blank" className="btn-secondary">
                <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
              </a>
              <a href={PROFILE.socials.github} target="_blank" className="btn-secondary">
                <Github className="w-4 h-4 mr-2" /> GitHub
              </a>
            </motion.div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                ['Data Engineering', 'Pipelines, models, serve'],
                ['Health Data & Systems', 'FHIR, epi, privacy'],
                ['Cybersecurity', 'Least privilege & audit'],
                ['Product', 'PRDs, KPIs, experiments'],
              ].map(([label, sub], i) => (
                <div key={i} className="glass p-4 rounded-2xl">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="block flex-shrink-0 h-2 w-2 rounded-full bg-white/70" />
                    <span className="font-medium">{label}</span>
                  </div>
                  <div className="text-xs text-white/60 mt-1">{sub}</div>
                </div>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: .98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .6 }}>
            <div className="panel p-2">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[18px]">
                <Image src="/headshot.jpg" alt="Emmanuel Darkwa" fill className="object-cover object-top" priority />
              </div>
              <div className="absolute bottom-3 right-3 glass px-3 py-2 rounded-full text-sm inline-flex items-center">
                <Sparkles className="w-4 h-4 mr-1" /> Always building
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOCUS */}
      <Section id="work" title="Focus Areas">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="panel p-8">
            <Database className="w-6 h-6 mb-3 text-white/60" />
            <h3 className="text-2xl font-semibold">Data engineering & platforms</h3>
            <p className="text-white/70 mt-2">
              Ingest → model → serve. Contracts that don’t break, pipelines that self-heal, surfaces that drive action.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Python','SQL/Postgres','dbt','Airflow/Prefect','APIs/Next.js','Power BI'].map(t=>(
                <span key={t} className="glass px-3 py-1.5 rounded-full text-xs">{t}</span>
              ))}
            </div>
          </div>

          <div className="panel p-8">
            <HeartPulse className="w-6 h-6 mb-3 text-white/60" />
            <h3 className="text-2xl font-semibold">Health data & systems</h3>
            <p className="text-white/70 mt-2">
              Applied analytics for public health & care delivery: surveillance, forecasting, cohorting, and FHIR/HL7 mapping with privacy by design.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Epidemiology','Time-series','NLP (clinical/social)','FHIR/HL7','De-identification'].map(t=>(
                <span key={t} className="glass px-3 py-1.5 rounded-full text-xs">{t}</span>
              ))}
            </div>
          </div>

          <div className="panel p-8">
            <Shield className="w-6 h-6 mb-3 text-white/60" />
            <h3 className="text-2xl font-semibold">Cybersecurity by design</h3>
            <p className="text-white/70 mt-2">
              Security isn't a checklist. It's an architecture decision. Least-privilege IAM, auditable flows, explainable outputs, and secure defaults built into the product from day one.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Threat modeling','IAM / least privilege','Audit trails','Secrets management','CompTIA Sec+'].map(t=>(
                <span key={t} className="glass px-3 py-1.5 rounded-full text-xs">{t}</span>
              ))}
            </div>
          </div>

          <div className="panel p-8">
            <Lightbulb className="w-6 h-6 mb-3 text-white/60" />
            <h3 className="text-2xl font-semibold">Product mindset</h3>
            <p className="text-white/70 mt-2">
              I own the problem, not just the ticket. Discovery → metric → ship → iterate. I've written PRDs, run stakeholder reviews, and held the line on scope when it mattered.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {['PRDs & requirements','North-star metrics','Stakeholder alignment','SAFe® POPM certified'].map(t=>(
                <span key={t} className="glass px-3 py-1.5 rounded-full text-xs">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CERTS PREVIEW */}
      <Section id="certs" title="Certifications">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'CompTIA Security+ (SY0-701)', status: 'In Progress • 80%', img: '/certs/comptia.png', bar: 80 },
            { name: 'AWS Cloud Practitioner', status: 'In Progress • 80%', img: '/certs/aws.jpeg', bar: 80 },
            { name: 'SAFe® POPM (Product Owner / Product Manager)', status: 'Completed', img: '/certs/safepopm.png', bar: 100 },
            { name: 'Cisco: Introduction to Cybersecurity', status: 'Completed', img: '/certs/ciscocyb.png', bar: 100 },
          ].map((c,i)=> (
            <div key={i} className="panel overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.img} alt={c.name} className="w-full h-auto" />
              <div className="p-4">
                <div className="font-semibold">{c.name}</div>
                <div className="text-white/70 text-sm">{c.status}</div>
                <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-2 rounded-full" style={{ width: `${c.bar}%`, background: 'linear-gradient(90deg, #a855f7, #4f46e5)' }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: TrendingUp,
              title: 'Financial Operations Forecasting',
              desc: 'Built driver-based forecasting models and budget dashboards for a Division I athletics program. Unified historical actuals with forward-looking assumptions so leadership could scenario-plan in real time instead of waiting on static spreadsheets.',
              tags: ['Data Engineering', 'Power BI', 'Financial Modeling'],
              links: [{ label: 'Want to know more? Get in touch', href: `mailto:${PROFILE.email}` }],
            },
            {
              icon: MessageSquare,
              title: 'Postgame Survey NLP Pipeline',
              desc: 'Automated the full lifecycle of postgame survey analysis: ingestion, cleaning, topic modeling, and sentiment scoring. Delivered tagged weekly summaries to leadership with zero manual effort. Raw athlete feedback became structured, actionable insight.',
              tags: ['Python', 'NLP', 'Automation'],
              links: [],
            },
            {
              icon: BarChart2,
              title: 'Operational Analytics Dashboards',
              desc: 'Modeled KPIs end-to-end in dbt, wired them into a Power BI layer, and established a single source of truth across multiple data sources. Delivered dashboards that non-technical stakeholders actually adopted, not just opened once.',
              tags: ['SQL', 'dbt', 'Power BI'],
              links: [],
            },
            {
              icon: ShieldAlert,
              title: 'PhishNet AI: Phishing Detection',
              desc: 'Built a phishing detection engine with risk scoring designed from the ground up for non-technical users. Explainability was baked in from day one. Every flag comes with a plain-language reason, not just a score.',
              tags: ['Security', 'Machine Learning', 'Explainability'],
              links: [],
            },
            {
              icon: Activity,
              title: 'Basketball Personnel Reporting Tool',
              desc: 'Full-stack scouting and roster strategy dashboard covering NBA, WNBA, NCAAM, and NCAAW. Built a custom Player Impact Value (PIV) tier system, modeled NIL estimates for every college player from performance and conference data, and analyzed the pre/post-NIL era using a team-strength formula with recency decay. Four tabs: cap analysis, player development curves, full roster views, and an NCAA case study on how championship programs are built.',
              tags: ['Next.js', 'Data Modeling', 'Basketball Analytics', 'NIL Strategy'],
              links: [],
            },
            {
              icon: Building2,
              title: 'Consumer Product Industry Project',
              desc: 'Delivered data workflows, product framing, and AI-powered search for a Fortune 500 company operating at scale. Built and integrated an AI search feature that let internal users query across company data conversationally. Details are under NDA. Happy to walk through the approach in an interview.',
              tags: ['Product', 'Data Engineering', 'AI Integration', 'Fortune 500'],
              links: [],
            },
          ].map((p,i)=>(
            <div key={i} className="panel p-5 hover:bg-white/5 transition">
              <p.icon className="w-5 h-5 mb-2 text-white/50" />
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                {p.links.length > 0 && (
                  <div className="flex items-center gap-3 text-sm">
                    {p.links.map((lnk, idx) => (
                      <a key={idx} className="text-white/80 hover:text-white inline-flex items-center" href={lnk.href}>
                        <ExternalLink className="w-4 h-4 mr-1" />{lnk.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <p className="text-white/70 text-sm mb-3">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map(t=>(<span key={t} className="glass px-2.5 py-1 rounded-full text-xs">{t}</span>))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ABOUT */}
      <Section id="about" title="About">
        <div className="panel p-6 prose prose-invert max-w-none">
          <p>I’m a product manager and data engineer from the University of Illinois. I define what to build, ship it, and measure whether it worked. Most PMs hand off to engineering. I stay in the room because I can do the work.</p>
          <p>I’ve shipped AI features for a Fortune 500 company, built financial forecasting tools for Division I athletics, and delivered analytics systems that non-technical leaders actually use. My background spans data engineering, health informatics, and cybersecurity — which means I ask better questions and catch problems earlier.</p>
          <p>I believe the best products come from people who understand the data underneath them. That’s the edge I bring.</p>
        </div>
      </Section>

      {/* BEYOND */}
      <Section id="beyond" title="Beyond the work">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Sports', body: 'Lifelong hooper and sports obsessive. The basketball tool exists because I actually care about the game, not just the data.' },
            { label: 'Personal trainer', body: 'Certified personal trainer. Consistency is a system, not a mood. Same philosophy I bring to engineering.' },
            { label: 'Content creator', body: 'I make content at the intersection of sports, tech, fashion, and hoops culture. Storytelling is a skill I use on both sides.' },
            { label: 'Tech & gear', body: 'Gear head. I test gadgets and care deeply about the last 10% of the user experience, the part most people skip.' },
          ].map((item, i) => (
            <div key={i} className="panel p-5">
              <div className="font-semibold mb-1">{item.label}</div>
              <p className="text-white/70 text-sm">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Contact">
        <div className="panel p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="text-lg font-medium">Let’s connect.</div>
            <div className="text-white/70">Currently working full-time. Always open to interesting conversations, collabs, and ideas.</div>
          </div>
          <div className="flex flex-wrap gap-2">
            <a href={`mailto:${PROFILE.email}`} className="btn-primary"><Mail className="w-4 h-4 mr-2" /> Email me</a>
            <a href={PROFILE.socials.linkedin} target="_blank" className="btn-secondary"><Linkedin className="w-4 h-4 mr-2" /> LinkedIn</a>
            <a href={PROFILE.socials.github} target="_blank" className="btn-secondary"><Github className="w-4 h-4 mr-2" /> GitHub</a>
          </div>
        </div>
        <div className="section-divider mt-10" />
        <footer className="container py-8 text-sm text-white/60 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Emmanuel Darkwa</span>
          <span>Built with Next.js • Deployed on Vercel</span>
        </footer>
      </Section>
    </div>
  );
}
