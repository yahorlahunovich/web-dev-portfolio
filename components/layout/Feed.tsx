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
      className="h-screen flex flex-col justify-center items-center px-36 pb-12 snap-start gap-8 main-bg "
      data-aos="fade-up"
    >
      <div>
        {/* <span className="text-3xl"> Hi, my name is</span> */}
        <h1 className="uppercase text-6xl font-bold text-white  ">
          Hi, I'm Egor Lagunovich
        </h1>
      </div>
      <div
        className={`text-5xl mt-8 overflow-hidden whitespace-nowrap font-mono animate-typing cursor-pointer`}
        onClick={resume}
      >
        <span className="text-darkGreen">I am </span>
        <span
          aria-label={selectedSuperpower}
          className={classNames("text-mainYellow pt-4 pb-12 min-h-[10rem]", {
            ["end-cursor"]: phase !== TypePhase.Deleting,
            ["blinking"]: phase === TypePhase.Pausing,
          })}
        >
          {typedSuperpower}
        </span>
      </div>
      <button className=" text-white text-4xl">About me</button>
    </section>
  );
};

export default Feed;
