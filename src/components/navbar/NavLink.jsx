import React from "react";
import { Link } from "react-scroll";

const NavLink = ({ href, link, isActive, setActiveLink }) => {
  return (
    <li
      className={`list-none cursor-pointer mr-8 ${
        isActive ? "hover:text-red-500" : "hover:text-blue-500"
      }`}
    >
      <Link
        to={href}
        spy={true}
        smooth={true}
        duration={500}
        offset={-50}
        className={`font-bold transition-all duration-300 ${
          isActive ? "text-Orange_Primary" : "text-Black_Primary"
        }`}
        onClick={() => setActiveLink()} // Set the active link on click
      >
        {link}
      </Link>
    </li>
  );
};

export default NavLink;
