import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { skills, timeline } from '../data/content';
import Timeline from './Timeline'; // <-- add this import

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 px-6 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          About Me
        </motion.h2>

        {/* Education + Skills grid */}
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Education</h3>
            <div className="bg-slate-900 p-6 rounded-lg border border-slate-700">
              <h4 className="font-bold text-lg">University of Cincinnati</h4>
              <p className="text-slate-400">
                Bachelor of Science in Computer Science
              </p>
              <p className="text-slate-400">GPA: 3.42/4.0 • May 2025</p>
              <div className="mt-4">
                <Award className="inline mr-2 text-yellow-500" size={20} />
                <span className="text-slate-300">Dean&apos;s List</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Skills</h3>
            <div className="space-y-4">
              <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                <h4 className="font-semibold mb-2 text-slate-300">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <span
                      key={skill}
                      className="bg-slate-800 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                <h4 className="font-semibold mb-2 text-slate-300">
                  Frameworks &amp; Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((skill) => (
                    <span
                      key={skill}
                      className="bg-slate-800 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                <h4 className="font-semibold mb-2 text-slate-300">
                  Machine Learning
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.ml.map((skill) => (
                    <span
                      key={skill}
                      className="bg-slate-800 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mt-16 mb-6 text-blue-400 text-center"
        >
          Life Timeline
        </motion.h3>

        <Timeline items={timeline} startLabel="2002" endLabel="Now" />
      </div>
    </section>
  );
}
