import mongoose from "mongoose";

const mongoDB = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("MongoDB connection failed", error);
    process.exit(1);
  }
};

export default mongoDB;
