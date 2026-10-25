import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Products from '@/components/Products';
import Coverage from '@/components/Coverage';
import Architecture from '@/components/Architecture';
import Stats from '@/components/Stats';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-ink-950 text-ink-100 antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Coverage />
        <Architecture />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
