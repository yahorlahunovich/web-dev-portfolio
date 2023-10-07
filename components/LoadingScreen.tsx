"use client";

import React, { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [isPortfiolioShown, setIsPortfolioShown] = useState(true);
  const [isNameShown, setIsNameShown] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsPortfolioShown(false), 800);
  }, []);
  useEffect(() => {
    setTimeout(() => setIsNameShown(false), 750);
  }, []);
  return (
    <div className="text-xl lg:text-3xl min-h-screen flex justify-center items-center main-bg">
      <span className={`${!isNameShown && "disappearing"} font-bold`}>
        Egor Lagunovich
      </span>
      &nbsp;
      <span className={`text-mainYellow ${!isPortfiolioShown && "disappearing"}`}>
        Porfolio
      </span>
    </div>
  );
};

export default LoadingScreen;
