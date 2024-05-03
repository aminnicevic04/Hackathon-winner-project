import Button from "@/Componentse/shared/form/Button";
import { CourseManagamentCreation } from "@/types/instructor/InstructorContextTypes";
import { NewCourseSidebarProps } from "@/types/instructor/InstructorSidebarTypes";
import React from "react";

const NewCourseSidebar: React.FC<NewCourseSidebarProps> = ({
  setCourseManage,
  submitCreateCourseHandler,
  isFilledRequirements,
  isFilledCurriculum,
  isFilledCaptions,
  isFilledBasic,
  isFilledPrice,
  isFilledForCourse,
}) => {
  return (
    <nav className="p-2 basis-1/6 flex flex-col gap-6">
      <div className="flex flex-col justify-start items-start gap-4">
        <h1 className="text-white font-bold text-xl mb-2">
          Create Your Course
        </h1>
        <button
          className={`font-light text-md text-purple-700 ${
            isFilledRequirements && "text-green-400"
          }`}
          onClick={() => setCourseManage(CourseManagamentCreation.Requirements)}
        >
          Requirements
        </button>
        <button
          className={`font-light text-md text-purple-700 ${
            isFilledCurriculum && "text-green-400"
          }`}
          onClick={() => setCourseManage(CourseManagamentCreation.Curriculum)}
        >
          Curriculum
        </button>
        <button
          className={`font-light text-md text-purple-700 ${
            isFilledCaptions && "text-green-400"
          }`}
          onClick={() => setCourseManage(CourseManagamentCreation.Captions)}
        >
          Captions
        </button>
      </div>
      <div className="flex flex-col justify-start items-start gap-4">
        <h1 className="text-white font-bold text-xl mb-2">
          Publish Your Course
        </h1>
        <button
          className={`font-light text-md text-purple-700 ${
            isFilledBasic && "text-green-400"
          }`}
          onClick={() => setCourseManage(CourseManagamentCreation.Basics)}
        >
          Basic Info
        </button>
        <button
          className={`font-light text-md text-purple-700 ${
            isFilledPrice && "text-green-400"
          }`}
          onClick={() => setCourseManage(CourseManagamentCreation.Pricing)}
        >
          Set Price
        </button>
        <button
          className={`font-light text-md text-purple-700 ${
            isFilledForCourse && "text-green-400"
          }`}
          onClick={() => setCourseManage(CourseManagamentCreation.ForCourse)}
        >
          For course
        </button>
      </div>
      <div>
        <form onSubmit={submitCreateCourseHandler}>
          <Button
            styleType="initial"
            type="submit"
            additionalStyles="rounded-sm"
            disabled={
              !isFilledRequirements ||
              !isFilledCurriculum ||
              !isFilledCaptions ||
              !isFilledBasic ||
              !isFilledPrice ||
              !isFilledForCourse
            }
          >
            Submit Creation
          </Button>
        </form>
      </div>
    </nav>
  );
};

export default NewCourseSidebar;
