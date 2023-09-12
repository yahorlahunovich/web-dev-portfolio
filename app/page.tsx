"use client";

import { useState, useEffect } from "react";
import About from "@/components/layout/About";
import Contact from "@/components/layout/Contact";
import Feed from "@/components/layout/Feed";
import Projects from "@/components/layout/Projects";
import Skills from "@/components/layout/Skills";
import { superpowers } from "@/constants";
import Footer from "@/components/layout/Footer";
import Aos from "aos";
import 'aos/dist/aos.css'

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
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
