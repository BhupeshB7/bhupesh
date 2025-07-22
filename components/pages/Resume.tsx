import React, { useState, useEffect, useRef, ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import {
  Book, 
  Code2, 
  GraduationCap,
  Github,
  Database,
  Server, 
  Calendar, 
  Zap,
  Target, 
  LucideIcon,
} from "lucide-react";
import HeroSection from "../HeroSetion";
// --------------------- Animated Background Particles ---------------------
const ParticleField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${particle.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-30"
    />
  );
};

// --------------------- Glass Card ---------------------
interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 0.8,
                delay,
                type: "spring",
                stiffness: 100,
              },
            }
          : {}
      }
      className={`backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl relative overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-purple-500/5 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

// --------------------- Skill Orb ---------------------
interface SkillOrbProps {
  skill: string;
  level: number;
  index: number;
}

const SkillOrb: React.FC<SkillOrbProps> = ({ skill, level, index }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: false });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setProgress(level), index * 200);
      return () => clearTimeout(timer);
    } else {
      setProgress(0);
    }
  }, [isInView, level, index]);

  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <motion.div
      ref={ref}
      className="relative flex flex-col items-center group"
      whileHover={{ scale: 1.1, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative w-24 h-24">
        <svg
          className="w-full h-full transform -rotate-90"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="6"
            fill="transparent"
          />
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            stroke="url(#gradient)"
            strokeWidth="6"
            fill="transparent"
            strokeLinecap="round"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset,
            }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold text-white">
            {Math.round(progress)}%
          </span>
        </div>
      </div>
      <h4 className="mt-3 text-sm font-medium text-white text-center">
        {skill}
      </h4>
    </motion.div>
  );
};

// --------------------- 3D Timeline Item ---------------------
interface TimelineItemProps {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  index: number;
  isLast?: boolean;
}

const TimelineItem3D: React.FC<TimelineItemProps> = ({
  year,
  title,
  subtitle,
  description,
  icon: Icon,
  index,
  isLast,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -100 : 100,
        rotateY: index % 2 === 0 ? -15 : 15,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
              rotateY: 0,
              transition: { duration: 0.8, delay: index * 0.1 },
            }
          : {}
      }
      whileHover={{ scale: 1.02, z: 10 }}
      className={`relative flex ${
        index % 2 === 0 ? "justify-start" : "justify-end"
      } mb-12`}
    >
      <GlassCard
        className={`max-w-lg p-6 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800  ${
          index % 2 === 0 ? "ml-8" : "mr-8"
        }`}
      >
        <div className="flex items-start gap-4">
          <motion.div
            className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Icon className="w-6 h-6 text-white" />
          </motion.div>
          <div className="flex-1">
            <div className="text-sm text-blue-300 font-medium mb-1">{year}</div>
            <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
            <div className="text-sm text-gray-300 mb-3">{subtitle}</div>
            <p className="text-gray-200 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </GlassCard>
      {!isLast && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-blue-500 to-purple-500" />
      )}
    </motion.div>
  );
};

// --------------------- Stats Counter ---------------------
interface StatCounterProps {
  value: number;
  label: string;
  icon: LucideIcon;
}

const StatCounter: React.FC<StatCounterProps> = ({
  value,
  label,
  icon: Icon,
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === value) clearInterval(timer);
      }, 50);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      whileHover={{ scale: 1.1, y: -5 }}
    >
      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div className="text-3xl font-bold text-white mb-2">{count}+</div>
      <div className="text-sm text-gray-300">{label}</div>
    </motion.div>
  );
};

export default function Resume() {
  const softSkills = [
    { name: "Problem Solving", level: 92 },
    { name: "Communication", level: 88 },
    { name: "Team Collaboration", level: 90 },
    { name: "Time Management", level: 85 },
    { name: "Leadership", level: 78 },
    { name: "Creativity", level: 95 },
  ];

  const experiences = [
    {
      year: "2023 - Present",
      title: "Fullstack Developer",
      subtitle: "Fresher",
      description:
        "Ready to apply my strong foundation in fullstack development, with hands-on experience from personal projects and internships.",
      icon: Code2,
    },
  ];

  const projects = [
    {
      year: "2025",
      title: "Google Drive Clone",
      subtitle: "Full Stack Cloud Storage Application",
      description:
        "Developed a secure and scalable Google Drive clone with React.js, Node.js, and MongoDB. Implemented stateful authentication using Google and GitHub OAuth, with robust session management using secure cookies. Enhanced security through CSP (Content Security Policy), input sanitization, and server-side protection. Features include real-time file upload , access control, and user activity analytics.",
      icon: Server,
    },
    {
      year: "2024",
      title: "URL Shortener",
      subtitle: "Full Stack Application",
      description:
        "Built a scalable url shortener using React.js, Node.js, and MongoDB. Implemented features like authentication, advance analytics, QR code generation, privacy and security.",
      icon: Server,
    },
    {
      year: "2024",
      title: "VS Code Extension",
      subtitle: "VS Code Theme and Extension",
      description:
        "Developed a VS code extension for personal use. It includes a dark theme, a minimalist theme.",
      icon: Code2,
    },
    {
      year: "2023",
      title: "E-commerce Backend",
      subtitle: "Backend Application",
      description:
        "Developed a scalable e-commerce backend using Node.js, Express, MongoDB, and Stripe. Implemented features like authentication, user management, order management, product filter/Searching, inventory management, and real-time updates.",
      icon: Database,
    },
  ];

  return (
    <div className="relative min-h-screenbg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 overflow-hidden">
      <ParticleField />

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <section className="relative z-10 py-20 px-8">
        <GlassCard className="max-w-6xl mx-auto p-12 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCounter value={15} label="Projects Completed" icon={Target} />
            <StatCounter value={3} label="Years Learning" icon={Calendar} />
            <StatCounter value={20} label="Technologies" icon={Zap} />
            <StatCounter value={100} label="Commits This Year" icon={Github} />
          </div>
        </GlassCard>
      </section>

      {/* 3D Timeline */}
      <section className="relative z-10 py-20 px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-black bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Journey Timeline
          </h2>
          <p className="text-xl text-gray-300">
            My professional and project evolution
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto relative">
          {/* Central timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full" />

          {[...experiences, ...projects].map((item, index) => (
            <TimelineItem3D
              key={`${item.title}-${index}`}
              {...item}
              index={index}
              isLast={index === experiences.length + projects.length - 1}
            />
          ))}
        </div>
      </section>
      {/* Skills Constellation */}
      <section className="relative z-10 py-20 px-8 ">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Skills Constellation
          </h2>
          <p className="text-xl text-gray-300">
            Interactive visualization of my capabilities
          </p>
        </motion.div>

        <GlassCard className="max-w-4xl mx-auto p-12 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 justify-items-center">
            {softSkills.map((skill, index) => (
              <SkillOrb
                key={skill.name}
                skill={skill.name}
                level={skill.level}
                index={index}
              />
            ))}
          </div>
        </GlassCard>
      </section>
      {/* Education Section */}
      <section className="relative z-10 py-20 px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Academic Foundation
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <GlassCard className="p-8" delay={0}>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-sm text-green-300 mb-1">2023 - 2026</div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  B.Sc. Computer Science
                </h3>
                <div className="text-gray-300 mb-3">BITS Pilani</div>
                <p className="text-gray-200 text-sm">
                  Focused on Database design, Fullstack Development, Data
                  Structures, OS, Algorithms, and Software Engineering
                  principles.
                </p>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-8" delay={0.2}>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl">
                <Book className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-sm text-blue-300 mb-1">2019 - 2022</div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Diploma in CS
                </h3>
                <div className="text-gray-300 mb-3">
                  Govt. Polytechnic College, Saharsa
                </div>
                <p className="text-gray-200 text-sm">
                  Focused on Computer Science fundamentals, Data Structures,
                  Algorithms, and Software Engineering principles.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative z-10 py-20 px-8">
        <GlassCard className="max-w-4xl mx-auto p-12 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let&apos;s discuss how we can bring your ideas to life
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-full text-white font-semibold shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Project
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-white/20 backdrop-blur-xl rounded-full text-white font-semibold"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.1)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                View Portfolio
              </motion.button>
            </div>
          </motion.div>
        </GlassCard>
      </section>
    </div>
  );
}
