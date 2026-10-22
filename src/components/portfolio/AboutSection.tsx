import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Gauge, ShieldCheck, Layers } from "lucide-react";

const principles = [
  {
    icon: Gauge,
    title: "Measure Before Optimizing",
    description: "I establish a baseline, identify bottlenecks, and validate changes through reproducible benchmarks. Performance improvements should be supported by measurements, not assumptions."
  },
  {
    icon: ShieldCheck,
    title: "Correctness Under Real-World Constraints",
    description: "I use automated tests, sanitizers, validation checks, and failure-aware design to investigate edge cases and strengthen system reliability. Correctness comes before optimization."
  },
  {
    icon: Layers,
    title: "Understand the System at Its Core",
    description: "I investigate data structures, memory behavior, execution paths, and component interactions to make informed engineering decisions. Understanding the underlying mechanics leads to better trade-offs and more defensible solutions."
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
            My engineering work focuses on performance-critical systems, AI inference infrastructure, and reliable software design. I approach technical problems by investigating system behavior, identifying bottlenecks, validating assumptions, and measuring results.
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
              Across C++ systems engineering, runtime intelligence, wireless signal-processing simulation, computer architecture, and open-source development, I focus on understanding how components interact, how memory and computation affect performance, and how correctness holds under different operating conditions.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90 mt-4">
              I prioritize reproducible experiments, explicit engineering trade-offs, automated testing, and technical documentation that distinguishes measured results from theoretical expectations.
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
