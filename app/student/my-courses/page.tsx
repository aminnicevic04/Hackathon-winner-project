"use client";
import React, { useContext } from "react";
import CourseList from "../../../Componentse/students/courses/CourseList";
import { useRouter } from "next/navigation";
import { StudentContext } from "@/context/StudentContext";

const MyCourses = () => {
  const { studentData, filterData } = useContext(StudentContext);
  const router = useRouter();

  return (
    <div className="flex flex-col gap-10 mt-36">
      <div className="px-36">
        <h1 className="text-white font-bold text-3xl">My Courses</h1>
      </div>
      <div className="mx-36">
        <CourseList courses={studentData?.courses} filterData={filterData} />
      </div>
    </div>
  );
};

export default MyCourses;
