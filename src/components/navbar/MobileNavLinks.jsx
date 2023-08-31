import React from "react";
import { Link } from "react-scroll";

const MobileNavLinks = ({ href, link, isActive, setActiveLink }) => {
  return (
    <li
      className={`list-none cursor-pointer mr-8}`}
    >
      <Link
        to={href}
        spy={true}
        smooth={true}
        duration={500}
        offset={-50}
        className={`font-bold transition-all duration-300 ${
          isActive ? "text-Black_Primary" : "text-white"
        }`}
        onClick={() => setActiveLink()} // Set the active link on click
      >
        {link}
      </Link>
    </li>
  );
};

export default MobileNavLinks;
