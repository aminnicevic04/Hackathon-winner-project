"use client";
import { Button } from "@/Componentse/ui/button";
import { StudentContext } from "@/context/StudentContext";
import { usePostHttp } from "@/hooks/usePostHttp";
import { createGraphicIcon } from "@/utils/helpers";
import {
  Folder,
  GraduationCap,
  Languages,
  List,
  Newspaper,
  PlayCircle,
} from "lucide-react";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useContext, useState } from "react";

type CourseDetailsProps = {
  course: any;
};

const CourseDetailsInfo: React.FC<CourseDetailsProps> = ({ course }) => {
  const [isBuyingGift, setisBuyingGift] = useState(false);
  const { sendRequest, isLoading, message } = usePostHttp();
  const { studentData, addToFavorites } = useContext(StudentContext);

  const studentCartIds = studentData?.cart?.items.map((item: any) => item._id);
  const studentCoursesIds = studentData?.courses.map((item: any) => item._id);
  const router = useRouter();

  async function addToCart() {
    const response = await sendRequest(
      "POST",
      `/api/courses/${course?._id}/${studentData?._id}/cart`
    );
  }

  return (
    <div className="p-6 flex flex-col gap-7 flex-grow basis-1/3">
      <div className="flex items-center justify-between gap-7">
        <h1 className="flex items-center gap-4">
          <span className="text-white font-bold text-4xl">
            ${course?.price}
          </span>
        </h1>
      </div>
      <div className="pt-4 flex gap-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <GraduationCap color="#fff" />
            <h2 className="text-gray-400">
              Students:{" "}
              <span className="font-bold text-white">
                {course?.students.length}
              </span>
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <Languages color="#fff" />
            <h2 className="text-gray-400">
              Language:{" "}
              <span className="font-bold text-white">{course?.language}</span>
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <PlayCircle color="#fff" />
            <h2 className="text-gray-400">
              Duration:{" "}
              <span className="font-bold text-white">{course?.duration}</span>
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <List color="#fff" />
            <h2 className="text-gray-400">
              Category:{" "}
              <span className="font-bold text-white">{course?.category}</span>
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <Newspaper color="#fff" />
            <h2 className="text-gray-400">
              Articles:{" "}
              <span className="font-bold text-white">{course?.articles}</span>
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <Folder color="#fff" />
            <h2 className="text-gray-400">
              Certificate:{" "}
              <strong className="text-white">Upon completion of course</strong>
            </h2>
          </div>
        </div>
      </div>
      {!studentCoursesIds?.includes(course?._id) ? (
        <div className="flex gap-2">
          {/* <Button>Start Learning</Button> */}

          <Button onClick={addToCart} type="button">
            <span className="flex items-center justify-center gap-4">
              {studentCartIds?.includes(course?._id)
                ? "Remove from cart"
                : "Add to cart"}
            </span>
          </Button>
          {/* <Button
            // onClick={() => addToFavorites(course?._id)}
            type="button"
          >
            <span className="text-white hover:text-white flex items-center justify-center gap-4">
              Add to Favorites
            </span>
          </Button> */}
        </div>
      ) : (
        <div>
          <Button type="button">
            <span className="flex items-center justify-center gap-4">
              Start Progress Course
            </span>
          </Button>
        </div>
      )}
      <Link href="/quiz">
        <Button type="button">
          <span className="flex items-center justify-center gap-4">
            Start the quiz
          </span>
        </Button>
      </Link>
    </div>
  );
};

export default CourseDetailsInfo;
