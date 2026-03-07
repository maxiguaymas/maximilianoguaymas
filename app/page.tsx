import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import About from './components/sections/About';
import Contact from './components/sections/Contact';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <Hero />
        <Projects />
        <About />
        <Contact />
        <footer className="py-20 text-center opacity-50 hover:opacity-100 transition-opacity text-xs font-bold tracking-[0.2em] uppercase cursor-default">
          © {new Date().getFullYear()} Maximiliano Guaymás
        </footer>
      </div>
    </main>
  );
}