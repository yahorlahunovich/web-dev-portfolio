"use client";

import { useState } from "react";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Feed from "@/components/Feed";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { superpowers } from "@/constants";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Feed superpowers={superpowers} />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
