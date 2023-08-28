import React, { useState } from "react";
import { RxDotFilled, RxBorderSolid } from "react-icons/rx";
import ClassCourse from "./ClassCourse"; // Adjust the path as needed
import { classEdu } from "../../Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Recom from "./Recom";

const Courses = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const coursesPerSlide =
    window.innerWidth >= 1024 ? 6 : window.innerWidth >= 768 ? 2 : 1; // Number of courses to show per slide
  const totalCourses = classEdu.length;

  const goToSlide = (slideIndex) => {
    setActiveIndex(slideIndex);
  };

  const visibleCourses = [];
  for (
    let i = activeIndex;
    visibleCourses.length < coursesPerSlide;
    i = (i + 1) % totalCourses
  ) {
    visibleCourses.push(classEdu[i]);
  }

  return (
    <div className="container mx-auto pt-24 pb-12 px-6 " id="courses">
      <div className="text-start">
        <p className="font-semibold text-sm mb-2 md:text-sm md:mb-2 text-Orange_Primary">
          Jelajahi Kelas{" "}
        </p>{" "}
        <h1 className="font-semibold text-xl md:text-3xl md:mb-2 ">
          Kelas Popular Kami{" "}
        </h1>{" "}
      </div>
      <div className="mt-4 overflow-x-hidden w-full relative">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {visibleCourses.map((course, index) => (
            <div key={course.id}>
              <ClassCourse {...course} />
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-4">
          {Array.from({
            length: Math.ceil(totalCourses / coursesPerSlide) + 1, // Adding 1 to the length
          }).map((_, slideIndex) => (
            <div
              key={slideIndex}
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
      </div>
      <Recom />
    </div>
  );
};
export default Courses;
