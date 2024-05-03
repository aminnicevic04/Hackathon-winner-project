import { Button } from "@/Componentse/ui/button";
import { CourseCardProps } from "@/types/courses/CourseInfoTypes";
import { DollarSign, Timer, User, UserPlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CourseItem: React.FC<CourseCardProps> = ({
  _id,
  title,
  image,
  instructor,
  duration,
  popularity,
  price,
}) => {
  return (
    <div
      className="max-w-sm flex flex-col w-full rounded-lg transition"
      key={_id}
    >
      <div>
        <div className="relative w-full h-60 object-cover">
          <Image src={image} alt={title} fill objectFit="cover" />
        </div>
      </div>
      <div className="flex flex-col gap-6 p-3 bg-[#1b1b1b]">
        <div className="flex flex-col gap-3">
          <div>
            <h1 className="font-bold text-xl text-white">{title}</h1>
          </div>
          <div className="flex items-center gap-3">
            <User color="#fff" />
            <p className="text-gray-400">
              {instructor.first_name} {instructor.last_name}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 justify-between rounded-lg">
          {[
            {
              id: 1,
              title: price,
              icon: <DollarSign color="#fff" />,
            },
            {
              id: 2,
              title: duration,
              icon: <Timer color="#fff" />,
            },
            {
              id: 3,
              title: popularity,
              icon: <UserPlus color="#fff" />,
            },
          ].map((add) => (
            <div key={add.id} className="flex gap-1 items-center">
              {add.icon}
              <p className="text-gray-400">{add.title}</p>
            </div>
          ))}
        </div>
        <div>
          <Link href={`/student/courses/${_id}`}>
            <Button className="w-full">Details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
