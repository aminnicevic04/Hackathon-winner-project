import { connectToDB } from "@/library/database";
import Course from "@/models/course";
import Student from "@/models/student";
import { responseMessage } from "@/utils/helpers";

export const POST = async (
  request: Request,
  { params }: { params: { studentId: string } }
) => {
  try {
    await connectToDB();

    const student = await Student.findById(params.studentId);

    if (!student) {
      return responseMessage("Student not found", 404);
    }

    const coursesInCart = student.cart.items;

    if (coursesInCart.length === 0) {
      return responseMessage("Cart is empty", 400);
    }

    student.courses.push(...coursesInCart);
    student.cart.items = [];
    student.cart.totalAmount = 0;

    await student.save();
    return responseMessage(
      "Payment is successful. The Courses are purchased.",
      200
    );
  } catch (error) {
    console.log(error);
    return responseMessage("Internal server error", 500);
  }
};
