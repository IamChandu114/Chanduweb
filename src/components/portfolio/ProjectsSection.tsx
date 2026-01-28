import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowUpRight,
  Zap,
  FileSearch,
  ShoppingCart,
  Brain,
  Languages,
  Database
} from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "End-to-End Data Scientist Platform",
    tagline: "From raw data to production intelligence",
    problem:
      "Data science workflows were fragmented across tools, making experimentation, deployment, and monitoring slow and error-prone.",
    solution:
      "Built a unified platform covering data ingestion, feature engineering, model training, evaluation, deployment, and monitoring in one pipeline.",
    impact: [
      "Reduced model deployment time by 65%",
      "Automated 90% of manual data preprocessing",
      "Enabled real-time model performance tracking",
      "Improved experimentation velocity by 3×"
    ],
    techStack: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "PyTorch",
      "MLflow",
      "Docker",
      "FastAPI"
    ],
    hardPart:
      "Designing a reproducible pipeline that handled both batch and real-time data while ensuring experiment traceability.",
    icon: Database,
    color: "from-emerald-500 to-teal-500",
    caseStudyUrl: "https://end-end-datascience-1-1.onrender.com"
  },

  {
    title: "AI Decision Engine",
    tagline: "Real-time intelligence at scale",
    problem:
      "Enterprise decision-making systems were slow, inconsistent, and unable to adapt to rapidly changing conditions.",
    solution:
      "Engineered a multi-model AI decision engine capable of real-time inference with dynamic routing and prioritization.",
    impact: [
      "50,000+ decisions processed per second",
      "<10ms P99 latency under load",
      "40% improvement in decision accuracy",
      "99.99% system availability"
    ],
    techStack: [
      "PyTorch",
      "Kafka",
      "Redis",
      "Go",
      "Kubernetes",
      "gRPC"
    ],
    hardPart:
      "Maintaining ultra-low latency under burst traffic required custom model caching, intelligent batching, and a priority-aware execution layer.",
    icon: Zap,
    color: "from-blue-500 to-cyan-500",
    caseStudyUrl: "https://ai-decision-engine-wnuq.vercel.app/ui/"
  },

  {
    title: "No-Language AI",
    tagline: "Intelligence beyond human language",
    problem:
      "Most AI systems depend heavily on natural language, limiting their ability to reason over raw signals, patterns, and intent.",
    solution:
      "Developed a language-free AI system that learns directly from behavior, sequences, and embeddings without textual supervision.",
    impact: [
      "Eliminated language dependency for core reasoning",
      "Improved generalization across domains",
      "Reduced training data requirements by 30%",
      "Enabled cross-modal intelligence"
    ],
    techStack: [
      "PyTorch",
      "Transformers",
      "Self-Supervised Learning",
      "NumPy",
      "CUDA"
    ],
    hardPart:
      "Designing meaningful representations without linguistic anchors required novel embedding alignment and contrastive objectives.",
    icon: Languages,
    color: "from-purple-500 to-pink-500",
    caseStudyUrl: "https://no-language-ai-01.streamlit.app/"
  },

  {
    title: "Self-Evolving Intelligence System",
    tagline: "AI that improves itself over time",
    problem:
      "Most AI systems become static once deployed, slowly degrading as real-world conditions change. Fixing this usually requires costly retraining and manual intervention",
    solution:
      "Designed a self-evolving intelligence system that adapts its decision strategy in real time using feedback and memory — without retraining or redeployment.",
    impact: [
      "Reduced manual retraining effort by 70%",
      "Improved long-term decision quality",
      "Enabled autonomous adaptation to new inputs and environments",
      "Maintained stable behavior under continuous evolution"
    ],
    techStack: [
      "PyTorch",
      "Reinforcement Learning",
      "Online Learning",
      "Ray",
      "Docker"
    ],
    hardPart:
      "Preventing catastrophic forgetting while allowing safe self-improvement required strict evaluation gates and rollback mechanisms.",
    icon: Brain,
    color: "from-orange-500 to-red-500",
    caseStudyUrl: "https://fttqefscunaoqy59q96vc5.streamlit.app/"
  },

  {
    title: "Full-Stack E-Commerce Platform",
    tagline: "Scalable commerce from frontend to backend",
    problem:
      "Existing e-commerce solutions lacked scalability, personalization, and performance under high traffic.",
    solution:
      "Developed a full-stack e-commerce platform with secure payments, real-time inventory, and optimized user experience.",
    impact: [
      "Handled thousands of concurrent users",
      "Improved page load time by 45%",
      "Secure payment and order processing",
      "Highly modular and scalable architecture"
    ],
    techStack: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe"
    ],
    hardPart:
      "Balancing performance, security, and scalability while keeping the UX fast and intuitive across devices.",
    icon: ShoppingCart,
    color: "from-yellow-500 to-orange-500",
    caseStudyUrl: "https://spectacular-platypus-7e2660.netlify.app/"
  },

  {
    title: "AI Resume Analyzer",
    tagline: "Hiring intelligence at machine speed",
    problem:
      "Recruiters struggled to screen large volumes of resumes efficiently and objectively.",
    solution:
      "Built an AI-powered resume analyzer that extracts skills, scores candidates, and matches profiles to job roles.",
    impact: [
      "Reduced screening time by 80%",
      "Improved candidate-job matching accuracy",
      "Automated skill extraction at scale",
      "Enabled bias-aware evaluation"
    ],
    techStack: [
      "Python",
      "NLP",
      "Transformers",
      "FastAPI",
      "React"
    ],
    hardPart:
      "Designing fair scoring mechanisms while handling diverse resume formats and unstructured data.",
    icon: FileSearch,
    color: "from-indigo-500 to-violet-500",
    caseStudyUrl: "https://aic-resume-analyzer.onrender.com/"
  }
]; 

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 bg-secondary/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Flagship Projects</span>
          <h2 className="section-title">Not Demos. Production Systems.</h2>
          <p className="section-subtitle mx-auto">
            These aren't weekend projects or tutorials. They're real systems solving real problems
            at scale — built from scratch, deployed in production, and battle-tested.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.15 }}
              className="project-card group"
            >
              <div className="p-8 sm:p-10">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color} text-white`}>
                        <project.icon size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                        <p className="text-muted-foreground">{project.tagline}</p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-1">The Problem</h4>
                        <p className="text-muted-foreground">{project.problem}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-1">The Solution</h4>
                        <p className="text-muted-foreground">{project.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-1">What Made It Hard</h4>
                        <p className="text-muted-foreground text-sm italic">{project.hardPart}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-medium px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:w-72 shrink-0">
                    <div className="bg-gradient-dark-glass rounded-2xl p-6 border border-border/50">
                      <h4 className="text-sm font-semibold text-foreground mb-4">Impact & Results</h4>
                      <ul className="space-y-3">
                        {project.impact.map((metric) => (
                          <li key={metric} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                            <span className="text-sm text-foreground/80">{metric}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button variant="ghost" className="w-full mt-4 group/btn" asChild>
                      <a
                        href={project.caseStudyUrl}
                        className="flex items-center justify-center gap-2"
                      >
                        View System
                        <ArrowUpRight
                          size={16}
                          className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                        />
                      </a>
                    </Button>

                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
