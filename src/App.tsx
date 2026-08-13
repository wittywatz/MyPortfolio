import Nav from './components/Nav';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import Work from './components/Work';
import Section from './components/Section';

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-bg font-sans text-text">
      <Nav />
      <main>
        <Hero />
        <Capabilities />
        <Work />
        <Section id="experience" eyebrow="Experience" title="Where I have worked">
          <p className="text-muted">Placeholder, replaced in Task 7.</p>
        </Section>
      </main>
    </div>
  );
}
