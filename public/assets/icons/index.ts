import { cssSvg } from "@/public/assets/icons";
import { htmlSvg } from "@/public/assets/icons";
import { jsSvg } from "@/public/assets/icons";
import { tsSvg } from "@/public/assets/icons";
import { reactSvg } from "@/public/assets/icons";
import { reduxSvg } from "@/public/assets/icons";
import { nextSvg } from "@/public/assets/icons";
import { gitSvg } from "@/public/assets/icons";
import { tailwindSvg } from "@/public/assets/icons";
import { SkillsIconsType } from "@/types";
export { default as htmlSvg } from "./html.svg";
export { default as cssSvg } from "./css.svg";
export { default as jsSvg } from "./js.svg";
export { default as tsSvg } from "./ts.svg";
export { default as reactSvg } from "./react.svg";
export { default as reduxSvg } from "./redux.svg";
export { default as nextSvg } from "./next.svg";
export { default as gitSvg } from "./git.svg";
export { default as tailwindSvg } from "./tailwind.svg";
export { default as envelopeSvg} from './envelope.svg'

export const skillsIcons: SkillsIconsType[] = [
  { name: "html icon", src: htmlSvg },
  { name: "css icon", src: cssSvg },
  { name: "js icon", src: jsSvg },
  { name: "ts icon", src: tsSvg },
  { name: "react icon", src: reactSvg },
  { name: "redux icon", src: reduxSvg },
  { name: "next icon", src: nextSvg },
  { name: "git icon", src: gitSvg },
  { name: "tailwind icon", src: tailwindSvg },
];
