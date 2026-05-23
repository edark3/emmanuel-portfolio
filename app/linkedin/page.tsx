'use client';

const POSTS = [
  {
    label: 'NSBE 2026 — Networking & STEM',
    description: 'Representing at NSBE 2026. Connecting with top engineers, companies, and future leaders across STEM.',
    href: 'https://www.linkedin.com/posts/emmanuel-darkwa-b83641250_nsbe2026-networking-stem-activity-7443854875031105536-Qu4j?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD4H2VMB8oGJICi4_TPDXa_MKLEvJB3BzzU',
    tags: ['#NSBE2026', '#Networking', '#STEM'],
  },
  {
    label: 'Illini Sports Analytics & Sports Tech',
    description: 'Breaking down the intersection of sports analytics and technology — how data is reshaping how we evaluate talent and build winning programs.',
    href: 'https://www.linkedin.com/posts/emmanuel-darkwa-b83641250_illini-sportsanalytics-sportstech-activity-7440950155798806528-ttf7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD4H2VMB8oGJICi4_TPDXa_MKLEvJB3BzzU',
    tags: ['#SportsAnalytics', '#SportsTech', '#Illini'],
  },
  {
    label: 'NSBE UIUC Chapter',
    description: 'A look at what our NSBE UIUC chapter has been building — community, career development, and showing up for each other.',
    href: 'https://www.linkedin.com/posts/emmanuel-darkwa-b83641250_a-couple-of-weeks-ago-our-nsbe-uiuc-chapter-activity-7460406803684556800-hA29?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD4H2VMB8oGJICi4_TPDXa_MKLEvJB3BzzU',
    tags: ['#NSBE', '#UIUC', '#Community'],
  },
];

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function LinkedInPage() {
  return (
    <main className="container py-24">
      <a href="/" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white mb-8 transition">
        ← Back to portfolio
      </a>

      <h1 className="text-3xl font-semibold mb-2">LinkedIn Highlights</h1>
      <p className="text-white/70 mb-4">Selected posts — community, sports analytics, and tech.</p>

      <a
        href="https://www.linkedin.com/in/emmanuel-darkwa-b83641250/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-sm transition mb-10"
      >
        <LinkedInIcon /> View full profile →
      </a>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {POSTS.map((p, i) => (
          <a
            key={i}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="panel p-5 hover:bg-white/5 transition flex flex-col gap-3"
          >
            <div className="flex items-center gap-2 text-[#0A66C2]">
              <LinkedInIcon />
              <span className="font-semibold text-white">{p.label}</span>
            </div>
            <p className="text-white/60 text-sm flex-1">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="glass px-2.5 py-1 rounded-full text-xs text-white/60">{t}</span>
              ))}
            </div>
            <span className="text-sm text-white/40">Read on LinkedIn →</span>
          </a>
        ))}
      </div>
    </main>
  );
}
