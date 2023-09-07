import React from "react";
import {
  BsTwitter,
  BsLinkedin,
  BsFacebook,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";
import { motion } from "framer-motion";
import Logo from "@/assets/logo_eduskill.png";

const Footer = () => {
  return (
    <motion.div
      initial={{ height: 0 }}
      whileInView={{ height: "auto" }}
      transition={{ duration: 1 }}
      className="bg-Black_Primary p-10"
    >
      <div className="md:section container mx-auto pt-12 pb-24 px-6">
        <div className="grid md:grid-cols-6 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 place-items-start gap-8 text-White_Primary">
          <div className="col-span-2">
            <img
              src={Logo} // Replace with your image URL
              alt="Review"
              className="w-44"
            />
            <p className="text-sm leading-7 font-light mt-6 mr-12">
              Pengalaman belajar terbaik yang menciptakan lebih banyak bakat di
              dunia.
            </p>
          </div>

          <div className="col-span-1">
            <div className="font-bold mb-6 text-sm text-[#98A2B3]">Produk</div>
            <div className="flex flex-col gap-4 font-light">
              <a href="" className="text-sm hover:underline">
                Overview
              </a>
              <a href="" className="text-sm hover:underline">
                Features
              </a>
              <a href="" className="text-sm hover:underline">
                Solutions
              </a>
              <a href="" className="text-sm hover:underline">
                Tutorials
              </a>
              <a href="" className="text-sm hover:underline">
                Pricing
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <div className="font-bold mb-6 text-sm text-[#98A2B3]">Produk</div>
            <div className="flex flex-col gap-4 font-light">
              <a href="" className="text-sm hover:underline">
                About Us
              </a>
              <a href="" className="text-sm hover:underline">
                Careers
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <div className="font-bold mb-6 text-sm text-[#98A2B3]">
              Media Sosial
            </div>
            <div className="flex flex-col gap-4 font-light">
              <a href="" className="text-sm hover:underline">
                Twitter
              </a>
              <a href="" className="text-sm hover:underline">
                LinkedIn
              </a>
              <a href="" className="text-sm hover:underline">
                Github
              </a>
              <a href="" className="text-sm hover:underline">
                Dribble
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <div className="font-bold mb-6 text-sm text-[#98A2B3]">
              Legalitas
            </div>
            <div className="flex flex-col gap-4 font-light">
              <a href="" className="text-sm hover:underline">
                Terms
              </a>
              <a href="" className="text-sm hover:underline">
                Privacy
              </a>
              <a href="" className="text-sm hover:underline">
                Cookies
              </a>
              <a href="" className="text-sm hover:underline">
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-between gap-4 mt-5 text-[#98A2B3]">
          <div className="text-sm">
            <p>&copy; 2023 EDUSKILL</p>
          </div>
          <div className="flex gap-4 md:mr-10">
            <a href="" className="hover:scale-110 text-xl">
              <BsTwitter />
            </a>
            <a href="" className="hover:scale-110 text-xl">
              <BsLinkedin />
            </a>
            <a href="" className="hover:scale-110 text-xl">
              <BsFacebook />
            </a>
            <a href="" className="hover:scale-110 text-xl">
              <BsGithub />
            </a>
            <a href="" className="hover:scale-110 text-xl">
              <BsDribbble />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
