import { skillsIcons } from "@/public/assets/icons";
import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="h-screen snap-start">
      Skills
      <div className="flex flex-row">
        {skillsIcons.map((icon) => (
          <Image
            src={icon.src}
            key={icon.name}
            alt={icon.name}
            height={100}
            width={100}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
