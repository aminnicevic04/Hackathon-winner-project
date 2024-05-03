import { connectToDB } from "@/library/database";
import Course from "@/models/course";
import Instructor from "@/models/instructor";
import { responseJson, responseMessage } from "@/utils/helpers";

export const GET = async (
  request: Request,
  { params }: { params: { instructorId: string } }
) => {
  try {
    await connectToDB();

    const instructor = await Instructor.findById(params.instructorId)
      .populate(["courses"])
      .select("-password");

    if (!instructor) {
      return responseMessage("Instructor not found", 404);
    }

    return responseJson(instructor, 200);
  } catch (error) {
    console.log(error);
    return responseMessage("Internal server error", 500);
  }
};
