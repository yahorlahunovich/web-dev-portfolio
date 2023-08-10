import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between p-3">
      <div>{/* <Image /> */}</div>
      <ul className="flex flex-row gap-5">
        <li>about</li>
        <li>skills</li>
        <li>projects</li>
        <li>contact</li>
        <li>resume</li>
      </ul>
    </nav>
  );
};

export default Navbar;
