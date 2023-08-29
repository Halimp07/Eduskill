import React from "react";

const VideoComponent = ({ videoUrl }) => {
  return (
    <div>
      {/* Replace with your video player or content */}
      <iframe
        width="560"
        height="315"
        src={videoUrl}
        title="Course Video"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoComponent;
