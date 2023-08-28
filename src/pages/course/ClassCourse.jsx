import React from "react";
import { AiFillStar, AiOutlineArrowUp } from "react-icons/ai";

const ClassCourse = ({
  image,
  category,
  title,
  description,
  participants,
  rating,
  teacher,
  heroes,
  price,
  year,
  discount,
}) => {
  const ratingInteger = Math.floor(rating);
  const ratingFraction = rating - ratingInteger;

  const yellowStars = Array.from({ length: ratingInteger }, (_, index) => (
    <AiFillStar key={index} className="text-Orange_Primary text-xs mr-1" />
  ));

  let grayStars = null;

  if (ratingFraction > 0 && ratingFraction < 1) {
    grayStars = <AiFillStar key="gray" className="text-xs mr-1" />;
  }

  return (
    <div className="p-3 m-1 shadow-xl min-w-[15rem] bg-white rounded-md">
      <img src={image} alt="" />
      <div className="mt-8 text-xs text-Orange_Primary">{category}</div>
      <div className="text-xl text-[#101828] mt-2 font-bold flex justify-between items-center">
        {title}
        <AiOutlineArrowUp className="rotate-45" />
      </div>
      <p className="text-sm text-[#667085] text-gray-600 mt-2">{description}</p>
      <div className="flex items-center mt-2">
        <div className="flex items-center gap-1">
          <span className="text-Orange_Primary text-extra-mini font-bold">
            {rating}
          </span>
          {yellowStars}
          {grayStars}
        </div>
        <div className="text-extra-mini font-light ml-2">{participants}</div>
      </div>
      <div className="flex justify-between items-center mt-6">
  <div className="flex items-center">
    <img src={heroes} alt="Hero" className="w-8 h-8" />
    <div className="ml-2 flex flex-col">
      <div className="font-semibold text-sm">{teacher}</div>
      <div className="text-xs font-light text-[#667085]">{year}</div>
    </div>
  </div>
  {discount === "FREE" ? (
    <div className="text-2xl text-Orange_Primary font-bold">
      {price !== "FREE" ? <>Rp{price} </> : null}
      <span className="text-[#333333] opacity-30">- FREE</span>
    </div>
  ) : (
    <div className="text-2xl text-Orange_Primary font-bold">
      {price !== "FREE" ? <>Rp{price} </> : null}
      {discount}
    </div>
  )}
</div>
    </div>
  );
};

export default ClassCourse;
