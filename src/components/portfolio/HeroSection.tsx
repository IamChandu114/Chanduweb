import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVisual from "@/assets/hero-visual.png";
import analytics from "@/lib/analytics";

export const HeroSection = () => {
  const handleProjectsClick = () => {
    analytics.trackButtonClick("explore_my_work", "hero");
  };

  const handleGitHubClick = () => {
    analytics.trackLinkClick("GitHub Profile", "https://github.com/IamChandu114/", "hero_cta");
  };

  const handleResumeClick = () => {
    analytics.trackDownload("Chandu_Resume_1.pdf", "pdf");
  };

  const handleLinkedInClick = () => {
    analytics.trackLinkClick("LinkedIn Social", "https://www.linkedin.com/in/pace1304/", "social_hero");
  };

  const handleEmailClick = () => {
    analytics.trackLinkClick("Email Social", "mailto:ca4443700@gmail.com", "social_hero");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Visual */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[70%] h-[80%]"
        >
          <img
            src={heroVisual}
            alt=""
            className="w-full h-full object-contain object-right opacity-50"
          />
        </motion.div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="section-container relative z-10 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="status-badge mb-8 inline-flex">
              SYSTEMS ENGINEERING · AI INFRASTRUCTURE · OPEN SOURCE
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6"
          >
            Building Systems.{" "}
            <span className="gradient-text">Measuring What Matters.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
          >
            I'm a Computer Science student focused on C++ performance engineering,
            AI inference infrastructure, and reliable intelligent systems. I build,
            benchmark, test, and contribute to real codebases.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8"
              asChild
              onClick={handleProjectsClick}
            >
              <a href="#projects">Explore My Work</a>
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8 gap-2" asChild onClick={handleGitHubClick}>
              <a href="https://github.com/IamChandu114/" target="_blank" rel="noopener noreferrer">
                <Github size={18} />
                GitHub Profile
              </a>
            </Button>
            <Button variant="ghost" size="lg" className="text-base px-8 gap-2" asChild onClick={handleResumeClick}>
              <a href="/pdfs/Chandu_Resume_1.pdf" target="_blank" rel="noopener noreferrer">
                <FileText size={18} />
                Resume
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-6"
          >
            <a
              href="https://github.com/IamChandu114/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleGitHubClick}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/pace1304/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkedInClick}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:ca4443700@gmail.com"
              onClick={handleEmailClick}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail size={22} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
};
