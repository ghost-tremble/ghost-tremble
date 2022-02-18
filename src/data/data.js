import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAndroid,
  faNodeJs,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";

export const skills = [
  {
    name: "React",
    color: "#fff",
    logo: <FontAwesomeIcon icon={faReact} />,
    background: "linear-gradient(45deg, rgb(77, 117, 192), rgb(4, 138, 248))",
  },
  {
    name: "Sass",
    color: "#fff",
    logo: <FontAwesomeIcon icon={faSass} />,
    background:
      "linear-gradient(45deg, rgb(255, 205, 130), rgb(233, 171, 101))",
  },
  {
    name: "Node js",
    color: "purple",
    logo: <FontAwesomeIcon icon={faNodeJs} />,
    background:
      "  linear-gradient(45deg, rgb(137, 202, 107), rgb(101, 233, 130))",
  },
  {
    name: "Android",
    color: "#000",
    logo: <FontAwesomeIcon icon={faAndroid} />,
    background:
      "linear-gradient(45deg, rgb(162, 249, 252), rgb(101, 213, 233))",
  },
];
