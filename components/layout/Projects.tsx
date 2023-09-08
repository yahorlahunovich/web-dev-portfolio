import React from "react";
import Project from "../Project";

const Projects = () => {
  let desc = "loreddasdsadasddsadsadas";
  return (
    <section id="projects" className="h-screen snap-start px-32">
      <h1>Projects</h1>
      <Project
        title="todo-app"
        desc={desc}
        tools={["read", "to be"]}
        img=""
        link=""
      />
    </section>
  );
};

export default Projects;
