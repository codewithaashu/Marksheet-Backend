import Results from "../Model/Results.js";
import Students from "../Model/Students.js";

const DeclareResult = async (req, res) => {
  try {
    const studentID = req.params.id;
    const student = await Students.findOne({ _id: studentID });
    if (student.result) {
      return res
        .status(201)
        .json({ message: "Result already exist.", success: false });
    }
    await Students.updateOne(
      { _id: studentID },
      { $set: { result: req.body } }
    );
    return res.status(201).json({
      message: "Result is successfully created",
      success: true,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
      success: false,
    });
  }
};
export default DeclareResult;
