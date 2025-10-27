import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="fixed inset-x-0 top-0 z-50 mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-['Mona_Sans'] text-lg font-extrabold tracking-tight">designer.folio</a>
        <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
          <a href="#projects" className="hover:text-white">Work</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-white backdrop-blur hover:border-white/30">Contact</a>
        </nav>
      </header>

      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-zinc-400">
        © {new Date().getFullYear()} designer.folio — Built with care and a bit of playful motion.
      </footer>
    </div>
  );
}

export default App;
