"use client";

import Button from "@/Componentse/shared/form/Button";
import Input from "@/Componentse/shared/form/Input";
import { useValidation } from "@/hooks/useValidation";
import { InputType } from "@/types/form/InputTypes";
import {
  LectureProps,
  SectionProps,
  NewCoursesState,
} from "@/types/instructor/InstructorContextTypes";
import { VALIDATOR_REQUIRE } from "@/utils/validators";
import React, { useState } from "react";

const Section: React.FC<SectionProps> = ({
  title,
  index,
  lectures,
  setnewCourseValues,
}) => {
  const [isItemCreating, setIsItemCreating] = useState<boolean | null>(false);
  const newLectureSrc = useValidation([VALIDATOR_REQUIRE()]);
  const newLectureInput = useValidation([VALIDATOR_REQUIRE()]);

  function createLecture(): void {
    const newLecture = {
      title: newLectureInput.value,
      src: newLectureSrc.value,
    };

    if (newLectureInput.isValid && newLectureInput.value !== "") {
      setnewCourseValues((prevState: any) => {
        const updatedSections = prevState.sections.map(
          (section: SectionProps) => {
            if (section.title === title) {
              return {
                ...section,
                lectures: [...section.lectures!, newLecture],
              };
            }
            return section;
          }
        );
        return {
          ...prevState,
          sections: updatedSections,
        };
      });
      setIsItemCreating(false);
      newLectureInput.emptyInput();
    }
  }

  return (
    <div
      id={title}
      className="shadow-md p-4 mt-4 flex flex-col gap-2 border border-gray-600"
    >
      <div className="flex justify-between">
        <h1 className="text-white font-bold text-xl">
          Section {index}: {title}
        </h1>
        <p>{lectures!.length} lectures</p>
        <div className="w-60">
          <Button
            additionalStyles="bg-gray-700"
            type="button"
            styleType="initial"
            onClick={() => setIsItemCreating(!isItemCreating)}
          >
            Add Curriculum item
          </Button>
        </div>
      </div>
      {isItemCreating && (
        <div className="border p-2 flex flex-col gap-3 ">
          <Input
            type={InputType.Input}
            label="Lecture name"
            placeholder="Introduction..."
            onChange={newLectureInput.onChangeHandler}
            onBlur={newLectureInput.onBlurHandler}
            helperText="Please enter valid input"
            error={!newLectureInput.isValid && newLectureInput.isTouched}
            id={"lecture_name"}
          />
          <Input
            type={InputType.Input}
            label="Lecture video source"
            placeholder="https..."
            onChange={newLectureSrc.onChangeHandler}
            onBlur={newLectureSrc.onBlurHandler}
            helperText="Please enter valid input"
            error={!newLectureSrc.isValid && newLectureSrc.isTouched}
            id={"lecture_src"}
          />
          <Button
            styleType="initial"
            additionalStyles="bg-gray-700 mt-4"
            type={"button"}
            onClick={createLecture}
          >
            Add lecture
          </Button>
        </div>
      )}
      <div>
        {lectures?.map((lecture: LectureProps, i: number) => (
          <div
            key={i}
            id={lecture.id}
            className="border m-4 p-4 border-gray-600"
          >
            <h1 className="text-white font-light text-md">
              Lecture {i + 1}: {lecture.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

const Curriculum: React.FC<NewCoursesState> = ({
  setnewCourseValues,
  newCourseValues,
}) => {
  const [isSectionAdding, setisSectionAdding] = useState<boolean | null>(false);
  const newSectionInput = useValidation([VALIDATOR_REQUIRE()]);

  function createSection(): void {
    const newSection = {
      title: newSectionInput.value,
      lectures: [],
    };

    if (newSectionInput.isValid && newSectionInput.value !== "") {
      setnewCourseValues((prevState: any) => ({
        ...prevState,
        sections: [...prevState.sections, newSection],
      }));
      setisSectionAdding(false);
      newSectionInput.emptyInput();
    }
  }

  return (
    <div className="shadow-lg p-9">
      <div className="flex flex-col gap-2 mb-6">
        <h1 className="text-white font-bold text-2xl">Curriculum</h1>
        <p className="text-white font-light">
          To get started, please fill out the required fields in the form. The
          information you provide will be used to design a structured and
          effective curriculum that aligns with our educational goals.
        </p>
      </div>
      <div>
        <div className="w-40">
          <Button
            type="button"
            styleType="initial"
            additionalStyles="bg-gray-700"
            onClick={() => setisSectionAdding(!isSectionAdding)}
          >
            Add Section
          </Button>
        </div>
        {isSectionAdding && (
          <div className="border border-gray-700 rounded-md shadow-sm p-4 m-4">
            <h2 className="font-bold text-2xl my-2 text-purple-600">
              New Section
            </h2>
            <Input
              type={InputType.Input}
              label="Enter Section name"
              placeholder="Introduction..."
              onChange={newSectionInput.onChangeHandler}
              onBlur={newSectionInput.onBlurHandler}
              helperText="Please enter valid input"
              error={!newSectionInput.isValid && newSectionInput.isTouched}
              id={"section_name"}
            />
            <Button
              additionalStyles="mt-4"
              styleType="initial"
              type={"button"}
              onClick={createSection}
            >
              Add section
            </Button>
          </div>
        )}
      </div>
      <div>
        {newCourseValues?.sections?.map((section: SectionProps, i: number) => (
          <Section
            title={section.title}
            lectures={section.lectures}
            key={i}
            index={i + 1}
            setnewCourseValues={setnewCourseValues}
          />
        ))}
      </div>
    </div>
  );
};

export default Curriculum;
