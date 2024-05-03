"use client";
import CourseFilters from "@/Componentse/students/courses/CourseFilters";
import CourseList from "@/Componentse/students/courses/CourseList";
import { StudentContext } from "@/context/StudentContext";
import React, { useContext } from "react";
import useSWR from "swr";

// export const CoursesData = [
//   {
//     id: "c1",
//     title: "Typescript for Beginners",
//     image: "/assets/images/typescript-img.png",
//     instructor: "John Doe",
//     category: "Programming",
//     skillLevel: "Beginner",
//     language: "English",
//     duration: "4h",
//     popularity: "High",
//     description:
//       "This Typescript course is designed for beginners who want to learn how to build scalable and maintainable applications using Typescript. The course covers the basics of Typescript syntax, type annotations, interfaces, classes, modules, and more. By the end of the course, you will have a solid foundation in Typescript and be able to write type-safe and robust code.",
//     price: 100,
//     lessons: 12,
//     students: 3125,
//     articles: 22,
//     lectures: 200,
//     sections: [
//       {
//         title: "Sekcija",
//         lectures: [
//           {
//             title: "Lekcija",
//           },
//         ],
//       },
//     ],
//     requirements: [
//       "Students who want to learn more about web development",
//       "Students who want to learn more about web development",
//       "Students who want to learn more about web development",
//     ],
//     forCourse: [
//       "Students who want to learn more about web development",
//       "Students who want to learn more about web development",
//       "Students who want to learn more about web development",
//     ],
//   },
//   {
//     id: "c2",
//     title: "JavaScript for Beginners",
//     image: "/assets/images/javascript-img.png",
//     instructor: "Jane Smith",
//     category: "Programming",
//     skillLevel: "Beginner",
//     language: "English",
//     duration: "6h",
//     popularity: "Medium",
//     description:
//       "This Typescript course is designed for beginners who want to learn how to build scalable and maintainable applications using Typescript. The course covers the basics of Typescript syntax, type annotations, interfaces, classes, modules, and more. By the end of the course, you will have a solid foundation in Typescript and be able to write type-safe and robust code.",
//     price: 120,
//     lessons: 12,
//     students: 3125,
//     articles: 22,
//     lectures: 200,
//     sections: [
//       {
//         title: "Sekcija",
//         lectures: [
//           {
//             title: "Lekcija",
//           },
//         ],
//       },
//     ],
//     requirements: [
//       "Students who want to learn more about web development",
//       "Students who want to learn more about web development",
//       "Students who want to learn more about web development",
//     ],
//     forCourse: [
//       "Students who want to learn more about web development",
//       "Students who want to learn more about web development",
//       "Students who want to learn more about web development",
//     ],
//   },
//   {
//     id: "c3",
//     title: "React for Beginners",
//     image: "/assets/images/react-img.png",
//     instructor: "Mike Johnson",
//     category: "Web Development",
//     skillLevel: "Beginner",
//     language: "English",
//     duration: "8h",
//     popularity: "High",
//     description:
//       "This Typescript course is designed for beginners who want to learn how to build scalable and maintainable applications using Typescript. The course covers the basics of Typescript syntax, type annotations, interfaces, classes, modules, and more. By the end of the course, you will have a solid foundation in Typescript and be able to write type-safe and robust code.",
//     price: 129,
//     lessons: 12,
//     students: 3125,
//     articles: 22,
//     lectures: 200,
//     sections: [
//       {
//         title: "Sekcija",
//         lectures: [
//           {
//             title: "Lekcija",
//           },
//         ],
//       },
//     ],
//     requirements: [
//       "Students who want to learn more about web development",
//       "Students who want to learn more about web development",
//       "Students who want to learn more about web development",
//     ],
//     forCourse: [
//       "Students who want to learn more about web development",
//       "Students who want to learn more about web development",
//       "Students who want to learn more about web development",
//     ],
//   },
//   {
//     id: "c4",
//     title: "React for Beginners",
//     image: "/assets/images/react-img.png",
//     instructor: "Mike Johnson",
//     category: "Web Development",
//     skillLevel: "Beginner",
//     language: "English",
//     duration: "8h",
//     popularity: "High",
//     description:
//       "This Typescript course is designed for beginners who want to learn how to build scalable and maintainable applications using Typescript. The course covers the basics of Typescript syntax, type annotations, interfaces, classes, modules, and more. By the end of the course, you will have a solid foundation in Typescript and be able to write type-safe and robust code.",
//     price: 129,
//     lessons: 12,
//     students: 3125,
//     articles: 22,
//     lectures: 200,
//     sections: [
//       {
//         title: "Sekcija",
//         lectures: [
//           {
//             title: "Lekcija",
//           },
//         ],
//       },
//     ],
//     requirements: [
//       "Students who want to learn more about web development",
//       "Students who want to learn more about web development",
//       "Students who want to learn more about web development",
//     ],
//     forCourse: [
//       "Students who want to learn more about web development",
//       "Students who want to learn more about web development",
//       "Students who want to learn more about web development",
//     ],
//   },
//   {
//     id: "c5",
//     title: "React for Beginners",
//     image: "/assets/images/react-img.png",
//     instructor: "Mike Johnson",
//     category: "Web Development",
//     skillLevel: "Beginner",
//     language: "English",
//     duration: "8h",
//     popularity: "High",
//     description:
//       "This Typescript course is designed for beginners who want to learn how to build scalable and maintainable applications using Typescript. The course covers the basics of Typescript syntax, type annotations, interfaces, classes, modules, and more. By the end of the course, you will have a solid foundation in Typescript and be able to write type-safe and robust code.",
//     price: 129,
//     lessons: 12,
//     students: 3125,
//     articles: 22,
//     lectures: 200,
//     sections: [
//       {
//         title: "Sekcija",
//         lectures: [
//           {
//             title: "Lekcija",
//           },
//         ],
//       },
//     ],
//     requirements: [
//       "Students who want to learn more about web development",
//       "Students who want to learn more about web development",
//       "Students who want to learn more about web development",
//     ],
//     forCourse: [
//       "Students who want to learn more about web development",
//       "Students who want to learn more about web development",
//       "Students who want to learn more about web development",
//     ],
//   },
//   {
//     id: "c6",
//     title: "React for Beginners",
//     image: "/assets/images/react-img.png",
//     instructor: "Mike Johnson",
//     category: "Web Development",
//     skillLevel: "Beginner",
//     language: "English",
//     duration: "8h",
//     popularity: "High",
//     description:
//       "This Typescript course is designed for beginners who want to learn how to build scalable and maintainable applications using Typescript. The course covers the basics of Typescript syntax, type annotations, interfaces, classes, modules, and more. By the end of the course, you will have a solid foundation in Typescript and be able to write type-safe and robust code.",
//     price: 129,
//     lessons: 12,
//     students: 3125,
//     articles: 22,
//     lectures: 200,
//     sections: [
//       {
//         title: "Sekcija",
//         lectures: [
//           {
//             title: "Lekcija",
//           },
//         ],
//       },
//     ],
//     requirements: [
//       "Students who want to learn more about web development",
//       "Students who want to learn more about web development",
//       "Students who want to learn more about web development",
//     ],
//     forCourse: [
//       "Students who want to learn more about web development",
//       "Students who want to learn more about web development",
//       "Students who want to learn more about web development",
//     ],
//   },
// ];
const CoursesPage = () => {
  const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json());
  const { data: coursesData } = useSWR("/api/courses", fetcher);
  const { filterData, setFilterData } = useContext(StudentContext);

  return (
    <div className="flex gap-3 p-10 mt-16">
      <div className="basis-full flex flex-col gap-7">
        <div>
          <CourseList courses={coursesData} filterData={filterData} />
        </div>
      </div>
      <div className="basis-[30em]">
        <CourseFilters setFilters={setFilterData} />
      </div>
    </div>
  );
};

export default CoursesPage;
