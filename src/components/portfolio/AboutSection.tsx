import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Gauge, ShieldCheck, Layers } from "lucide-react";

const principles = [
  {
    icon: Gauge,
    title: "Measure Before Optimizing",
    description: "Performance claims without benchmarks are guesses. I profile first, identify the real bottleneck, then optimize with evidence."
  },
  {
    icon: ShieldCheck,
    title: "Design for Correctness and Failure",
    description: "Systems fail. I build with sanitizers, automated tests, rollback paths, and guardrails—so failures are caught early and handled gracefully."
  },
  {
    icon: Layers,
    title: "Build from Fundamentals",
    description: "Understanding how data moves, where memory is spent, and why components fail leads to better trade-off decisions and more honest documentation."
  }
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 bg-secondary/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Engineering with Evidence.
          </h2>
          <p className="section-subtitle mx-auto">
            B.Tech Computer Science student specializing in AI/ML, with a growing focus on systems
            engineering, performance, and AI infrastructure.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="glass-card p-8 sm:p-10">
            <p className="text-lg leading-relaxed text-foreground/90">
              I enjoy understanding systems below the surface — how data moves, where memory is spent,
              how components fail, and how performance can be measured rather than assumed.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90 mt-4">
              My work spans C++ systems projects, autonomous runtime intelligence, wireless
              signal-processing simulations, computer architecture, and open-source contributions
              to production AI inference frameworks. I value reproducible experiments, clear
              engineering trade-offs, automated testing, and honest technical documentation.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {principles.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="skill-domain group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <card.icon size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{card.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{card.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
