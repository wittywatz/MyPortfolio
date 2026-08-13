import { useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import Work from './components/Work';
import Experience from './components/Experience';
import Stack from './components/Stack';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    if (!window.location.hash) return;
    const id = window.location.hash.slice(1);
    // Wait until the whole page (fonts + images) has finished loading so
    // the target's position is stable, then jump instantly. Scrolling
    // before images above the target finish loading lands short, because
    // their layout space expands after the jump and pushes the target
    // further down the page.
    const jump = () => {
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'instant' as ScrollBehavior, block: 'start' });
      });
    };
    if (document.readyState === 'complete') {
      jump();
    } else {
      window.addEventListener('load', jump, { once: true });
      return () => window.removeEventListener('load', jump);
    }
  }, []);

  return (
    <div id="top" className="min-h-screen bg-bg font-sans text-text">
      <Nav />
      <main>
        <Hero />
        <Capabilities />
        <Experience />
        <Work />
        <Stack />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
