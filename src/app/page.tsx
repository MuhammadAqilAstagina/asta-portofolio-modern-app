import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import BlogSection from "@/components/sections/BlogSection";
import ProjectSection from "@/components/sections/ProjectSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectSection />
      <BlogSection />
      <AboutSection />
    </>
  );
}
