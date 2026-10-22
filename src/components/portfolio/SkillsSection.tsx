import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Server, Code2, FlaskConical, Cpu, Radio } from "lucide-react";

const skillDomains = [
  {
    icon: Server,
    title: "Systems & Performance Engineering",
    subtitle: "C++ systems, correctness, and measurable performance",
    skills: [
      "C++20",
      "STL",
      "Data Structures & Algorithms",
      "Memory & Performance Analysis",
      "Deterministic Event Replay",
      "Benchmarking",
      "ASan/UBSan",
      "GoogleTest",
      "Linux",
      "CMake"
    ]
  },
  {
    icon: Brain,
    title: "AI Infrastructure & Open Source",
    subtitle: "Model preprocessing and inference-oriented engineering",
    skills: [
      "Python",
      "PyTorch",
      "Hugging Face Transformers",
      "vLLM Contribution",
      "Qwen3-VL Video Preprocessing",
      "OpenCV",
      "NumPy",
      "Memory-Efficient Processing"
    ]
  },
  {
    icon: Cpu,
    title: "Computer Architecture & Digital Systems",
    subtitle: "Architecture and implementation through QuantumRISC",
    skills: [
      "RISC Architecture",
      "Instruction-Set Design",
      "Digital Logic",
      "HDL/Verilog",
      "Digital Logic Simulation"
    ]
  },
  {
    icon: Radio,
    title: "Wireless & Signal Processing",
    subtitle: "Communication systems modeled in WaveCore X",
    skills: [
      "BPSK–256-QAM",
      "OFDM",
      "AWGN/Rayleigh/Rician Channels",
      "ZF/MMSE Equalization",
      "BER/SER/EVM Analysis",
      "CRC-16",
      "Hamming (7,4)"
    ]
  },
  {
    icon: Code2,
    title: "Software Engineering & Infrastructure",
    subtitle: "Reliable APIs, development workflows, and verification",
    skills: [
      "Git & GitHub",
      "Automated Testing",
      "REST APIs",
      "FastAPI",
      "TypeScript/JavaScript",
      "Postman",
      "Docker",
      "CI/CD"
    ]
  },
  {
    icon: FlaskConical,
    title: "Machine Learning & Data Tools",
    subtitle: "Numerical computing and model development",
    skills: [
      "NumPy",
      "Pandas",
      "scikit-learn",
      "TensorFlow (Defensible Foundation)"
    ]
  }
];

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
          <span className="section-label">Skills & Technical Expertise</span>
          <h2 className="section-title">
            Systems. Performance. Intelligent Infrastructure.
          </h2>
          <p className="section-subtitle mx-auto">
            Engineering capabilities demonstrated through projects, benchmarks, testing, and open-source contributions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillDomains.map((domain, index) => (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="skill-domain group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors shrink-0">
                    <domain.icon size={22} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground leading-snug">{domain.title}</h3>
                </div>
                
                <p className="text-xs text-muted-foreground italic mb-5">{domain.subtitle}</p>
                
                <div className="flex flex-wrap gap-1.5">
                  {domain.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground font-mono transition-colors hover:bg-accent/20 hover:text-accent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <p className="text-xs text-muted-foreground font-mono">
            <strong className="text-foreground">Evidence-first engineering:</strong> Skills are connected to actual implementations and contributions—not inflated proficiency ratings.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
