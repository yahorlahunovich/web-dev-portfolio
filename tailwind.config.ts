import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBlue: "#171B27",
        mainYellow: "#FFB600",
      },
      backgroundImage: {
        mountains: "url('/public/assets/images')",
      },
      // animation: {
      //   // typing: `typing 4s steps(19)`,
      //   blink: "blink 0.1s steps(19)",
      // },
      // keyframes: {
      //   typing: {
      //     // 40%, 60% { left: calc},
      //   },
      // blink: {
      //   from: { "border-right-color": "transparent" },
      //   to: { "border-right-color": "mainWhite" },
      // },
      // },
    },
  },
  plugins: [],
};
export default config;
