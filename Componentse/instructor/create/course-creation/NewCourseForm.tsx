"use client";
import Button from "@/Componentse/shared/form/Button";
import Input from "@/Componentse/shared/form/Input";
import Select from "@/Componentse/shared/form/Select";
import { InstructorContext } from "@/context/InstructorContext";
import { categoryFilters, languageFilters } from "@/data/filterdata.config";
import { InputType } from "@/types/form/InputTypes";
import { NewCourseValuesTypes } from "@/types/instructor/InstructorContextTypes";
import { createGraphicIcon } from "@/utils/helpers";
import { Folder, Play } from "lucide-react";
import React, { ChangeEvent, useContext } from "react";

const NewCourseForm: React.FC = () => {
  const { currentStep, setCurrentStep, newCourseValues, setnewCourseValues } =
    useContext(InstructorContext);

  return (
    <form className="py-40">
      {currentStep === 0 && (
        <div className="flex flex-col text-center items-center">
          <h2 className="text-white font-bold text-2xl">
            Select what you want to create.
          </h2>
          <div className="pt-12 flex justify-center items-stretch gap-4">
            <button
              type="button"
              onClick={() =>
                setnewCourseValues((prevValues: NewCourseValuesTypes) => ({
                  ...prevValues,
                  type: "course",
                }))
              }
              className={`flex flex-col justify-center items-center gap-4 max-w-xs text-center border p-4 cursor-pointer transition-all hover:shadow-md ${
                newCourseValues.type === "course" && "bg-purple-800"
              }`}
            >
              <Play color="#fff" />
              <h2 className="text-white font-bold text-xl">Course</h2>
              <p className="text-gray-400">
                Create a course with various learning abilities
              </p>
            </button>
            {/* <button
              type="button"
              onClick={() =>
                setnewCourseValues((prevValues: NewCourseValuesTypes) => ({
                  ...prevValues,
                  type: "test",
                }))
              }
              className={`flex flex-col justify-center items-center gap-4 max-w-xs text-center border p-4 cursor-pointer hover:shadow-md ${
                newCourseValues.type === "test" && "bg-purple-800"
              }`}
            >
              <Folder color="#fff" />
              <h2 className="text-white font-bold text-xl">Test</h2>
              <p className="text-gray-400">
                Create a test to check your student knowledge from courses
              </p>
            </button> */}
          </div>
          <div>
            <Button
              type="button"
              styleType="initial"
              additionalStyles="mt-12"
              onClick={() => setCurrentStep((prevStep) => prevStep + 1)}
              disabled={newCourseValues.type === ""}
            >
              Next
            </Button>
          </div>
        </div>
      )}
      {currentStep === 1 && (
        <div className="flex flex-col text-center items-center">
          <h2 className="text-white font-bold text-2xl">
            Add title to of your work, so it can be found by students
          </h2>
          <div className="w-[40rem]">
            <Input
              type={InputType.Input}
              placeholder="e.g. JavaScript for beginners"
              id="title"
              value={newCourseValues.title}
              onChange={(e) =>
                setnewCourseValues((prevValues: NewCourseValuesTypes) => ({
                  ...prevValues,
                  title: e.target.value,
                }))
              }
            />
          </div>
          <div>
            <Button
              type="button"
              styleType="initial"
              additionalStyles="mt-7"
              onClick={() => setCurrentStep((prevStep) => prevStep + 1)}
              disabled={newCourseValues.title === ""}
            >
              Next
            </Button>
          </div>
        </div>
      )}
      {currentStep === 2 && (
        <div className="flex flex-col text-center items-center gap-12">
          <h2 className="text-white font-bold text-2xl">
            Choose category that describe which type your work is
          </h2>
          <div className="w-[40rem]">
            <Select
              id="category"
              options={categoryFilters}
              value={newCourseValues.category}
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                setnewCourseValues((prevValues: NewCourseValuesTypes) => ({
                  ...prevValues,
                  category: e.target.value,
                }))
              }
            />
          </div>
          <div>
            <Button
              type="button"
              styleType="initial"
              additionalStyles="mt-7"
              disabled={newCourseValues.category === ""}
              onClick={() => setCurrentStep((prevStep) => prevStep + 1)}
            >
              Next
            </Button>
          </div>
        </div>
      )}
      {currentStep === 3 && (
        <div className="flex flex-col text-center items-center gap-12">
          <h2 className="text-white font-bold text-2xl">
            Set which language your work should be
          </h2>
          <div className="w-[40rem]">
            <Select
              id="language"
              options={languageFilters}
              value={newCourseValues.language}
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                setnewCourseValues((prevValues: NewCourseValuesTypes) => ({
                  ...prevValues,
                  language: e.target.value,
                }))
              }
            />
          </div>
          <div>
            {
              <Button
                type="button"
                styleType="initial"
                additionalStyles="mt-7"
                isLink={true}
                linkHref="instructor-dashboard/new-course/manage"
                disabled={newCourseValues.language === ""}
              >
                Create Course
              </Button>
            }
          </div>
        </div>
      )}
    </form>
  );
};

export default NewCourseForm;
