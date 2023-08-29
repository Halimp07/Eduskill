import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { classEdu } from "../../../Data";
import VideoComponent from "./VideoComponent";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"; // Import the heart icons from react-icons library

const InCourses = () => {
  const { namelink } = useParams();

  const course = classEdu.find((course) => course.namelink === namelink);

  if (!course) {
    return <div>Course not found</div>;
  }

  const videoId = course.video && course.video.match(/v=([^&]+)/)[1];
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : null;

  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  return (
    <div className="md:section container mx-auto pt-12 pb-24 px-6" id="incourses">
      <div className="text-start">
        <p className="font-semibold text-sm mb-2 md:text-sm md:mb-2 text-Orange_Primary">Jelajahi Kelas</p>
        <h1 className="font-semibold text-xl md:text-3xl md:mb-2 ">{course.title}</h1>
        <p className="font-normal text-base text-[#667085] ">Mari bergabung dengan kelas terkenal kami, ilmu yang diberikan pasti akan bermanfaat bagi Anda.</p>
      </div>

      <div className="mt-8">
        <div className="flex items-center mb-4">
          {isFavorite ? (
            <AiFillHeart className="text-Orange_Primary text-xl mr-2 cursor-pointer" onClick={toggleFavorite} />
          ) : (
            <AiOutlineHeart className="text-Orange_Primary text-xl mr-2 cursor-pointer" onClick={toggleFavorite} />
          )}
          <h2 className="font-semibold text-lg">{course.title}</h2>
        </div>
        
        {/* {course.cover && <img src={course.cover} alt="Video Cover" className="w-full mb-4" />} */}

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
