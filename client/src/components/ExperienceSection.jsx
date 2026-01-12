import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, Building2, Calendar, MapPin } from "lucide-react";
import { useRef } from "react";

const experiences = [
  {
    role: "Web Developer",
    company: "RedOrange Limited",
    location: "Dhaka, Bangladesh",
    period: "Oct 2024 - Present",
    description: [
      "Engineered advanced data synchronization layers using TanStack Query, implementing optimistic updates and intelligent caching to eliminate loading latency for 10K+ users.",
      "Mastered frontend performance optimization via strict memoization and list virtualization, effectively preventing unnecessary re-renders and slashing main-thread blocking time by 30%.",
      "Instilled a culture of code reliability by integrating comprehensive unit testing workflows, significantly reducing critical regression cycles before deployment.",
      "Standardized codebase architecture with clear, maintainable documentation and component guidelines, streamlining developer onboarding and ensuring long-term scalability.",
    ],
    tech: [
      "React",
      "Laravel",
      "Tailwind CSS",
      "TanStack Query",
      "Vite",
      "MySQL",
      "System Architecture",
      "React Performance",
      "Scalable Solutions",
    ],
  },
  {
    role: "Frontend Engineer (Remote)",
    company: "Qwik IT Services",
    location: "New Brunswick, Canada",
    period: "Nov 2023 - Jul 2024",
    description: [
      "Spearheaded the migration to high-performance Next.js architectures, establishing server-side rendering patterns that optimized SEO and initial load velocity.",
      "Architected secure, scalable authentication workflows, laying a robust foundation for user data integrity across the platform.",
      "Refactored monolithic legacy modules using SOLID principles, transforming them into modular, testable components to improve code maintainability.",
      "Designed and implemented a premium, atomic component library, enforcing consistent UI/UX patterns and responsive design across all application interfaces.",
    ],
    tech: [
      "Next.js",
      "Auth Systems",
      "Component Design",
      "Tailwind CSS",
      "Vite",
      "MongoDB",
      "Python",
      "Django",
      "React Performance",
      "Scalable Solutions",
    ],
  },
];

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-2xl opacity-20 group-hover:opacity-60 blur transition duration-500" />
      <div className="relative bg-card/80 backdrop-blur-xl border border-border/50 p-6 sm:p-8 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity">
          <Briefcase className="w-24 h-24 sm:w-32 sm:h-32 -rotate-12 transform translate-x-4 -translate-y-4" />
        </div>

        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 relative z-10">
          {/* Left Column: Timeline & Company Info */}
          <div className="md:w-1/3 flex-shrink-0 space-y-4 border-b md:border-b-0 md:border-r border-border/50 pb-6 md:pb-0 md:pr-6 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Calendar className="w-4 h-4" />
              {experience.period}
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                {experience.role}
              </h3>
              <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                <Building2 className="w-4 h-4" />
                <span className="font-medium text-lg">
                  {experience.company}
                </span>
              </div>
              <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground/80">
                <MapPin className="w-4 h-4" />
                <span>{experience.location}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {experience.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs rounded-md bg-secondary/50 text-secondary-foreground border border-border/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Description */}
          <div className="md:w-2/3 text-left">
            <ul className="space-y-4">
              {experience.description.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-muted-foreground group-hover:text-foreground/90 transition-colors"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  return (
    <section
      id="experience"
      className="py-24 sm:py-32 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <div className="absolute left-0 top-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />

      <div
        className="container mx-auto px-4 sm:px-6 relative z-10"
        ref={containerRef}
      >
        <motion.div
          style={{ opacity, scale }}
          className="text-center mb-16 sm:mb-20 space-y-4"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Career Path
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-foreground/70">
              Professional
            </span>{" "}
            <span className="text-primary relative inline-block">
              Experience
              <svg
                className="absolute w-full h-3 -bottom-1 left-0 text-primary/30"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            My journey in the tech industry, building scalable solutions and
            creating impact.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
