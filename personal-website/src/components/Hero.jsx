import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/content';
import headshot from '../assets/images/headshot.jpeg';

export default function Hero({ scrollToSection }) {
  return (
    <section
      id="home"
      className="min-h-[80vh] flex items-center px-4 sm:px-6 pt-20 sm:pt-24"
    >
      {/* Center the whole hero block */}
      <div className="max-w-4xl w-full mx-auto">
        {/* Balanced two-column grid that stays centered */}
        <div className="grid md:grid-cols-[minmax(0,1fr)_auto] items-center gap-6 md:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl justify-self-center md:justify-self-start text-center md:text-left"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Hi, I&apos;m{' '}
              <span className="text-blue-400">{personalInfo.name}</span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-slate-400 mb-6">
              Computer Science Graduate @ University of Cincinnati
            </h2>

            <p className="text-lg md:text-xl text-slate-300 mb-8">
              {personalInfo.tagline}
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-2">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-lg transition-colors"
              >
                <Github size={20} />
                GitHub
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors"
              >
                <Linkedin size={20} />
                LinkedIn
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-lg transition-colors text-white focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
                title="Open resume PDF"
              >
                Resume
              </motion.a>
            </div>
          </motion.div>

          {/* Headshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="justify-self-center md:justify-self-end"
          >
            <img
              src={headshot}
              alt="Jimmy German headshot"
              loading="eager"
              className="w-36 h-36 md:w-40 md:h-40 rounded-full object-cover ring-2 ring-slate-700 shadow-xl"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex justify-center mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('about')}
            aria-label="Scroll to About"
            className="inline-flex items-center justify-center rounded-full p-2
                       text-slate-500 hover:text-slate-300 focus:outline-none
                       focus-visible:ring-2 focus-visible:ring-blue-500/40"
          >
            <ChevronDown size={28} className="animate-bounce" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
