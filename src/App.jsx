import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/layout/Hero';
import About from './components/layout/About';
import Skills from './components/layout/Skills';
import Projects from './components/layout/Projects';
import Experience from './components/layout/Experience';
import Contact from './components/layout/Contact';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/ui/ScrollProgress';

function App() {
  return (
    <div className="bg-gray-900 text-white font-sans antialiased">
      <ScrollProgress />
      <Navbar />
      
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;