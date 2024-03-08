import Students from "../Model/Students.js";

const CourseStudentsList = async (req, res) => {
  try {
    const course =
      req.params.course === "Secondary"
        ? "Secondary Examination(10th Class)"
        : "SR. Secondary Examination(12th Class)";
    const students = await Students.find({ course });
    return res
      .status(200)
      .json({ success: true, message: "Successfully", data: students });
  } catch (err) {
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};
export default CourseStudentsList;
