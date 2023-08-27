
import React, { useEffect, useState } from "react";
import { navLinks, eduskill } from "../../Data";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import MobileNavLinks from "./MobileNavLinks";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar =  ({ isActive, setActiveLink })=> {
  const [toggle, setToggle] = useState(false);
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
    <div
      className={`${
        active ? "shadow-lg bg-Solitude" : ""
      } fixed w-full top-0 left-0 z-20`}
    >
      <div>
        <div
          className={`${
            active ? "py-2 transition-all duration-300" : "py-4"
          } container mx-auto flex items-center justify-between px-2`}
        >
          <div className="flex items-center gap-4">
            <HiMenuAlt1
              className="text-3xl sm:hidden cursor-pointer"
              onClick={() => setToggle(true)}
            />
            <img
              src={eduskill}
              alt="EduSkill Logo"
              className="h-12 sm:h-12 w-auto"
            />
          </div>
          <div className="container mx-auto flex items-center justify-end">
            <div className="sm:flex hidden font-normal text-sm">
            {navLinks.map((link) => (
  <li
    className={`list-none cursor-pointer mr-8 ${
      isActive ? "hover:text-red-500" : "hover:text-blue-500"
    }`}
    key={link.id}
  >
    <Link
      to={link.href}
      className={`font-bold transition-all duration-300 ${
        location.pathname === link.href
          ? "text-Orange_Primary"
          : "text-Black_Primary"
      }`}
      onClick={() => setActiveLink()}
    >
      {link.link}
    </Link>
  </li>
))}


            </div>
            <div className="flex items-center gap-2">
              {/* <button className="py-3 px-6 font-bold text-Black_Primary text-sm">
                Masuk
              </button> */}
              <button className="py-3 px-6 font-bold text-white text-sm border border-solid rounded-lg border-Orange_Secondary bg-Orange_Primary">
                Daftar Kelas
              </button>
            </div>
          </div>

          {toggle && (
            <motion.div
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="fixed h-full w-96 top-0 left-0 z-20 bg-Teal text-white flex flex-col justify-center items-center shadow-lg gap-8 py-8"
            >
              {navLinks.map((navLink) => {
                return (
                  <MobileNavLinks
                    key={navLink.id}
                    {...navLink}
                    setToggle={setToggle}
                  />
                );
              })}
              <HiX
                className="absolute right-12 top-12 text-3xl cursor-pointer"
                onClick={(prev) => setToggle(!prev)}
              />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
