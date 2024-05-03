import { connectToDB } from "@/library/database";
import Student from "@/models/student";
import { responseJson, responseMessage } from "@/utils/helpers";

export const GET = async (
  request: Request,
  { params }: { params: { studentId: string } }
) => {
  try {
    await connectToDB();

    const student = await Student.findById(params.studentId)
      .populate(["courses", "favorites", "cart.items"])
      .select("-password");

    if (!student) {
      return responseMessage("Student not found", 404);
    }

    return responseJson(student, 200);
  } catch (error) {
    console.log(error);
    return responseMessage("Internal server error", 500);
  }
};
