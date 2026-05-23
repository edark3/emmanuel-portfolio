'use client';

const REELS = [
  {
    label: 'Reel — Sports & Hoops',
    description: 'Content covering hoops culture, sports, and lifestyle.',
    href: 'https://www.instagram.com/reel/DAG_7U3PGvb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
];

function InstagramIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function CreativesPage() {
  return (
    <main className="container py-24">
      <a href="/" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white mb-8 transition">
        ← Back to portfolio
      </a>

      <h1 className="text-3xl font-semibold mb-2">Creatives</h1>
      <p className="text-white/70 mb-6">Sports, tech, fashion, and hoops. Content that reflects how I move.</p>

      <div className="flex flex-wrap gap-3 mb-10">
        <a
          href="https://www.instagram.com/emandarkwa/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-sm transition"
        >
          <InstagramIcon />
          @emandarkwa · Tech, Fashion & Lifestyle
        </a>
        <a
          href="https://www.instagram.com/dkworkz7/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-sm transition"
        >
          <InstagramIcon />
          @dkworkz7 · Creatives
        </a>
      </div>

      <h2 className="text-xl font-semibold mb-3">Reels & Content</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {REELS.map((r, i) => (
          <a
            key={i}
            href={r.href}
            target="_blank"
            rel="noopener noreferrer"
            className="panel p-5 hover:bg-white/5 transition flex flex-col gap-2"
          >
            <div className="flex items-center gap-2">
              <InstagramIcon className="w-5 h-5 text-white/60" />
              <span className="font-semibold">{r.label}</span>
            </div>
            <p className="text-white/60 text-sm">{r.description}</p>
            <span className="text-sm text-white/40 mt-auto">Watch on Instagram →</span>
          </a>
        ))}
      </div>

      {/* PERSONAL TRAINING */}
      <div className="panel p-6 mb-6">
        <div className="flex items-center gap-2 mb-1">
          <div className="text-lg font-semibold">Personal Training</div>
          <span className="glass px-2.5 py-1 rounded-full text-xs text-white/70">In-House Certified · UIUC</span>
        </div>
        <p className="text-white/70 text-sm mb-2">
          Certified personal trainer through the University of Illinois. I train clients in person and online — building programs around your goals, schedule, and lifestyle.
        </p>
        <a
          href="https://blogs.illinois.edu/view/9164/523508838"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-white/50 hover:text-white transition inline-flex items-center gap-1 mb-4"
        >
          View certification →
        </a>
        <p className="text-white/60 text-sm mb-4">Interested in online training? Reach out and let's build something that works for you.</p>
        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:emmandark7@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-aura-purple to-aura-blue text-white hover:opacity-95 transition"
          >
            Email me →
          </a>
          <a
            href="https://www.instagram.com/emandarkwa/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-white/10 hover:bg-white/15 border border-white/10 transition"
          >
            <InstagramIcon />
            DM @emandarkwa
          </a>
        </div>
      </div>

      <div className="panel p-6">
        <div className="text-lg font-semibold mb-1">Work with me</div>
        <p className="text-white/70 text-sm mb-4">Open to brand collabs, sponsorships, PR packages, and creative partnerships. Reach out however works for you.</p>
        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:emmandark7@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-aura-purple to-aura-blue text-white hover:opacity-95 transition"
          >
            Email me →
          </a>
          <a
            href="https://www.instagram.com/emandarkwa/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-white/10 hover:bg-white/15 border border-white/10 transition"
          >
            <InstagramIcon />
            DM @emandarkwa
          </a>
          <a
            href="https://www.instagram.com/dkworkz7/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-white/10 hover:bg-white/15 border border-white/10 transition"
          >
            <InstagramIcon />
            DM @dkworkz7
          </a>
        </div>
      </div>
    </main>
  );
}
