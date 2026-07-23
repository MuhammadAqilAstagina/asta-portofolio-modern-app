"use client";

import type { Metadata } from "next";
import { useState } from "react";
import { motion } from "framer-motion";
import { getProfile } from "@/lib/content";
import SocialLinks from "@/components/social/SocialLinks";

export default function ContactPage() {
  const profile = getProfile();
  const [formState, setFormState] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        setFormState("error");
        setTimeout(() => setFormState("idle"), 3000);
        return;
      }

      setFormState("sent");
      form.reset();
      setTimeout(() => setFormState("idle"), 3000);
    } catch {
      setFormState("error");
      setTimeout(() => setFormState("idle"), 3000);
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          Get in Touch
        </h1>
        <p className="mb-10 text-zinc-600 dark:text-zinc-400">
          Have a question or want to work together? Fill out the form below or
          reach out on social media.
        </p>
      </motion.div>

      <div className="grid gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-blue-400"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-blue-400"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full resize-none rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-blue-400"
              />
            </div>
            <button
              type="submit"
              disabled={formState === "sending" || formState === "sent"}
              className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-blue-600 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:px-6"
            >
              {formState === "idle" && "Send Message"}
              {formState === "sending" && "Sending..."}
              {formState === "sent" && "Sent!"}
              {formState === "error" && "Error — Try again"}
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
            <h2 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              Social Media
            </h2>
            <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
              Connect with me on social platforms.
            </p>
            <SocialLinks social={profile.social} size="lg" />
          </div>

          <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
            <h2 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              Email
            </h2>
            <a
              href={`mailto:${profile.email}`}
              className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              {profile.email}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
