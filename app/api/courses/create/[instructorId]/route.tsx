import { connectToDB } from "@/library/database";
import Course from "@/models/course";
import Instructor from "@/models/instructor";
import { responseMessage } from "@/utils/helpers";

export const POST = async (
  request: Request,
  { params }: { params: { instructorId: string } }
) => {
  const {
    title,
    subtitle,
    description,
    skillLevel,
    category,
    language,
    price,
    sections,
    requirements,
    forCourse,
  } = await request.json();

  try {
    await connectToDB();

    if (
      title === "" ||
      subtitle === "" ||
      description === "" ||
      skillLevel === "" ||
      category === "" ||
      language === "" ||
      price === "" ||
      requirements.length === 0 ||
      forCourse.length === 0 ||
      sections === ""
    ) {
      return responseMessage("Invalid inputs, please enter valid data", 500);
    }

    const instructor = await Instructor.findById(params.instructorId);

    if (!instructor) {
      return responseMessage(
        "Could not find instructor right now, please try again later",
        500
      );
    }

    const createdCourse = new Course({
      title,
      subtitle,
      description,
      image: "/assets/images/8.jpg",
      skillLevel,
      category,
      language,
      price,
      requirements,
      forCourse,
      sections,
      instructor: params.instructorId,
    });

    if (!createdCourse) {
      return responseMessage(
        "Could not create course right now, please try again later",
        500
      );
    }

    const course = await createdCourse.save();
    instructor.courses.push(course._id);
    await instructor.save();

    if (course) {
      return responseMessage("Successfully created course", 201);
    }
  } catch (error) {
    console.log(error);
    return responseMessage("Internal server error", 500);
  }
};
