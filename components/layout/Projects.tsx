import React from "react";
import Project from "../Project";
import { projects } from "@/constants";
import Link from "next/link";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center snap-start text-4xl bg-mainBlue"
      data-aos="zoom-in"
    >
      <h2 className="text-center">My Projects</h2>
      <hr className="border-mainYellow text-center fle w-8 m-4 border-[3px] rounded-full" />
      <div className="text-xl w-2/3  leading-8 tracking-wider mb-12">
        <p>
          Welcome to my digital playground, where creativity meets
          functionality. In this portfolio section, I proudly showcase a curated
          selection of my projects, each a testament to my passion for frontend
          development. With each pixel, line of code, and user interaction, I
          strive to bring unique ideas to life on the web.
        </p>
        <p>
          Feel free to click, explore, and immerse yourself in the world of
          frontend development. If you like what you see, let's collaborate and
          turn your ideas into the next exciting project in this growing
          collection.
        </p>
      </div>
      {projects.map((project) => (
        <Project project={project} key={project.title} />
      ))}
      <a
        href="https://github.com/egorlagunovich?tab=repositories"
        target="_blank"
        className="uppercase border mt-12 px-8 py-3 border-white"
      >
        View All Projects
      </a>
    </section>
  );
};

export default Projects;
