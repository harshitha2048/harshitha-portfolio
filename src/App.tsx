import GalaxyBackground from '@/components/GalaxyBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Journey from '@/components/Journey';
import Goals from '@/components/Goals';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <GalaxyBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Goals />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
