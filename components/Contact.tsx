import { envelopeSvg } from "@/public/assets/icons";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="h-screen bg-black text-white snap-start">
      Contact
      <h2>Do you want to work with me?</h2>
      <p>Let's get in touch!</p>
      <div className="flex">
        My email is{" "}
        <a href="mailto: egorlagunovich@gmail.com" className="text-red-600">
          <Image src={envelopeSvg} alt="envelope icon" width={20} /> egorlagunovich@gmail.com</a>
      </div>
    </section>
  );
};

export default Contact;
