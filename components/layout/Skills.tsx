import {
  first_half_skillsIcons,
  second_half_skillsIcons,
} from "@/public/assets/icons";
import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col justify-center items-center min-h-screen snap-start px-32 main-bg"
      data-aos="fade-up"
    >
      <h2>My Skills</h2>
      <div className="text-xl w-2/3 m-8 leading-8 tracking-wider">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit id
          autem tenetur amet incidunt, ducimus quod perspiciatis minima vero
          repudiandae voluptate laborum. Assumenda ex harum inventore reiciendis
          animi fugit placeat ullam quasi alias totam asperiores quod, explicabo
          ad architecto praesentium! Optio nihil quos consequatur? Eaque ut
          quibusdam voluptatum expedita quisquam.
        </p>
      </div>
      <div className="flex flex-col flex-wrap p-8 gap-5 justify-center items-center grid-rows-2">
        <div className="flex flex-row flex-wrap gap-12">
          {first_half_skillsIcons.map((icon) => (
            <div className="flex flex-col gap-2" data-aos="fade-up">
              <Image
                src={icon.src}
                key={icon.name}
                alt={icon.name}
                height={75}
              />
              <caption className="text-lg">{icon.caption}</caption>
            </div>
          ))}
        </div>
        <div className="flex flex-row gap-12">
          {second_half_skillsIcons.map((icon) => (
            <div className="flex flex-col flex-wrap gap-2" data-aos="fade-up">
              <Image
                src={icon.src}
                key={icon.name}
                alt={icon.name}
                height={75}
              />
              <caption className="text-lg">{icon.caption}</caption>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
