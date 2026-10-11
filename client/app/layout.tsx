import './globals.css';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export const metadata = {
  title: 'Threads — Everyday Fashion',
  description: 'Modern everyday fashion at exceptional value.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
