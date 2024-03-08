import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB is successfully connected at port ${connection.port}`);
  } catch (err) {
    console.log("Connection error :", err);
  }
};
