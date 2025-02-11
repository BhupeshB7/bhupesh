"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
  FlaskConical,
} from "lucide-react";
import Head from "next/head";

interface SkillItem {
  name: string;
  icon: React.ReactNode;
}

interface ExpertiseItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const skills: SkillItem[] = [
  {
    name: "JavaScript",
    icon: <Code size={40} className="text-gray-900 dark:text-white" />,
  },
  {
    name: "Node.js",
    icon: <Server size={40} className="text-gray-900 dark:text-white" />,
  },
  {
    name: "Express.js",
    icon: <Package2 size={40} className="text-gray-900 dark:text-white" />,
  },
  {
    name: "MongoDB",
    icon: <Database size={40} className="text-gray-900 dark:text-white" />,
  },
  {
    name: "React.js",
    icon: <Cpu size={40} className="text-gray-900 dark:text-white" />,
  },
  {
    name: "Git",
    icon: <GitBranch size={40} className="text-gray-900 dark:text-white" />,
  },
  {
    name: "Linux",
    icon: <Terminal size={40} className="text-gray-900 dark:text-white" />,
  },
  {
    name: "RDBMS",
    icon: <Database size={40} className="text-gray-900 dark:text-white" />,
  },
  {
    name: "DSA",
    icon: <Settings size={40} className="text-gray-900 dark:text-white" />,
  },
];

const expertiseList: ExpertiseItem[] = [
  {
    title: "Scalable Backend Systems",
    description:
      "Build robust, scalable, and high-performance backend applications.",
    icon: <Server size={30} className="text-primary" />,
  },
  {
    title: "RESTful API Development",
    description: "Develop and integrate RESTful APIs with best practices.",
    icon: <Code size={30} className="text-primary" />,
  },
  {
    title: "Database Optimization",
    description: "Optimize database performance in SQL & NoSQL.",
    icon: <Database size={30} className="text-primary" />,
  },
  {
    title: "Authentication & Security",
    description: "Implement OAuth, JWT, and other security mechanisms.",
    icon: <ShieldCheck size={30} className="text-primary" />,
  },
  {
    title: "Unit Testing & TDD",
    description: "Ensure code quality with unit testing and TDD.",
    icon: <FlaskConical size={30} className="text-primary" />,
  },
  {
    title: "CI/CD Pipelines",
    description: "Automate deployment workflows with CI/CD pipelines.",
    icon: <Settings size={30} className="text-primary" />,
  },
];

export default function About() {
  const imageRef = useRef<HTMLDivElement>(null);
  const expertiseRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const isImageInView = useInView(imageRef, {
    once: true, 
  });
  const isExpertiseInView = useInView(expertiseRef, {
    once: true, 
  });
  const isSkillsInView = useInView(skillsRef, {
    once: true,
  });
  useEffect(() => {
    document.title = "Bhupesh Kumar - Backend Developer";
    const metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Building scalable backend applications with Node.js and Express.js."
      );
    } else {
      const metaTag = document.createElement("meta");
      metaTag.name = "description";
      metaTag.content =
        "Building scalable backend applications with Node.js and Express.js.";
      document.head.appendChild(metaTag);
    }
  }, []);
  const staggerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Head>
        <meta property="og:title" content="Bhupesh Kumar - Backend Developer" />
        <meta
          property="og:description"
          content="Building scalable backend applications with Node.js and Express.js."
        />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/bhupeshb7/skills1.png?updatedAt=1733940909127"
        />
        <meta property="og:type" content="website" />
      </Head>
      <div className="p-6 max-w-4xl mx-auto space-y-12">
        <motion.h1
          className="text-4xl font-extrabold text-center text-gray-900 dark:text-white tracking-tight"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          Backend Developer | Node.js | Express.js
        </motion.h1>

        <motion.p
          className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-center max-w-2xl mx-auto"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          I specialize in building scalable server-side applications with a deep
          understanding of JavaScript (ES6+).
        </motion.p>

        {/* Profile Image with separate inView detection */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isImageInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <Image
            src="https://ik.imagekit.io/bhupeshb7/skills1.png?updatedAt=1733940909127"
            alt="Bhupesh"
            width={500}
            height={300}
            className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
            priority
          />
        </motion.div>

        {/* Expertise Section with staggered animations */}
        <motion.div
          ref={expertiseRef}
          initial="hidden"
          animate={isExpertiseInView ? "visible" : "hidden"}
          variants={staggerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {expertiseList.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative bg-gray-100 dark:bg-white/10 backdrop-blur-lg rounded-lg p-6 shadow-lg border border-gray-300 dark:border-white/20"
            >
              <div className="mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Carousel with separate inView detection */}
        <motion.div
          ref={skillsRef}
          initial="hidden"
          animate={isSkillsInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold text-center text-gray-900 dark:text-white">
            Technical Skills
          </h2>
          <Carousel className="w-full max-w-3xl mx-auto">
            <CarouselPrevious />
            <CarouselContent className="-ml-2">
              {skills.map((skill, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/3 md:basis-1/4 lg:basis-1/6 flex justify-center"
                >
                  <motion.div
                    className="p-4 bg-gray-100 dark:bg-white/10 backdrop-blur-lg rounded-xl shadow-md flex flex-col items-center hover:scale-105 transition-transform duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill.icon}
                    <p className="text-center text-sm font-medium mt-2 text-gray-900 dark:text-white">
                      {skill.name}
                    </p>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
          </Carousel>
        </motion.div>
      </div>
    </>
  );
}
