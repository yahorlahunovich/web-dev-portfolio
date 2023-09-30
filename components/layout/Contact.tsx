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
      className="w-full flex flex-col sm:flex-row gap-5 justify-center items-center min-h-screen text-3xl snap-start sm:px-32 main-bg"
      data-aos="fade-up"
    >
      <div className="w-full sm:w-1/2">
        <Image src={contactImg} alt="Mountain" />
      </div>
      <div className="flex flex-col flex-wrap justify-center items-center w-full sm:w-1/2">
        <h2 className="text-center m-2">Get in Touch</h2>
        <p>
          Have a project in mind or simply want to connect? I'm here to make it
          easy. The Contact section is your direct line to me. Whether you have
          questions, ideas, or opportunities to discuss, I'm all ears.
        </p>
        <p>I'm also open to full-time hiring.</p>
        <div className="flex flex-row gap-2 justify-center items-center">
          <a
            href="mailto: egorlagunovich@gmail.com"
            className="flex flex-row justify-center items-center"
          >
            <Image src={envelopeSvg} alt="envelope icon" width={40} />{" "}
            egorlagunovich@gmail.com
          </a>
        </div>
        <h3>Social media</h3>
        <div className="flex flex-row justify-center items-center">
          {social_media_links.map((link) => (
            <Link href={link.src} key={link.name}>
              <Image src={link.iconSrc} alt={link.name} width={150} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
