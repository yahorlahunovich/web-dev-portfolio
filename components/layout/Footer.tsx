import { social_media_links } from "@/constants";
import { arrowUpSvg } from "@/public/assets/icons";
import Image from "next/image";
import { Link } from "react-scroll";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-10 justify-center items-center font-mono bg-black text-sm text-white py-20 p-4 text-center">
      <Link to="home" spy={true} smooth={true} offset={-50} duration={500}>
        <Image
          src={arrowUpSvg}
          width={20}
          className="cursor-pointer hover:-translate-y-1  duration-200"
          alt="arrowUp"
        />
      </Link>
      <div className="flex flew-row gap-8 justify-center items-center">
        {social_media_links.map((link) => (
          <a
            href={link.src}
            target="_blank"
            key={link.name}
            className="hover:-translate-y-1  duration-200"
          >
            <Image src={link.iconSrc} alt={link.name} width={40} />
          </a>
        ))}
      </div>

      <div className="w-full flex flex-col justify-center items-center">
        <hr className=" border-[#CDCFCC] w-2/3 mb-3" />
        <div className="text-[#CDCFCC]">
          <span className="text-sm">© 2023 - Developed by</span>{" "}
          <a href="/" className="hover:text-mainYellow">
            Egor Lagunovich
          </a>
        </div>
        <div className="mt-2">
          <a
            href="https://github.com/egorlagunovich/portfolio"
            className="text-[#CDCFCC] hover:text-white"
          >
            Source Code
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
