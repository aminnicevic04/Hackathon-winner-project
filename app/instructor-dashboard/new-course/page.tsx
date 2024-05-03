"use client";

import { NewCourseForm } from "@/Componentse/instructor";
import ProtectedRoutes from "@/Componentse/shared/auth/ProtectedRoutes";
import React from "react";

const NewCoursePage = () => {
  return <NewCourseForm />;
};

export default ProtectedRoutes(NewCoursePage, ["instructor"]);
