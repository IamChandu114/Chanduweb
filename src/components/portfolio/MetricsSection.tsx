import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, GitPullRequest, FlaskConical, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const MetricsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const evidence = [
    {
      icon: GitPullRequest,
      label: "vLLM PR #61096",
      detail: "Qwen3-VL early frame resize — frame-buffer memory: 13.18 MiB → 2.11 MiB on synthetic 720p benchmark (~84% reduction). PR under review.",
      context: "Synthetic 720p benchmark result. Not a universal vLLM memory reduction.",
      url: "https://github.com/vllm-project/vllm/pull/61096",
      cta: "View Pull Request"
    },
    {
      icon: FlaskConical,
      label: "ApexHFT Benchmark",
      detail: "25.5× faster OMS replay vs. measured baseline. Verified via deterministic event replay with sanitizer-backed correctness checks.",
      context: "Benchmark result against measured baseline — not exchange-grade production latency.",
      url: "https://github.com/IamChandu114/ApexHFT",
      cta: "View Repository"
    },
    {
      icon: FileText,
      label: "WaveCore X Simulation",
      detail: "Full-stack wireless communication simulator: BPSK–256-QAM, OFDM, AWGN/Rayleigh/Rician channels, ZF/MMSE equalization, BER/SER/EVM analysis.",
      context: "Simulation platform — not a certified 3GPP modem.",
      url: "https://wavecore-x-website.vercel.app",
      cta: "View Live Demo"
    },
    {
      icon: ExternalLink,
      label: "QuantumRISC — XERJ Corpus Hub",
      detail: "RISC architecture and digital logic simulation selected for XERJ Corpus Hub open-source recognition.",
      context: "Open-source recognition — not employment at XERJ.",
      url: "https://github.com/IamChandu114/-QuantumRISC",
      cta: "View Repository"
    }
  ];

  return (
    <section className="py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Engineering Evidence</span>
          <h2 className="section-title">
            Selected Engineering Evidence
          </h2>
          <p className="section-subtitle mx-auto">
            Verifiable artifacts from real projects — benchmarks, contributions, and demonstrations
            with clear context about what each figure measures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {evidence.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="glass-card p-6 flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex p-3 rounded-xl bg-accent/10 text-accent">
                  <item.icon size={22} />
                </div>
                <h3 className="font-semibold text-foreground">{item.label}</h3>
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">{item.detail}</p>
              <p className="text-xs text-muted-foreground italic border-l-2 border-accent/30 pl-3">
                {item.context}
              </p>
              <Button variant="ghost" size="sm" className="self-start gap-2 px-0 hover:px-3 transition-all" asChild>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  {item.cta}
                  <ArrowUpRight size={14} />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
