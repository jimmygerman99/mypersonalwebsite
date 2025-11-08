import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar({ activeSection, scrollToSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (section) => {
    scrollToSection(section);
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-slate-800/95 backdrop-blur-sm border-b border-slate-700 z-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold text-blue-400"
        >
          JG
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {['home', 'about', 'projects', 'experience', 'contact'].map(
            (section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-colors ${
                  activeSection === section
                    ? 'text-blue-400'
                    : 'text-slate-300 hover:text-blue-400'
                }`}
              >
                {section}
              </button>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-blue-400 transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-800 border-t border-slate-700"
          >
            <div className="px-4 py-4 space-y-3">
              {['home', 'about', 'projects', 'experience', 'contact'].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => handleNavClick(section)}
                    className={`block w-full text-left capitalize py-2 px-4 rounded transition-colors ${
                      activeSection === section
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {section}
                  </button>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
