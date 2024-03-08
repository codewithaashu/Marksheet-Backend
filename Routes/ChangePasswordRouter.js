import express from "express";
import ChangePassword from "../Controller/ChangePassword.js";
const ChangePasswordRouter = express.Router();
ChangePasswordRouter.route("/:id").post(ChangePassword);
export default ChangePasswordRouter;
