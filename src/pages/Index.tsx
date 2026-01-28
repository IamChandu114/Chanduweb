import { Navigation } from "@/components/portfolio/Navigation";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ResearchSection } from "@/components/portfolio/ResearchSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { MetricsSection } from "@/components/portfolio/MetricsSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Footer } from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ResearchSection />
        <ExperienceSection />
        <MetricsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
