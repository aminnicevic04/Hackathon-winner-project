export interface InstructorCourseCardProps {
  image: string;
  title: string;
  description: string;
  id?: string;
}

export interface InstructorCourseListProps {
  courses: InstructorCourseCardProps[];
}
