"use client";
import dynamic from "next/dynamic";
import { FC } from "react";

const Typewriter = dynamic(() => import("typewriter-effect"), {
  ssr: false,
});
const TypewriterHeader:FC = () => {
  return (
    <div className="mx-auto text-center opacity-75 dark:opacity-75 rounded-lg  w-full">
      <Typewriter
        options={{
          strings: ["Fullstack Developer", "Backend Developer"],
          autoStart: true,
          loop: true,  
          delay: 75,  
          deleteSpeed: 20,  
        }}
      />
    </div>
  );
};

export default TypewriterHeader;
