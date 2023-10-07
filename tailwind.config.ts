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
        mainBlue: "#1E2749",
        textMain: '#8892B0',
        mainYellow: "#FED766",
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
