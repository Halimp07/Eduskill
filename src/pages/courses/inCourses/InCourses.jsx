import React from "react";
import { useParams } from "react-router-dom";
import { classEdu } from "../../../Data"; // Import the data
import VideoComponent from "./VideoComponent"; // Import video component

const InCourses = () => {
  const { namelink } = useParams();

  // Find the course with the matching namelink
  const course = classEdu.find((course) => course.namelink === namelink);

  if (!course) {
    return <div>Course not found</div>;
  }

  // Display detailed course information
  return (
    <div
      className="md:section container mx-auto pt-12 pb-24 px-6 "
      id="incourses"
    >
      {/* Display course details */}
      <div className="text-start">
        <p className="font-semibold text-sm mb-2 md:text-sm md:mb-2 text-Orange_Primary">
          Jelajahi Kelas
        </p>
        <h1 className="font-semibold text-xl md:text-3xl md:mb-2 ">
          {course.title}
        </h1>
        <p className="font-normal text-base text-[#667085] ">
          Mari bergabung dengan kelas terkenal kami, ilmu yang diberikan pasti
          akan bermanfaat bagi Anda.
        </p>
      </div>

      <div className="mt-8">
        <VideoComponent videoUrl={course.video} /> {/* Pass the video URL */}
      </div>

    </div>
  );
};

export default InCourses;
