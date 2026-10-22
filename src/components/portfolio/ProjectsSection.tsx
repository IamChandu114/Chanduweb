import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowUpRight,
  Github,
  Cpu,
  Radio,
  Bot,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import analytics from "@/lib/analytics";

const projects = [
  {
    title: "ApexHFT",
    subtitle: "C++ Matching Engine & Performance Lab",
    tagline: "Deterministic order-book simulator built for correctness and benchmarking",
    problem:
      "Understanding matching-engine design, memory allocation trade-offs, and how to measure OMS replay performance with reproducible methodology.",
    approach:
      "Built a deterministic, offline order-book and matching-engine simulator in C++20. Focused on correct event replay, memory layout decisions, and automated sanitizer-backed testing.",
    keyDetails: [
      "C++20 with modern build tooling (CMake)",
      "Order-book and matching-engine design",
      "Deterministic event replay pipeline",
      "Sanitizer-backed correctness checks (ASan, UBSan)",
      "Automated test suite for matching logic",
      "Benchmark: 25.5× faster OMS replay vs. measured baseline"
    ],
    note: "25.5× is a benchmark result against a measured baseline — not a claim about exchange-grade or production latency.",
    techStack: ["C++20", "CMake", "GoogleTest", "ASan/UBSan", "Benchmarking"],
    icon: Zap,
    color: "from-amber-500 to-orange-500",
    githubUrl: "https://github.com/IamChandu114/ApexHFT",
    liveUrl: null,
    id: "apexhft",
    priority: true
  },
  {
    title: "QuantumRISC",
    subtitle: "Computer Architecture & Digital Systems",
    tagline: "RISC processor architecture with quantum-inspired computing exploration",
    problem:
      "Exploring processor design from first principles — instruction execution, digital logic, and how quantum-inspired computation can be layered on classical architecture.",
    approach:
      "Implemented a RISC-style architecture with modular digital logic design. Includes instruction-set design, module verification, and reproducible simulation outputs.",
    keyDetails: [
      "RISC instruction-set architecture design",
      "Digital logic module design and verification",
      "Instruction execution and simulation model",
      "Quantum-inspired computation layers",
      "Tests and reproducible example outputs",
      "Selected for XERJ Corpus Hub open-source recognition"
    ],
    note: "XERJ Corpus Hub selection is an open-source recognition — not employment at XERJ.",
    techStack: ["Verilog/HDL", "Digital Logic", "Computer Architecture", "Simulation"],
    icon: Cpu,
    color: "from-violet-500 to-purple-500",
    githubUrl: "https://github.com/IamChandu114/-QuantumRISC",
    liveUrl: null,
    id: "quantumrisc",
    priority: true
  },
  {
    title: "AstraOS",
    subtitle: "Autonomous Runtime Intelligence Platform",
    tagline: "Observability-first runtime platform with bounded autonomous decision support",
    problem:
      "Building a system that monitors host runtime state, forecasts resource needs, and supports bounded autonomous actions — with rollback, evidence tracking, and failure handling.",
    approach:
      "Designed for observability and reliability. Implements host telemetry, resource monitoring, guardrail-bounded actions, rollback mechanisms, and edge-node health monitoring.",
    keyDetails: [
      "Host runtime telemetry and resource monitoring",
      "Resource forecasting and runtime intelligence",
      "Guardrail-bounded autonomous actions",
      "Rollback and evidence tracking",
      "Edge-node heartbeat and health monitoring",
      "Digital-twin and chaos-testing capabilities"
    ],
    note: "This is a development-stage platform — not operating in production or managing live infrastructure.",
    techStack: ["Python", "FastAPI", "Docker", "Observability", "Systems Design"],
    icon: Bot,
    color: "from-cyan-500 to-blue-500",
    githubUrl: "https://github.com/IamChandu114/AstraOS-Autonomous-Runtime-Intelligence-Platform",
    liveUrl: null,
    id: "astraos",
    priority: false
  },
  {
    title: "WaveCore X",
    subtitle: "Wireless Communication Systems Simulator",
    tagline: "Full-stack simulation platform for digital modulation, channel modeling, and BER analysis",
    problem:
      "Simulating and visualizing wireless communication system behavior across modulation schemes, channel models, and coding techniques in an interactive, API-driven interface.",
    approach:
      "Built a communication-systems simulation platform with a React frontend and API-driven backend. Supports digital modulation from BPSK through 256-QAM, OFDM, and multiple channel and equalization models.",
    keyDetails: [
      "Digital modulation: BPSK, QPSK, 16-QAM through 256-QAM",
      "OFDM with cyclic prefix",
      "AWGN, Rayleigh, and Rician channel models",
      "Zero-forcing and MMSE equalization",
      "BER, SER, and EVM analysis",
      "CRC-16 and Hamming (7,4) error-correction coding",
      "API-driven simulation with live visualization"
    ],
    note: "A communication-systems simulation platform — not a certified 3GPP modem or commercial deployment.",
    techStack: ["Python", "NumPy", "FastAPI", "React", "TypeScript", "Signal Processing"],
    icon: Radio,
    color: "from-emerald-500 to-teal-500",
    githubUrl: "https://github.com/IamChandu114/wavecore-x-website",
    liveUrl: "https://wavecore-x-website.vercel.app",
    id: "wavecore_x",
    priority: false
  }
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleProjectClick = (projectId: string, url: string) => {
    analytics.trackLinkClick(`project_${projectId}`, url, "project");
  };

  return (
    <section id="projects" className="py-32 bg-secondary/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Engineering Projects</span>
          <h2 className="section-title">Real Work. Measurable Evidence.</h2>
          <p className="section-subtitle mx-auto">
            Projects built from fundamentals — with automated tests, benchmarks, and honest
            documentation about what each system does and doesn't do.
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
                        <p className="text-accent font-medium text-sm">{project.subtitle}</p>
                        <p className="text-muted-foreground text-sm">{project.tagline}</p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-1">Problem Explored</h4>
                        <p className="text-muted-foreground">{project.problem}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-1">Engineering Approach</h4>
                        <p className="text-muted-foreground">{project.approach}</p>
                      </div>
                      {project.note && (
                        <p className="text-xs text-muted-foreground italic border-l-2 border-accent/30 pl-3">
                          {project.note}
                        </p>
                      )}
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
                      <h4 className="text-sm font-semibold text-foreground mb-4">Key Implementation Details</h4>
                      <ul className="space-y-3">
                        {project.keyDetails.map((detail) => (
                          <li key={detail} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                            <span className="text-sm text-foreground/80">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-2 mt-4">
                      <Button variant="ghost" className="flex-1 group/btn" asChild>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => handleProjectClick(project.id, project.githubUrl)}
                          className="flex items-center justify-center gap-2"
                        >
                          <Github size={16} />
                          Source
                          <ArrowUpRight
                            size={14}
                            className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                          />
                        </a>
                      </Button>
                      {project.liveUrl && (
                        <Button variant="ghost" className="flex-1 group/btn" asChild>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => handleProjectClick(project.id + "_live", project.liveUrl!)}
                            className="flex items-center justify-center gap-2"
                          >
                            Live Demo
                            <ArrowUpRight
                              size={14}
                              className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                            />
                          </a>
                        </Button>
                      )}
                    </div>
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
