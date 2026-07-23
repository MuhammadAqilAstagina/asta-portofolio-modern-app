import { getProfile } from "@/lib/content";
import SocialLinks from "@/components/social/SocialLinks";

export default function Footer() {
  const profile = getProfile();

  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 sm:flex-row sm:justify-between sm:px-6">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <SocialLinks social={profile.social} />
      </div>
    </footer>
  );
}
