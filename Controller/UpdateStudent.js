import Students from "../Model/Students.js";

const UpdateStudent = async (req, res) => {
  try {
    const studentId = req.params.id;
    const { result, course } = req.body;
    let newResult = {
      lang1TheoryMarks: "",
      lang1OralMarks: "",
      lang2TheoryMarks: "",
      lang2OralMarks: "",
      opt1TheoryMarks: "",
      opt1OralMarks: "",
      opt2TheoryMarks: "",
      opt2OralMarks: "",
      opt3TheoryMarks: "",
      opt3OralMarks: "",
      opt4TheoryMarks: "",
      opt4OralMarks: "",
    };
    if (course === "Secondary Examination(10th Class)") {
      newResult = { ...newResult, opt5TheoryMarks: "", opt5OralMarks: "" };
    }
    Object.keys(newResult).map((curr, index) => {
      if (!result[curr]) {
        result[curr] = 0;
      }
      return curr;
    });
    const updatedStudent = await Students.findByIdAndUpdate(
      studentId,
      { ...req.body, result },
      { new: true }
    );
    let students;
    if (req.query.username) {
      students = await Students.find({
        course: updatedStudent.course,
        adminUsername: req.query.username,
      });
    } else {
      students = await Students.find({
        course: updatedStudent.course,
      });
    }
    return res
      .status(200)
      .json({ message: "Updated Successfully", data: students, success: true });
  } catch (err) {
    return res.status(500).send({
      message: err.message || "Error updating student",
      success: false,
    });
  }
};
export default UpdateStudent;
