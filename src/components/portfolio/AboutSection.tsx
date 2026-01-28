import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Target, Zap, Layers } from "lucide-react";

const mindsetCards = [
  {
    icon: Target,
    title: "Ownership Mindset",
    description: "I don't just build features — I own outcomes. From architecture decisions to user impact, I take full responsibility for what I ship."
  },
  {
    icon: Layers,
    title: "Systems Thinking",
    description: "Every component is part of a larger system. I design with scalability, maintainability, and real-world constraints in mind."
  },
  {
    icon: Zap,
    title: "Bias for Action",
    description: "Perfect is the enemy of shipped. I iterate fast, validate with data, and course-correct when needed."
  },
  {
    icon: Lightbulb,
    title: "First Principles",
    description: "I question assumptions and solve problems from the ground up. The best solutions often emerge from fundamentals."
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
            Not Just an Engineer. A Builder.
          </h2>
          <p className="section-subtitle mx-auto">
            I'm an AI Engineer who bridges the gap between cutting-edge research and production systems. 
            My work sits at the intersection of machine learning, system design, and product thinking — 
            building solutions that don't just work in notebooks, but scale in the real world.
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
              When I approach a problem, I don't start with the technology — I start with the impact. 
              What's the outcome we're optimizing for? What are the constraints? How do we measure success?
            </p>
            <p className="text-lg leading-relaxed text-foreground/90 mt-4">
              This mindset has led me to build AI systems that process millions of decisions daily, 
              deploy models that run at sub-second latencies, and architect pipelines that teams can 
              actually maintain. I believe the best engineering is invisible — users should experience 
              magic, not complexity.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {mindsetCards.map((card, index) => (
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
