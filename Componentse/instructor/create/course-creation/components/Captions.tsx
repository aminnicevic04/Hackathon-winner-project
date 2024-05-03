import Select from "@/Componentse/shared/form/Select";
import { languageCaptions } from "@/data/filterdata.config";
import {
  NewCourseValuesTypes,
  NewCoursesState,
} from "@/types/instructor/InstructorContextTypes";
import React, { ChangeEvent } from "react";

const Captions: React.FC<NewCoursesState> = ({
  setnewCourseValues,
  newCourseValues,
}) => {
  return (
    <div className="shadow-lg p-9">
      <div className="flex flex-col gap-2 mb-6">
        <h1 className="text-white font-bold text-2xl">Captions</h1>
        <p className="text-white font-light">
          Subtitles have become an invaluable asset for language learners across
          all proficiency levels, as they play a pivotal role in aiding
          comprehension, retention, and overall understanding of content.
        </p>
      </div>
      <div>
        <Select
          id="captions"
          options={languageCaptions}
          value={newCourseValues?.captions}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setnewCourseValues((prevState: NewCourseValuesTypes) => ({
              ...prevState,
              captions: e.target.value,
            }))
          }
        />
      </div>
    </div>
  );
};

export default Captions;
