import { social_media_links } from "@/constants";
import { envelopeSvg } from "@/public/assets/icons";
import { contactImg } from "@/public/assets/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full flex flex-col sm:flex-row justify-center items-center min-h-screen snap-start sm:px-32 main-bg"
      data-aos="fade-up"
    >
      {/* <div className="w-full sm:w-1/2">
        <Image src={contactImg} alt="Mountain" />
      </div> */}
      <div className="flex flex-col flex-wrap justify-center w-2/3">
        <h2 className="text-center mb-16">Get in Touch</h2>
        <p className="text-sm lg:text-xl leading-8 tracking-wider">
          Have a project in mind or simply want to connect? I'm here to make it
          easy. Whether you have questions, ideas, or opportunities to discuss,
          I'm all ears.
        </p>
        <p className="text-sm lg:text-xl leading-8 tracking-wider">
          I'm also open to full-time hiring.
        </p>
        <div className="flex flex-row mt-16 gap-2 justify-center items-center">
          <a
            href="mailto: egorlagunovich@gmail.com"
            className="text-2xl text-mainYellow underline"
          >
            {/* <Image src={envelopeSvg} alt="envelope icon" width={40} />{" "}
            egorlagunovich@gmail.com */}
            Let's Get in Touch!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
