import {
  faGithub,
  faMedium,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import picExp1 from "../assets/picExp1.png";
import picExp2 from "../assets/picExp2.png";

import Picture from "../components/Picture";

export const data = [
  {
    date: "2020-2021",
    title: "Backend Dev, Sport Analysis System",
    link: "https://suriyapi.github.io/vite/",
    materials: [
      { type: faGithub, link: "https://suriyapi.github.io/vite/" },
      { type: faYoutube, link: "https://suriyapi.github.io/vite/" },
      { type: faMedium, link: "https://suriyapi.github.io/vite/" },
    ],
    descriptions: [
      "Designing and developing a sports data analysis system that scrapes data from various sports websites, processes it, and presents different profit-making possibilities in real-time for customers.",
      "Create tools for monitoring the backend and implementing self-recovery mechanisms, ensuring their seamless operation 24/7.",
    ],
    skills: [
      ["React", "Redus", "MUI"],
      ["NginX", "NodeJS", "Express", "MongoDB"],
    ],
    picture: picExp1,
  },
  {
    date: "2020-2021",
    title: "Backend Dev, Sport Analysis System",
    link: "https://suriyapi.github.io/vite/",
    materials: [
      { type: faGithub, link: "https://suriyapi.github.io/vite/" },
      { type: faYoutube, link: "https://suriyapi.github.io/vite/" },
      { type: faMedium, link: "https://suriyapi.github.io/vite/" },
    ],
    descriptions: [
      "Designing and developing a sports data analysis system that scrapes data from various sports websites, processes it, and presents different profit-making possibilities in real-time for customers.",
      "Create tools for monitoring the backend and implementing self-recovery mechanisms, ensuring their seamless operation 24/7.",
    ],
    skills: [
      ["React", "Redus", "MUI"],
      ["NginX", "NodeJS", "Express", "MongoDB"],
    ],
    picture: picExp2,
  },
];
