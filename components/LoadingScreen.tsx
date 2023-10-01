"use client";

import React, { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [isPortfiolioShown, setIsPortfolioShown] = useState(true);
  const [isNameShown, setIsNameShown] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsPortfolioShown(false), 1150);
  }, []);
  useEffect(() => {
    setTimeout(() => setIsNameShown(false), 1050);
  }, []);
  return (
    <div className="text-3xl min-h-screen flex justify-center items-center main-bg">
      <span className={`"font-bold" ${!isNameShown && "disappearing"}`}>
        Egor Lagunovich
      </span>
      &nbsp;
      <span className={`${!isPortfiolioShown && "disappearing"}`}>
        Porfolio
      </span>
    </div>
  );
};

export default LoadingScreen;
