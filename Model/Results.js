import mongoose from "mongoose";

const ResultSchema = new mongoose.Schema({
  studentID: { type: String, required: true, unique: true },
  subject1Marks: { type: Number, required: true },
  subject2Marks: { type: Number, required: true },
  subject3Marks: { type: Number, required: true },
  subject4Marks: { type: Number, required: true },
  subject5Marks: { type: Number, required: true },
  subject6Marks: { type: Number, required: true },
  subject7Marks: { type: Number },
});

const Results = mongoose.model("Results", ResultSchema);
export default Results;
