import React from "react";
import { motion } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TabProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Tab: React.FC<TabProps> = ({ activeTab, setActiveTab }) => {
  const tabs = ["about", "resume", "portfolio", "contact"];

  return (
    <>
      {/* Mobile Select */}
      <div className="md:hidden pr-4 ">
        <Select value={activeTab} onValueChange={setActiveTab}>
          <SelectTrigger className="w-[140px] capitalize bg-transparent border-gray-300 dark:border-gray-700">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {tabs.map((tab) => (
              <SelectItem key={tab} value={tab} className="capitalize">
                {tab}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Desktop Tabs */}
     <nav className="hidden md:flex space-x-4 border border-gray-300 dark:border-gray-700 rounded-tr-xl rounded-bl-2xl overflow-hidden">
  {tabs.map((tab, index) => {
    const isActive = activeTab === tab;
    const isFirst = index === 0;
    const isLast = index === tabs.length - 1;

    return (
      <motion.button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`relative p-4 text-sm md:text-base transition-all duration-300 
          ${isActive ? "text-white" : "text-gray-500 dark:text-gray-400 hover:text-green-500"}
          ${isFirst && isActive ? "rounded-bl-2xl" : ""}
          ${isLast && isActive ? "rounded-br-2xl" : ""}
        `}
        whileHover={{
          scale: 0.96,
          boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
        }}
        whileTap={{ scale: 0.93 }}
        transition={{ duration: 0.3 }}
      >
        <span className="relative z-10">
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </span>

        {/* Bottom active border */}
        {isActive && (
          <span
            className={`absolute bottom-0 left-0 w-full h-[2.4px] 
              bg-gradient-to-r from-green-400 via-lime-400 to-green-600 shadow-2xl
              ${isFirst ? "rounded-bl-2xl" : ""}
              ${isLast ? "rounded-br-2xl" : ""}
            `}
          />
        )}
      </motion.button>
    );
  })}
</nav>

    </>
  );
};

export default Tab;