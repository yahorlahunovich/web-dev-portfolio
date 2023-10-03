"use client";

import { TypePhase, useTypedSuperpower } from "@/hooks/useTypedSuperpower";
import classNames from "classnames";
import React, { useEffect, useState } from "react";

type FeedProps = {
  superpowers: string[];
};

const Feed = ({ superpowers }: FeedProps) => {
  const { typedSuperpower, selectedSuperpower, phase, resume } =
    useTypedSuperpower(superpowers);
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-between items-center px-36 pb-12 snap-start gap-8 main-bg "
      data-aos="fade-up"
    >
      <div className="mt-64 flex flex-col justify-center items-center">
        <div>
          {/* <span className="text-3xl"> Hi, my name is</span> */}
          <h1 className="uppercase text-xl lg:text-6xl font-bold text-white  ">
            Hi, I'm Egor Lagunovich
          </h1>
        </div>
        <div
          className={`text-xl lg:text-5xl mt-8 overflow-hidden whitespace-nowrap font-mono animate-typing cursor-pointer`}
          onClick={resume}
        >
          <span className="text-darkGreen">I am </span>
          <span
            aria-label={selectedSuperpower}
            className={classNames(
              "text-mainYellow pt-4 pb-12 min-h-[10rem] font-mono",
              {
                ["end-cursor"]: phase !== TypePhase.Deleting,
                ["blinking"]: phase === TypePhase.Pausing,
              }
            )}
          >
            {typedSuperpower}
          </span>
        </div>
        {/* <a className=" text-white text-4xl border bg-white-1 rounded" href="#projects">
        Projects
      </a> */}
      </div>
      <div className="scroll"></div>
    </section>
  );
};

export default Feed;
