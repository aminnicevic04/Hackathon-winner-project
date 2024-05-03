"use client";
import React, { useContext } from "react";
import Link from "next/link";
import CourseList from "@/Componentse/students/courses/CourseList";
import CourseDetailsContent from "@/Componentse/students/courses/details/CourseDetailsContent";
import CourseDetailsInfo from "@/Componentse/students/courses/details/CourseDetailsInfo";
import InstructorDetails from "@/Componentse/students/courses/details/InstructorDetails";
import useSWR from "swr";
import { StudentContext } from "@/context/StudentContext";

const CourseDetailsPage = ({ params }: { params: { courseId: string } }) => {
  const { filterData } = useContext(StudentContext);
  const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json());
  const { data: course } = useSWR(`/api/courses/${params.courseId}`, fetcher);
  const { data: courses } = useSWR(`/api/courses`, fetcher);

  return (
    <section className="p-7 flex flex-col gap-6 justify-center items-stretch">
      <h1 className="text-xl text-gray-400">
        Search / <Link href="/student/courses">Courses /</Link>{" "}
        <strong className="font-bold text-white">{course?.title}</strong>
      </h1>
      <div className="flex items-stretch justify-center gap-2">
        <CourseDetailsContent course={course} />
        <div className="p-4 flex flex-col items-center gap-2">
          <CourseDetailsInfo course={course} />
          <InstructorDetails course={course} />
        </div>
      </div>
      {/* <div className="flex flex-col gap-10">
        <h1 className="mt-2 font-bold text-4xl text-center text-white">
          Browse Related Courses
        </h1>
        <div className="mx-36">
          <CourseList
            filterData={{}}
            courses={
              courses &&
              courses?.filter((course: any) => course.id !== params.courseId)
            }
          />
        </div>
      </div> */}
    </section>
  );
};

export default CourseDetailsPage;
