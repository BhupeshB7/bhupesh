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
      <div className="md:hidden pr-4">
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
      <nav className="hidden md:flex space-x-4 rounded-bl-2xl rounded-tr-xl border">
        {tabs.map((tab) => (
          <motion.button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer p-4 opacity-75 hover:opacity-100 transition-all
              ${activeTab === tab ? "text-green-500" : "text-gray-500"}
              `}
            whileHover={{
              scale: 0.9,
              boxShadow: "rgba(50, 50, 93, 0.25) 0 2px 5px ",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </motion.button>
        ))}
      </nav>
    </>
  );
};

export default Tab;