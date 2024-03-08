import Students from "../Model/Students.js";

const StudentsList = async (req, res) => {
  try {
    const course =
      req.query.course === "10th Class"
        ? "Secondary Examination(10th Class)"
        : "SR. Secondary Examination(12th Class)";
    let students;
    if (req.query.username) {
      students = await Students.find({
        course: course,
        adminUsername: req.query.username,
      });
    } else {
      students = await Students.find({
        course: course,
      });
    }
    return res.status(200).json({ data: students });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export default StudentsList;
