"use client";

import { motion } from "framer-motion";
import { getProfile } from "@/lib/content";

export default function AboutSection() {
  const profile = getProfile();

  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            About Me
          </h2>

          <p className="mb-12 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            {profile.bio}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <h3 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-950 dark:text-blue-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Experience
          </h3>
          <div className="space-y-6">
            {profile.experiences.map((exp) => (
              <div
                key={exp.company}
                className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800"
              >
                <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">
                    {exp.role}
                  </h4>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">
                    {exp.period}
                  </span>
                </div>
                <p className="mb-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                  {exp.company}
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Education
          </h3>
          <div className="space-y-4">
            {profile.education.map((edu) => (
              <div
                key={edu.school}
                className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">
                    {edu.degree}
                  </h4>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">
                    {edu.period}
                  </span>
                </div>
                <p className="text-sm text-blue-600 dark:text-blue-400">
                  {edu.school}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
