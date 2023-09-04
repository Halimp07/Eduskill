import React, { useState } from "react";
import {
  BsPlayCircle,
  BsPlayFill,
  BsChevronLeft,
  BsBookmark,
  BsFillBookmarkFill,
  BsCardText,
} from "react-icons/bs";
import { FaRegShareSquare } from "react-icons/fa";
import { BiVolumeFull } from "react-icons/bi";

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
            <img
              src={cover}
              alt="Video Cover"
              className="rounded-2xl w-full h-[407px] object-cover"
            />
            <div className="absolute top-2 left-0 my-5 ml-6">
              <BsChevronLeft className="w-8 h-8 text-white" />
            </div>
            <div
              className="absolute top-2 right-0 my-5 mr-6 cursor-pointer"
              onClick={toggleBookmark}
            >
              {isBookmarked ? (
                <BsFillBookmarkFill className="w-8 h-8 text-white" />
              ) : (
                <BsBookmark className="w-8 h-8 text-white" />
              )}
            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <BsPlayCircle
                className="w-16 h-16 text-white hover:text-Orange_Primary cursor-pointer"
                onClick={togglePlay}
              />
            </div>

            <div className="absolute left-0 right-0 mx-48 bottom-4 rounded-lg">
              <div
                className="h-2 my-2 rounded-lg  bg-Orange_Primary"
              ></div>
            </div>
              <div className="absolute bottom-4 left-0 ml-6 flex space-x-5 items-center text-white">
                <div className="text-md">
                  {Math.floor(currentTime / 60)}:
                  {Math.floor(currentTime % 60)
                    .toString()
                    .padStart(2, "0")}
                  &nbsp;/&nbsp;
                  {Math.floor(duration / 60)}:
                  {Math.floor(duration % 60)
                    .toString()
                    .padStart(2, "0")}
                </div>
                <BsPlayFill className="w-6 h-6" />
              </div>
              <div className="absolute right-0 bottom-4 mr-6 flex space-x-6  text-white">
                <BiVolumeFull className="w-6 h-6" />
                <BsCardText className="w-6 h-6" />
                <FaRegShareSquare className="w-6 h-6" />
              </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoComponent;
