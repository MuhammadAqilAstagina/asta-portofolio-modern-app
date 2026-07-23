import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getProject, getProjects } from "@/lib/content";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export function generateStaticParams() {
  return getProjects().map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <Link
        href="/projects"
        className="mb-8 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
      >
        &larr; Back to Projects
      </Link>

      <div className="relative mb-8 h-64 overflow-hidden rounded-xl sm:h-80">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <h1 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
        {project.title}
      </h1>

      <div className="mb-6 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-950 dark:text-blue-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mb-8 flex gap-4">
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center gap-2 rounded-lg bg-blue-600 px-5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          <FaExternalLinkAlt className="h-4 w-4" /> Live Demo
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center gap-2 rounded-lg border border-zinc-300 px-5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
        >
          <FaGithub className="h-4 w-4" /> Source Code
        </a>
      </div>

      <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
        <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          About this project
        </h2>
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>
        <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
          This project was built using {project.techStack.join(", ")} and
          showcases modern web development practices. The live demo is available
          at the link above, along with the full source code on GitHub.
        </p>
      </div>
    </div>
  );
}
