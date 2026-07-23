import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog — Aqil Astagina",
  description: "Articles about web development, TypeScript, and more.",
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
        Blog
      </h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block"
          >
            <article className="rounded-xl border border-zinc-200 p-6 transition-all hover:border-blue-200 hover:shadow-md dark:border-zinc-800 dark:hover:border-blue-800">
              <div className="mb-3 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="mb-2 text-xl font-semibold text-zinc-900 transition-colors group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-400">
                {post.title}
              </h2>
              <p className="mb-3 text-sm text-zinc-600 dark:text-zinc-400">
                {post.excerpt}
              </p>
              <time className="text-xs text-zinc-500 dark:text-zinc-500">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
