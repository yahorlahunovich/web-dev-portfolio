"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Feed from "@/components/Feed";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Feed />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
