import React, { useEffect } from "react";

type FeedProps = {
  I_AM: string[];
  name: string;
  setName(name: string): void;
};

const Feed = ({ I_AM, name, setName }: FeedProps) => {
  useEffect(() => {
    setTimeout(() => {
      setName(I_AM[1]);
    }, I_AM[0].length * 1000);
  }, [name]);
  return (
    <section id="home" className="h-screen bg-[#D0C3A3] p-36">
      <div>
        Hi, my name is
        <span className="uppercase text-4xl">Egor Lagunovich</span>
      </div>
      <div
        className={`overflow-hidden whitespace-nowrap font-mono animate-typing `}
      >
        I am
        <ul>
          <li className="border-r-4 border-r-black animate-blink">
            Front-End Developer
          </li>
          <li>Speedcuber</li>
          <li>Photographer</li>
          <li>Investor</li>
          <li>Sportsman</li>
          <li>Student</li>
        </ul>
      </div>
    </section>
  );
};

export default Feed;
