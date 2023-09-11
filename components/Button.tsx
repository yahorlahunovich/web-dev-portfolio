import React from "react";

type ButtonProps = {
  text: string;
};

const Button = (text): ButtonProps => {
  return (
    <button className="text-2xl py-5 px-10 bg-gray-500 text-black">
      {text}
    </button>
  );
};

export default Button;
