import type { Metadata } from 'next';
import { Inter, Oswald } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
});

const oswald = Oswald({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-oswald',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'TICKET — Музыкальный лейбл',
  description: 'Официальный сайт музыкального лейбла TICKET. Артисты, релизы, события и мерч.',
  keywords: ['музыка', 'лейбл', 'артисты', 'релизы', 'концерты', 'мерч'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${oswald.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
