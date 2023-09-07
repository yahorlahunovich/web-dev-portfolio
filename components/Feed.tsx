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
    <section id="home" className="h-screen  p-36 snap-start bg-mountains">
      <div>
        <span className="text-3xl"> Hi, my name is</span>
        <h1 className="uppercase text-6xl font-bold  ">Egor Lagunovich</h1>
      </div>
      <div
        className={`text-5xl mt-8 overflow-hidden whitespace-nowrap font-mono animate-typing cursor-pointer`}
        onClick={resume}
      >
        <span className="text-darkGreen">I am </span>
        <span
          aria-label={selectedSuperpower}
          className={classNames("text-primary-400 pt-4 pb-12 min-h-[10rem]", {
            ["end-cursor"]: phase !== TypePhase.Deleting,
            ["blinking"]: phase === TypePhase.Pausing,
          })}
        >
          {typedSuperpower}
        </span>
        {/* <ul>
          <li className="border-r-4 inline-block border-r-mainWhite animate-blink">
            Front-End Developer
          </li>
          <li>Speedcuber</li>
          <li>Photographer</li>
          <li>Investor</li>
          <li>Sportsman</li>
          <li>Student</li>
        </ul> */}
      </div>
    </section>
  );
};

export default Feed;
