import React, { useState, useEffect } from 'react';
import Hero from './components/layout/Hero';
import About from './components/layout/About';
import Skills from './components/layout/Skills';
import Projects from './components/layout/Projects';
import Experience from './components/layout/Experience';
import Contact from './components/layout/Contact';
import Footer from './components/layout/Footer';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="bg-gray-900 text-white font-sans antialiased">
      {/* Scroll progress indicator */}
      <div 
        className="fixed top-0 left-0 h-0.5 bg-blue-500 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
      
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