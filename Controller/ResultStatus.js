import Students from "../Model/Students.js";

const ResultStatus = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedStudent = await Students.findByIdAndUpdate(id, {
      printingStatus: "Completed",
    });
    const students = await Students.find({
      course: updatedStudent.course,
    });
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
export default ResultStatus;
