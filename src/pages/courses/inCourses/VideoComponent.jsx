import React, { useState } from "react";
import { BsPlayCircle, BsPlayFill, BsChevronLeft, BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { FaRegShareSquare } from "react-icons/fa";

const VideoComponent = ({ videoUrl, cover }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0); // State to track current time

  const togglePlay = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const toggleBookmark = () => {
    setIsBookmarked((prevIsBookmarked) => !prevIsBookmarked);
  };

  const handleVideoLoad = (event) => {
    const videoElement = event.target;
    setDuration(videoElement.duration);
  };

  const handleTimeUpdate = (event) => {
    const videoElement = event.target;
    setCurrentTime(videoElement.currentTime);
  };

  return (
    <div>
      <div className="video-container relative">
        {isPlaying ? (
          <iframe
            className="h-[439px] w-[100%]"
            src={videoUrl}
            title="Course Video"
            allowFullScreen
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            onLoadedMetadata={handleVideoLoad}
            onTimeUpdate={handleTimeUpdate}
          ></iframe>
        ) : (
          <div className="relative">
            <img src={cover} alt="Video Cover" className="rounded-2xl w-full h-[407px] object-cover" />
            <div className="absolute top-2 left-0 my-5 ml-6">
              <BsChevronLeft className="w-8 h-8 text-white" />
            </div>
            <div className="absolute top-2 right-0 my-5 mr-6 cursor-pointer" onClick={toggleBookmark}>
              {isBookmarked ? (
                <BsFillBookmarkFill className="w-8 h-8 text-white" />
              ) : (
                <BsBookmark className="w-8 h-8 text-white" />
              )}
            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <BsPlayCircle className="w-16 h-16 text-white hover:text-Orange_Primary cursor-pointer" onClick={togglePlay}/>
            </div>
            <div className="absolute flex space-x-5 items-center left-0 bottom-4 ml-6">
              <div className="text-white">
                {Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60).toString().padStart(2, "0")}
                &nbsp;/&nbsp;
                {Math.floor(duration / 60)}:{Math.floor(duration % 60).toString().padStart(2, "0")}
              </div>
              <BsPlayFill className="text-white w-8 h-8" />
            </div>
            <div className="absolute flex space-x-5 items-center right-0 bottom-4 mr-6">
              <FaRegShareSquare className="text-white w-5 h-5" />
            </div>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoComponent;
