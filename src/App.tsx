import ThemeToggle from './components/ThemeToggle';

export default function App() {
  return (
    <main className="min-h-screen bg-bg text-text font-sans grid place-items-center gap-6">
      <h1 className="text-4xl font-semibold tracking-tight">Scaffold online</h1>
      <ThemeToggle />
    </main>
  );
}
