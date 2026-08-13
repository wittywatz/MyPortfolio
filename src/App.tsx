import Nav from './components/Nav';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import Section from './components/Section';

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-bg font-sans text-text">
      <Nav />
      <main>
        <Hero />
        <Capabilities />
        <Section id="work" eyebrow="Selected work" title="Things I have built">
          <p className="text-muted">Placeholder, replaced in Task 6.</p>
        </Section>
        <Section id="experience" eyebrow="Experience" title="Where I have worked">
          <p className="text-muted">Placeholder, replaced in Task 7.</p>
        </Section>
      </main>
    </div>
  );
}
