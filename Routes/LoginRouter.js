import express from "express";
import Login from "../Controller/Login.js";
const LoginRouter = express.Router();
LoginRouter.route("/").post(Login);
export default LoginRouter;
