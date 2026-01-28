import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="section-container">
          <nav className="flex items-center justify-between h-20">
            <a href="#" className="text-xl font-bold text-foreground">
              <span className="gradient-text">NEX</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="nav-link">
                  {item.label}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdzUfxJ13M-bnXPh6NUWPa9F8d7xn47FcUmZjzuO2d9O2-gqQ/viewform?usp=header">Get in Touch</a>
              </Button>
             <Button
  size="sm"
  className="bg-accent hover:bg-accent/90 text-accent-foreground"
  asChild
>
  <a
    href="/pdfs/Chandu_Resume_1.pdf"
    target="_blank"
    rel="noopener noreferrer"
  >
    Resume
  </a>
</Button>

            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-foreground"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background pt-24 md:hidden"
          >
            <div className="section-container flex flex-col gap-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-medium text-foreground hover:text-accent transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="flex flex-col gap-3 mt-6">
                <Button variant="outline" size="lg" asChild>
                  <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Get in Touch</a>
                </Button>
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                  <a href="/resume.pdf" target="_blank">Download Resume</a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
