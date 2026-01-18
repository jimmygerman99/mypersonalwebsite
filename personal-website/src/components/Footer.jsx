import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/content';

export default function Footer() {
  return (
    <footer className="bg-slate-800 border-t border-slate-700 py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400">© {new Date().getFullYear()} Jimmy German</p>
          
          <div className="flex items-center gap-4">
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-slate-400 hover:text-blue-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </motion.a>
            
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-slate-400 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </motion.a>
            
            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-slate-400 hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
