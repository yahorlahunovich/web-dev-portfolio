"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { logo } from "@/public/assets/icons";

type HeaderProps = {
  isBurgerClicked: boolean;
  burgerToggle(a: boolean): void;
};

const Header = ({ isBurgerClicked, burgerToggle }: HeaderProps) => {
  const [animateHeader, setAnimateHeader] = useState(false);
  let scroll = window.scrollY;
  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 70) {
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
      className={`text-white fixed top-0 left-0 z-50 w-full flex flex-row items-center justify-between py-6 px-4 lg:px-32 ${
        animateHeader
          ? "transition-all border-b-[3px] border-mainWhite bg-neutrals-900/90 backdrop-blur-md supports-[backdrop-filter]:bg-neutrals-900/50 mt-0 duration-500"
          : "mt-8"
      }`}
    >
      <div>
        <a
          href="#home"
          className="flex flex-row  items-center gap-2 uppercase text-xl font-bold hover:text-mainYellow"
        >
          <Image src={logo} alt="my face" width={30} />
        </a>
      </div>
      <nav className={"hidden lg:flex flex-row"}>
        <ul className="flex flex-row gap-5 uppercase">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`/#${link}`}
                className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://documentcloud.wondershare.com/clientShare/review/bpcFVoayn8Msp0rtjRcN4bZD5KS4F1dBOOQ7wDa7hDkEQKBkj-oswlRDJ4cJzJPtGrkUPF9f1HjZlDLEnsWRIQ"
              target="_blank"
              className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center cursor-pointer"
            >
              resume
            </a>
          </li>
        </ul>
      </nav>
      <div
        className="space-y-2 lg:hidden block"
        onClick={(prev) => burgerToggle(!prev)}
      >
        <div className="w-8 h-0.5 bg-white"></div>
        <div className="w-8 h-0.5 bg-white"></div>
        <div className="w-8 h-0.5 bg-white"></div>
      </div>
    </header>
  );
};

export default Header;
