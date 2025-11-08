import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/content';

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen py-20 px-6 bg-slate-800/50"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center"
        >
          Experience
        </motion.h2>
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-slate-900 p-6 rounded-lg border border-slate-700"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-400">
                    {exp.company}
                  </h3>
                  <p className="text-lg text-slate-300">{exp.role}</p>
                  <p className="text-slate-500 text-sm">{exp.description}</p>
                </div>
                <div className="text-right text-sm">
                  <p className="text-slate-400">{exp.location}</p>
                  <p className="text-slate-500">{exp.date}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="text-slate-300 flex items-start">
                    <span className="text-blue-400 mr-2">▸</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
