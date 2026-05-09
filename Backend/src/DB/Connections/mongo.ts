import mongoose from "mongoose";
import { env } from "../../Config/env.js";

const connectDB = async () => {
  try {
    await mongoose.connect(env.MONGO_DB_URI);
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("MongoDB Connection Error:", err);
    process.exit(1);
  }
};

export default connectDB;
