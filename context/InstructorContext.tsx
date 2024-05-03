import {
  CourseManagamentCreation,
  InstructorContextProviderType,
} from "@/types/instructor/InstructorContextTypes";
import { getAuthData } from "@/utils/helpers";
import { useRouter } from "next/navigation";
import useSwr from "swr";
import React, { FormEvent, createContext, useState } from "react";

export const InstructorContext = createContext<InstructorContextProviderType>({
  instructorData: [],
  courseManage: CourseManagamentCreation.Requirements,
  currentStep: 0,
  newCourseValues: {
    type: "",
    title: "",
    category: "",
    language: "",
    requirements: [],
    forCourse: [],
    captions: "",
    subtitle: "",
    description: "",
    level: "",
    price: 0,
    sections: [],
  },
  setCourseManage: () => {},
  setCurrentStep: () => {},
  setnewCourseValues: () => {},
  submitCreateCourseHandler: (e) => {},
});

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

export const InstructorProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [courseCreationType, setcourseCreationType] = useState(
    CourseManagamentCreation.Requirements
  );
  const [newCourseValues, setnewCourseValues] = useState({
    type: "",
    title: "",
    category: "",
    language: "",
    requirements: [],
    forCourse: [],
    sections: [],
    captions: "",
    subtitle: "",
    description: "",
    image: "",
    level: "",
    price: 0,
  });
  const router = useRouter();
  const authData = getAuthData();
  const instructorId = authData?.id;
  const { data: instructorData } = useSwr(
    `/api/instructor/${instructorId}`,
    fetcher
  );

  async function submitCreateCourseHandler(e: FormEvent) {
    e.preventDefault();
    const courseData = {
      title: newCourseValues.title,
      subtitle: newCourseValues.subtitle,
      description: newCourseValues.description,
      skillLevel: newCourseValues.level,
      category: newCourseValues.category,
      language: newCourseValues.language,
      price: newCourseValues.price,
      sections: newCourseValues.sections,
      requirements: newCourseValues.requirements,
      forCourse: newCourseValues.forCourse,
    };
    const response = await fetch(`/api/courses/create/${instructorId}`, {
      method: "POST",
      body: JSON.stringify(courseData),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      alert("Created Course Finished");
      router.push("/instructor-dashboard");
    }
  }

  return (
    <InstructorContext.Provider
      value={{
        instructorData: instructorData,
        courseManage: courseCreationType,
        setCourseManage: setcourseCreationType,
        currentStep,
        setCurrentStep,
        newCourseValues,
        setnewCourseValues,
        submitCreateCourseHandler,
      }}
    >
      {children}
    </InstructorContext.Provider>
  );
};
