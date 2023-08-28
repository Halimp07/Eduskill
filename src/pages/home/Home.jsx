import React from "react";
import hero from "../../assets/hero_eduskill.png";
import { bg_eduskill_1 } from "../../Data";
import {
  logos,
  focus,
  bg_eduskill_2,
  layers_1,
  layers_2,
  layers_3,
} from "../../Data";
import { motion } from "framer-motion";
import { Services, Review, Classes, Teacher } from "../../index"; // Adjust the import paths accordingly

const Home = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  // const selectedId = "career_oriented"; // Replace with the desired id
  // const selectedItem = focus.find((item) => item.id === selectedId);

  return (
    <div className="md:section container mx-auto pt-12 pb-24 px-6 " id="home">
      <img
        src={bg_eduskill_1}
        alt=""
        className="absolute bg-no-repeat z-0 bottom-0 w-[20rem] top-14 left-0 right-0 lg:w-[25rem] lg:top-20 lg:left-24 lg:right-0 md:w-[25rem] md:top-20 md:left-24 md:right-0"
      />
      <div className="md:flex items-center justify-center relative">
        {/* First Column */}
        <div className="md:w-1/2 mt-28 md:mb-32 relative z-10">
          <div className="sm:text-[2.5rem] text-[1.825rem] font-bold">
            Upgrade <span className="text-Orange_Primary">Skillmu</span> <br />{" "}
            Bersama <span className="text-Orange_Primary">EDUSKILL</span>
          </div>
          <p className="text-sm leading-7 text-gray max-w-md">
            Eduskill Menyediakan Kelas Design, Web Development, Business Plan
            Yang Cocok Untuk Mahasiswa Maupun Pemula
          </p>
          <div className="mt-6">
            <button className="px-6 py-3 font-bold text-white bg-Orange_Primary rounded-lg text-sm">
              Daftar
            </button>
            <button className="px-6 py-3 font-bold text-Orange_Teritiary bg-[#F4EBFF] rounded-lg text-sm ml-4">
              CS Admin
            </button>
            <div className="mt-10 relative z-10">
              <div className="grid grid-cols-3 md:grid md:grid-cols-3 gap-2 md:gap-4">
                {focus.map((item) => (
                  <div
                    className="md:flex md:items-center md:justify-start gap-2 md:gap-2"
                    key={item.id}
                  >
                    <img
                      src={item.image}
                      alt="Selected Image"
                      className="md:w-5 md:mx-0 md:h-auto w-5 mx-auto"
                    />
                    <div>
                      <p className="md:text-mini md:mt-0 md:text-left text-center text-extra-mini mt-2 font-normal">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Second Column */}

        <div className="md:flex items-center justify-center relative">
          {/* First Div */}
          <div className="relative  ">
            <img
              src={hero}
              alt=""
              className="w-52 mx-auto mt-8 md:w-full md:h-auto z-10"
            />
          </div>
          <div className="md:w-full absolute">
            <img
              src={bg_eduskill_2}
              alt=""
              className="md:w-4/6 absolute top-4 -right-16 z-10"
            />
            <img
              src={layers_1}
              alt=""
              className="md:w-5/12 absolute -bottom-0 -right-10 z-10"
            />
            <img
              src={layers_2}
              alt=""
              className="md:w-6/12 absolute -bottom-14 -left-20 z-10"
            />
            <img
              src={layers_3}
              alt=""
              className="md:w-5/12 absolute top-32 -right-0 z-10"
            />
          </div>
        </div>
      </div>

      <div class="flex flex-col pt-6 md:flex-row items-center justify-center md:justify-start">
        <div class="md:mt-0 mr-0 md:mr-16 text-center md:text-left mb-4 md:mb-0">
          <p class="font-bold text-2xl md:text-xl text-Orange_Primary">10+</p>
          <p class="text-2xl md:text-xl">Collaborations</p>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex items-center justify-center md:justify-center flex-wrap gap-16 pt-4 md:pt-0"
        >
          {logos.map((logo, index) => (
            <motion.div variants={item} className="w-9" key={index}>
              <img src={logo} alt="" className="w-full object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Services/>
      <Review />
      <Classes />
      <Teacher />
    </div>
  );
};

export default Home;
