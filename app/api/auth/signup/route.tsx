import { connectToDB } from "@/library/database";
import Instructor from "@/models/instructor";
import Student from "@/models/student";
import {
  generateToken,
  hashPassword,
  responseJson,
  responseMessage,
} from "@/utils/helpers";

export const POST = async (request: Request) => {
  const { first_name, last_name, email, password, type } = await request.json();

  try {
    await connectToDB();

    if (
      first_name === "" ||
      last_name === "" ||
      email === "" ||
      password === ""
    ) {
      return responseMessage("Invalid data, please fill required fields!", 500);
    }

    if (type === "student") {
      const existingStudent = await Student.findOne({
        email: email,
        first_name: first_name,
      });

      if (existingStudent) {
        return responseMessage(
          "Student already exist with this email or first name!",
          500
        );
      }

      const hashedPassword = await hashPassword(password);

      const createdStudent = new Student({
        first_name,
        last_name,
        email,
        password: hashedPassword,
        cart: {},
        courses: [],
      });

      const student = await createdStudent.save();
      const token = generateToken(student.id);

      const studentInfo = {
        token: token,
        type: type,
        id: student._id,
      };

      return responseJson(studentInfo, 200);
    } else {
      const existingInstructor = await Instructor.findOne({
        email: email,
        first_name: first_name,
      });

      if (existingInstructor) {
        return responseMessage(
          "Instructor already exist with this email or first name!",
          500
        );
      }

      const hashedPassword = await hashPassword(password);

      const createdInstructor = new Instructor({
        first_name,
        last_name,
        email,
        password: hashedPassword,
      });

      const instructor = await createdInstructor.save();
      const token = generateToken(instructor.id);

      const instructorInfo = {
        token: token,
        type: type,
        id: instructor._id,
      };

      return responseJson(instructorInfo, 200);
    }
  } catch (error) {
    return responseMessage("Internal Server Error", 500);
  }
};
