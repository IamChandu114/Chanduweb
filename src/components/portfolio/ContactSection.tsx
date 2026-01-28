import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 bg-secondary/30" ref={ref}>
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Get in Touch</span>
            <h2 className="section-title">
              Let's Build Something Great
            </h2>
            <p className="section-subtitle mx-auto mb-8">
              I'm always interested in hearing about new opportunities, challenging problems, 
              or just connecting with fellow builders. The best conversations start with a simple hello.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center justify-center gap-2 text-muted-foreground mb-10"
          >
            <MapPin size={18} />
            <span>Hyderabad,India· Open to Remote</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 sm:p-10 mb-10"
          >
            <a
              href="mailto:hello@example.com"
              className="text-2xl sm:text-3xl font-bold text-foreground hover:text-accent transition-colors"
            >
              ca4443700@gmail.com
            </a>
            <p className="text-muted-foreground mt-3">
              I typically respond within 24 hours
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <a href="https://github.com/IamChandu114/" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
                GitHub
                <ArrowUpRight size={16} />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <a href="https://www.linkedin.com/in/pace1304/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
                LinkedIn
                <ArrowUpRight size={16} />
              </a>
            </Button>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2" asChild>
              <a href="mailto:ca4443700@gmail.com">
                <Mail size={20} />
                Send Email
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center justify-center gap-2 text-muted-foreground mb-10"
          >
            <MapPin size={18} />
            <span>Hyderabad,India· Open to Remote</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 sm:p-10 mb-10"
          >
            <a
              href="mailto:hello@example.com"
              className="text-2xl sm:text-3xl font-bold text-foreground hover:text-accent transition-colors"
            >
              ca4443700@gmail.com
            </a>
            <p className="text-muted-foreground mt-3">
              I typically respond within 24 hours
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <a href="https://github.com/IamChandu114/" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
                GitHub
                <ArrowUpRight size={16} />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <a href="https://www.linkedin.com/in/pace1304/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
                LinkedIn
                <ArrowUpRight size={16} />
              </a>
            </Button>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2" asChild>
              <a href="mailto:ca4443700@gmail.com">
                <Mail size={20} />
                Send Email
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
