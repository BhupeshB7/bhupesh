import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  category: "Frontend" | "Backend" | "Fullstack" | "Vs Code" | "AI / Fullstack";
  image: string;
  githubLink: string;
  liveLink: string;
  technologies: string[];
}

// Dummy data
const dummyProjects: Project[] = [
  {
    id: 1,
    title: "Google drive clone",
    description:
      "Developed a secure and scalable Google Drive clone with React.js, Node.js, and MongoDB. Implemented stateful authentication using Google and GitHub OAuth, with robust session management using secure cookies. Enhanced security through CSP (Content Security Policy), input sanitization, and server-side protection. Features include real-time file upload , access control, and user activity analytics.",
    category: "Fullstack",
    image:
      "https://ik.imagekit.io/bhupeshb7/google-drive.png?updatedAt=1753180230748",
    githubLink: "https://github.com/BhupeshB7/hackathon-backend",
    liveLink: "https://github.com/BhupeshB7/advance_EcommerceBackend",
    technologies: ["React","Node.js", "Express", "Cloudinary", "MongoDB","Redis"],
  },
  {
  id: 2,
  title: "DSA & System Design Helper + AI Website Builder",
  description:
    "Built an AI-powered web app that allows users to generate and deploy full-stack websites to Vercel using natural language prompts. Includes a DSA and System Design helper with editable code templates, real-time explanations, and visual diagrams. Features live code editing, version history, secure deployments, and custom domain support—perfect for developers and interview preparation.",
  category: "AI / Fullstack",
  image:
    "https://ik.imagekit.io/bhupeshb7/Screenshot%202025-07-22%20190539.png?updatedAt=1753191367102",  
  githubLink: "https://github.com/BhupeshB7",  
  liveLink: "https://coderarmy-ai.netlify.app/", 
  technologies: ["React.js", "Gemini", "Vercel", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
},
  
  {
    id: 3,
    title: "Url Shortener",
    description:
      " Built a scalable url shortener using Next.js, Node.js, and MongoDB. Implemented features like authentication, advance analytics, QR code generation, privacy and security.",
    category: "Fullstack",
    image:
      "https://ik.imagekit.io/bhupeshb7/Screenshot%202025-02-12%20000049.png?updatedAt=1739298717048",
    githubLink: "https://github.com/BhupeshB7/urlshortner_backend",
    liveLink: "https://shortenx.netlify.app",
    technologies: ["React", "TailwindCSS", "Chart.js"],
  },
  {
    id: 4,
    title: "E-commerce Backend",
    description:
      "Developed a scalable e-commerce backend using Node.js, Express, MongoDB, and Stripe. Implemented features like authentication, user management,order management, product filter/Searching , inventory management, and real-time updates.",
    category: "Backend",
    image:
      "https://ik.imagekit.io/bhupeshb7/google-drive-clone?updatedAt=1753179574193",
    githubLink: "https://github.com/BhupeshB7/advance_EcommerceBackend",
    liveLink: "https://github.com/BhupeshB7/advance_EcommerceBackend",
    technologies: ["Node.js", "Express", "Cloudinary", "MongoDB"],
  },
  {
    id: 5,
    title: "VS Code Extension",
    description:
      "Developed a VS code extension for personal use. It includes a dark theme, a minimalist theme.",
    category: "Vs Code",
    image:
      "https://github.com/BhupeshB7/vscode-theme/raw/HEAD/bg.png",
    githubLink: "https://github.com/BhupeshB7/vscode-theme",
    liveLink: "https://marketplace.visualstudio.com/items?itemName=BhupeshB7.bhupeshb7-coder-dark-theme",
    technologies: ["VS Code"],
  },
  {
    id: 6,
    title: "Blog Web Apps",
    description:
      "Built a scalable blog web app using React js, Node.js, and MongoDB. Implemented features like authentication, user management using Clerk, CRUD operations, and real-time updates ,for caching use react-query,",
    category: "Backend",
    image:
      "https://ik.imagekit.io/bhupeshb7/Screenshot%202025-02-12%20000126.png?updatedAt=1739298717005",
    githubLink: "https://github.com/BhupeshB7/blog_backend",
    liveLink: "https://blogb71.netlify.app",
    technologies: ["Node.js", "Express", "Cloudinary", "MongoDB"],
  },
];

const Portfolio = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  const filteredProjects = dummyProjects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "ALL" || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Calculate pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
         
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Explore my latest projects and technical achievements
        </p>
      </div>

      {/* Filter and Search Section */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
          <Input
            placeholder="Search projects..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full sm:w-40">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ALL">All Projects</SelectItem> 
            <SelectItem value="Backend">Backend</SelectItem>
            <SelectItem value="Fullstack">Fullstack</SelectItem>
            <SelectItem value="Vs Code">Vs Code</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {currentProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className="group relative rounded-xl overflow-hidden shadow-lg  bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800"
          >
            <Image
              src={project.image}
              alt={project.title}
              className=" h-48 object-cover"
              width={500}
              height={192}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <Github className="h-6 w-6 text-white" />
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <ExternalLink className="h-6 w-6 text-white" />
              </a>
            </div>

            {/* Content */}
            <div className="p-6 space-y-3">
              <span className="text-sm font-medium px-2.5 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                {project.category}
              </span>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Pagination */}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className={
                currentPage === 1 ? "pointer-events-none opacity-50" : ""
              }
            />
          </PaginationItem>
          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                onClick={() => setCurrentPage(index + 1)}
                isActive={currentPage === index + 1}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              className={
                currentPage === totalPages
                  ? "pointer-events-none opacity-50"
                  : ""
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default Portfolio;
