import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import { projects } from '../data/content';

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <Code className="text-blue-400" size={24} />
                <span
                  className={`text-xs px-2 py-1 rounded -full ${
                    project.status === 'Completed'
                      ? 'bg-green-900 text-green-300'
                      : 'bg-yellow-900 text-yellow-300'
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-slate-400 text-sm mb-3">{project.date}</p>
              <p className="text-slate-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-slate-900 text-blue-300 px-2 py-1 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="space-y-1">
                {project.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="text-sm text-slate-400 flex items-start"
                  >
                    <span className="text-blue-400 mr-2">•</span>
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
