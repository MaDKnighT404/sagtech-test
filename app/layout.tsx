import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Providers } from '@/redux/provider';
import './globals.scss';

export const metadata = {
  title: 'Currency exchange',
  description: 'Test work',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <main className="main">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
