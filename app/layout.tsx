
import '../styles/globals.css';

export const metadata = {
  title: 'Emmanuel Darkwa — Portfolio',
  description: 'Data engineering, health data & systems, cybersecurity by design, and product-minded execution.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
