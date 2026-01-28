import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Users, Zap, Award } from "lucide-react";

const metrics = [
  {
    icon: Zap,
    value: "10K+",
    label: "Requests Processed",
    description: "Across full-stack and AI-powered projects"
  },
  {
    icon: Users,
    value: "100+",
    label: "Happy Clients",
    description: "clients served with excellence and dedication"
  },
  {
    icon: TrendingUp,
    value: "40%",
    label: "Efficiency Gains",
    description: "Average improvement in key metrics"
  },
  {
    icon: Award,
    value: "99.99%",
    label: "Production Reliability",
    description: "Handled real users with minimal downtime"
  }
];

const testimonials = [
  {
    quote: "One of the most effective engineers I've worked with. Takes ownership of complex problems and delivers solutions that actually work.",
    author: "Senior Developer",
    company: "Tech company"
  },
  {
    quote: "Rare combination of deep technical skills and product thinking. Doesn't just build features — understands why they matter.",
    author: "Product Manager",
    company: "AI Startup"
  }
];

export const MetricsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Impact</span>
          <h2 className="section-title">
            Numbers Don't Lie
          </h2>
          <p className="section-subtitle mx-auto">
            Real metrics from real systems. These aren't vanity numbers — they represent 
            tangible impact on products and users.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="metric-card group"
            >
              <div className="inline-flex p-3 rounded-xl bg-accent/10 text-accent mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <metric.icon size={24} />
              </div>
              <div className="text-4xl font-bold text-foreground mb-1">{metric.value}</div>
              <div className="text-sm font-medium text-foreground mb-1">{metric.label}</div>
              <div className="text-xs text-muted-foreground">{metric.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-lg font-semibold text-center text-muted-foreground mb-8">
            What People Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="glass-card p-6"
              >
                <blockquote className="text-foreground/90 mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-foreground text-sm">{testimonial.author}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
