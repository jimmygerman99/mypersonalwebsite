import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { personalInfo } from '../data/content';

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-6 flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl w-full text-center"
      >
        <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
        <p className="text-xl text-slate-400 mb-8">
          I'm always open to discussing new opportunities, collaborations, or
          just chatting about tech!
        </p>
        <div className="flex flex-col gap-4 items-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg transition-colors text-lg"
          >
            <Mail size={24} />
            {personalInfo.email}
          </motion.a>
          <p className="text-slate-400">or call me at {personalInfo.phone}</p>
        </div>
      </motion.div>
    </section>
  );
}
