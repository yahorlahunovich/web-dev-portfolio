"use client";

import React, { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [isPortfiolioShown, setIsPortfolioShown] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsPortfolioShown(false), 1000);
  }, []);
  return (
    <div className="text-3xl min-h-screen flex justify-center items-center main-bg">
      <span className="font-bold">Egor Lagunovich</span>
      &nbsp;
      <span className={`${!isPortfiolioShown && "hidden"} transition-all duration-500`}>Porfolio</span>
    </div>
  );
};

export default LoadingScreen;
