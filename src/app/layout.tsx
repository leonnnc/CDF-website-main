import '@ui/shared/styles/tailwind.scss';
import '@ui/shared/styles/globals.scss';

import { ThemeProvider } from '@modules/shared/libs/next-provider.lib';
import { Footer } from '@ui/footer/components/Footer';
import { Header } from '@ui/header/components/Header';
import { Analytics } from '@vercel/analytics/react';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { Montserrat, Poppins } from 'next/font/google';

const montserrant = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrant',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Catedral de Fe',
  description:
    'Una iglesia de excelencia en donde se manifiesta el amor y la presencia de Dios, respondiendo a las necesidades de esta ciudad y nación, para la salvación, restauración y prosperidad integral de las familias.',
  openGraph: {
    images: [
      {
        url: 'https://www.catedraldefe.pe/images/og/catedral-de-fe-og.webp',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={clsx(montserrant.variable, poppins.variable)}
      suppressHydrationWarning
    >
      <body className="bg-neutral-100 text-neutral-600 dark:text-neutral-200 text-small md:text-normal dark:bg-primary-900">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="overflow-hidden">
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
