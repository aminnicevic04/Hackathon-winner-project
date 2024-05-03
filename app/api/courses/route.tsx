import { connectToDB } from "@/library/database";
import Course from "@/models/course";
import Instructor from "@/models/instructor";
import { responseJson, responseMessage } from "@/utils/helpers";

export const GET = async () => {
  try {
    await connectToDB();

    const courses = await Course.find({}).populate({
      path: "instructor",
      model: Instructor,
    });

    if (!courses) {
      return responseMessage(
        "Could not find courses right now, please try again",
        500
      );
    }

    return responseJson(courses, 200);
  } catch (error) {
    console.log(error);
    return responseMessage("Internal server error", 500);
  }
};
