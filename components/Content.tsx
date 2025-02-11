import React from "react";
import Tab from "./Tab";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

interface ContentProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Content: React.FC<ContentProps> = ({ activeTab, setActiveTab }) => {
  return (
    <section className="w-full md:w-[66.66%] lg:w-[70%] xl:w-[72%] bg-white dark:bg-zinc-900 border rounded-xl shadow-md min-h-[300px]">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-xl md:text-2xl font-bold capitalize">
          {activeTab}
        </h1>

        <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      
      <div className="border-green-600 dark:border-green-400 w-16 md:w-20 ml-4 border border-b-8 rounded-xl" />

      <div className="p-4">
        {activeTab === "about" && <About />}
        {activeTab === "resume" && <Resume />}
        {activeTab === "portfolio" && <Portfolio />}
        {activeTab === "contact" && <Contact />}
      </div>
    </section>
  );
};

export default Content;