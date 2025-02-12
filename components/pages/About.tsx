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
  Layout,
  Brain,
} from "lucide-react";
import Head from "next/head";
import { SkillsIcon } from "../SkillsIcon";

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
    title: "Backend Development",
    description:
      "Build scalable and high-performance backend systems with Node.js & Express.",
    icon: <Server size={30} className="text-primary" />,
  },
  {
    title: "API Development and CI/CD",
    description:
      "Develop RESTful  APIs with best practices, Automate deployment workflows with CI/CD pipelines",
    icon: <Code size={30} className="text-primary" />,
  },
  {
    title: "Database Management",
    description: "Work with SQL (PostgreSQL, MySQL) & NoSQL (MongoDB).",
    icon: <Database size={30} className="text-primary" />,
  },
  {
    title: "Authentication & Security",
    description:
      "Implement secure authentication using JWT, OAuth, and bcrypt.",
    icon: <ShieldCheck size={30} className="text-primary" />,
  },
  {
    title: "Frontend Development",
    description:
      "Build dynamic and responsive UIs using React, Next.js, and Tailwind CSS.",
    icon: <Layout size={30} className="text-primary" />,
  },
  {
    title: "Problem Solving & Algorithms",
    description: "Solve problems efficiently using DSA & algorithms.",
    icon: <Brain size={30} className="text-primary" />,
  },
  {
    title: "Version Control & Deployment",
    description: "Manage code with Git/GitHub and deploy using CI/CD & Nginx.",
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
      <div className="p-3 max-w-4xl mx-auto space-y-6">
        <motion.h1
          className="text-2xl md:text-4xl  font-extrabold text-center text-gray-900 dark:text-white tracking-tight"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          Fullstack Developer | Node.js
        </motion.h1>

        <motion.p
          className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-center max-w-full mx-auto"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          I specialize in scalable backend development using Node.js, Express,
          PostgreSQL, and MongoDB. With strong expertise in JavaScript (ES6+),
          TypeScript, and Next.js, I build efficient APIs, authentication
          systems, and database-driven applications. I also have solid frontend
          skills in React, Next.js, and Tailwind CSS, allowing me to create
          dynamic and responsive UIs. Experienced in problem-solving,
          algorithms, Git/GitHub, and CI/CD, I focus on writing clean,
          maintainable, and high-performance code.
        </motion.p>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <SkillsIcon />
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
        </div>

        <motion.div
          ref={expertiseRef}
          initial="hidden"
          animate={isExpertiseInView ? "visible" : "hidden"}
          variants={staggerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 "
        >
          {expertiseList.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative bg-gray-50 dark:bg-white/10 backdrop-blur-lg rounded-lg p-6 shadow-lg border border-gray-300 dark:border-white/20"
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
          <Carousel className=" w-[85%] md:w-full md:max-w-3xl mx-auto">
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
