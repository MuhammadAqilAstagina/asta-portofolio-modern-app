import profile from "@/data/profile.json";
import projects from "@/data/projects.json";
import blogPosts from "@/data/blog-posts.json";
import type { Profile, Project, BlogPost } from "@/types";

export function getProfile(): Profile {
  return profile as Profile;
}

export function getProjects(): Project[] {
  return projects as Project[];
}

export function getProject(slug: string): Project | undefined {
  return (projects as Project[]).find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return (projects as Project[]).filter((p) => p.featured);
}

export function getBlogPosts(): BlogPost[] {
  return (blogPosts as BlogPost[]).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return (blogPosts as BlogPost[]).find((p) => p.slug === slug);
}
