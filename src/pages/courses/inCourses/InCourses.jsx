import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { classEdu } from "../../../Data";
import VideoComponent from "./VideoComponent";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const InCourses = () => {
  const { namelink } = useParams();

  const course = classEdu.find((course) => course.namelink === namelink);

  if (!course) {
    return <div>Course not found</div>;
  }

  const videoId = course.video && course.video.match(/v=([^&]+)/)[1];
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : null;

  return (
    <div className="md:section container mx-auto pt-12 pb-24 px-6" id="incourses">
      <div className="text-start">
        <p className="font-semibold text-sm mb-2 md:text-sm md:mb-2 text-Orange_Primary">Jelajahi Kelas</p>
        <h1 className="font-semibold text-xl md:text-3xl md:mb-2 ">{course.title}</h1>
        <div className="relative flex items-center">
  <div className="items-center justify-start ">
    <p className="font-normal text-base text-[#667085]">
      Mari bergabung dengan kelas terkenal kami, ilmu yang diberikan pasti akan bermanfaat bagi Anda.
    </p>
  </div>

  <div className="flex items-center ml-auto"> {/* Use ml-auto to push the following elements to the right */}
    <div className="relative flex items-center">
      <div className="absolute right-0 w-16 h-8 bg-[#F1F1F1] rounded-2xl flex items-center justify-start">
        <BsChevronLeft className="w-5 h-5" />
      </div>
      <div className="absolute right-0 w-8 h-8 bg-Orange_Primary rounded-2xl flex items-center justify-center">
        <BsChevronRight className="w-5 h-5 text-white" />
      </div>
    </div>
  </div>
</div>


      </div>

      <div className="mt-8">
        {embedUrl ? (
          <div className="mt-8">
            <VideoComponent videoUrl={embedUrl} cover={course.cover} />
          </div>
        ) : (
          <div>No video available for this course.</div>
        )}
      </div>
    </div>
  );
};

export default InCourses;
