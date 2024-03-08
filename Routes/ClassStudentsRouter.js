import express from "express";
import CourseStudentsList from "../Controller/CourseStudentsList.js";
const ClassStudentsRouter = express.Router();
ClassStudentsRouter.route("/:course").get(CourseStudentsList);
export default ClassStudentsRouter;
