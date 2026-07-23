import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getProjects } from "@/lib/content";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Projects — Aqil Astagina",
  description: "Featured projects by Aqil Astagina.",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">Projects</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`} className="group block">
            <article className="flex h-full flex-col rounded-xl border border-zinc-200 transition-all hover:border-blue-200 hover:shadow-md dark:border-zinc-800 dark:hover:border-blue-800">
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="mb-2 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <h2 className="mb-2 text-lg font-semibold text-zinc-900 transition-colors group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-400">{project.title}</h2>
                <p className="mb-4 flex-1 text-sm text-zinc-600 line-clamp-3 dark:text-zinc-400">{project.description}</p>
                <div className="flex gap-3">
                  <span className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200">
                    <FaGithub className="h-3.5 w-3.5" /> Code
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200">
                    <FaExternalLinkAlt className="h-3.5 w-3.5" /> Demo
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
