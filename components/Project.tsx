import { ProjectsType } from "@/types";
import Image from "next/image";
import React from "react";

type ProjectProps = {
  project: ProjectsType;
};

const Project = ({ project }: ProjectProps) => {
  const { title, desc, tools, link, img } = project;
  return (
    <div className="flex flex-row text-xl justify-center items-center px-32 m-10">
      <div className="w-1/2">
        <Image src={img} alt={title} />
      </div>
      <div className="flex flex-col justify-center items-center w-1/2">
        <h2 className="text-3xl font-bold text-darkGreen">{title}</h2>
        <p>{desc}</p>
        <h3>Development tools:</h3>
        <ul className="flex flex-row gap-3 flex-wrap">
          {tools.map((tool) => (
            <li className="p-3 bg-gray-300 rounded text-black">{tool}</li>
          ))}
        </ul>
        <button className="text-2xl py-5 px-10 bg-gray-500 text-black">
          View Project
        </button>
      </div>
    </div>
  );
};

export default Project;
