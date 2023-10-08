import { link } from "fs";
import React from "react";

type ButtonProps = {
  link: string;
  name: string;
};
const Button = ({ link, name }: ButtonProps) => {
  return (
    <a
      href={link}
      target="_blank"
      className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-white rounded-full shadow-md group text-sm lg:text-lg"
    >
      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="#FED766"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </span>
      <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
        {name}
      </span>
      <span className="relative invisible">{name}</span>
    </a>
  );
};

export default Button;
