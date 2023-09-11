import { skillsIcons } from "@/public/assets/icons";
import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="flex flex-col justify-center items-center h-screen snap-start px-32">
      <h1 className="text-6xl">Skills&Experience</h1>
      <div className="text-xl w-1/2 m-8">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit id autem
        tenetur amet incidunt, ducimus quod perspiciatis minima vero repudiandae
        voluptate laborum. Assumenda ex harum inventore reiciendis animi fugit
        placeat ullam quasi alias totam asperiores quod, explicabo ad architecto
        praesentium! Optio nihil quos consequatur? Eaque ut quibusdam voluptatum
        expedita quisquam.
      </div>
      <div className="grid grid-cols-5 gap-4 justify-center items-center grid-rows-2">
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
