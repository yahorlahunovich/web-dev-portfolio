import { ProjectsType } from "@/types";
import Image from "next/image";
import React from "react";

type ProjectProps = {
  project: ProjectsType;
};

const Project = ({ project }: ProjectProps) => {
  const { title, desc, tools, link, img, bg, githubLink } = project;
  return (
    <div
      className={`flex flex-row min-h-screen w-full text-xl justify-center items-center gap-12 px-32 m-10 bg-[${bg}]`}
      data-aos="fade-up"
    >
      <div className="">
        <Image src={img} alt={title} className="filterr" width={1000} />
      </div>
      <div className="flex flex-col justify-start gap-6 w-1/2">
        <h4 className="text-5xl uppercase font-bold">{title}</h4>
        <p className="text-sm lg:text-xl leading-8 tracking-wider">{desc}</p>
        <h5 className="uppercase text-sm lg:text-xl font-bold">
          Development tools:
        </h5>
          {tools.map((tool) => (
            <ul className="flex flex-col px-6 list-disc">
              <li>{tool}</li>
            </ul>
          ))}
        <div>
          <a
            href={link}
            target="_blank"
            className="uppercase border px-8 py-3 border-white mr-5"
          >
            view Project
          </a>
          <a
            href={githubLink}
            target="_blank"
            className="uppercase border px-8 py-3 border-white"
          >
            view Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
