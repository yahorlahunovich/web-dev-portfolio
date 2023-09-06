import { social_media_links } from "@/constants";
import { envelopeSvg } from "@/public/assets/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="h-screen  snap-start">
      Contact
      <h2>Do you want to work with me?</h2>
      <p>Let's get in touch!</p>
      <div className="flex">
        My email is{" "}
        <a href="mailto: egorlagunovich@gmail.com" className="text-red-600">
          <Image src={envelopeSvg} alt="envelope icon" width={20} />{" "}
          egorlagunovich@gmail.com
        </a>
      </div>
      <div>
        {social_media_links.map((link) => (
          <Link href={link.src} key={link.name}>
            <Image src={link.iconSrc} alt={link.name} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Contact;
