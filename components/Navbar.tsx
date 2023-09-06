"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [animateHeader, setAnimateHeader] = useState(false);
  let scroll = window.scrollY;
  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 140) {
        setAnimateHeader(true);
      } else setAnimateHeader(false);
    };
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, [scroll]);

  const navLinks = ["about", "skills", "projects", "contact"];

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full flex flex-row items-center justify-between p-3 px-32 ${
        animateHeader ? "transition-all" : ""
      }`}
    >
      <div>
        <a href="#home" className="uppercase">
          {/* <Image /> */}Egor Lagunovich
        </a>
      </div>
      <nav className={"flex flex-row"}>
        <ul className="flex flex-row gap-5 uppercase">
          {navLinks.map((link) => (
            <li>
              <a
                href={`#${link}`}
                className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-mainWhite after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <a>resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
