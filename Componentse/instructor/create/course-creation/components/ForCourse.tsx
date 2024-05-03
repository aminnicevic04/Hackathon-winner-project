"use client";
import Input from "@/Componentse/shared/form/Input";
import { useValidation } from "@/hooks/useValidation";
import { InputType } from "@/types/form/InputTypes";
import {
  NewCourseValuesTypes,
  NewCoursesState,
} from "@/types/instructor/InstructorContextTypes";
import {
  addRequirementHandler,
  removeRequirementHandler,
} from "@/utils/helpers";
import { VALIDATOR_MINLENGTH } from "@/utils/validators";
import React from "react";

const ForCourse: React.FC<NewCoursesState> = ({
  newCourseValues,
  setnewCourseValues,
}) => {
  const forCourseInp = useValidation([VALIDATOR_MINLENGTH(20)]);

  function addForCourse(): void {
    if (forCourseInp.isValid && forCourseInp.value.length >= 20) {
      const forCourses = newCourseValues?.forCourse.map(
        (forCourse) => forCourse
      );
      if (forCourses?.find((forCourse) => forCourse === forCourseInp.value)) {
        alert("Please enter different value!");
        return;
      }
      {
        addRequirementHandler(
          setnewCourseValues,
          "forCourse",
          forCourseInp.value
        );
        forCourseInp.emptyInput();
      }
    } else {
      return;
    }
  }

  return (
    <div className="shadow-lg p-9">
      <div>
        <h1 className="text-white font-bold text-2xl">For Course</h1>
        <p className="text-white font-light">
          Create for which type your course to help students
        </p>
      </div>
      <div>
        <div className="flex justify-between items-center gap-4">
          <div className="w-full">
            <Input
              type={InputType.Input}
              value={forCourseInp.value}
              error={!forCourseInp.isValid && forCourseInp.isTouched}
              onChange={forCourseInp.onChangeHandler}
              onBlur={forCourseInp.onBlurHandler}
              helperText="Please enter valid input (min 20)"
              id="course_for"
              label="This course is for"
              placeholder="e.g. Web developers"
            />
          </div>
          <button
            disabled={!forCourseInp.isValid}
            className="bg-yellow-400 p-2 mt-7 rounded-sm cursor-pointer text-white"
            onClick={addForCourse}
          >
            Add
          </button>
        </div>
        <div>
          {newCourseValues?.forCourse.map((forCourse, ind) => (
            <div
              className="border mt-4 pl-2 flex justify-between items-center"
              key={ind}
            >
              <h2 className="text-white font-bold">{forCourse}</h2>
              <button
                className="bg-red-600 px-4 py-2 rounded-sm cursor-pointer text-white"
                onClick={() =>
                  removeRequirementHandler(ind, setnewCourseValues, "forCourse")
                }
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForCourse;
