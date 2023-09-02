import { Link } from "react-scroll";
import { navLinks } from "@/Data";
import React, { useEffect, useState } from "react";
import { Link as NavLink, useLocation } from "react-router-dom";

const MobileNavLinks = ({ isActive, setActiveLink }) => {


  const [active, setActive] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, [active]);

  return (
    <div>
      {navLinks.map((navlink) => (
        <li className={`list-none cursor-pointer mx-4 text-center`} key={navlink.id}>
        <NavLink
            to={navlink.href}
            className={`font-bold transition-all  duration-300 ${
              location.pathname === navlink.href
                ? "text-white"
                : "text-Black_Primary"
            }`}
            onClick={() => setActiveLink()}
          >
            {navlink.link}
          </NavLink>
        </li>
      ))}
    </div>
  );
};

export default MobileNavLinks;
