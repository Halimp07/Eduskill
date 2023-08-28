import React, { useState } from "react";
import Slider from "react-slick";
import { RxDotFilled, RxBorderSolid } from "react-icons/rx";
import { motion } from "framer-motion";
import Class from "./Class"; // Adjust the path as needed
import { courses } from "../../../Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Classes = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Set activeIndex to 0

  const coursesPerSlide =
    window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1; // Number of courses to show per slide
  const totalCourses = courses.length;

  const goToSlide = (slideIndex) => {
    setActiveIndex(slideIndex);
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: coursesPerSlide,
    slidesToScroll: coursesPerSlide,
    initialSlide: activeIndex, // Set the initialSlide to the activeIndex
    beforeChange: (current, next) => {
      setActiveIndex(next); // Update activeIndex before the slide changes
    },
  };

  const visibleCourses = [];
  for (
    let i = activeIndex;
    visibleCourses.length < coursesPerSlide;
    i = (i + 1) % totalCourses
  ) {
    visibleCourses.push(courses[i]);
  }

  return (
    <div className="container mx-auto pt-8 pb-0 " id="classes">
      <div className="text-start">
        <p className="font-semibold text-sm mb-2 md:text-sm md:mb-2 text-Orange_Primary">
          Jelajahi Kelas{" "}
        </p>{" "}
        <h1 className="font-semibold text-xl md:text-3xl md:mb-2 ">
          Kelas Popular Kami{" "}
        </h1>{" "}
        <p className="font-normal text-base  text-[#667085] ">
          Mari bergabung dengan kelas terkenal kami, ilmu yang diberikan pasti
          akan bermanfaat bagi Anda.{" "}
        </p>{" "}
      </div>
      <div className="mt-4 overflow-x-hidden w-full relative">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2">
          {visibleCourses.map((course, index) => (
            <div key={course.id}>
              <Class {...course} />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-4">
          {courses.map((course, slideIndex) => (
            <div
              key={course.id}
              onClick={() => goToSlide(slideIndex)}
              className={`cursor-pointer transition-transform transform ${
                slideIndex === activeIndex ? "active" : ""
              }`}
            >
              <div
                className={`dot-container ${
                  slideIndex === 0 ? "main-dot" : ""
                }`}
              >
                {slideIndex === activeIndex ? (
                  <RxBorderSolid
                    className="dot-icon active-dot text-Orange_Primary"
                    strokeWidth={3}
                    size={30}
                  />
                ) : (
                  <RxDotFilled className="dot-icon" size={24} color="#D9D9D9" />
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-6">
          <motion.form
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button className="bg-[#F9FAFB] text-black py-2 px-4 text-extra-mini font-semibold rounded-md border border-[#D0D5DD] border-opacity-30 hover:bg-Orange_Primary hover:text-white hover:border-none transition-all">
              Jelajahi Kelas Lainnya{" "}
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Classes;
