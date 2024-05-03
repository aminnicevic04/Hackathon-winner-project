import { BarChart, Play, User } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
type CourseDetailsProps = {
  course: any;
};

const CourseDetailsContent: React.FC<CourseDetailsProps> = ({ course }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="p-6 flex-grow basis-1/2">
      <div className="flex items-start gap-6 w-full">
        <Image
          src={course?.image}
          alt={course?.title}
          width={270}
          height={270}
          className="rounded-lg"
        />
        <div className="flex flex-col gap-3">
          <h1 className="font-extrabold text-4xl text-white">
            {course?.title}
          </h1>
          <h2 className="text-lg flex gap-2 items-center">
            <User color="#fff" />
            <p className="text-white">
              {course?.instructor.first_name} {course?.instructor.last_name}
            </p>
          </h2>
          <p className="text-gray-400 font-light">{course?.description}</p>
          <div className="text-lg flex gap-2 items-center">
            <Play color="#fff" />
            <h2 className="text-white font-bold">
              Lessons: <strong>{course?.sections?.length}</strong>
            </h2>
          </div>
          <div className="text-lg flex gap-2 items-center">
            <BarChart color="#fff" />
            <h2 className="text-white font-bold">{course?.skillLevel}</h2>
          </div>
        </div>
      </div>
      <div className="mt-7 p-4">
        <h1 className="text-white font-bold text-3xl mb-2">Prerequisites</h1>
        <ul className="flex flex-col gap-2 mt-6">
          {course?.requirements?.map((text: any) => (
            <li key={text} className="text-white">
              - {text}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-7 p-4">
        <h1 className="text-white font-bold text-3xl mb-2">This course for:</h1>
        <ul className="flex flex-col gap-2 mt-6">
          {course?.forCourse?.map((text: any) => (
            <li key={text} className="text-white">
              - {text}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4 p-4">
        <h1 className="text-white font-bold text-3xl mb-2">Course Content</h1>
        <div className="flex gap-2 mb-4">
          <p>
            Sections: <strong>{course?.sections?.length}</strong>
          </p>
          <p>
            Lectures:{" "}
            <strong>
              {course?.sections?.reduce(
                (acc: any, section: any) => acc + section.lectures.length,
                0
              )}
            </strong>
          </p>
        </div>
        <ul className="flex flex-col ">
          {course?.sections?.map((section: any) => (
            <li
              key={section._id}
              className="p-4 border flex flex-col justify-between cursor-pointer border-gray-600"
            >
              <div className="flex justify-between">
                <h2 className="text-white font-bold">{section.title}</h2>
                <p className="text-white">{section.lectures.length} lectures</p>
              </div>
              <div
                onClick={() => setIsVideoOpen(!isVideoOpen)}
                className="mt-2"
              >
                {section?.lectures.map((lecture: any) => (
                  <h2
                    className="text-white border border-gray-700 mt-2 p-2"
                    key={lecture._id}
                  >
                    {lecture.title}
                  </h2>
                ))}
              </div>
              {isVideoOpen && (
                <div>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/LDB4uaJ87e0?si=dxB8vjXrd_XptIiM"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseDetailsContent;
