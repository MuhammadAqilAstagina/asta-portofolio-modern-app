export interface Profile {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  email: string;
  social: {
    github: string;
    linkedin: string;
    instagram: string;
    x: string;
  };
  skills: string[];
  experiences: Experience[];
  education: Education[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Education {
  school: string;
  degree: string;
  period: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  techStack: string[];
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
  tags: string[];
}
