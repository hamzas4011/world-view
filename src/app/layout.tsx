import './globals.css';
import { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'World View App',
  description: 'Explore global news, cultures, and more',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow min-h-[500px]">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
