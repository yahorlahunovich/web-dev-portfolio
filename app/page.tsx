"use client";

import { useState } from "react";
import About from "@/components/layout/About";
import Contact from "@/components/layout/Contact";
import Feed from "@/components/layout/Feed";
import Projects from "@/components/layout/Projects";
import Skills from "@/components/layout/Skills";
import { superpowers } from "@/constants";
import Footer from "@/components/layout/Footer";

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
