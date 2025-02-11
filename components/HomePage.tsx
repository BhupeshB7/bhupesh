"use client";

import { useState } from "react";
import { usePathname} from "next/navigation";
import Sidebar from "./Sidebar";
import Content from "./Content"; 
const HomePage = () => {
  const pathname = usePathname();
  const tabRoutes = ["about", "resume", "portfolio", "contact"];

  const getActiveTabFromPath = () => {
    const currentTab = pathname.replace("/", "") || "about";
    return tabRoutes.includes(currentTab) ? currentTab : "about";
  };

  const [activeTab, setActiveTab] = useState<string>(getActiveTabFromPath());

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-zinc-950 py-2">
      <div className="container mx-auto flex flex-col md:flex-row items-stretch justify-center px-4 lg:px-8 xl:px-12 gap-6">
        <Sidebar />
        <Content activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </main>
  );
};

export default HomePage;
