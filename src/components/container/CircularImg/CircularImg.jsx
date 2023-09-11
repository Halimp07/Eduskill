import React from "react";
import { circleTeacher } from "@/Data"; // Import the circleTeacher data

const CircularImg = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
      {/* Center the content */}
      {circleTeacher.map((item, index) => (
        <div key={item.id} className="w-full">
          <div className="flex flex-col md:gap-4 gap-2 items-center">
            <div className="relative mx-auto">
              <img
                src={item.image}
                alt={`Image ${item.id}`}
                className="object-cover rounded-full md:w-24 md:h-24 w-16 h-16"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold md:text-base text-sm">{item.name}</p>
              <p
                className={`text-Orange_Teritiary md:text-base text-sm ${
                  index === 2 ? "my-3" : ""
                }`}
              >
                {item.job}
              </p>
              <p
                className={`text-[#667085] md:mx-3 md:text-sm text-xs ${
                  index === 2 ? "mt-0 md:mb-5 mb-2" : ""
                }`}
              >
                {item.position}
              </p>
            </div>
            <div className="flex gap-2 text-[#667085] justify-center">
              {" "}
              {/* Center the icons */}
              {item.icons &&
                item.icons.map((icon, index) => <div key={index}>{icon}</div>)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Circular = () => {
  return (
    <div className="section mx-auto pt-0 pb-24 px-6" id="circular">
      <CircularImageUploader />
    </div>
  );
};

export default CircularImg;
