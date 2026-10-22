import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, BookOpen, Calendar, GitPullRequest } from "lucide-react";
import { Button } from "@/components/ui/button";

const articles = [
  {
    title: "Emergent Coordination in Decentralized Autonomous Multi-Agent Decision Systems",
    excerpt:
      "Investigates how coordinated intelligence can emerge in fully decentralized multi-agent systems without central control — exploring protocol design and convergence properties.",
    category: "Systems Design",
    readTime: "15 min",
    date: "Jan 2025",
    featured: true,
    status: "Independent Technical Writing",
    pdf: "/pdfs/Emergent_Coordination_in_Decentralized_Autonomous_Multi_Agent_Decision_Systems (1).pdf",
  },
  {
    title: "Self-Healing AI Systems",
    excerpt:
      "Proposes a class of self-healing AI systems capable of detecting, diagnosing, and correcting internal failures during deployment — with rollback and evidence tracking.",
    category: "Reliability Engineering",
    readTime: "12 min",
    date: "March 2025",
    status: "Independent Technical Writing",
    pdf: "/pdfs/Self_Healing_AI_Systems (1) (1).pdf",
  },
  {
    title: "Green Intelligence: Beyond Efficiency",
    excerpt:
      "Reframes sustainable AI as a systems-level intelligence problem rather than a hardware efficiency challenge — examining trade-offs in compute, memory, and inference design.",
    category: "Sustainability",
    readTime: "13 min",
    date: "May 2025",
    status: "Independent Technical Writing",
    pdf: "/pdfs/Green_Intelligence_Beyond_Efficiency_.pdf",
  },
  {
    title: "Quantum Machine Learning (QML): Practical Frontiers",
    excerpt:
      "Examines when and how quantum models provide representational or computational advantages over classical learners — with an honest look at current hardware limitations.",
    category: "Quantum AI",
    readTime: "12 min",
    date: "Sep 2025",
    status: "Independent Technical Writing",
    pdf: "/pdfs/Quantum_Machine_Learning__QML_.pdf",
  },
  {
    title: "LLM Reasoning Beyond Chain of Thought",
    excerpt:
      "Challenges the assumption that explicit chain-of-thought prompting is a prerequisite for reasoning in LLMs — presenting latent and implicit reasoning mechanisms.",
    category: "LLM Reasoning",
    readTime: "10 min",
    date: "Dec 2025",
    status: "Independent Technical Writing",
    pdf: "/pdfs/LLM_Reasoning_Beyond_Chain_of_Thought (1).pdf",
  },
];

const openSourceNote = {
  title: "vLLM: Qwen3-VL Video-Frame Preprocessing Memory Optimization",
  excerpt:
    "Engineering write-up on an open-source contribution to vLLM's Qwen3-VL processor. The change moves frame resizing earlier in the pipeline to reduce intermediate frame-buffer memory before downstream processor resizing. Synthetic 720p benchmark: 13.18 MiB → 2.11 MiB. Includes tests, benchmark script, and idempotency verification.",
  category: "AI Infrastructure · Open Source",
  status: "Pull Request Under Review",
  prUrl: "https://github.com/vllm-project/vllm/pull/61096",
  issueUrl: "https://github.com/vllm-project/vllm/issues/60985",
};

export const ResearchSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredArticle = articles.find((a) => a.featured);
  const otherArticles = articles.filter((a) => !a.featured);

  return (
    <section id="research" className="py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Technical Notes & Research</span>
          <h2 className="section-title">Technical Writing & Open-Source Engineering</h2>
          <p className="section-subtitle mx-auto">
            Independent technical writing on AI systems, reliability, and engineering trade-offs —
            clearly labeled as exploratory work, not peer-reviewed publications.
          </p>
        </motion.div>

        {/* Open Source Engineering Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mb-8"
        >
          <div className="glass-card p-8 sm:p-10 border border-accent/20">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent flex items-center gap-1.5">
                <GitPullRequest size={12} />
                {openSourceNote.status}
              </span>
              <span className="text-sm text-muted-foreground">{openSourceNote.category}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              {openSourceNote.title}
            </h3>

            <p className="text-lg text-muted-foreground mb-6 max-w-3xl">
              {openSourceNote.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2" asChild>
                <a href={openSourceNote.prUrl} target="_blank" rel="noopener noreferrer">
                  View Pull Request
                  <ArrowUpRight size={14} />
                </a>
              </Button>
              <Button variant="outline" size="sm" className="gap-2" asChild>
                <a href={openSourceNote.issueUrl} target="_blank" rel="noopener noreferrer">
                  Related Issue
                  <ArrowUpRight size={14} />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Featured Article */}
        {featuredArticle && (
          <motion.a
            href={featuredArticle.pdf}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="block mb-8 group"
          >
            <div className="glass-card p-8 sm:p-10 hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                  Featured
                </span>
                <span className="text-sm text-muted-foreground">
                  {featuredArticle.category}
                </span>
                <span className="text-xs text-muted-foreground italic ml-auto">
                  {featuredArticle.status}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                {featuredArticle.title}
              </h3>

              <p className="text-lg text-muted-foreground mb-6 max-w-3xl">
                {featuredArticle.excerpt}
              </p>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <BookOpen size={16} />
                  {featuredArticle.readTime}
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar size={16} />
                  {featuredArticle.date}
                </div>
                <div className="flex items-center gap-1.5 ml-auto text-accent font-medium group-hover:gap-2.5 transition-all">
                  Read Article
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </div>
          </motion.a>
        )}

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherArticles.map((article, index) => (
            <motion.a
              key={article.title}
              href={article.pdf}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="block group"
            >
              <div className="skill-domain h-full">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-accent">
                    {article.category}
                  </span>
                  <span className="text-xs text-muted-foreground italic">
                    {article.status}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {article.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {article.excerpt}
                </p>

                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{article.readTime}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
