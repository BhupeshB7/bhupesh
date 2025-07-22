import React, { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import {
  Code,
  Database,
  Server,
  Terminal,
  GitBranch,
  Package2,
  Cpu,
  Settings,
  ShieldCheck,
  Layout,
  Brain,
  Sparkles,
  Zap,
  Layers,
  ChevronRight,
  Globe,
  Rocket,
  Award,
  Target,
  Coffee,
} from "lucide-react";

interface SkillItem {
  name: string;
  icon: React.ReactNode;
  level: number;
  category: "frontend" | "backend" | "database" | "tools";
  color: string;
}

interface ExpertiseItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  skills: string[];
}

const PremiumAbout = () => {
  const [activeSkillCategory, setActiveSkillCategory] = useState<string>("all");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const expertiseRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const heroInView = useInView(heroRef, { once: true });
  const skillsInView = useInView(skillsRef, { once: true });
  const expertiseInView = useInView(expertiseRef, { once: true });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.3]);

  const skills: SkillItem[] = [
    {
      name: "JavaScript",
      icon: <Code size={24} />,
      level: 95,
      category: "frontend",
      color: "from-yellow-400 to-orange-500",
    },
    {
      name: "TypeScript",
      icon: <Code size={24} />,
      level: 90,
      category: "frontend",
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "React.js",
      icon: <Cpu size={24} />,
      level: 92,
      category: "frontend",
      color: "from-cyan-400 to-blue-500",
    },
    {
      name: "Next.js",
      icon: <Layers size={24} />,
      level: 88,
      category: "frontend",
      color: "from-gray-700 to-gray-900",
    },
    {
      name: "Node.js",
      icon: <Server size={24} />,
      level: 93,
      category: "backend",
      color: "from-green-500 to-green-700",
    },
    {
      name: "Express.js",
      icon: <Package2 size={24} />,
      level: 91,
      category: "backend",
      color: "from-gray-600 to-gray-800",
    },
    {
      name: "MongoDB",
      icon: <Database size={24} />,
      level: 87,
      category: "database",
      color: "from-green-400 to-green-600",
    },
    {
      name: "PostgreSQL",
      icon: <Database size={24} />,
      level: 85,
      category: "database",
      color: "from-blue-500 to-indigo-600",
    },
    {
      name: "Git",
      icon: <GitBranch size={24} />,
      level: 89,
      category: "tools",
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Linux",
      icon: <Terminal size={24} />,
      level: 82,
      category: "tools",
      color: "from-purple-500 to-pink-600",
    },
  ];

  const expertiseList: ExpertiseItem[] = [
    {
      title: "Backend Architecture",
      description:
        "Designing scalable, high-performance backend systems with microservices architecture and API-first approach.",
      icon: <Server size={28} />,
      gradient: "from-purple-600 via-purple-700 to-indigo-800",
      skills: ["Node.js", "Express.js", "Microservices", "REST APIs"],
    },
    {
      title: "Database Engineering",
      description:
        "Optimizing database performance with advanced querying, indexing strategies, and data modeling.",
      icon: <Database size={28} />,
      gradient: "from-emerald-600 via-teal-700 to-cyan-800",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Data Modeling"],
    },
    {
      title: "Security & Authentication",
      description:
        "Implementing robust security measures with advanced authentication and authorization systems.",
      icon: <ShieldCheck size={28} />,
      gradient: "from-red-600 via-rose-700 to-pink-800",
      skills: ["JWT", "OAuth 2.0", "bcrypt", "Security Audits"],
    },
    {
      title: "Frontend Innovation",
      description:
        "Creating immersive user experiences with cutting-edge frontend technologies and animations.",
      icon: <Layout size={28} />,
      gradient: "from-blue-600 via-indigo-700 to-purple-800",
      skills: ["React", "Next.js", "Framer Motion", "Tailwind CSS"],
    },
    {
      title: "DevOps & Deployment",
      description:
        "Streamlining development workflows with automated CI/CD pipelines and cloud infrastructure.",
      icon: <Rocket size={28} />,
      gradient: "from-orange-600 via-amber-700 to-yellow-800",
      skills: ["Docker", "AWS", "CI/CD", "Nginx"],
    },
    {
      title: "Problem Solving",
      description:
        "Tackling complex algorithmic challenges with optimized solutions and clean, maintainable code.",
      icon: <Brain size={28} />,
      gradient: "from-violet-600 via-purple-700 to-fuchsia-800",
      skills: ["DSA", "Algorithms", "System Design", "Code Optimization"],
    },
  ];

  const categories = [
    { id: "all", label: "All Skills", icon: <Sparkles size={16} /> },
    { id: "frontend", label: "Frontend", icon: <Layout size={16} /> },
    { id: "backend", label: "Backend", icon: <Server size={16} /> },
    { id: "database", label: "Database", icon: <Database size={16} /> },
    { id: "tools", label: "Tools", icon: <Settings size={16} /> },
  ];

  const filteredSkills =
    activeSkillCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeSkillCategory);

  return (
    <div
      ref={containerRef}
      className="about-scrollbar min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 relative overflow-y-auto"
    >
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-40 right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute bottom-40 left-40 w-80 h-80 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Hero Section */}
        <motion.section
          ref={heroRef}
          className="relative z-10 pt-20 pb-16 px-6"
          initial={{ opacity: 0 }}
          animate={heroInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center "
              initial={{ y: 100, opacity: 0 }}
              animate={heroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium mb-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Sparkles size={16} />
                Full-Stack Engineer
                <Zap size={16} />
              </motion.div>
              <motion.p
                className="text-md md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed space-y-4"
                initial={{ y: 50, opacity: 0 }}
                animate={heroInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                I’m a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-purple-600 font-semibold">
                  full stack developer
                </span>{" "}
                who loves turning ideas into real web applications. While I
                enjoy the full flow, my heart leans toward{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-pink-500 font-semibold">
                  backend development
                </span>{" "}
                — working with Node.js, Express, MongoDB, and crafting clean,
                scalable APIs.
                <br />
                <br />
                What sets me apart is my{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 font-semibold">
                  curiosity, consistency
                </span>
                , and a strong desire to understand how things work under the
                hood — not just follow tutorials. I focus on writing clean,
                readable code and solving real problems through continuous
                learning.
                <br />
                <br />
                I’m always open to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-500 font-semibold">
                  feedback
                </span>
                , eager to grow, and ready to grab every{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 font-semibold">
                  opportunity
                </span>{" "}
                to become a better developer each day.
              </motion.p>

              <motion.div
                className="flex flex-wrap justify-center gap-4 mt-8"
                initial={{ y: 50, opacity: 0 }}
                animate={heroInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {[
                  { icon: <Globe size={16} />, text: "Remote Ready" },
                  { icon: <Award size={16} />, text: "3+ Years" },
                  { icon: <Target size={16} />, text: "50+ Projects" },
                  { icon: <Coffee size={16} />, text: "Available" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.icon}
                    {item.text}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          ref={skillsRef}
          className="relative z-10 py-6 px-6"
          initial={{ opacity: 0 }}
          animate={skillsInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ y: 50, opacity: 0 }}
              animate={skillsInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Technical Arsenal
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Technologies I use to bring ideas to life
              </p>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              className="flex flex-wrap justify-center gap-3 mb-12"
              initial={{ y: 50, opacity: 0 }}
              animate={skillsInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveSkillCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeSkillCategory === category.id
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.icon}
                  {category.label}
                </motion.button>
              ))}
            </motion.div>

            {/* Skills Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSkillCategory}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {filteredSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="group relative"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="relative overflow-hidden bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:border-transparent">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      />

                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <div
                            className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} text-white`}
                          >
                            {skill.icon}
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">
                              {skill.level}%
                            </div>
                          </div>
                        </div>

                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">
                          {skill.name}
                        </h3>

                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                            initial={{ width: 0 }}
                            animate={
                              skillsInView ? { width: `${skill.level}%` } : {}
                            }
                            transition={{
                              duration: 1.5,
                              delay: index * 0.1 + 0.5,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.section>

        {/* Expertise Section */}
        <motion.section
          ref={expertiseRef}
          className="relative z-10 py-16 px-6"
          initial={{ opacity: 0 }}
          animate={expertiseInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ y: 50, opacity: 0 }}
              animate={expertiseInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Areas of Expertise
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Specialized domains where I deliver exceptional results and
                drive innovation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {expertiseList.map((item, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 50 }}
                  animate={expertiseInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative overflow-hidden bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:border-transparent h-full">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />

                    <div className="relative z-10">
                      <motion.div
                        className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.gradient} text-white mb-6`}
                        animate={hoveredCard === index ? { rotate: 360 } : {}}
                        transition={{ duration: 0.8 }}
                      >
                        {item.icon}
                      </motion.div>

                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        {item.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skillIndex}
                            className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={
                              expertiseInView ? { opacity: 1, scale: 1 } : {}
                            }
                            transition={{
                              duration: 0.4,
                              delay: index * 0.15 + skillIndex * 0.1,
                            }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>

                      <motion.div
                        className="flex items-center text-blue-600 dark:text-blue-400 font-medium mt-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300"
                        initial={{ x: -10, opacity: 0 }}
                        animate={
                          hoveredCard === index
                            ? { x: 0, opacity: 1 }
                            : { x: -10, opacity: 0 }
                        }
                        transition={{ duration: 0.3 }}
                      >
                        Learn More
                        <ChevronRight
                          size={16}
                          className="ml-1 group-hover:translate-x-1 transition-transform duration-300"
                        />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default PremiumAbout;
