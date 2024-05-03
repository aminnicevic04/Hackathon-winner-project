import { InstructorCourseListProps } from "@/types/courses/InstructorCourseCard";
import React from "react";
import InstructorCourseCard from "./InstructorCourseCard";

const InstructorCoursesList: React.FC<InstructorCourseListProps> = ({
  courses,
}) => {
  return (
    <ul className="flex flex-col gap-2">
      {courses?.length > 0 &&
        courses?.map((course) => (
          <InstructorCourseCard
            key={course.id}
            id={course.id}
            title={course.title}
            description={course.description}
            image={course.image}
          />
        ))}
    </ul>
  );
};

export default InstructorCoursesList;
