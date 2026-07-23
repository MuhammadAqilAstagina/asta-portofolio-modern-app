import { FaGithub, FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";

interface SocialLinksProps {
  social: {
    github: string;
    linkedin: string;
    instagram: string;
    x: string;
  };
  size?: "sm" | "md" | "lg";
}

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
  x: FaXTwitter,
};

const sizeMap = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
};

export default function SocialLinks({ social, size = "md" }: SocialLinksProps) {
  return (
    <div className="flex items-center gap-3">
      {Object.entries(social).map(([platform, url]) => {
        const Icon = iconMap[platform as keyof typeof iconMap];
        if (!Icon) return null;
        return (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2 text-zinc-500 transition-all hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
            aria-label={platform}
          >
            <Icon className={sizeMap[size]} />
          </a>
        );
      })}
    </div>
  );
}
