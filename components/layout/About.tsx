import { meImg } from "@/public/assets/images";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row justify-center items-center text-3xl gap-11 min-h-screen snap-start py-32 px-8"
      data-aos="fade-up"
    >
      <div className="w-full lg:w-1/2">
        <Image src={meImg} alt="my personal photo" width={600} />
      </div>
      <div className="lg:w-1/2 w-full text-sm lg:text-xl leading-8 tracking-wider">
        <h2 className="text-center mb-5">About Me</h2>
        <p>
          My name is Egor Lagunovich. I'm a{" "}
          <span className="capitalize text-mainYellow">
            front-end software engineer
          </span>{" "}
          and{" "}
          <span className="capitalize text-mainYellow">
            data science student
          </span>{" "}
          in Warsaw, Poland. I love working on web applications and websites,
          making each one unique and original. I also adore studying everything
          related to computer science and computer technologies.
        </p>
        <p>
          My hobbies include running (I will soon run my first marathon),
          bodybuilding, speedcubing, hiking, photography and reading books.
        </p>
        <p>
          I strive to become the best version of myself and make this world a
          little bit better every day ;)
        </p>
      </div>
    </section>
  );
};

export default About;
