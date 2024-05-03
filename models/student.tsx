import mongoose, { Schema, model, models } from "mongoose";

const StudentSchema = new Schema({
  first_name: {
    type: String,
    required: [true, "First Name is required"],
    unique: true,
    match: [
      /^[A-Z][a-z]+$/,
      "First Name invalid, must contain uppercase letters",
    ],
  },
  last_name: {
    type: String,
    required: [true, "Last Name is required"],
    match: [
      /^[A-Z][a-z]+$/,
      "Last Name invalid, must contain uppercase letters",
    ],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required"],
    match: [/^\S+@\S+\.\S+$/, "Email invalid, must be correct type"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  cart: {
    items: [{ type: mongoose.Types.ObjectId, ref: "Course" }],
    totalAmount: { type: Number, default: 0 },
  },
  favorites: [{ type: mongoose.Types.ObjectId, ref: "Course", default: [] }],
  courses: [{ type: mongoose.Types.ObjectId, ref: "Course", default: [] }],
});

const Student = models.Student || model("Student", StudentSchema);

export default Student;
