import mongoose from "mongoose";

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  try {
    await mongoose.connect(process.env.MONGODB_URI!, {
      dbName: "online_learning",
    });
    console.log("Connected");
  } catch (error) {
    console.log("Cannot connect to db");
  }
};
