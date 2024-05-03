import { InstructorCourseCardProps } from "@/types/courses/InstructorCourseCard";
import { Delete, Edit } from "lucide-react";
import Image from "next/image";
import React from "react";

const InstructorCourseCard: React.FC<InstructorCourseCardProps> = ({
  id,
  image,
  title,
  description,
}) => {
  return (
    <div id={id} className="flex gap-3 shadow-sm border-b border-gray-600 pb-3">
      <Image src={image} alt={title} width={300} height={300} />
      <div className="flex flex-col gap-2 justify-between">
        <div>
          <h1 className="text-white font-bold text-2xl">{title}</h1>
          <p className="font-light text-md text-gray-400">{description}</p>
        </div>
        <div className="flex items-center gap-6">
          <Delete className="cursor-pointer" color="red" />
          <Edit className="cursor-pointer" color="blue" />
        </div>
      </div>
    </div>
  );
};

export default InstructorCourseCard;
