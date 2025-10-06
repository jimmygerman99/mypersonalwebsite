import React, { useState } from 'react';
import Navbar from './components/NavBar.jsx';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';

import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
