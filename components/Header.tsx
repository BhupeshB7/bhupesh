import React from "react";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
const Header = () => {
  return (
    <header className="w-full h-16 ">
      <div className="container px-2 py-3 md:px-12 flex justify-between items-center">
        <Image
          src="https://ik.imagekit.io/bhupeshb7/logo.png?updatedAt=1732632585099"
          alt="logo"
          width={30}
          height={50}
        />
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
