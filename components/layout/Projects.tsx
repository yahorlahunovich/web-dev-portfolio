import React from "react";
import Project from "../Project";
import { projects } from "@/constants";
import Link from "next/link";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center snap-start px-32 text-4xl"
    >
      <h1 className="text-center mb-8">Projects</h1>
      <p className="text-xl w-1/2 text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa qui modi
        quasi eius quod odio tempore minus voluptates at a labore, vero in
        provident nostrum explicabo consequatur neque deleniti tempora
        voluptatum ab harum vel. Eaque sequi consectetur laborum autem sit
        labore officia alias temporibus unde? At molestiae impedit facere
        obcaecati!
      </p>
      {projects.map((project) => (
        <Project project={project} />
      ))}
      <Link href="/projects" className="bg-black p-5">
        View All Projects
      </Link>
    </section>
  );
};

export default Projects;
