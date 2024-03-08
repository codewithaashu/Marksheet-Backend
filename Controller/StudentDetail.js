import Students from "../Model/Students.js";

const StudentDetail = async (req, res) => {
  try {
    const studentId = req.params.id;
    const data = await Students.findOne({ _id: studentId });
    return res
      .status(200)
      .json({ message: "Successfully", data, success: true });
  } catch (err) {
    return res.status(500).send({
      message: err.message || "Error fetching student",
      success: false,
    });
  }
};

export default StudentDetail;
