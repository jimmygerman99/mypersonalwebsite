import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar({ activeSection, scrollToSection }) {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-slate-800/95 backdrop-blur-sm border-b border-slate-700 z-50"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold text-blue-400"
        >
          JG
        </motion.div>
        <div className="flex gap-8">
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
      </div>
    </motion.nav>
  );
}
