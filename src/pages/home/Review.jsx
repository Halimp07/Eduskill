import React, { useState } from "react";
import Logo from "@/assets/logo_eduskill.png";
import { reviewsEdu } from "@/Data"; // Import the reviewsEdu data
import { RxDotFilled, RxBorderSolid } from "react-icons/rx";

function Review() {
  const [startIndex, setStartIndex] = useState(0);

  const visibleReviews = [
    ...reviewsEdu.slice(startIndex),
    ...reviewsEdu.slice(0, startIndex),
  ].slice(0, 1);

  const goToReview = (reviewIndex) => {
    const normalizedIndex =
      (reviewIndex + reviewsEdu.length) % reviewsEdu.length;
    setStartIndex(normalizedIndex);
  };

  return (
    <div className="pt-0 pb-24" id="review">
      <div className="flex flex-col justify-center items-center">
        <img
          src={Logo} // Replace with your image URL
          alt="Review"
          className="md:w-64 w-36"
        />
        <h1 className="md:text-3xl md:mt-10 mt-2 md:mx-28 text-lg font-semibold text-center mb-2 ">
          Kursus sangat fantastis! Ini adalah platform Master bagi mereka yang
          ingin memulai karir baru, atau membutuhkan penyegaran.
        </h1>
      </div>
      <div className="grid grid-col mt-8">
        {visibleReviews.map((item, reviewIndex) => (
          <div key={item.id}>
            <div className="flex flex-col gap-4">
              <div className="relative rounded-full mx-auto">
                <img
                  src={item.image}
                  alt={`Image ${item.id}`}
                  className="object-cover md:w-full md:h-full w-16 h-16"
                />
              </div>
              <div className="text-center">
                <p className="font-semibold pt-2 md:text-base text-sm">
                  {item.name}
                </p>
                <p className="text-[#667085] font-light md:text-lg text-xs">
                  {item.study}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center md:mt-24 mt-12">
        {reviewsEdu.map((item, reviewIndex) => (
          <div
            key={reviewIndex}
            onClick={() => goToReview(reviewIndex)}
            className={`cursor-pointer transition-transform transform  ${
              reviewIndex === startIndex ? "" : ""
            }`}
          >
            {reviewIndex === startIndex ? (
              <RxBorderSolid
                className={`dot-icon ${
                  reviewIndex === startIndex
                    ? "active-dot text-Orange_Primary "
                    : ""
                }`}
                strokeWidth={3}
                size={30}
              />
            ) : (
              <RxDotFilled
                className={`dot-icon ${
                  reviewIndex === startIndex
                    ? "active-dot text-Orange_Primary "
                    : ""
                }`}
                size={24}
                color="#D9D9D9"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review;
