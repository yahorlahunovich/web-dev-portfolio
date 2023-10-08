import { ProjectsType } from "@/types";
import Image from "next/image";
import React from "react";
import Button from "./Button";

type ProjectProps = {
  project: ProjectsType;
};

const Project = ({ project }: ProjectProps) => {
  const { title, desc, tools, link, img, bg, githubLink } = project;
  return (
    <div
      className={`flex flex-col-reverse lg:flex-row min-h-screen w-full text-xl justify-center items-center gap-12 py-5 `}
      id={bg}
      // data-aos="fade-up"
    >
      <div className="">
        <Image src={img} alt={title} className="w-full sm:w-[1000px]" />
      </div>
      <div className="flex flex-col justify-start gap-6 w-full lg:w-1/2 px-8 lg:px-32">
        <h4 className="text-3xl text-center lg:text-5xl uppercase font-bold">
          {title}
        </h4>
        <p className="text-lg text-white lg:text-xl leading-8 tracking-wider">
          {desc}
        </p>
        <h5 className="uppercase text-lg lg:text-xl font-bold">
          Development tools:
        </h5>
        {tools.map((tool) => (
          <ul className="flex flex-col px-6 list-disc" key={tool}>
            <li>{tool}</li>
          </ul>
        ))}
        <div className="flex flex-row gap-8">
          <Button link={link} name="View Project" />
          <Button link={githubLink} name="View GitHub" />
        </div>
      </div>
    </div>
  );
};

export default Project;
