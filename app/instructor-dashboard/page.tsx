"use client";

import { InstructorCoursesList } from "@/Componentse/instructor";
import ProtectedRoutes from "@/Componentse/shared/auth/ProtectedRoutes";
import { InstructorContext } from "@/context/InstructorContext";
import React, { useContext } from "react";

const InstructorDashboard = () => {
  const { instructorData } = useContext(InstructorContext);

  return (
    <section className="p-10 flex flex-col gap-10">
      <div>
        <h1 className="text-white headingTitle text-xl">Courses</h1>
      </div>
      <InstructorCoursesList courses={instructorData?.courses} />
    </section>
  );
};

export default ProtectedRoutes(InstructorDashboard, ["instructor"]);
