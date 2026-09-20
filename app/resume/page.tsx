'use client';

import { Download } from 'lucide-react';

export default function ResumePage() {
  return (
    <main className="container py-24">
      <a href="/" className="inline-flex items-center gap-2 text-sm muted hover:text-ink mb-8 transition">
        ← Back to portfolio
      </a>

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-semibold">Resume</h1>
        <a
          href="/Emmanuel_Darkwa_Resume.pdf"
          download
          className="btn-primary gap-2"
        >
          <Download className="w-4 h-4" /> Download PDF
        </a>
      </div>

      <div className="panel overflow-hidden" style={{ height: '85vh' }}>
        <iframe
          src="/Emmanuel_Darkwa_Resume.pdf"
          className="w-full h-full"
          title="Emmanuel Darkwa Resume"
        />
      </div>
    </main>
  );
}
