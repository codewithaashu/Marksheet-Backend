import mongoose from "mongoose";
const studentSchema = new mongoose.Schema({
  imgSrc: { type: String, required: true },
  name: { type: String, required: true },
  dob: { type: String, required: true },
  fatherName: { type: String, required: true },
  motherName: { type: String, required: true },
  year: { type: Number, required: true },
  course: { type: String, required: true },
  stream: { type: String, required: false },
  firstLanguage: { type: String, required: true },
  secondLanguage: { type: String, required: true },
  option1: { type: String, required: true },
  option2: { type: String, required: true },
  option3: { type: String, required: true },
  option4: { type: String, required: true },
  option5: { type: String, required: false },
  rollNo: { type: Number, unique: true, required: true },
  regNo: { type: String, unique: true, required: true },
  result: { type: Object },
  regDate: { type: String, default: new Date().toDateString(), required: true },
  adminUsername: { type: String, required: true },
});

const Students = new mongoose.model("Students", studentSchema);
export default Students;
