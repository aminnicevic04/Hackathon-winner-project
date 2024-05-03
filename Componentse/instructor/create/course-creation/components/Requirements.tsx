"use client";
import Input from "@/Componentse/shared/form/Input";
import { useValidation } from "@/hooks/useValidation";
import { NewCoursesState } from "@/types/instructor/InstructorContextTypes";
import { InputType } from "@/types/form/InputTypes";
import {
  addRequirementHandler,
  removeRequirementHandler,
} from "@/utils/helpers";
import { VALIDATOR_MINLENGTH } from "@/utils/validators";
import React from "react";

const Requirements: React.FC<NewCoursesState> = ({
  setnewCourseValues,
  newCourseValues,
}) => {
  const requirementInp = useValidation([VALIDATOR_MINLENGTH(3)]);

  function addRequirement(): void {
    if (requirementInp.isValid && requirementInp.value.length >= 3) {
      const requirements = newCourseValues?.requirements.map(
        (requirement) => requirement
      );
      if (
        requirements?.find(
          (requirement) => requirement === requirementInp.value
        )
      ) {
        alert("Please enter different value!");
        return;
      }
      {
        addRequirementHandler(
          setnewCourseValues,
          "requirements",
          requirementInp.value
        );
        requirementInp.emptyInput();
      }
    } else {
      return;
    }
  }

  return (
    <div className="shadow-lg p-9">
      <div className="flex flex-col gap-2 mb-6">
        <h1 className="text-white font-bold text-2xl">Requirements</h1>
        <p className="text-white font-light">
          Please provide detailed information about the prerequisites and
          technical requirements for participants interested in enrolling in
          your course. This section will help potential learners.
        </p>
      </div>
      <div className="flex flex-col gap-12">
        <div>
          <div className="flex justify-between items-center gap-4">
            <div className="w-full">
              <Input
                type={InputType.Input}
                value={requirementInp.value}
                error={!requirementInp.isValid && requirementInp.isTouched}
                onChange={requirementInp.onChangeHandler}
                onBlur={requirementInp.onBlurHandler}
                helperText="Please enter valid requirements (min 20)"
                id="requirements"
                label="Requirements"
                placeholder="e.g. Basics javascript knowledge"
              />
            </div>
            <button
              disabled={!requirementInp.isValid}
              className="bg-yellow-400 p-2 mt-7 rounded-sm cursor-pointer text-white"
              onClick={addRequirement}
            >
              Add
            </button>
          </div>
          <div>
            {newCourseValues?.requirements.map((requirement, ind) => (
              <div
                className="border mt-4 pl-2 flex justify-between items-center"
                key={ind}
              >
                <h2 className="text-white font-bold">{requirement}</h2>
                <button
                  className="bg-red-600 px-4 py-2 rounded-sm cursor-pointer text-white"
                  onClick={() =>
                    removeRequirementHandler(
                      ind,
                      setnewCourseValues,
                      "requirements"
                    )
                  }
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default Requirements;
