import {
  all_skills,
  first_half_skillsIcons,
  second_half_skillsIcons,
} from "@/public/assets/icons";
import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col justify-center items-center min-h-screen snap-start py-4 px-8 lg:px-32 main-bg"
      data-aos="fade-up"
    >
      <h2 className="m-2">My Skills</h2>
      <div className="text-sm lg:text-xl w-full lg:w-2/3 lg:m-8 leading-8 tracking-wider">
        <div className="text-[#CDCFCC]">
          <p>
            In the world of Front-end Development, versatility is key. As a
            passionate Web Developer, I bring a diverse set of skills to the
            table, each carefully honed to craft engaging and user-friendly
            digital experiences. Below, you'll find a snapshot of the tools and
            technologies that fuel my creative journey. These skills form the
            foundation of my work, allowing me to turn ideas into interactive
            realities. Explore and discover the building blocks behind my web
            creations.
          </p>
          <p>
            I continue to learn new technologies and my list of tools will
            only grow with time.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-5 sm:grid-rows-2 p-8 gap-5 justify-center w-full lg:w-2/3">
        {/* <div className="flex flex-row flex-wrap gap-12">
          {first_half_skillsIcons.map((icon) => (
            <div className="flex flex-col gap-2" data-aos="fade-up">
              <Image
                src={icon.src}
                key={icon.name}
                alt={icon.name}
                className="h-[125px]"
              />
              <caption className="text-lg">{icon.caption}</caption>
            </div>
          ))}
        </div>
        <div className="flex flex-row flex-wrap gap-12">
          {second_half_skillsIcons.map((icon) => (
            <div className="flex flex-col flex-wrap gap-2" data-aos="fade-up">
              <Image
                src={icon.src}
                key={icon.name}
                alt={icon.name}
                className="h-[125px]"
              />
              <caption className="text-lg">{icon.caption}</caption>
            </div>
          ))}
        </div> */}
        {all_skills.map((icon) => (
          <div
            className="flex flex-col justify-center items-center gap-2"
            data-aos="fade-up"
          >
            <Image
              src={icon.src}
              key={icon.name}
              alt={icon.name}
              className="h-[50px] sm:h-[125px] hover:fill-mainYellow"
            />
            <caption className="text-lg">{icon.caption}</caption>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
