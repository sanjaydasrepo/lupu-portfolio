import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faFile, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import React from "react";

interface NavBarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ activeSection, setActiveSection }) => {
  return (
    <nav className="mb-4 md:mb-8">
      <ul className="flex flex-wrap justify-center md:justify-start space-x-2 md:space-x-4">
        <li
          className={`cursor-pointer flex flex-col items-center text-center bg-gray-200 p-4 rounded-xl ${
            activeSection === "home" ? "text-white bg-blue-600" : "text-gray-500 bg-gray-300"
          }`}
          onClick={() => setActiveSection("home")}
        >
          <FontAwesomeIcon icon={faHome}/>
          <span>Home</span>
        </li>
        <li
          className={`cursor-pointer flex items-center ${
            activeSection === "resume" ? "text-yellow-500" : "text-gray-500"
          }`}
          onClick={() => setActiveSection("resume")}
        >
          <FontAwesomeIcon icon={faFile} className="mr-2" />
          <span>Resume</span>
        </li>
        <li
          className={`cursor-pointer flex items-center ${
            activeSection === "work" ? "text-yellow-500" : "text-gray-500"
          }`}
          onClick={() => setActiveSection("work")}
        >
          <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
          <span>Work</span>
        </li>
        <li
          className={`cursor-pointer flex items-center ${
            activeSection === "contact" ? "text-yellow-500" : "text-gray-500"
          }`}
          onClick={() => setActiveSection("contact")}
        >
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
          <span>Contact</span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
