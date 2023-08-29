import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const VideoComponent = ({ videoUrl, cover }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  return (
    <div>
      <div className="video-container">
        {isPlaying ? (
          <iframe
            className="h-[439px] w-[100%]"
            src={videoUrl}
            title="Course Video"
            frameBorder="0"
            allowFullScreen
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        ) : (
          <div className="relative w-full h-[439px] cursor-pointer" onClick={togglePlay}>
            <img src={cover} alt="Video Cover" className="w-full h-full object-cover" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <svg
                className="w-16 h-16 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12l-8 6V6l8 6z"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoComponent;
