import Students from "../Model/Students.js";

const DeleteStudent = async (req, res) => {
  try {
    const studentId = req.params.id;
    const deletedStudent = await Students.findByIdAndDelete(studentId);
    const data = await Students.find({ course: deletedStudent.course });
    return res
      .status(201)
      .json({ message: "Student Deleted Successfully", data });
  } catch (err) {
    return res.status(500).send({
      error: err.message || "Error deleting student",
    });
  }
};
export default DeleteStudent;
