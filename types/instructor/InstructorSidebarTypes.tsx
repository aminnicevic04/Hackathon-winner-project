import React, { FormEvent } from "react";
import { CourseManagamentCreation } from "./InstructorContextTypes";

export interface NewCourseSidebarProps {
  setCourseManage: React.Dispatch<
    React.SetStateAction<CourseManagamentCreation>
  >;
  submitCreateCourseHandler: (e: FormEvent) => void;
  isFilledRequirements?: boolean;
  isFilledCurriculum?: boolean;
  isFilledCaptions?: boolean;
  isFilledBasic?: boolean;
  isFilledPrice?: boolean;
  isFilledForCourse?: boolean;
}
