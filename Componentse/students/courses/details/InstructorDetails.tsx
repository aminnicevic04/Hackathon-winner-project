import { createGraphicIcon } from "@/utils/helpers";
import { Folder, GraduationCap, Play } from "lucide-react";
import Image from "next/image";
import React from "react";

type Instructor = {
  course: any;
};

const InstructorDetails: React.FC<Instructor> = ({ course }) => {
  return (
    <div className="flex flex-col gap-6 max-w-md rounded-lg p-3 bg-[#1b1b1b]">
      <h1 className="text-xl font-bold text-white">Instructor</h1>
      <h1 className="font-bold text-2xl text-purple-700">
        {course?.instructor.first_name} {course?.instructor.last_name}
      </h1>
      <div className="flex gap-6 items-center flex-wrap">
        <Image
          src={"/assets/images/account.jpg"}
          alt={course?.instructor.first_name}
          width={200}
          height={200}
        />
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <Folder color="#fff" />
            <h2 className="text-white text-lg">200 Reviews</h2>
          </div>
          <div className="flex gap-2">
            <GraduationCap color="#fff" />
            <h2 className="text-white text-lg">200,240 Students</h2>
          </div>
          <div className="flex gap-2">
            <Play color="#fff" />
            <h2 className="text-white text-lg">
              {/* {course?.instructor?.courses.length} */} 3 courses
            </h2>
          </div>
        </div>
      </div>
      <p className="text-md text-gray-400 font-light">
        {course?.instructor.biography}
      </p>
    </div>
  );
};

export default InstructorDetails;
