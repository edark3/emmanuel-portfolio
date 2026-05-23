'use client';

import { Download } from 'lucide-react';

export default function ResumePage() {
  return (
    <main className="container py-24">
      <a href="/" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white mb-8 transition">
        ← Back to portfolio
      </a>

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-semibold">Resume</h1>
        <a
          href="/Emmanuel_Darkwa_Resume.pdf"
          download
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-aura-purple to-aura-blue text-white hover:opacity-95 transition"
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
