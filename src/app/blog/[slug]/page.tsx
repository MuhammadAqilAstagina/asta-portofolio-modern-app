import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPost, getBlogPosts } from "@/lib/content";

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Metadata {
  // Next.js 15+ requires awaiting params in generateMetadata
  // but for simplicity we handle it in the component
  return {
    title: "Blog Post — Aqil Astagina",
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
      >
        &larr; Back to Blog
      </Link>

      <article>
        <div className="mb-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-950 dark:text-blue-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          {post.title}
        </h1>

        <time className="mb-8 block text-sm text-zinc-500 dark:text-zinc-500">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>

        <div className="prose prose-zinc max-w-none dark:prose-invert">
          {post.content.split("\n\n").map((paragraph, i) => {
            if (paragraph.startsWith("## ")) {
              return (
                <h2
                  key={i}
                  className="mb-4 mt-8 text-2xl font-bold text-zinc-900 dark:text-zinc-100"
                >
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }
            return (
              <p
                key={i}
                className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-400"
              >
                {paragraph}
              </p>
            );
          })}
        </div>
      </article>
    </div>
  );
}
