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
  return (
    <div id="top" className="min-h-screen bg-bg font-sans text-text">
      <Nav />
      <main>
        <Hero />
        <Capabilities />
        <Work />
        <Experience />
        <Stack />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
