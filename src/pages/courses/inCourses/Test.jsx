import React from "react";
import { taskLearn } from "@/Data"; // Adjust the import path as needed

const Test = () => {
  return (
    <div className="md:section container mx-auto pt-24 pb-24 px-6" id="test">
      <div className="text-start">
        <p className="font-semibold text-sm mb-2 md:text-sm md:mb-2 text-Orange_Primary">
          Test Pembelajaran
        </p>
        <h1 className="font-semibold text-xl md:text-3xl md:mb-2">
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
      <div className="mt-7">
        <h1 className="font-semibold text-xl md:text-2xl text-[#333333] ">
          Tugas Saya
        </h1>
        <div className="mt-4">
          {taskLearn.map((task) => (
            <div key={task.id}>
              {task.items.map((item, index) => (
                <div key={index} className="flex">
                  <div className="flex space-y-3">
                    <div
                      className={`flex items-center text-4xl ${
                        index === 0 ? "text-[#20B486]" : "text-[#FF9B26]"
                      }`}
                    >
                      {item.icons}
                    </div>
                    <div className="ml-6">
                      <h3 className="font-semibold text-[#757575]">{item.title}</h3>
                      <h3 className="mt-1 text-sm text-[#8C8C8C]">{item.subtitle}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Test;
