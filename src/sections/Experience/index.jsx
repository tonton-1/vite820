import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faMedium,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import picExp1 from "../../assets/picExp1.png";
import picExp2 from "../../assets/picExp2.png";
import { useState } from "react";
const Experience = () => {
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  return (
    <div className="space-y-4">
      <div className="text-left text-primaryAccent font-medium">Experience</div>
      <div
        className={`grid grid-cols-[30%_70%] rounded-md px-2 py-6 transition-all ${
          isMouseEnter["exp1"] ? "bg-gray-300" : ""
        }`}
        onMouseEnter={() => setIsMouseEnter({ exp1: true })}
        onMouseLeave={() => setIsMouseEnter({ exp1: false })}
      >
        <div className="text-left">
          <span
            className={`text-sm ${
              isMouseEnter["exp1"] ? "text-primaryAccent" : ""
            }`}
          >
            2024-2025
          </span>
          <div>
            <img src={picExp1} className="w-5/6 rounded-md border-2" />
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div
            className={`text-left text-primaryAccent ${
              isMouseEnter["exp1"] ? "text-primaryTitle" : ""
            }`}
          >
            Fashion Ecommerce
            <FontAwesomeIcon
              className={`text-xs -rotate-45 duration-300 ease-out ${
                isMouseEnter["exp1"] ? "translate-x-1 -translate-y-1 " : ""
              }`}
              icon={faArrowRight}
            />
          </div>
          <div className="flex gap-4 text-lg">
            <a href="https://witchayut022.github.io/vite820/" target="_blank">
              <FontAwesomeIcon
                className="hover:scale-125 hover:text-primaryTitle transition-all"
                icon={faGithub}
              />
            </a>
            <a href="https://witchayut022.github.io/vite820/" target="_blank">
              <FontAwesomeIcon
                className="hover:scale-125 hover:text-primaryTitle transition-all"
                icon={faMedium}
              />
            </a>
            <a href="https://witchayut022.github.io/vite820/" target="_blank">
              <FontAwesomeIcon
                className="hover:scale-125 hover:text-primaryTitle transition-all"
                icon={faYoutube}
              />
            </a>
          </div>
          <div className="text-left text-sm">
            Designing and developing a sports data analysis system that scrapes
            data from various sports websites, processes it, and presents
            different profit-making possibilities in real-time for customers.
          </div>
          <div className="text-left flex gap-4 text-sm">
            <div
              className={`bg-primarySubcontent  px-2 py-1 rounded-md ${
                isMouseEnter["exp1"] ? "text-primaryTitle" : ""
              }`}
            >
              React
            </div>
            <div
              className={`bg-primarySubcontent  px-2 py-1 rounded-md ${
                isMouseEnter["exp1"] ? "text-primaryTitle" : ""
              }`}
            >
              Tailwind
            </div>
          </div>
        </div>
      </div>

      <div
        className={`grid grid-cols-[30%_70%] rounded-md px-2 py-6 transition-all ${
          isMouseEnter["exp2"] ? "bg-gray-300" : ""
        }`}
        onMouseEnter={() => setIsMouseEnter({ exp2: true })}
        onMouseLeave={() => setIsMouseEnter({ exp2: false })}
      >
        <div className="text-left">
          <span
            className={`text-sm ${isMouseEnter ? "text-primaryAccent" : ""}`}
          >
            2024-2025
          </span>
          <div>
            <img src={picExp2} className="w-5/6 rounded-md border-2" />
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div
            className={`text-left text-primaryAccent ${
              isMouseEnter["exp1"] ? "text-primaryTitle" : ""
            }`}
          >
            Fashion Ecommerce
            <FontAwesomeIcon
              className={`text-xs -rotate-45 duration-300 ease-out ${
                isMouseEnter["exp2"] ? "translate-x-1 -translate-y-1 " : ""
              }`}
              icon={faArrowRight}
            />
          </div>
          <div className="flex gap-4 text-xl">
            <a href="https://witchayut022.github.io/vite820/" target="_blank">
              <FontAwesomeIcon
                className="hover:scale-125 hover:text-primaryTitle transition-all"
                icon={faGithub}
              />
            </a>
            <a href="https://witchayut022.github.io/vite820/" target="_blank">
              <FontAwesomeIcon
                className="hover:scale-125 hover:text-primaryTitle transition-all"
                icon={faMedium}
              />
            </a>
            <a href="https://witchayut022.github.io/vite820/" target="_blank">
              <FontAwesomeIcon
                className="hover:scale-125 hover:text-primaryTitle transition-all"
                icon={faYoutube}
              />
            </a>
          </div>
          <div className="text-left text-sm">
            Designing and developing a sports data analysis system that scrapes
            data from various sports websites, processes it, and presents
            different profit-making possibilities in real-time for customers.
          </div>
          <div className="text-left flex gap-4 text-sm">
            <div
              className={`bg-primarySubcontent  px-2 py-1 rounded-md ${
                isMouseEnter["exp2"] ? "text-primaryTitle" : ""
              }`}
            >
              React
            </div>
            <div
              className={`bg-primarySubcontent  px-2 py-1 rounded-md ${
                isMouseEnter["exp2"] ? "text-primaryTitle" : ""
              }`}
            >
              Tailwind
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
