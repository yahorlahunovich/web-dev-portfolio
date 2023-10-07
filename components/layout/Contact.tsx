import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full flex flex-col sm:flex-row justify-center items-center min-h-screen snap-start sm:px-32 px-8 main-bg"
    >
      <div className="flex flex-col flex-wrap items-center justify-center w-full lg:w-2/3">
        <h2 className="text-center">Get in Touch</h2>
        <hr className="border-mainYellow text-center fle w-8 m-4 border-[3px] rounded-full" />
        <p className="text-lg lg:text-xl text-white leading-8 tracking-wider mt-12">
          Have a project in mind or simply want to connect? I'm here to make it
          easy. Whether you have questions, ideas, or opportunities to discuss,
          I'm all ears.
        </p>
        <p className="text-lg lg:text-xl leading-8 tracking-wider text-white">
          I'm also open to full-time hiring.
        </p>
        <div className="flex flex-row mt-16 gap-2 justify-center items-center">
          <a
            href="mailto: egorlagunovich@gmail.com"
            className="text-2xl text-mainYellow underline"
          >
            Let's Get in Touch!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
