"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import { XMarkSvg, burgerSvg, logo } from "@/public/assets/icons";

const Header = () => {
  const [animateHeader, setAnimateHeader] = useState(false);
  const [isBurgerClicked, setIsBurgerClicked] = useState(false);
  let scroll = window.scrollY;
  const changeBurger = () => {
    if (isBurgerClicked) setIsBurgerClicked(false);
    if (window.scrollY < 70) setAnimateHeader(false)
  };
  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 70) {
        setAnimateHeader(true);
        setIsBurgerClicked(false);
      } else setAnimateHeader(false);
    };
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, [scroll]);
  let widthMatch = window.matchMedia("(min-width: 500px)");
  window.addEventListener("scroll", changeBurger);
  widthMatch.addEventListener("change", changeBurger);
  const navLinks = ["about", "skills", "projects", "contact"];
  const burgerToggle = () => {
    setIsBurgerClicked(!isBurgerClicked);
    if (animateHeader === false) setAnimateHeader(true);
  };
  const MobileNavbar = () => {
    return (
      <nav
        className="w-full text-center flex flex-col uppercase gap-12 text-xl mt-12 transition-all duration-300"
        onBlur={() => setIsBurgerClicked(false)}
      >
        {navLinks.map((link) => (
          <Link
            key={link}
            onClick={() => setIsBurgerClicked(false)}
            to={`${link}`}
            spy={true}
            smooth={true}
            offset={-30}
            duration={500}
            className="relative cursor-pointer w-full inline-block hover:scale-x-100 after:transition after:duration-500 after:origin-center"
          >
            {link}
          </Link>
        ))}
        <a
          href="https://documentcloud.wondershare.com/clientShare/review/bpcFVoayn8Msp0rtjRcN4bZD5KS4F1dBOOQ7wDa7hDkEQKBkj-oswlRDJ4cJzJPtGrkUPF9f1HjZlDLEnsWRIQ"
          target="_blank"
          className="relative cursor-pointer w-full inline-block hover:scale-x-100 after:transition after:duration-300 after:origin-center"
        >
          resume
        </a>
      </nav>
    );
  };

  return (
    <header
      className={`text-white fixed top-0 left-0 z-50 w-full flex items-center justify-between py-6 px-4 lg:px-32 ${
        animateHeader
          ? "transition-all border-b-[3px] border-mainWhite bg-neutrals-900/90 backdrop-blur-md supports-[backdrop-filter]:bg-neutrals-900/50 mt-0 duration-500"
          : "mt-8"
      } ${isBurgerClicked ? "flex-col" : "flex-row"}`}
    >
      <div className="w-full items-center flex flex-row justify-between">
        <div className="flex flex-row justify-between">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="cursor-pointer flex flex-row  items-center gap-2 uppercase text-xl font-bold hover:text-mainYellow"
          >
            <Image src={logo} alt="my face" width={30} />
          </Link>
        </div>
        <nav className={`sm:flex top-12 sm:flex-row gap-4 uppercase hidden `}>
          {navLinks.map((link) => (
            <Link
              key={link}
              to={`${link}`}
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
              className="relative cursor-pointer w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            >
              {link}
            </Link>
          ))}

          <a
            href="https://documentcloud.wondershare.com/clientShare/review/bpcFVoayn8Msp0rtjRcN4bZD5KS4F1dBOOQ7wDa7hDkEQKBkj-oswlRDJ4cJzJPtGrkUPF9f1HjZlDLEnsWRIQ"
            target="_blank"
            className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center cursor-pointer"
          >
            resume
          </a>
        </nav>
        <div className="sm:hidden block cursor-pointer" onClick={burgerToggle}>
          {isBurgerClicked ? (
            <Image src={XMarkSvg} alt="x icon" />
          ) : (
            <Image src={burgerSvg} alt="3 bars icon" />
          )}
        </div>
      </div>
      {isBurgerClicked && <MobileNavbar />}
    </header>
  );
};

export default Header;
