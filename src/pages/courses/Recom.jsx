import React from "react";
import ClassRecom from "./ClassRecom"; // Adjust the path as needed
import { recomEdu } from "@/Data";

const Recom = () => {
  return (
    <div className="container mx-auto pt-12 pb-12" id="recom">
      {/* Render all recommendations */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {recomEdu.map(course => (
          <div key={course.id}>
            <ClassRecom {...course} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recom;
