import mongoose from "mongoose";
import dotenv from "dotenv";

// setup
dotenv.config();
export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("db connect success");
  } catch (error) {
    console.log(error.message);
  }
};
