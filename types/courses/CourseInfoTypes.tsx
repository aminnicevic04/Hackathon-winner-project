import { SetStateAction } from "react";

export interface CourseCardProps {
  _id: any;
  title: string;
  image: string;
  instructor: {
    first_name: string;
    last_name: string;
    image: string;
    biography: string;
    courses: [];
  };
  category?: string;
  skillLevel?: string;
  language?: string;
  duration?: string;
  popularity?: string;
  description?: string;
  price: number;
  lessons?: number;
  students: string[];
  articles?: number;
  requirements: string[];
  forCourse: string[];
  lectures?: number;
  sections?: [
    {
      _id: string;
      title: string;
      lectures: [
        {
          _id: string;
          title: string;
        }
      ];
    }
  ];
}

export interface CourseListProps {
  courses: CourseCardProps[];
  filterData?: {
    category: string;
    skillLevel: string;
    language: string;
    duration: string;
  };
}

export interface CourseDetailsProps {
  course: CourseCardProps;
}

export interface CourseFilterProps {
  setFilterData: React.Dispatch<SetStateAction<any>>;
}
