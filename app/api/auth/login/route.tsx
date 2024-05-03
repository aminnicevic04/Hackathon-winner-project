import { connectToDB } from "@/library/database";
import Instructor from "@/models/instructor";
import Student from "@/models/student";
import {
  generateToken,
  responseJson,
  responseMessage,
  validatePassword,
} from "@/utils/helpers";

export const POST = async (request: Request) => {
  const { email, password, type } = await request.json();

  try {
    await connectToDB();

    if (email === "" || password === "") {
      return responseMessage("Invalid data, please fill required fields!", 500);
    }

    if (type === "student") {
      const existingStudent = await Student.findOne({
        email,
      });

      if (!existingStudent) {
        return responseMessage(
          "Invalid credentials, could not log you in.",
          500
        );
      }

      const isPasswordValid = validatePassword(
        password,
        existingStudent.password
      );

      if (!isPasswordValid) {
        return responseMessage("Invalid password, could not log you in.", 500);
      }

      const token = generateToken(existingStudent.id);

      const studentInfo = {
        token: token,
        type: type,
        id: existingStudent._id,
      };

      return responseJson(studentInfo, 200);
    } else {
      const existingInstructor = await Instructor.findOne({
        email,
      });

      if (!existingInstructor) {
        return responseMessage(
          "Invalid credentials, could not log you in.",
          500
        );
      }

      const isPasswordValid = validatePassword(
        password,
        existingInstructor.password
      );

      if (!isPasswordValid) {
        return responseMessage("Invalid password, could not log you in.", 500);
      }

      const token = generateToken(existingInstructor.id);

      const instructorInfo = {
        token: token,
        type: type,
        id: existingInstructor._id,
      };

      return responseJson(instructorInfo, 200);
    }
  } catch (error) {
    return responseMessage("Internal Server Error", 500);
  }
};
