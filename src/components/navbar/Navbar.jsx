import React, { useEffect, useState } from "react";
import { navLinks, eduskill } from "@/Data";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import MobileNavLinks from "./MobileNavLinks";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ isActive, setActiveLink }) => {
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
            <a href="/">
              <img
                src={eduskill}
                alt="EduSkill Logo"
                className="w-48 h-12 sm:w-28 sm:h-10 md:w-44 md:h-14 lg:w-44 lg:h-14"
              />
            </a>
          </div>

          <div className="container mx-auto flex items-center justify-end">
            <div className="sm:flex hidden font-normal text-sm mr-4">
              {navLinks.map((link) => (
                <li className={`list-none cursor-pointer mx-4`} key={link.id}>
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
              <button className="py-2 px-3 md:py-3 md:px-6 font-bold text-white text-extra-mini md:text-sm border border-solid rounded-md md:rounded-lg border-Orange_Secondary bg-Orange_Primary">
                <a href="https://eduskill.mayar.link/pl/basic-web-development">
                  {" "}
                  Daftar Kela
                </a>
                s
              </button>
            </div>
            <div className="flex items-center md:mx-0 mx-2">
              <HiMenuAlt1
                className="text-3xl sm:hidden cursor-pointer rotate-180"
                onClick={() => setToggle(true)}
              />
            </div>
          </div>
          {toggle && (
            <motion.div
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="fixed h-full w-full top-0 left-0 z-20 bg-Orange_Primary flex flex-col justify-center items-center shadow-lg gap-8 py-8"
            >
              <MobileNavLinks />
              <HiX
                className="absolute right-12 top-12 text-white text-3xl cursor-pointer"
                onClick={() => setToggle(false)}
              />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
