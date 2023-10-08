"use client";

import { TypePhase, useTypedSuperpower } from "@/hooks/useTypedSuperpower";
import classNames from "classnames";
import { Link } from "react-scroll";

type FeedProps = {
  superpowers: string[];
};

const Feed = ({ superpowers }: FeedProps) => {
  const { typedSuperpower, selectedSuperpower, phase, resume } =
    useTypedSuperpower(superpowers);
  return (
    <section
      id="home"
      className="w-full overflow-hidden min-h-screen flex flex-col justify-between items-center pb-12 snap-start gap-8 main-bg"
      data-aos="fade-up"
    >
      <div className="mt-64 flex flex-col justify-center items-center">
        <div>
          <h1 className="uppercase text-center text-4xl lg:text-6xl font-bold ">
            Hi, I'm Egor Lagunovich
          </h1>
        </div>
        <div
          className={`text-2xl lg:text-5xl mt-8 whitespace-nowrap font-mono animate-typing cursor-pointer`}
          onClick={resume}
        > 
          <span className="text-darkGreen">I am </span>
          <span
            aria-label={selectedSuperpower}
            className={classNames(
              "text-mainYellow pt-4 pb-12 min-h-[10rem] font-mono overflow-hidden",
              {
                ["end-cursor"]: phase !== TypePhase.Deleting,
                ["blinking"]: phase === TypePhase.Pausing,
              }
            )}
          >
            {typedSuperpower}
          </span>
        </div>
      </div>
      <Link spy={true} smooth={true} offset={20} duration={500} to="about">
        <div className="scroll cursor-pointer"></div>
      </Link>
    </section>
  );
};

export default Feed;
