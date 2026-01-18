import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/NavBar.jsx';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';

import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const sections = useRef(['home', 'about', 'projects', 'experience', 'contact']);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.current.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.current.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}
