"use client";

import { useState } from "react";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Feed from "@/components/Feed";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { I_AM } from "@/constants";

export default function Home() {
  const [name, setName] = useState(I_AM[0]);
  return (
    <>
      <Feed I_AM={I_AM} name={name} setName={setName} />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
