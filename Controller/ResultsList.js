import Students from "../Model/Students.js";

const ResultsList = async (req, res) => {
  try {
    const students = await Students.find({});
    const data = students.filter((curr) => {
      return curr.result;
    });
    return res.status(200).json({ data });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export default ResultsList;
