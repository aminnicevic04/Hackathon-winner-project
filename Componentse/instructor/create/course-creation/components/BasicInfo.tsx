import Input from "@/Componentse/shared/form/Input";
import Select from "@/Componentse/shared/form/Select";
import { skillLevelFilters } from "@/data/filterdata.config";
import { InputType } from "@/types/form/InputTypes";
import {
  NewCourseValuesTypes,
  NewCoursesState,
} from "@/types/instructor/InstructorContextTypes";
import React, { ChangeEvent } from "react";

const BasicInfo: React.FC<NewCoursesState> = ({
  newCourseValues,
  setnewCourseValues,
}) => {
  return (
    <div className="shadow-lg p-9">
      <div className="flex flex-col gap-2 mb-6">
        <h1 className="text-white font-bold text-2xl">Basic info</h1>
        <p className="text-white font-light">
          Provide the fundamental details about your course. Briefly describe
          the course's main topic, target audience, and key objectives.
          Additionally, outline the expected time commitment for learners and
          highlight any prerequisites or prior knowledge required.
        </p>
      </div>
      <div className="flex flex-col gap-7">
        <div>
          <Input
            type={InputType.Input}
            placeholder={"Learn JavaScript"}
            id={"title"}
            label="Title"
            defaultValue={newCourseValues?.title}
            onChange={(e) =>
              setnewCourseValues((prevState: NewCourseValuesTypes) => ({
                ...prevState,
                title: e.target.value,
              }))
            }
          />
        </div>
        <div>
          <Input
            type={InputType.Input}
            placeholder={"Subtitle..."}
            id={"subtitle"}
            label="Subtitle"
            onChange={(e) =>
              setnewCourseValues((prevState: NewCourseValuesTypes) => ({
                ...prevState,
                subtitle: e.target.value,
              }))
            }
          />
        </div>
        <div>
          <Input
            type={InputType.Textarea}
            placeholder={"Add course description..."}
            id={"description"}
            label="Description"
            onChange={(e) =>
              setnewCourseValues((prevState: NewCourseValuesTypes) => ({
                ...prevState,
                description: e.target.value,
              }))
            }
          />
        </div>
        <div className="flex items-center justify-between gap-2">
          <div className="w-full">
            <h2 className="text-white font-bold">Language</h2>
            <input
              className="w-full py-4 rounded-md disabled:cursor-not-allowed"
              type="text"
              disabled
              defaultValue={newCourseValues?.language}
            />
          </div>
          <div>
            <h2 className="text-white font-bold">Level</h2>
            <Select
              id="advanced"
              options={skillLevelFilters}
              value={newCourseValues?.level}
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                setnewCourseValues((prevState: NewCourseValuesTypes) => ({
                  ...prevState,
                  level: e.target.value,
                }))
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
