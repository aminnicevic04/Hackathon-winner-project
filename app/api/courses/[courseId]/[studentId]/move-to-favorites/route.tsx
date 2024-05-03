import { connectToDB } from "@/library/database";
import Course from "@/models/course";
import Student from "@/models/student";
import { responseJson, responseMessage } from "@/utils/helpers";

export const POST = async (
  request: Request,
  { params }: { params: { courseId: string; studentId: string } }
) => {
  try {
    await connectToDB();

    const course = await Course.findById(params.courseId);
    const student = await Student.findById(params.studentId);

    if (!course || !student) {
      return responseMessage("Cannot be found ", 404);
    }

    if (student.favorites.includes(course._id)) {
      return responseMessage("Course is already in the favorites", 500);
    }

    const cartCourseId = student.cart.items.find(
      (courseId: string) => courseId.toString() === course._id.toString()
    );

    const courseInCart = await Course.findById(cartCourseId);

    student.cart.items.pull(courseInCart._id);
    student.cart.totalAmount -= courseInCart.price;
    student.favorites.push(course._id);

    await student.save();
    return responseMessage("Course moved to favorites", 200);
  } catch (error) {
    console.log(error);
    return responseMessage("Internal server error", 500);
  }
};
