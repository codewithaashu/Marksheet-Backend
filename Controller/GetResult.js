import Students from "../Model/Students.js";

const GetResult = async (req, res) => {
  try {
    const { regNo, dob, course } = req.body;
    console.log(req.body);
    let student;
    if (!course) {
      student = await Students.findOne({
        regNo: regNo,
        dob: dob,
      });
    } else {
      student = await Students.findOne({
        regNo: regNo,
        dob: dob,
        course: course,
      });
    }
    console.log(student);
    if (!student || student.modeOfResult === "Offline") {
      return res.status(201).json({
        success: false,
        message: "Invalid details.Please enter valid details.",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Successfully verified!",
      data: student,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message, success: false });
  }
};

export default GetResult;
