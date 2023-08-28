import React from "react";
import { useParams } from "react-router-dom";
import { RecomEdu } from "../../../Data"; // Import the data

const InCourses = () => {
  const { namelink } = useParams();

  // Find the course with the matching namelink
  const course = RecomEdu.find(course => course.namelink === namelink);

  if (!course) {
    return <div>Course not found</div>;
  }

  // Display detailed course information
  return (
    <div id="incourses">
      {/* Display course details */}
      Course Title: {course.title}
      {/* Display other course details here */}
    </div>
  );
};

export default InCourses;
