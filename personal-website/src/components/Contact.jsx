import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { personalInfo } from '../data/content';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('form-name', form.getAttribute('name'));

    try {
      await fetch('/', {
        method: 'POST',
        body: new URLSearchParams(formData).toString(),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      });
      setSubmitted(true);
      form.reset();
    } catch (err) {
      alert('Hmm, something went wrong. Please email me directly.');
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  }

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
        <h2 className="text-4xl font-bold mb-6">Let&apos;s Connect</h2>
        <p className="text-xl text-slate-400 mb-8">
          I&apos;m always open to discussing new opportunities, collaborations,
          or just chatting about tech!
        </p>

        {/* Quick actions */}
        <div className="flex flex-col gap-3 items-center mb-10">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`mailto:${personalInfo.email}?subject=${encodeURIComponent('Inquiry from your portfolio')}`}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg transition-colors text-lg"
          >
            <Mail size={24} />
            Email me
          </motion.a>

          <a
            href={`tel:${personalInfo.phone}`}
            className="text-slate-400 hover:text-slate-200 inline-flex items-center gap-2"
            title="Call me"
          >
            <Phone size={18} />
            {personalInfo.phone}
          </a>

          <button
            onClick={() => navigator.clipboard?.writeText(personalInfo.email)}
            className="text-sm text-slate-400 hover:text-slate-200 underline"
            title="Copy email address"
          >
            Copy email address
          </button>
        </div>

        {/* Contact form */}
        {!submitted ? (
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="w-full text-left mx-auto bg-slate-900 border border-slate-700 rounded-xl p-6 space-y-4"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>

            <div>
              <label
                className="block text-sm text-slate-400 mb-1"
                htmlFor="name"
              >
                Your name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="w-full rounded-md bg-slate-800 border border-slate-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                placeholder="Jimmy German"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-sm text-slate-400 mb-1"
                  htmlFor="email"
                >
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-md bg-slate-800 border border-slate-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  className="block text-sm text-slate-400 mb-1"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="w-full rounded-md bg-slate-800 border border-slate-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  placeholder="Let’s build something"
                />
              </div>
            </div>

            <div>
              <label
                className="block text-sm text-slate-400 mb-1"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full rounded-md bg-slate-800 border border-slate-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                placeholder="Hi Jimmy, I found your portfolio and..."
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 px-6 py-3 rounded-lg transition-colors text-white"
            >
              {submitting ? 'Sending...' : 'Send'}
            </button>
          </form>
        ) : (
          <div className="bg-slate-900 border border-emerald-700/50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-emerald-300 mb-1">
              Thanks—message sent!
            </h3>
            <p className="text-slate-300">
              I’ll get back to you soon. If it’s urgent, email me at{' '}
              <a
                href={`mailto:${personalInfo.email}?subject=Inquiry%20from%20your%20portfolio`}
                className="underline hover:text-emerald-300"
              >
                {personalInfo.email}
              </a>
              .
            </p>
          </div>
        )}
      </motion.div>
    </section>
  );
}
