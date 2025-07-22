import Image from "next/image";
import React from "react";
import { motion} from "framer-motion";
import { 
  House, 
  Mail, 
  Phone, 
  Linkedin, 
  Twitter, 
  Github,
  ChevronDown 
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TypewriterHeader from "./TypeWritterHeader";

const contactInfo = [
  { name: "Email", value: "b29.bhupesh@gmail.com", icon: Mail, link: "mailto:b29.bhupesh@gmail.com" },
  { name: "Contact", value: "+91 8581869783", icon: Phone, link: "tel:+918581869783" },
  { name: "Home", value: "Patna", icon: House, link: "https://www.google.com/maps?q=Patna" },
];

const socialMedia = [
  { name: "LinkedIn", icon: Linkedin, link: "https://www.linkedin.com/in/bhupeshb7" },
  { name: "Twitter", icon: Twitter, link: "https://twitter.com/bhupeshb7" },
  { name: "GitHub", icon: Github, link: "https://github.com/bhupeshb7" },
];

const animationVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  exit: { opacity: 0, scale: 0.9, y: -50 },
};

const MobileContent = ({   }) => {
  return (
    <div className="md:hidden w-full ">
      <div className="flex items-center gap-4 p-4">
        <Image
          src="https://ik.imagekit.io/bhupeshb7/img_CiOKjIdaPH.jpg?updatedAt=1732775938887"
          alt="Bhupesh Kumar"
          width={60}
          height={60}
          className="rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
        />
        <div>
          <h1 className="text-xl font-bold text-gray-900 dark:text-green-400">
            Bhupesh Kumar
          </h1>
          <TypewriterHeader />
        </div>
        <Dialog>
          <DialogTrigger asChild className="max-w-[90%] sm:max-w-[400px] rounded-xl">
            <button className="ml-auto p-2 rounded-full hover:bg-green-500 dark:hover:bg-green-400">
              <ChevronDown className="w-6 h-6" />
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-[90%] sm:max-w-[400px] rounded-xl  bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800">
            <DialogHeader>
              <DialogTitle className="text-center">Profile Details</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-center gap-6 p-4">
              <Image
                src="https://ik.imagekit.io/bhupeshb7/img_CiOKjIdaPH.jpg?updatedAt=1732775938887"
                alt="Bhupesh Kumar"
                width={120}
                height={120}
                className="rounded-full object-cover border-4 border-gray-200 dark:border-gray-700"
              />
              
              <div className="w-full space-y-6">
                {/* Contact Info */}
                <div className="space-y-3">
                  {contactInfo.map(({ name, value, icon: Icon, link }) => (
                    <motion.a
                      key={name}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 py-2 text-gray-800 dark:text-gray-100 font-medium hover:text-green-500 transition"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className=" bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 text-gray-600 dark:text-gray-500 rounded-lg p-2 border border-gray-300 dark:border-gray-700">
                        <Icon className="w-4 h-4" />
                      </span>
                      {value}
                    </motion.a>
                  ))}
                </div>

                <div>
                  <h6 className="text-sm font-semibold text-gray-400 dark:text-gray-500 mb-3">
                    Connect with Me
                  </h6>
                  <div className="flex flex-row gap-4 justify-center">
                    {socialMedia.map(({ name, icon: Icon, link }) => (
                      <motion.a
                        key={name}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 py-1 text-gray-800 dark:text-gray-100 text-sm hover:text-green-500 transition"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Icon className="w-5 h-5" />
                        {name}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

const DesktopSidebar = () => {
  return (
    <motion.div
      variants={animationVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="hidden max-h-[700px] md:flex flex-col gap-6 w-full md:w-[30%]   p-8 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-lg dark:shadow-md"
    >
      <motion.div whileHover={{ scale: 1.1 }}>
        <Image
          src="https://ik.imagekit.io/bhupeshb7/img_CiOKjIdaPH.jpg?updatedAt=1732775938887"
          alt="Bhupesh Kumar"
          width={150}
          height={150}
          className="rounded-full object-cover mx-auto border-4 border-gray-200 dark:border-gray-700"
        />
      </motion.div>

      <motion.h1 
        className="text-3xl font-bold text-center text-gray-900 dark:text-green-400"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Bhupesh Kumar
      </motion.h1>

      <TypewriterHeader />

      <motion.hr
        className="border-gray-300 dark:border-gray-600 w-[90%] mx-auto"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      />

      <motion.div 
        className="flex flex-col text-center p-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {contactInfo.map(({ name, value, icon: Icon, link }) => (
          <motion.a
            key={name}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 py-2 text-gray-800 dark:text-gray-100 font-medium hover:text-green-500 transition"
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 text-gray-600 dark:text-gray-500 rounded-lg p-3 border border-gray-300 dark:border-gray-700 transition transform hover:scale-110 hover:shadow-md dark:hover:shadow-lg">
              <Icon className="w-5 h-5" />
            </span>
            {value}
          </motion.a>
        ))}
      </motion.div>

      <motion.h6 
        className="text-sm font-semibold text-gray-400 dark:text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        Connect with Me
      </motion.h6>

      <motion.div 
        className="flex flex-row gap-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        {socialMedia.map(({ name, icon: Icon, link }) => (
          <motion.a
            key={name}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 py-1 text-gray-800 dark:text-gray-100 text-sm hover:text-green-500 transition"
            whileHover={{ scale: 1.1 }}
          >
            <Icon className="w-5 h-5" />
            {name}
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
};

const Sidebar = () => {
  return (
    <>
      <MobileContent />
      <DesktopSidebar />
    </>
  );
};

export default Sidebar;