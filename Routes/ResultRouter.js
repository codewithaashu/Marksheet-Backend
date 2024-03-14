import express from "express";
import GetResult from "../Controller/GetResult.js";
const ResultRouter = express.Router();
ResultRouter.route("/").post(GetResult);
export default ResultRouter;
