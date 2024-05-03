import { connectToDB } from "@/library/database";
import Course from "@/models/course";
import Instructor from "@/models/instructor";
import { responseJson, responseMessage } from "@/utils/helpers";

export const GET = async (
  request: Request,
  { params }: { params: { courseId: string } }
) => {
  try {
    await connectToDB();

    const course = await Course.findById(params.courseId).populate({
      path: "instructor",
      model: Instructor,
    });

    if (!course) {
      return responseMessage(
        "Could not find course right now, please try again",
        500
      );
    }

    return responseJson(course, 200);
  } catch (error) {
    console.log(error);
    return responseMessage("Internal server error", 500);
  }
};
