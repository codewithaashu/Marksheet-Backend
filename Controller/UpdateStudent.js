import Students from "../Model/Students.js";

const UpdateStudent = async (req, res) => {
  try {
    const studentId = req.params.id;
    const updatedStudent = await Students.findByIdAndUpdate(
      studentId,
      req.body,
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
