import { connectToDB } from "@/library/database";
import Course from "@/models/course";
import { responseJson, responseMessage } from "@/utils/helpers";

export const GET = async (
  request: Request,
  { params }: { params: { filter: any[] } }
) => {
  try {
    await connectToDB();

    const [category, skillLevel, language, duration] = params.filter.map(
      (filter) => filter
    );

    const query: any = {};

    if (category) query.category = { $in: category };
    if (skillLevel) query.skillLevel = { $in: skillLevel };
    if (language) query.language = { $in: language };
    if (duration) query.duration = { $in: duration };

    const courses = await Course.find(query);

    if (courses.length > 0) {
      return responseJson(courses, 200);
    } else {
      return responseMessage("Could not find courses by these filters", 404);
    }
  } catch (error) {
    console.log(error);
    return responseMessage("Internal server error", 500);
  }
};
