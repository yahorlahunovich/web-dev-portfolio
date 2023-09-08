import React from "react";

type ProjectProps = {
  title: string;
  desc: string;
  tools: string[];
  img: string;
  link: string;
};

const Project = ({ title, desc, tools, img, link }: ProjectProps) => {
  return (
    <div className="flex flex-row text-xl justify-center items-center px-32 ">
      <div className="flex flex-col justify-center items-center h-1/2">
        <h2>{title}</h2>
        <p>{desc}</p>
        <h3>Development tools</h3>
        <ul>
          {tools.map((tool) => (
            <li>{tool}</li>
          ))}
        </ul>
        <button>View project</button>
      </div>
      <div className="h-1/2">Image</div>
    </div>
  );
};

export default Project;
