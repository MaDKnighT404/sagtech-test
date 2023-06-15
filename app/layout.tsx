import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.scss';

export const metadata = {
  title: 'Currency exchange',
  description: 'Test work',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
