import Students from "../Model/Students.js";

const RegisterStudent = async (req, res) => {
  try {
    const {
      modeOfResult,
      imgSrc,
      name,
      dob,
      gender,
      fatherName,
      motherName,
      year,
      course,
      stream,
      firstLanguage,
      secondLanguage,
      option1,
      option2,
      option3,
      option4,
      option5,
      adminUsername,
      result,
    } = req.body;
    const lastStudent = await Students.findOne({ course }).sort({ rollNo: -1 });
    let rollNo;
    if (!lastStudent) {
      rollNo = 5001;
    } else {
      rollNo = lastStudent.rollNo + 1;
    }
    const random4Digits = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    const regNo = `${
      course === "SR. Secondary Examination(12th Class)" ? "HS" : "SE"
    }${year}${random4Digits}`;
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
    const student = new Students({
      modeOfResult,
      imgSrc,
      name,
      course,
      dob,
      gender,
      fatherName,
      motherName,
      rollNo,
      regNo,
      adminUsername,
      firstLanguage,
      option1,
      option2,
      option3,
      option4,
      option5,
      year,
      secondLanguage,
      stream,
      result,
    });
    const data = await student.save();
    return res
      .status(200)
      .json({ success: true, message: "Registered Successfully", data });
  } catch (err) {
    return res.status(500).json({ message: err.message, success: false });
  }
};
export default RegisterStudent;
