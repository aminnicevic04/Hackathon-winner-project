import React from "react";
import Button from "../../../shared/form/Button";

const InstructorNav: React.FC = () => {
  return (
    <nav className="w-full flex gap-2 p-4 justify-center">
      <Button
        isLink={true}
        type="button"
        styleType="initial"
        linkHref="instructor-dashboard/new-course"
        additionalStyles="bg-purple-600 transition-all hover:bg-purple-700"
      >
        Create Course
      </Button>
      <Button
        isLink={true}
        linkHref="instructor-dashboard"
        type="button"
        styleType="initial"
        additionalStyles="bg-purple-600 transition-all hover:bg-purple-700"
      >
        My Courses
      </Button>
      <Button
        isLink={true}
        linkHref=""
        type="button"
        styleType="initial"
        additionalStyles="bg-purple-600 transition-all hover:bg-purple-700"
      >
        Home
      </Button>
    </nav>
  );
};

export default InstructorNav;
