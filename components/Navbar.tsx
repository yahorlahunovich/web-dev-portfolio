import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full flex flex-row justify-between p-3 fixed top-0 left-0 z-50">
      <div>
        <a href="#home">{/* <Image /> */}Egor Lagunovich</a>
      </div>
      <ul className="flex flex-row gap-5 capitalize">
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#skills">skills</a>
        </li>
        <li>
          <a href="#projects">projects</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
        <li>
          <a>resume</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
