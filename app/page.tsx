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
import "aos/dist/aos.css";
import Header from "@/components/layout/Header";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {" "}
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Header />
          <Feed superpowers={superpowers} />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}
