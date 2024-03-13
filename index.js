import express from "express";
import { connectDB } from "./Config/Database.js";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import StudentRouter from "./Routes/StudentRouter.js";
import ResultRouter from "./Routes/ResultRouter.js";
import AdminRouter from "./Routes/AdminRouter.js";
import LoginRouter from "./Routes/LoginRouter.js";
import ClassStudentsRouter from "./Routes/ClassStudentsRouter.js";
import ChangePasswordRouter from "./Routes/ChangePasswordRouter.js";
import MessageRouter from "./Routes/MessageRouter.js";
const app = express();
dotenv.configDotenv();
// const __dirname = path.resolve();
// app.use(express.static(path.join(__dirname, "build")));

// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });
app.get("/", (req, res) => {
  res.send("Hello I am Server");
});
app.use(cors());
app.use(express.json());

connectDB();
app.use("/api/student", StudentRouter);
app.use("/api/result", ResultRouter);
app.use("/api/admin", AdminRouter);
app.use("/api/login", LoginRouter);
app.use("/api/courseStudent", ClassStudentsRouter);
app.use("/api/changePassword", ChangePasswordRouter);
app.use("/api/message", MessageRouter);
app.listen("8000", () => {
  console.log("I am listening at port 8000");
});
