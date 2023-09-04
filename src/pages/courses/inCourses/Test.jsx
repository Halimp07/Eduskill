import React from "react";

const Test = () => {
  return (
    <div
      className="md:section container mx-auto pt-24 pb-24 px-6"
      id="test"
    >
      <div className="text-start">
        <p className="font-semibold text-sm mb-2 md:text-sm md:mb-2 text-Orange_Primary">
          Test Pembelajaran
        </p>
        <h1 className="font-semibold text-xl md:text-3xl md:mb-2 ">
          Mengenal HTML CSS untuk Pemula
        </h1>
        <div className="relative flex items-center">
          <div className="justify-start">
            <p className="font-normal text-sm text-[#667085]">
              Kerjakan tugas dengan benar, ilmu yang diberikan pasti akan
              bermanfaat...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
