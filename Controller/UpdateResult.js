import Students from "../Model/Students.js";

const UpdateResult = async (req, res) => {
  try {
    const studentID = req.params.id;
    await Students.updateOne(
      { _id: studentID },
      { $set: { result: { ...req.body } } }
    );
    const students = await Students.find({});
    const data = students.filter((curr) => {
      return curr.result;
    });
    return res
      .status(201)
      .json({ message: "Result Updated Successfully", success: true, data });
  } catch (err) {
    return res.status(500).json({ message: err.message, success: false });
  }
};
export default UpdateResult;
