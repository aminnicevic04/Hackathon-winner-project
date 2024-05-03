import { FormEvent } from "react";

export enum CourseManagamentCreation {
  Requirements = "requirements",
  Curriculum = "curriculum",
  Captions = "captions",
  Basics = "basics",
  Pricing = "pricing",
  Messages = "messages",
  ForCourse = "forcourse",
}

export interface LectureProps {
  id: string;
  title: string;
}

export interface SectionProps {
  title: string;
  index: number;
  lectures?: LectureProps[];
  setnewCourseValues: React.Dispatch<React.SetStateAction<any>>;
  newCourseValues?: NewCourseValuesTypes;
}

export interface NewCourseValuesTypes {
  type: string;
  title: string;
  category: string;
  language: string;
  requirements: string[];
  forCourse: string[];
  captions: string;
  subtitle: string;
  description: string;
  level: string;
  price: number;
  sections: SectionProps[];
}

export interface InstructorContextProviderType {
  instructorData: any;
  courseManage:
    | CourseManagamentCreation.Requirements
    | CourseManagamentCreation.Curriculum
    | CourseManagamentCreation.Captions
    | CourseManagamentCreation.Basics
    | CourseManagamentCreation.Pricing
    | CourseManagamentCreation.Messages
    | CourseManagamentCreation.ForCourse;
  currentStep: number;
  newCourseValues: NewCourseValuesTypes;
  setCourseManage: React.Dispatch<
    React.SetStateAction<CourseManagamentCreation>
  >;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  setnewCourseValues: React.Dispatch<React.SetStateAction<any>>;
  submitCreateCourseHandler: (e: FormEvent) => void;
}

export interface NewCoursesState {
  newCourseValues?: NewCourseValuesTypes;
  setnewCourseValues: React.Dispatch<React.SetStateAction<any>>;
}
