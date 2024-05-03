import mongoose, { Schema, model, models } from "mongoose";

const CourseSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  subtitle: {
    type: String,
    required: [true, "Subtitle is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  image: {
    type: String,
    required: [true, "Image is required"],
  },
  skillLevel: {
    type: String,
    required: [true, "SkillLevel is required"],
  },
  category: {
    type: String,
    required: [true, "Category is required"],
  },
  language: {
    type: String,
    required: [true, "Language is required"],
  },
  duration: {
    type: String,
    default: 0,
    // required: [true, "Duration is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  popularity: {
    type: String,
    default: 0,
    // required: [true, "Popularity is required"],
  },
  articles: {
    type: Number,
    default: 20,
  },
  requirements: [{ type: String, default: [] }],
  forCourse: [{ type: String, default: [] }],
  sections: [
    {
      title: { type: String, required: true },
      lectures: [
        {
          title: { type: String, required: true },
          src: { type: String, required: true },
        },
      ],
    },
  ],
  students: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Student",
      default: [],
    },
  ],
  instructor: {
    type: mongoose.Types.ObjectId,
    ref: "Instructor",
    required: true,
  },
});

const Course = models.Course || model("Course", CourseSchema);

export default Course;
