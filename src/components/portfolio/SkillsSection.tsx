import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Server, Code2, FlaskConical, Cpu, Radio } from "lucide-react";

const skillDomains = [
  {
    icon: Code2,
    title: "Languages",
    description: "Used across projects and contributions",
    skills: [
      { name: "C++20", level: "Used in projects" },
      { name: "Python", level: "Used in projects" },
      { name: "TypeScript / JavaScript", level: "Used in projects" },
    ],
    tools: ["STL", "CMake", "NumPy", "FastAPI"]
  },
  {
    icon: Server,
    title: "Systems Engineering",
    description: "Fundamentals applied in real codebases",
    skills: [
      { name: "Data Structures & Algorithms", level: "Used in projects" },
      { name: "Memory & Performance Analysis", level: "Used in projects" },
      { name: "Testing & Sanitizers (ASan/UBSan)", level: "Used in projects" },
      { name: "Benchmarking", level: "Used in projects" },
      { name: "Linux", level: "Used in projects" },
    ],
    tools: ["GoogleTest", "Valgrind", "perf", "CMake"]
  },
  {
    icon: Brain,
    title: "AI / ML Infrastructure",
    description: "From model preprocessing to inference optimization",
    skills: [
      { name: "PyTorch", level: "Used in projects" },
      { name: "Hugging Face / vLLM", level: "Open-source contribution" },
      { name: "Model Preprocessing & Inference", level: "Used in projects" },
      { name: "OpenCV", level: "Used in projects" },
      { name: "FastAPI", level: "Used in projects" },
    ],
    tools: ["PyTorch", "Hugging Face", "OpenCV", "FastAPI", "NumPy"]
  },
  {
    icon: FlaskConical,
    title: "Software Engineering",
    description: "Tooling and practices used across projects",
    skills: [
      { name: "Git & GitHub", level: "Used in projects" },
      { name: "Automated Testing", level: "Used in projects" },
      { name: "REST APIs", level: "Used in projects" },
      { name: "Docker", level: "Familiar with" },
      { name: "CI/CD", level: "Familiar with" },
    ],
    tools: ["Git", "GitHub Actions", "Docker", "Postman"]
  },
  {
    icon: Cpu,
    title: "Computer Architecture",
    description: "Applied in QuantumRISC and coursework",
    skills: [
      { name: "RISC Architecture", level: "Used in projects" },
      { name: "Digital Logic Design", level: "Used in projects" },
      { name: "HDL / Verilog", level: "Used in projects" },
      { name: "Instruction-Set Design", level: "Used in projects" },
    ],
    tools: ["Verilog", "ModelSim", "Digital Logic Simulation"]
  },
  {
    icon: Radio,
    title: "Wireless & Signal Processing",
    description: "Applied in WaveCore X simulator",
    skills: [
      { name: "Digital Modulation (BPSK–256-QAM)", level: "Used in projects" },
      { name: "OFDM & Channel Modeling", level: "Used in projects" },
      { name: "BER / SER / EVM Analysis", level: "Used in projects" },
      { name: "Error-Correction Coding", level: "Used in projects" },
    ],
    tools: ["NumPy", "SciPy", "Matplotlib", "FastAPI"]
  },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Open-source contribution": return "bg-accent text-accent-foreground";
    case "Used in projects": return "bg-accent/20 text-accent";
    case "Familiar with": return "bg-muted text-muted-foreground";
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
          <span className="section-label">Skills & Technical Areas</span>
          <h2 className="section-title">
            Grounded in Projects. Honest About Depth.
          </h2>
          <p className="section-subtitle mx-auto">
            Skills verified against actual project work and open-source contributions —
            not padded with technologies I've only read about.
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
                  <div key={skill.name} className="flex items-center justify-between gap-2">
                    <span className="text-sm text-foreground/80">{skill.name}</span>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full shrink-0 ${getLevelColor(skill.level)}`}>
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
