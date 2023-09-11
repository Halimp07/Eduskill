import React, { useEffect } from "react";
import hero from "@/assets/hero_eduskill.png";
import { bg_eduskill_1 } from "@/Data";
import {
  logos,
  focus,
  bg_eduskill_2,
  layers_1,
  layers_2,
  layers_3,
} from "@/Data";
import { Services, Classes, Teacher } from "@/index"; 
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

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
    <div className="md:section container mx-auto pt-12 pb-24 px-6" id="home">
      <div className="md:flex items-center justify-center relative">
        {/* First Column */}
        <div className="md:w-1/2 mt-28 md:mb-32 relative z-10">
          <img
            data-aos="zoom-in"
            src={bg_eduskill_1}
            alt=""
            className="absolute bg-no-repeat z-0 bottom-0 w-[20rem] -left-16 -top-28 lg:w-[25rem] lg:top-0 lg:-left-28 md:w-[25rem] md:-top-32 md:-left-24"
          />
          <div
            data-aos="fade-right"
            data-aos-delay="300"
            className="sm:text-[2.5rem] text-[1.825rem] font-bold"
          >
            Upgrade <span className="text-Orange_Primary">Skillmu</span> <br />{" "}
            Bersama <span className="text-Orange_Primary">EDUSKILL</span>
          </div>
          <p
            data-aos="fade-right"
            data-aos-delay="500"
            className="text-sm leading-7 text-gray max-w-md"
          >
            Eduskill menyediakan kelas pemrograman yang di dukung dengan codereview dan di dukung dengan Mentorbot
          </p>
          <div className="mt-6">
            <button
              data-aos="zoom-in"
              data-aos-delay="600"
              className="px-6 py-3 font-bold text-white bg-Orange_Primary rounded-lg text-sm"
            >
              <a href="https://eduskill.mayar.link/pl/basic-web-development"></a>
              Daftar
            </button>
            <button
              data-aos="zoom-in"
              data-aos-delay="700"
              className="px-6 py-3 font-bold text-Orange_Teritiary bg-[#F4EBFF] rounded-lg text-sm ml-4"
            >
              <a href="https://wa.me/6281553546308?text=Saya%20memiliki%20kendala,%20yaitu...">
                CS Admin
              </a>
            </button>
            <div className="mt-10 relative z-10">
              <div className="grid grid-cols-3 md:grid md:grid-cols-3 gap-2 md:gap-4">
                {focus.map((item) => (
                  <div
                    data-aos="flip-down"
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
          <div
            data-aos="zoom-in-up"
            data-aos-delay="200"
            className="relative  "
          >
            <img
              src={hero}
              alt=""
              className="w-52 mx-auto mt-8 md:w-full md:h-auto z-10"
            />
          </div>
          <div className="md:w-full absolute">
            <img
              data-aos="zoom-in"
              data-aos-delay="600"
              src={bg_eduskill_2}
              alt=""
              className="md:w-4/6 absolute top-4 -right-16 z-10"
            />
            <img
              data-aos="zoom-in-left"
              data-aos-delay="600"
              src={layers_1}
              alt=""
              className="md:w-5/12 absolute -bottom-0 -right-10 z-10"
            />
            <img
              data-aos="zoom-in-right"
              data-aos-delay="600"
              src={layers_2}
              alt=""
              className="md:w-6/12 absolute -bottom-14 -left-20 z-10"
            />
            <img
              data-aos="zoom-in-left"
              data-aos-delay="500"
              src={layers_3}
              alt=""
              className="md:w-5/12 absolute top-32 -right-0 z-10"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-6 md:flex-row items-center justify-center md:justify-start">
        <div
          data-aos="fade-down"
          className="md:mt-0 mr-0 md:mr-16 text-center md:text-left mb-4 md:mb-0"
        >
          <p className="font-bold text-2xl md:text-xl text-Orange_Primary">
            10+
          </p>
          <p className="text-2xl md:text-xl">Collaborations</p>
        </div>
        <div className="flex items-center justify-center md:justify-center flex-wrap gap-16 pt-4 md:pt-0">
          {logos.map((logo, index) => (
            <div
              data-aos="flip-left"
              data-aos-delay="200"
              className="w-9"
              key={index}
            >
              <img src={logo} alt="" className="w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
      <Services />
      <Classes />
      <Teacher />
    </div>
  );
};

export default Home;
