import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { classEdu } from "@/Data";
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

  useEffect(() => {
    // Insert your script here
    (function (w, d, s, o, f, js, fjs) {
      w["botsonic_widget"] = o;
      w[o] =
        w[o] ||
        function () {
          (w[o].q = w[o].q || []).push(arguments);
        };
      (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
      js.id = o;
      js.src = f;
      js.async = 1;
      fjs.parentNode.insertBefore(js, fjs);
    })(
      window,
      document,
      "script",
      "Botsonic",
      "https://widget.writesonic.com/CDN/botsonic.min.js"
    );
    Botsonic("init", {
      serviceBaseUrl: "https://api.botsonic.ai",
      token: "e41575b1-8cb7-4f99-8388-943cacdd8d70",
    });
  }, []);

  const handleDotClick = (index) => {
    setActiveDot(index);
  };

  const handleNextDot = () => {
    setActiveDot((prevDot) => (prevDot === 4 ? 0 : prevDot + 1));
  };

  const handlePrevDot = () => {
    setActiveDot((prevDot) => (prevDot === 0 ? 4 : prevDot - 1));
  };

  const [activeDot, setActiveDot] = useState(0);
  const [leftChevronClicked, setLeftChevronClicked] = useState(false);
  const [rightChevronClicked, setRightChevronClicked] = useState(false); // Initially set to false
  const [leftChevronColor, setLeftChevronColor] = useState(
    "bg-[#F1F1F1] text-black"
  );
  const [rightChevronColor, setRightChevronColor] = useState(
    "bg-Orange_Primary text-white"
  );

  const renderRxDotFilledIcons = () => {
    const icons = [];
    const iconColor = "text-[#F1F1F1]"; // Default color
    for (let i = 0; i < 5; i++) {
      const isActive = i === activeDot;
      if (isActive) {
        icons.push(
          <RxDotFilled
            key={i}
            className={`w-5 h-5 text-Orange_Primary`}
            onClick={() => handleDotClick(i)}
          />
        );
      } else {
        icons.push(
          <RxDotFilled
            key={i}
            className={`w-5 h-5 ${iconColor}`}
            onClick={() => handleDotClick(i)}
          />
        );
      }
    }
    return icons;
  };

  const handleLeftChevronClick = () => {
    setLeftChevronClicked(true);
    setRightChevronClicked(false);
    setLeftChevronColor("bg-Orange_Primary text-white");
    setRightChevronColor("bg-[#F1F1F1] text-black");

    // Update the activeDot state to go to the previous dot
    setActiveDot((prevDot) => (prevDot === 0 ? 4 : prevDot - 1));
  };

  const handleRightChevronClick = () => {
    setRightChevronClicked(true);
    setLeftChevronClicked(false);
    setRightChevronColor("bg-Orange_Primary text-white");
    setLeftChevronColor("bg-[#F1F1F1] text-black");

    // Update the activeDot state to go to the next dot
    setActiveDot((prevDot) => (prevDot === 4 ? 0 : prevDot + 1));
  };

  return (
    <div
      className="md:section container mx-auto pt-24 pb-24 px-6"
      id="incourses"
    >
      <div className="text-start">
        <p className="font-semibold text-sm mb-2 md:text-sm md:mb-2 text-Orange_Primary">
          Jelajahi Kelas
        </p>
        <h1 className="font-semibold text-xl md:text-3xl md:mb-2 ">
          {course.title}
        </h1>
        <div className="relative flex items-center">
          <div className="items-center justify-start ">
            <p className="font-normal text-sm text-[#667085]">
              Mari bergabung dengan kelas terkenal kami, ilmu yang diberikan
              pasti akan bermanfaat bagi Anda.
            </p>
          </div>
          <div className="flex ml-auto">{renderRxDotFilledIcons()}</div>
          <div className="relative flex items-center">
            <div
              className={`right-0 w-16 h-8 rounded-2xl flex items-center justify-start ${leftChevronColor}`}
              onClick={handleLeftChevronClick}
              onMouseDown={() => setLeftChevronClicked(true)}
              onMouseUp={() => setLeftChevronClicked(false)}
              onMouseLeave={() => setLeftChevronClicked(false)}
            >
              <BsChevronLeft className="w-5 h-5" />
            </div>
            <div
              className={`absolute right-0 w-8 h-8 rounded-2xl flex items-center justify-center ${rightChevronColor}`}
              onClick={handleRightChevronClick}
              onMouseDown={() => setRightChevronClicked(true)}
              onMouseUp={() => setRightChevronClicked(false)}
              onMouseLeave={() => setRightChevronClicked(false)}
            >
              <BsChevronRight className="w-5 h-5" />
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
      <div className="mt-10"></div>
    </div>
  );
};

export default InCourses;
