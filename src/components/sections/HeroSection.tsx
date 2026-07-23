"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getProfile } from "@/lib/content";
import Image from "next/image";
import SocialLinks from "@/components/social/SocialLinks";
import HeroBackground from "./HeroBackground";

export default function HeroSection() {
  const profile = getProfile();

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden px-4 sm:px-6">
      <HeroBackground />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <div className="h-36 w-36 rounded-full bg-linear-to-r from-blue-500 to-purple-600 p-0.75 sm:h-32 sm:w-32">
                <Image src={profile.avatar} alt={profile.name} fill className="object-cover rounded-full from-blue-500 to-purple-600 p-0.75 sm:h-32 sm:w-32" priority />
                <div className="flex h-full w-full items-center justify-center rounded-full bg-white text-3xl font-bold text-blue-600 dark:bg-zinc-950 dark:text-blue-400 sm:text-4xl">{profile.name.charAt(0)}</div>
              </div>
              <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white bg-green-500 dark:border-zinc-950" />
            </div>
          </div>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="mb-2 text-sm font-medium uppercase tracking-widest text-blue-600 dark:text-blue-400 sm:text-base">
          {profile.role}
        </motion.p>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mb-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl lg:text-6xl">
          Hi, I&apos;m <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{profile.name.split(" ")[0]}</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="mx-auto mb-8 max-w-2xl text-base text-zinc-600 dark:text-zinc-400 sm:text-lg">
          {profile.bio}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link href="/projects" className="inline-flex h-11 items-center rounded-lg bg-blue-600 px-6 text-sm font-medium text-white transition-colors hover:bg-blue-700">
            View Projects
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center rounded-lg border border-zinc-300 px-6 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            Get in Touch
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="mt-8">
          <SocialLinks social={profile.social} size="lg" />
        </motion.div>
      </div>
    </section>
  );
}
