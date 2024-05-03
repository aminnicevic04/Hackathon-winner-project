import { connectToDB } from "@/library/database";
import Course from "@/models/course";
import { responseJson, responseMessage } from "@/utils/helpers";

export const GET = async (
  request: Request,
  { params }: { params: { querySearch: string } }
) => {
  try {
    await connectToDB();

    const courses = await Course.find({ title: { $in: params.querySearch } });

    if (!courses) {
      return responseMessage("Could not find courses right now", 404);
    }

    return responseJson(courses, 200);
  } catch (error) {
    console.log(error);
    return responseMessage("Internal server error", 500);
  }
};
