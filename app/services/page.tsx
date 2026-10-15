'use client';

function MailIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}

function InstagramIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const QUESTIONS = [
  {
    n: '1',
    title: 'Where is the money coming from?',
    body: 'Which products, services, days and customers actually carry the business.',
  },
  {
    n: '2',
    title: 'What do the next six months look like?',
    body: 'A forecast built from your own history, so slow months stop being a surprise.',
  },
  {
    n: '3',
    title: 'What is quietly bleeding?',
    body: 'The discounts, dead hours and fading products that cost you a little every week.',
  },
];

export default function ServicesPage() {
  return (
    <main className="container py-24">
      <a href="/" className="inline-flex items-center gap-2 text-sm muted hover:text-ink mb-8 transition">
        ← Back to portfolio
      </a>

      <h1 className="text-3xl font-semibold mb-2">Work with me</h1>
      <p className="muted mb-12">
        Three things I do outside my day job. Data work for businesses, and coaching for people.
      </p>

      {/* DATA CONSULTING */}
      <section className="mb-12">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h2 className="text-xl font-semibold">Data &amp; Analytics Consulting</h2>
          <span className="glass px-2.5 py-1 rounded-full text-xs muted whitespace-nowrap">Darkwa Analytics</span>
        </div>
        <p className="muted text-sm mb-6">
          Most small businesses have years of sales data sitting in Square, Shopify or old spreadsheets.
          Every sale is recorded. None of it is helping anyone decide anything. I turn it into a dashboard
          and a forecast that answer the three questions every owner actually asks.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          {QUESTIONS.map((q) => (
            <div key={q.n} className="panel p-5 flex flex-col gap-2">
              <span className="text-lg font-semibold faint">{q.n}</span>
              <span className="font-semibold text-sm">{q.title}</span>
              <p className="muted text-sm">{q.body}</p>
            </div>
          ))}
        </div>

        <div className="panel p-6">
          <div className="font-semibold mb-2">How it works</div>
          <p className="muted text-sm mb-4">
            You send a sales export, about ten minutes of your time. I clean the data, build the dashboard
            and run the forecast. Then we sit down once and go through what the numbers say, what surprised
            me, and what I would look at first. About two weeks start to finish.
          </p>
          <p className="muted text-sm mb-4">
            Pricing depends on how messy the data is and how much you want maintained after the build.
            Tell me about your business and I will give you a number.
          </p>
          <a href="mailto:emmandark7@gmail.com?subject=Data%20consulting" className="btn-primary gap-2">
            <MailIcon />
            Tell me about your business →
          </a>
        </div>
      </section>

      {/* PERSONAL TRAINING */}
      <section className="mb-12">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h2 className="text-xl font-semibold">Personal Training</h2>
          <span className="glass px-2.5 py-1 rounded-full text-xs muted whitespace-nowrap">Certified · UIUC</span>
        </div>
        <p className="muted text-sm mb-6">
          Certified through the University of Illinois. I build programs around your goals, your schedule
          and the life you actually have, not the one a template assumes. In person around Chicago, or online.
        </p>

        <div className="panel p-6">
          <div className="grid sm:grid-cols-2 gap-4 mb-5">
            <div>
              <div className="font-semibold mb-1">Single session</div>
              <div className="text-2xl font-semibold mb-1">$50</div>
              <p className="muted text-sm">One hour, one on one.</p>
            </div>
            <div>
              <div className="font-semibold mb-1">Four sessions</div>
              <div className="text-2xl font-semibold mb-1">$180</div>
              <p className="muted text-sm">Enough time to build something that holds.</p>
            </div>
          </div>
          <p className="muted text-sm mb-4">
            Saturday group sessions at church stay free. Always will.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:emmandark7@gmail.com?subject=Personal%20training" className="btn-primary gap-2">
              <MailIcon />
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
      </section>

      {/* FINANCIAL LITERACY */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-1">Financial Literacy Coaching</h2>
        <p className="muted text-sm mb-6">
          How money actually works, taught plainly. Budgeting that survives a real month, how credit is
          scored and what moves it, what compounding does over time, how to read a paycheck and what is
          being taken out of it, and how to build a cushion before you need one.
        </p>

        <div className="panel p-6">
          <div className="grid sm:grid-cols-2 gap-4 mb-5">
            <div>
              <div className="font-semibold mb-1">Single session</div>
              <div className="text-2xl font-semibold mb-1">$50</div>
              <p className="muted text-sm">One hour, one on one.</p>
            </div>
            <div>
              <div className="font-semibold mb-1">Four sessions</div>
              <div className="text-2xl font-semibold mb-1">$180</div>
              <p className="muted text-sm">A full walk through your own numbers.</p>
            </div>
          </div>
          <p className="muted text-sm mb-4">
            Saturday group sessions at church stay free. Always will.
          </p>
          <p className="faint text-xs mb-5">
            This is financial education, not financial advice. I am not a licensed financial advisor and
            I do not recommend specific investments, securities or retirement allocations. For decisions
            like those, talk to a licensed professional.
          </p>
          <a href="mailto:emmandark7@gmail.com?subject=Financial%20literacy%20coaching" className="btn-primary gap-2">
            <MailIcon />
            Email me →
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section className="panel p-6">
        <div className="text-lg font-semibold mb-1">Not sure which one you need?</div>
        <p className="muted text-sm mb-4">
          Send me a note either way. Happy to tell you if I am not the right person for it.
        </p>
        <a href="mailto:emmandark7@gmail.com" className="btn-primary gap-2">
          <MailIcon />
          emmandark7@gmail.com
        </a>
      </section>
    </main>
  );
}
