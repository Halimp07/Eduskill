import React from "react";
import Carousel from "@/components/container/Slider/Carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
  return (
    <div className="mx-auto pt-0 pb-20 md:pt-8" id="services">
      <Carousel />
    </div>
  );
};

export default Services;
