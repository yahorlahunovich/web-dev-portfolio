import React from "react";
import Project from "../Project";
import { projects } from "@/constants";
import Link from "next/link";
import Button from "../Button";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center snap-start text-4xl pt-32 bg-mainBlue"
      // data-aos="zoom-in"
    >
      <h2 className="text-center">My Projects</h2>
      <hr className="border-mainYellow text-center fle w-8 m-4 border-[3px] rounded-full" />
      <div className="text-xl w-full lg:w-2/3 leading-8 tracking-wider mb-12 px-8 lg:px-32">
        <p>
          Welcome to my digital playground, where creativity meets
          functionality. In this portfolio section, I proudly showcase a curated
          selection of my projects, each a testament to my passion for Front-End
          Development. With each pixel, line of code, and user interaction, I
          strive to bring unique ideas to life on the web.
        </p>
        <p>
          All my projects can be found on my{" "}
          <a
            className="text-mainYellow"
            href="https://github.com/egorlagunovich?tab=repositories"
            target="_blank"
          >
            Github
          </a>
          .
        </p>
      </div>
      {projects.map((project) => (
        <Project project={project} key={project.title} />
      ))}
    </section>
  );
};

export default Projects;
