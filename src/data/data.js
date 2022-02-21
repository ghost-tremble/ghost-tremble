import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAmazon,
  faAndroid,
  faBlogger,
  faNodeJs,
  faReact,
  faSass,
  faShopware,
} from "@fortawesome/free-brands-svg-icons";

import { faRaspberryPi } from "@fortawesome/free-brands-svg-icons";

import smartnote from "../assets/smart-notes.png";
import bombq from "../assets/bomq.png";
import blogify from "../assets/blogify.png";
import jacke from "../assets/jacke.png";

export const skills = [
  {
    name: "React",
    color: "#fff",
    logo: <FontAwesomeIcon icon={faReact} />,
    background: "linear-gradient(to right, #c31432, #240b36)",
  },
  {
    name: "Sass",
    color: "#fff",
    logo: <FontAwesomeIcon icon={faSass} />,
    background: "linear-gradient(to right, #45a247, #283c86)",
  },
  {
    name: "Node js",
    color: "purple",
    logo: <FontAwesomeIcon icon={faNodeJs} />,
    background: "  linear-gradient(to right, #e44d26, #f16529)",
  },
  {
    name: "Android",
    color: "#000",
    logo: <FontAwesomeIcon icon={faAndroid} />,
    background:
      "linear-gradient(45deg, rgb(162, 249, 252), rgb(101, 213, 233))",
  },
];

export const projectData = [
  {
    name: "Smart-notes",
    tech: "React Html5",
    url: "https://ghost-tremble.github.io/Smart-notes/",
    image: <FontAwesomeIcon icon={faRaspberryPi} />,
    desc: "application for taking and maning notes in real time  allows you to take notes record time and many more",
    repos: "https://github.com/ghost-tremble/Smart-notes",
    preview: smartnote,
  },
  {
    name: "BombQ",
    tech: "React gsap  react-router",
    url: "https://bombq.netlify.app/",
    image: <FontAwesomeIcon icon={faShopware} />,
    desc: "clothing and accessories  e-commerce frontend demo built with react js and gsap ",
    repos: "https://github.com/ghost-tremble/bombq",
    preview: bombq,
  },
  {
    name: "Blogify",
    tech: "React express nodejs mongodb Atlas",
    url: "https://blogify-aes.netlify.app/",
    image: <FontAwesomeIcon icon={faBlogger} />,
    desc: "book club based app users can create books share their stories and organize book clubs all on the web built with express and mongo db  this project is not complete",
    repos: "https://github.com/ghost-tremble/blogify",
    preview: blogify,
  },
  {
    name: "Jackes-Ave",
    tech: "React redux firebase",
    url: "https://jackies-ave.netlify.app/",
    image: <FontAwesomeIcon icon={faAmazon} />,
    desc: "Jackes-ave is an ecommerce frontend application that utilizes firebase to manage its database it is empowered with user authentication and data persitence",
    repos: "https://github.com/ghost-tremble/JACKIES-AVE",
    preview: jacke,
  },
];
