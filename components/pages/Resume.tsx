import React, { FC } from "react";
import { motion } from "framer-motion";
import { 
  Book, 
  Briefcase, 
  Code2, 
  Award,
  GraduationCap,
  Terminal,
  Github,
  Database,
  Monitor,
  Server
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 }
  }
};
interface TimelineItemProps {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}
const SkillBar = ({ skill, level }: { skill: string; level: number }) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(level), 500);
    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div className="space-y-2">
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
  icon: Icon 
}) => (
  <motion.div 
    variants={itemVariants}
    className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-700 last:border-0"
  >
    <div className="absolute left-[-9px] p-1 bg-white dark:bg-zinc-900 rounded-full border-2 border-primary">
      <Icon className="w-4 h-4 text-primary" />
    </div>
    <div className="mb-1 text-sm text-gray-500 dark:text-gray-400">{year}</div>
    <h3 className="text-lg font-semibold">{title}</h3>
    <div className="text-sm text-gray-600 dark:text-gray-300">{subtitle}</div>
    <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
  </motion.div>
);


export default function Resume() {
  const technicalSkills = [
    { name: "JavaScript/TypeScript", level: 90 },
    { name: "React/Next.js", level: 85 },
    { name: "Node.js/Express", level: 88 },
    { name: "MongoDB/SQL", level: 82 },
    { name: "HTML/CSS/Tailwind", level: 95 },
    { name: "Git/Version Control", level: 85 }
  ];

  const softSkills = [
    { name: "Problem Solving", level: 92 },
    { name: "Communication", level: 88 },
    { name: "Team Collaboration", level: 90 },
    { name: "Time Management", level: 85 }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="p-6 space-y-12"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Professional Resume</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Fullstack Developer specializing in modern web technologies and scalable applications.
        </p>
      </motion.div>

      {/* Education */}
      <motion.div variants={itemVariants} className="space-y-6">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-semibold">Education</h2>
        </div>
        <div className="space-y-6">
          <TimelineItem
            year="2020 - 2024"
            title="B.E. Computer Science"
            subtitle="BITS Pilani"
            description="Focused on Computer Science fundamentals, Data Structures, Algorithms, and Software Engineering principles. Participated in various technical competitions and hackathons."
            icon={Book}
          />
        </div>
      </motion.div>

      {/* Experience */}
      <motion.div variants={itemVariants} className="space-y-6">
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
          <TimelineItem
            year="Summer 2023"
            title="Software Development Intern"
            subtitle="Tech Startup"
            description="Developed and maintained web applications using React.js and Node.js. Implemented new features and optimized existing codebase for better performance."
            icon={Terminal}
          />
        </div>
      </motion.div>

      {/* Technical Skills */}
      <motion.div variants={itemVariants} className="space-y-6">
        <div className="flex items-center gap-2">
          <Monitor className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-semibold">Technical Skills</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {technicalSkills.map((skill) => (
            <SkillBar key={skill.name} skill={skill.name} level={skill.level} />
          ))}
        </div>
      </motion.div>

      {/* Soft Skills */}
      <motion.div variants={itemVariants} className="space-y-6">
        <div className="flex items-center gap-2">
          <Award className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-semibold">Soft Skills</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {softSkills.map((skill) => (
            <SkillBar key={skill.name} skill={skill.name} level={skill.level} />
          ))}
        </div>
      </motion.div>

      {/* Key Projects */}
      <motion.div variants={itemVariants} className="space-y-6">
        <div className="flex items-center gap-2">
          <Github className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-semibold">Key Projects</h2>
        </div>
        <div className="space-y-6">
          <TimelineItem
            year="2023"
            title="E-commerce Platform"
            subtitle="Full Stack Application"
            description="Built a scalable e-commerce platform using Next.js, Node.js, and MongoDB. Implemented features like authentication, payment integration, and real-time inventory management."
            icon={Server}
          />
          <TimelineItem
            year="2023"
            title="Social Media Dashboard"
            subtitle="Frontend Application"
            description="Developed a responsive dashboard using React and TailwindCSS. Integrated multiple APIs and implemented real-time data visualization using Chart.js."
            icon={Database}
          />
        </div>
      </motion.div>

      {/* Certifications */}
      <motion.div variants={itemVariants} className="space-y-6">
        <div className="flex items-center gap-2">
          <Award className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-semibold">Certifications</h2>
        </div>
        <div className="space-y-6">
          <TimelineItem
            year="2023"
            title="AWS Cloud Practitioner"
            subtitle="Amazon Web Services"
            description="Fundamental understanding of AWS Cloud services, security, and architecture principles."
            icon={Award}
          />
          <TimelineItem
            year="2023"
            title="Meta Frontend Developer"
            subtitle="Meta (Facebook)"
            description="Comprehensive training in modern frontend development practices and frameworks."
            icon={Award}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}