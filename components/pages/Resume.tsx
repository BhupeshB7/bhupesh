import React, { FC } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  Book,
  Briefcase,
  Code2,
  Award,
  GraduationCap,
  Github,
  Database,
  Server,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

// AnimatedSection component to handle scroll-based animations
const AnimatedSection = ({ children, className = "" }:React.PropsWithChildren<{className?: string}>) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            staggerChildren: 0.2,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface TimelineItemProps {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const SkillBar = ({ skill, level }: { skill: string; level: number }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setProgress(level), 500);
      return () => clearTimeout(timer);
    } else {
      setProgress(0);
    }
  }, [isInView, level]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between">
        <span className="text-sm font-medium">{skill}</span>
        <span className="text-sm text-gray-500">{level}%</span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  );
};

const TimelineItem: FC<TimelineItemProps> = ({
  year,
  title,
  subtitle,
  description,
  icon: Icon,
}) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, x: -20 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5 },
      },
    }}
    className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-700 last:border-0"
  >
    <div className="absolute left-[-14px] p-1 bg-white dark:bg-zinc-900 rounded-full border-2 border-primary">
      <Icon className="w-4 h-4 text-primary" />
    </div>
    <div className="mb-1 text-sm text-gray-500 dark:text-gray-400">{year}</div>
    <h3 className="text-lg font-semibold">{title}</h3>
    <div className="text-sm text-gray-600 dark:text-gray-300">{subtitle}</div>
    <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
  </motion.div>
);

export default function Resume() {
  const softSkills = [
    { name: "Problem Solving", level: 92 },
    { name: "Communication", level: 88 },
    { name: "Team Collaboration", level: 90 },
    { name: "Time Management", level: 85 },
  ];

  return (
    <div className="p-6 space-y-12">
      {/* Header */}
      <AnimatedSection>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Fullstack Developer specializing in modern web technologies and
          scalable applications.
        </p>
      </AnimatedSection>

     
      {/* Experience */}
      <AnimatedSection className="space-y-6">
        <div className="flex items-center gap-2">
          <Briefcase className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-semibold">Experience</h2>
        </div>
        <div className="space-y-6">
          <TimelineItem
            year="2023 - Present"
            title="Fullstack Developer"
            subtitle="Fresher"
            description="Ready to apply my strong foundation in fullstack development, with hands-on experience from personal projects and internships."
            icon={Code2}
          />
        </div>
      </AnimatedSection>

      {/* Internships */}
      <AnimatedSection className="space-y-6">
        <div className="flex items-center gap-2">
          <Briefcase className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-semibold">Internships</h2>
        </div>
        <div className="space-y-6">
          <TimelineItem
            year="2022"
            title="Internship at Edureka"
            subtitle="Fullstack Developer"
            description="Participated in a full-stack development project, focusing on user authentication, REST APIs Design, and payment Integration. Developed a robust and scalable application using React js, Node.js, and MongoDB(Zomate clone)."
            icon={Code2}
          />
        </div>
      </AnimatedSection>

      {/* Key Projects */}
      <AnimatedSection className="space-y-6">
        <div className="flex items-center gap-2">
          <Github className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-semibold">Key Projects</h2>
        </div>
        <div className="space-y-6">
          <TimelineItem
            year="2024"
            title="Url Shortener"
            subtitle="Full Stack Application"
            description="Built a scalable url shortener using Next.js, Node.js, and MongoDB. Implemented features like authentication, advance analytics, QR code generation, privacy and security."
            icon={Server}
          />
          <TimelineItem
            year="2024"
            title="VS Code Extension"
            subtitle="Vs code theme and extension"
            description="Developed a VS code extension for personal use. It includes a dark theme, a minimalist theme."
            icon={Code2}
          />
          <TimelineItem
            year="2023"
            title="E - commerce Backend"
            subtitle="Backend Application"
            description="Developed a scalable e-commerce backend using Node.js, Express, MongoDB, and Stripe. Implemented features like authentication, user management, order management, product filter/Searching, inventory management, and real-time updates."
            icon={Database}
          />
        </div>
      </AnimatedSection>
       {/* Education */}
      <AnimatedSection className="space-y-6">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-semibold">Education</h2>
        </div>
        <div className="space-y-6">
          <TimelineItem
            year="2023 - 2026"
            title="B.Sc. in Computer Science"
            subtitle="BITS Pilani"
            description="Focused on Database design, Fullstack Development, Data Structures, OS, Algorithms, and Software Engineering principles."
            icon={Book}
          />
          <TimelineItem
            year="2019 - 2022"
            title="Diploma in Computer Science"
            subtitle="Govt. Polytechnic College, Saharsa"
            description="Focused on Computer Science fundamentals, Data Structures, Algorithms, and Software Engineering principles."
            icon={Book}
          />
        </div>
      </AnimatedSection>

      {/* Certifications */}
      <AnimatedSection className="space-y-6">
        <div className="flex items-center gap-2">
          <Award className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-semibold">Certifications</h2>
        </div>
        <div className="space-y-6">
          <TimelineItem
            year="2024"
            title="React Native"
            subtitle="Certified from Udemy"
            description="Learned React Native from Udemy. Developed a mobile application using React Native."
            icon={Award}
          />
          <TimelineItem
            year="2024"
            title="React js"
            subtitle="Certified from Udemy"
            description="Learned React js from Udemy. Developed a web application using React js."
            icon={Award}
          />
        </div>
      </AnimatedSection>

      {/* Soft Skills */}
      <AnimatedSection className="space-y-6">
        <div className="flex items-center gap-2">
          <Award className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-semibold">Soft Skills</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {softSkills.map((skill) => (
            <SkillBar key={skill.name} skill={skill.name} level={skill.level} />
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}