import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Server, Code2, Cloud, FlaskConical, Database } from "lucide-react";

const skillDomains = [
  {
    icon: Brain,
    title: "AI / ML / Deep Learning",
    description: "Building intelligent systems from research to production",
    skills: [
      { name: "PyTorch / TensorFlow", level: "Expert" },
      { name: "Transformers & LLMs", level: "Expert" },
      { name: "Computer Vision", level: "Advanced" },
      { name: "NLP & Text Processing", level: "Expert" },
      { name: "Reinforcement Learning", level: "Advanced" },
    ],
    tools: ["PyTorch", "Hugging Face", "OpenAI API", "LangChain", "ONNX"]
  },
  {
    icon: Server,
    title: "System Design & Architecture",
    description: "Designing systems that scale to millions of users",
    skills: [
      { name: "Distributed Systems", level: "Expert" },
      { name: "Microservices", level: "Expert" },
      { name: "Event-Driven Architecture", level: "Advanced" },
      { name: "API Design", level: "Expert" },
      { name: "Performance Optimization", level: "Expert" },
    ],
    tools: ["Kafka", "Redis", "PostgreSQL", "MongoDB", "gRPC"]
  },
  {
    icon: Code2,
    title: "Full-Stack Engineering",
    description: "End-to-end development from backend to frontend",
    skills: [
      { name: "Python", level: "Expert" },
      { name: "TypeScript / React", level: "Advanced" },
      { name: "Node.js", level: "Advanced" },
      { name: "Go", level: "Advanced" },
      { name: "Rust", level: "Advanced" },
    ],
    tools: ["FastAPI", "React", "Next.js", "GraphQL", "Prisma"]
  },
  {
    icon: Cloud,
    title: "MLOps & Cloud Infrastructure",
    description: "Deploying and scaling ML systems reliably",
    skills: [
      { name: "Kubernetes", level: "Expert" },
      { name: "Docker", level: "Expert" },
      { name: "CI/CD Pipelines", level: "Expert" },
      { name: "Model Serving", level: "Expert" },
      { name: "Infrastructure as Code", level: "Advanced" },
    ],
    tools: ["AWS", "GCP", "Terraform", "MLflow", "Kubeflow"]
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Building robust data pipelines and infrastructure",
    skills: [
      { name: "Data Pipeline Design", level: "Expert" },
      { name: "ETL / ELT", level: "Expert" },
      { name: "Data Modeling", level: "Advanced" },
      { name: "Stream Processing", level: "Advanced" },
      { name: "Data Warehousing", level: "Advanced" },
    ],
    tools: ["Apache Spark", "Airflow", "dbt", "Snowflake", "Delta Lake"]
  },
  {
    icon: FlaskConical,
    title: "Research & Problem Solving",
    description: "Translating research into production solutions",
    skills: [
      { name: "Paper Implementation", level: "Expert" },
      { name: "Experiment Design", level: "Expert" },
      { name: "Statistical Analysis", level: "Advanced" },
      { name: "A/B Testing", level: "Expert" },
      { name: "Technical Writing", level: "Advanced" },
    ],
    tools: ["Jupyter", "Weights & Biases", "Git", "LaTeX", "Notion"]
  },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Expert": return "bg-accent text-accent-foreground";
    case "Advanced": return "bg-accent/20 text-accent";
    case "Intermediate": return "bg-muted text-muted-foreground";
    default: return "bg-muted/50 text-muted-foreground";
  }
};

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Skills & Expertise</span>
          <h2 className="section-title">
            Deep, Not Wide. Expertise That Delivers.
          </h2>
          <p className="section-subtitle mx-auto">
            These aren't just technologies I've used — they're tools I've mastered through building 
            real systems that serve real users at scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillDomains.map((domain, index) => (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="skill-domain group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <domain.icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{domain.title}</h3>
              </div>
              
              <p className="text-sm text-muted-foreground mb-5">{domain.description}</p>
              
              <div className="space-y-2.5 mb-5">
                {domain.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-sm text-foreground/80">{skill.name}</span>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${getLevelColor(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="pt-4 border-t border-border/50">
                <div className="flex flex-wrap gap-2">
                  {domain.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
