import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, BookOpen, Calendar } from "lucide-react";

const articles = [
  {
    title: "Emergent Coordination in Decentralized Autonomous Multi-Agent Decision Systems",
    excerpt:
      " investigates how coordinated intelligence can emerge in fully decentralized multi-agent systems without central control. We introduce.",
    category: "System Design",
    readTime: "15 min",
    date: "Jan 2025",
    featured: true,
    pdf: "/pdfs/Emergent_Coordination_in_Decentralized_Autonomous_Multi_Agent_Decision_Systems (1).pdf",
  },
  {
    title: "Self Healing AI Systems",
    excerpt:
      "We propose a new class of self-healing AI systems capable of detecting, diagnosing, and correcting internal failures during deployment",
    category: "MLOps",
    readTime: "12 min",
    date: "Marcrh 2025",
    pdf: "/pdfs/Self_Healing_AI_Systems (1) (1).pd",
  },
  {
    title: "Green Intelligence Beyond Efficiency",
    excerpt:
      "This work reframes sustainable AI as a systems-level intelligence problem rather than a hardware efficiency challenge.",
    category: "Sustainability",
    readTime: "13 min",
    date: "May 2025",
    pdf: "/pdfs/Green_Intelligence_Beyond_Efficiency_.pdf",
  },
  {
    title: "Quantum Machine Learning QML",
    excerpt:
      "We examine the practical frontier of quantum machine learning by analyzing when and how quantum models provide representational or computational advantages over classical learners.",
    category: "Quantum AI",
    readTime: "12 min",
    date: "Sep 2025",
    pdf: "/pdfs/Quantum_Machine_Learning__QML_.pdf",
  },
  {
    title: "LLM Reasoning Beyond Chain of Thought",
    excerpt:
      "This paper challenges the assumption that explicit chain-of-thought prompting is a prerequisite for reasoning in large language models. We present alternative latent and implicit reasoning mechanisms that improve robustness.",
    category: "LLM Reasoning",
    readTime: "10 min",
    date: "Dec 2025",
    pdf: "/pdfs/LLM_Reasoning_Beyond_Chain_of_Thought (1).pdf",
  },
];

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
          <span className="section-label">Research & Thinking</span>
          <h2 className="section-title">Deep Dives Into What I've Learned</h2>
          <p className="section-subtitle mx-auto">
            Technical writing on AI systems, engineering philosophy, and lessons
            from building production systems. No hot takes — just practical
            insights.
          </p>
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
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent">
                  Featured
                </span>
                <span className="text-sm text-muted-foreground">
                  {featuredArticle.category}
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
                  View Article
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
                <span className="text-xs font-medium text-accent mb-2 block">
                  {article.category}
                </span>

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
