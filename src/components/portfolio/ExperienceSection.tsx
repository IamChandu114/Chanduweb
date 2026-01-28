import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Briefcase } from "lucide-react";

const experiences = [
  {
    role: "AI Engineer",
    company: "Tech Corporation",
    type: "Internship",
    period: "2024 — Present",
    description: "Leading the development of core ML infrastructure serving 10M+ users. Architected the real-time personalization engine, reducing latency by 60% while improving recommendations quality by 25%.",
    highlights: [
      "Led team of 4 engineers on ML platform redesign",
      "Reduced model serving costs by 40% through optimization",
      "Established MLOps best practices across org"
    ]
  },
  {
    role: "Machine Learning Engineer",
    company: "AI Startup",
    type: "internship",
    period: "2024 — 2025",
    description: "Built the company's first production ML pipeline from scratch. Developed and deployed NLP models for automated document processing, handling 100K+ documents daily.",
    highlights: [
      "0 to 1 ML infrastructure buildout",
      "Achieved 94% accuracy on document classification",
      "Reduced manual processing by 80%"
    ]
  },
  {
    role: "Full Stack Developer",
    company: "tech company",
    type: "Internship",
    period: "2025",
    description: "Built and maintained full-stack web applications, working across frontend, backend, and databases to deliver scalable and user-focused features.",
    highlights: [
  "Developed responsive UIs using React and Tailwind CSS",
  "Implemented REST APIs with Node.js and Express",
  "Integrated authentication and database operations",
  "Deployed and maintained applications in production"
    ]
  },
  {
    role: "Software Developer Intern",
    company: "Big Tech",
    type: "Internship",
    period: "Summer 2025",
    description: "Developed internal tools for data analysis and visualization. Built a dashboard used by 200+ employees for tracking key metrics.",
    highlights: [
      "Shipped production feature used by employees",
      "Improved data pipeline processing time by 3x",
      "Received 'Outstanding Intern'"
    ]
  }
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 bg-secondary/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Experience</span>
          <h2 className="section-title">
            A Track Record of Impact
          </h2>
          <p className="section-subtitle mx-auto">
            From research to production, from startups to enterprise — building things that matter 
            at every stage.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company + exp.role}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="timeline-item"
            >
              <div className="glass-card p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent/10 text-accent">
                    {exp.period}
                  </span>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
                    {exp.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Building2 size={16} />
                  <span>{exp.company}</span>
                </div>
                
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                
                <ul className="space-y-1.5">
                  {exp.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2 text-sm text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
