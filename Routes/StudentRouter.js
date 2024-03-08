import express from "express";
import RegisterStudent from "../Controller/RegisterStudent.js";
import DeleteStudent from "../Controller/DeleteStudent.js";
import UpdateStudent from "../Controller/UpdateStudent.js";
import StudentsList from "../Controller/StudentsList.js";
import StudentDetail from "../Controller/StudentDetail.js";
const StudentRouter = express.Router();
StudentRouter.route("/").post(RegisterStudent).get(StudentsList);
StudentRouter.route("/:id")
  .put(UpdateStudent)
  .delete(DeleteStudent)
  .get(StudentDetail);
export default StudentRouter;
