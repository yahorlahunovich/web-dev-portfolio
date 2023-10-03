import { githubSvg, instagramSvg, linkedinSvg } from "@/public/assets/icons";
import {
  galleryImg,
  laptopImg,
  pizzaImg,
  pomImg,
  promptopiaImg,
  quizImg,
} from "@/public/assets/images";
import { ProjectsType } from "@/types";

export const superpowers = [
  "Front-End Developer",
  "Speedcuber",
  "Photographer",
  "Investor",
  "Sportsman",
  "Student",
];

export const social_media_links = [
  {
    name: "Github",
    src: "https://github.com/egorlagunovich",
    iconSrc: githubSvg,
  },
  {
    name: "LinkedIn",
    src: "https://www.linkedin.com/in/egorlagunovich/",
    iconSrc: linkedinSvg,
  },
  {
    name: "Instagram",
    src: "https://www.instagram.com/egorlagunovich/",
    iconSrc: instagramSvg,
  },
];

export const projects: ProjectsType[] = [
  {
    title: "Quiz App",
    desc: "Discover and test your knowledge on diverse topics with Quiz App! I created this site for personal development and gaining new knowledge.",
    tools: ["React", "Redux", "CSS Modules"],
    img: quizImg,
    link: "https://egorlagunovich.github.io/quiz-app/",
    githubLink: "https://github.com/egorlagunovich/quiz-app",
    bg: "#557EEF",
  },
  {
    title: "Pomodoro Timer",
    desc: "My Pomodoro(Arancioro) Timer is a productivity tool designed to boost your focus and efficiency. Stay on track with your tasks and break them into manageable intervals with built-in notifications. I created this site to sharpen my front-end development skills and for personal use.",
    tools: ["React", "Redux", "TypeScript", "Tailwind"],
    img: pomImg,
    link: "https://egorlagunovich.github.io/productivity-manager/",
    githubLink: "https://github.com/egorlagunovich/productivity-manager",
  },
  {
    title: "Pizza Order App ",
    desc: "This is an online shop for ordering pizza.(e-commerce) I created this project while taking a react course on the Udemy website.",
    tools: ["React", "Firebase", "CSS Modules"],
    img: pizzaImg,
    link: "https://egorlagunovich.github.io/food-order-app/",
    githubLink: "https://github.com/egorlagunovich/food-order-app",
  },
  {
    title: "Photo Gallery",
    desc: "I created this website as a gallery of photos taken by me.",
    tools: ["React", "TypeScript", "Tailwind"],
    img: galleryImg,
    link: "https://photo-portfolio-livid-alpha.vercel.app/",
    githubLink: "https://github.com/egorlagunovich/photo-portfolio",
  },
  {
    title: "Promptopia",
    desc: "Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts. I cerated this project watching a Next.js course on YouTube.",
    tools: ["Next", "MongoDB", "Tailwind"],
    img: promptopiaImg,
    link: "https://promptopia-teal-beta.vercel.app/",
    githubLink: "https://github.com/egorlagunovich/Promptopia",
  },
];

export const allProjects: ProjectsType[] = [
  ...projects,
  {
    title: "Quiz App",
    desc: "Discover and test your knowledge on diverse topics with Quiz App! I created this site for personal development and gaining new knowledge.",
    tools: ["React", "Redux", "CSS Modules"],
    img: quizImg,
    link: "https://egorlagunovich.github.io/quiz-app/",
    githubLink: "https://github.com/egorlagunovich/quiz-app",
  },
];
