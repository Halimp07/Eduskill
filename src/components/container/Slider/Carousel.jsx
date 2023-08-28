import React, { useState } from "react";
import { RxDotFilled, RxCaretRight, RxBorderSolid } from "react-icons/rx";
import { motion } from "framer-motion";

import icon1 from "../../../assets/icon_1_eduskill.svg";
import icon2 from "../../../assets/icon_2_eduskill.svg";
import icon3 from "../../../assets/icon_3_eduskill.svg";

function Carousel() {
  const slides = [
    {
      title: "Pengalaman Pengguna",
      description:
        "Pelajaran tentang desain yang mencakup perkembangan terbaru.",
      icon: icon1,
      link: "https://google.com",
    },
    {
      title: "Pengembangan Web",
      description:
        "Kelas dalam pengembangan yang mencakup kemajuan terbaru dalam web.",
      icon: icon2,
      link: "https://linkedin.com",
    },
    {
      title: "Pemasaran",
      description: "Kursus pemasaran yang mencakup tren pemasaran terbaru.",
      icon: icon3,
      link: "/testing",
    },
    {
      title: "Belly",
      description:
        "Kelas dalam pengembangan yang mencakup kemajuan terbaru dalam web.",
      icon: icon2,
      link: "/belly",
    },
  ];

  const [startIndex, setStartIndex] = useState(1);

  const goToSlide = (slideIndex) => {
    const normalizedIndex = (slideIndex + slides.length) % slides.length;
    setStartIndex(normalizedIndex + 1);
  };

  const visibleSlides = [
    ...slides.slice(startIndex - 1),
    ...slides.slice(0, startIndex - 1),
  ].slice(0, window.innerWidth >= 1060 ? 3 : 2);

  return (
    <div className="relative">
      <p className="font-semibold text-sm mb-2 text-center md:text-sm md:mb-2 text-Orange_Primary">
        Pelayanan Kami
      </p>{" "}
      <h1 className="font-semibold text-xl mb-10 text-center md:text-3xl md:mb-10 md:mx-56">
        Membina lingkungan belajar yang menyenangkan & menarik
      </h1>{" "}
      <div className="mt-4 grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-2 md:gap-8">
        {visibleSlides.map((slide, slideIndex) => (
          <div
            key={startIndex + slideIndex}
            className={`flex items-center p-2 rounded-md md:p-4 ${
              slideIndex === 0
                ? "bg-Orange_Primary text-white"
                : "bg-white border border-black border-opacity-20"
            }`}
          >
            {/* Icon, Title, and Description */}
            <div className="flex flex-col">
              <div className="flex items-center mb-2">
                <img
                  src={slide.icon}
                  alt="Icon"
                  className="hidden w-4 h-6 mr-2 md:w-6 md:inline md:h-6 md:mr-2"
                />
                <h2
                  className={`md:text-lg md:mr-0 md:font-semibold text-extra-mini mr-20 leading-tight ${
                    slideIndex === 0 ? "text-white" : "text-black"
                  }`}
                >
                  {slide.title}
                </h2>
              </div>
              <p
                className={` ${
                  slideIndex === 0 ? "text-white" : "text-black"
                } md:text-extra-mini md:mr-12 text-tiny mr-3`}
              >
                {slide.description}
              </p>
              <div
                className={`flex items-center pt-4 ${
                  slideIndex === 0 ? "text-white" : "text-black"
                }`}
              >
                <a
                  href={slide.link}
                  className={`text-xs mr-1 font-medium ${
                    slideIndex === 0 ? "text-white" : "text-black"
                  } md:text-extra-mini md:mr-2 text-extra-mini mr-3`}
                >
                  Selengkapnya
                </a>
                <RxCaretRight
                  className="text-xs"
                  style={{ fontSize: "18px" }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-4">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`cursor-pointer transition-transform transform ${
              slideIndex + 1 === startIndex ? "" : ""
            }`}
          >
            {slideIndex + 1 === startIndex ? (
              <RxBorderSolid
                className={`dot-icon ${
                  slideIndex + 1 === startIndex
                    ? "active-dot text-Orange_Primary "
                    : ""
                }`}
                strokeWidth={3} // Set the strokeWidth as needed
                size={30} // Set the size as needed
              />
            ) : (
              <RxDotFilled
                className={`dot-icon ${
                  slideIndex + 1 === startIndex
                    ? "active-dot text-Orange_Primary "
                    : ""
                }`}
                size={24} // Set the size as needed
                color="#D9D9D9" // Set the color to orange
              />
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center mt-20">
        <p className="font-semibold text-sm mb-2 text-center md:text-sm md:mb-2 text-Orange_Primary">
          Pelayanan Kami
        </p>{" "}
        <h1 className="font-semibold text-xl md:mb-10 mb-4 text-center md:text-3xl">
          Masih binggung ingin mempelajari apa??{" "}
        </h1>{" "}
        <p className="text-md mb-2 md:mt-6 md:mx-48 text-center text-Black_Primary font-light">
          Ikuti{" "}
          <span className="text-Orange_Primary font-semibold">
            {" "}
            Tes Minat Bakat{" "}
          </span>{" "}
          untuk membantu anda dalam menemukan jalur yang sesuai dengan potensi,
          serta memberikan arahan dalam memilih pendidikan atau pekerjaan yang
          sesuai dengan minat dan bakat yang dimiliki.{" "}
        </p>{" "}
        <motion.form
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <button className="bg-Orange_Primary text-white py-2 px-6 mt-6 text-extra-mini font-semibold border rounded-md border-opacity-30 hover:bg-white hover:text-black hover:border-Orange_Primary transition-all">
            Ikuti Test!
          </button>
        </motion.form>
      </div>
    </div>
  );
}

export default Carousel;
