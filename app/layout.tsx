
import '../styles/globals.css';
import { Inter } from 'next/font/google';

/*
 * One family, set at very different sizes and weights. Hierarchy comes from
 * scale rather than from mixing typefaces, which is what makes Apple's pages
 * read as calm. Inter is the closest freely available stand-in for SF Pro.
 */
const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const DESCRIPTION =
  'Data analyst and product manager. I build the pipelines, models and dashboards ' +
  'people make decisions with, plus shipped tools in AI security and sports analytics.';

/*
 * Open Graph matters more than usual here: this URL goes out in every
 * application and LinkedIn message, and without these tags it unfurls as a
 * blank rectangle. metadataBase makes the relative image URL absolute, which
 * LinkedIn and iMessage both require.
 */
export const metadata = {
  metadataBase: new URL('https://www.emmanueldarkwa.com'),
  title: 'Emmanuel Darkwa — Data, Product, Security',
  description: DESCRIPTION,
  openGraph: {
    title: 'Emmanuel Darkwa',
    description: DESCRIPTION,
    url: 'https://www.emmanueldarkwa.com',
    siteName: 'Emmanuel Darkwa',
    type: 'website',
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Emmanuel Darkwa, data and product' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emmanuel Darkwa',
    description: DESCRIPTION,
    images: ['/opengraph-image.png'],
  },
};

/*
 * Runs before first paint, so the stored theme is on <html> before any pixels
 * are drawn. Without it a dark-mode visitor gets a white flash on every
 * navigation. Light is the default even when the OS is dark: this page is a
 * long read and white is the design it was built for.
 */
const themeInit = `
(function () {
  try {
    var t = localStorage.getItem('theme');
    document.documentElement.setAttribute('data-theme', t === 'dark' ? 'dark' : 'light');
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sans.variable} data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
