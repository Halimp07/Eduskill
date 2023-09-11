import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { classEdu, learn, videoLearn } from "@/Data";
import VideoComponent from "./VideoComponent";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const InCourses = () => {
  const { namelink } = useParams();
  const navigate = useNavigate();

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

  const [activeDot, setActiveDot] = useState(0); // Set the activeDot to 0 in InCourses
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
      const iconKey = `dot-${i}`; // Unique key
      if (isActive) {
        icons.push(
          <RxDotFilled
            key={iconKey}
            className={`w-6 h-6 text-Orange_Primary`}
            onClick={() => handleDotClick(i)}
          />
        );
      } else {
        icons.push(
          <RxDotFilled
            key={iconKey}
            className={`w-6 h-6 ${iconColor}`}
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
    navigate(`/courses/${namelink}`);
  };

  const handleRightChevronClick = () => {
    setRightChevronClicked(true);
    setLeftChevronClicked(false);
    setRightChevronColor("bg-Orange_Primary text-white");
    setLeftChevronColor("bg-[#F1F1F1] text-black");

    // Update the activeDot state to 1 (index 1)
    setActiveDot(1); // Set activeDot to 1

    // Pass activeDot as a URL parameter
    navigate(`/courses/${namelink}/test?activeDot=1`);
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
        <div className="relative md:flex md:justify-between md:items-center ">
          <div className="justify-start">
            <p className="font-normal text-sm text-[#667085]">
              Mari bergabung dengan kelas terkenal kami, ilmu yang diberikan
              pasti akan bermanfaat bagi Anda.
            </p>
          </div>
          <div className="md:mt-0 mt-2 flex md:items-end items-center">
            <div className="flex flex-grow justify-end md:justify-start md:mr-auto mx-2 -space-x-3">
              {renderRxDotFilledIcons()}
            </div>
            <div className="relative flex">
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

      <div className="md:flex md:mt-14 mt-7">
        <div className="text-left flex-grow">
          <h3 className="md:text-xl text-lg text-start font-semibold text-[#333333]">
            Rekomendasi Pembelajaran Lainnya
          </h3>
          <div className="md:flex md:flex-grow md:space-x-3 md:text-left">
          {learn.map((item) => (
              <Link key={item.id} to={`/courses/${item.namelink}`}>
                {/* Wrap the content you want to make clickable */}
                <div>
                  <img
                    className="w-[240px] h-[145px] md:mx-0"
                    src={item.image}
                    alt={item.title}
                  />
                  <h3 className="font-semibold text-sm text-[#868686]">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="text-left md:mt-0 mt-4">
          <h3 className="md:text-xl text-lg text-start font-semibold text-[#333333]">
            Pembelajaran
          </h3>
          {videoLearn.map((item) => (
            <div key={item.id} className="flex items-center my-3">
              <div className="text-3xl font-medium text-Orange_Primary mx-4">
                {item.icons}
              </div>
              <div className="ml-2 mr-5">
                <h3 className="text-sm font-medium text-black opacity-60">
                  {item.title}
                </h3>
                <h3 className="text-mini font-medium text-black opacity-50 mt-1">
                  {item.subtitle}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InCourses;
