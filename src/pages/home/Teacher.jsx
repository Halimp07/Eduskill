import React from "react";
// import { accordions } from "../../Data";
// import Accordion from "./Accordion";
import Circular from "../../components/container/CircularImg/CircularImg";

const Teacher = () => {
  return (
    <div className="section mx-auto pt-0 md:pb-24 pb-2" id="teacher">
      <div className="flex flex-col justify-center items-center mt-20">
        <p className="font-semibold text-sm mb-2 text-center md:text-sm md:mb-2 text-Orange_Primary">
          Tutor{" "}
        </p>{" "}
        <h1 className="font-semibold text-xl text-center md:text-3xl">
          Para Mentor{" "}
        </h1>{" "}
        <p className="md:text-base md:mx-48 text-xs text-[#667085] text-md mb-2 mt-3 text-center  font-light">
          Di EDUSKILL, instruktur dari seluruh dunia mengajar jutaan siswa. Kami
          menawarkan pengetahuan dan kemampuan.
        </p>{" "}
      </div>
      <Circular /> {/* Include the Circular component here */}
      {/* <div className="mt-12 max-w-[700px] mx-auto">
        {accordions.map((accordion) => {
          return <Accordion key={accordion.id} {...accordion} />;
        })}
      </div> */}
    </div>
  );
};

export default Teacher;
