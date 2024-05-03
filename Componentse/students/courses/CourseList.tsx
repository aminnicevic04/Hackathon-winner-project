import React from "react";
import CourseItem from "./CourseItem";
import { CourseCardProps } from "@/types/courses/CourseInfoTypes";

export type CourseListProps = {
  courses: CourseCardProps[];
  filterData: any;
};

const CourseList: React.FC<CourseListProps> = ({ courses, filterData }) => {
  console.log("Filter Data:", filterData);
  console.log("Courses:", courses);

  if (!courses || !Array.isArray(courses)) {
    return <div>Loading...</div>; // Handle loading state
  }

  const filteredCourses = courses.filter((course) => {
    const categoryFilter =
      filterData.category === "" || course.category === filterData.category;
    const skillFilter =
      filterData.skillLevel === "" ||
      course.skillLevel === filterData.skillLevel;
    const langFilter =
      filterData.language === "" || course.language === filterData.language;

    console.log("Category Filter:", categoryFilter);
    console.log("Skill Filter:", skillFilter);
    console.log("Lang Filter:", langFilter);

    return categoryFilter && skillFilter && langFilter;
  });

  console.log("Filtered Courses:", filteredCourses);
  return (
    <div className="grid items-center gap-3 grid-cols-3">
      {courses?.length === 0 && (
        <div>
          <p className="text-white">No courses found</p>
        </div>
      )}
      {filteredCourses?.length > 0 &&
        filteredCourses?.map((course: CourseCardProps) => (
          <CourseItem
            key={course._id}
            _id={course._id}
            title={course.title}
            instructor={course.instructor}
            image={course.image}
            price={course.price}
            students={course.students}
            requirements={course.requirements}
            forCourse={course.forCourse}
            duration={course.duration}
            popularity={course.popularity}
          />
        ))}
    </div>
  );
};

export default CourseList;
