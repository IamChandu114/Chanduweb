import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, GitBranch } from "lucide-react";

const experiences = [
  {
    role: "Backend & QA Engineering Intern",
    company: "PRAM EduTech",
    location: "Hyderabad, India",
    type: "Internship",
    period: "August 2025 – January 2026",
    description:
      "Worked on backend API validation and mobile application quality assurance across functional, integration, and regression testing cycles.",
    highlights: [
      "Validated REST API request and response behavior using Postman",
      "Performed mobile application functional, integration, and regression testing",
      "Reproduced defects, documented issues, and retested fixes",
      "Contributed to test coverage improvements across release cycles"
    ]
  }
];

const openSourceContributions = [
  {
    role: "Open-Source Contributor",
    project: "vLLM",
    type: "Community Contribution",
    period: "2025",
    description:
      "Contributed a memory optimization to Qwen3-VL video-frame preprocessing in vLLM, an open-source AI inference framework. The change moves frame resizing earlier in the pipeline to reduce intermediate frame-buffer memory before downstream processor resizing.",
    highlights: [
      "Early frame resizing reduces intermediate frame-buffer memory",
      "Synthetic 720p benchmark: frame-buffer memory reduced from 13.18 MiB to 2.11 MiB (~84%)",
      "Includes tests, a benchmark script, and an idempotency check for equivalent output",
      "Addressed a nested sizing-override edge case following maintainer feedback",
      "Pull request: github.com/vllm-project/vllm/pull/61096 (under review)"
    ],
    note: "The 84% reduction is from a synthetic 720p benchmark — not a universal reduction in total vLLM memory usage. PR status may change; check GitHub for current status."
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
            Real Roles. Verified Work.
          </h2>
          <p className="section-subtitle mx-auto">
            Professional experience and open-source engineering contributions — listed honestly,
            without invented roles or inflated responsibilities.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {/* Professional Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4">
              Professional
            </h3>
          </motion.div>
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
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Building2 size={16} />
                  <span>{exp.company}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{exp.location}</p>

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

          {/* Open Source */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="pt-6"
          >
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4">
              Open-Source Engineering
            </h3>
          </motion.div>
          {openSourceContributions.map((contrib, index) => (
            <motion.div
              key={contrib.project + contrib.role}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="timeline-item"
            >
              <div className="glass-card p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent/10 text-accent">
                    {contrib.period}
                  </span>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
                    {contrib.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-1">{contrib.role}</h3>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <GitBranch size={16} />
                  <span>{contrib.project}</span>
                </div>

                <p className="text-muted-foreground mb-4">{contrib.description}</p>

                <ul className="space-y-1.5 mb-4">
                  {contrib.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2 text-sm text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {contrib.note && (
                  <p className="text-xs text-muted-foreground italic border-l-2 border-accent/30 pl-3">
                    {contrib.note}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
