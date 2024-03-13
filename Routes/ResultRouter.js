import express from "express";
import DeclareResult from "../Controller/DeclareResult.js";
import ResultsList from "../Controller/ResultsList.js";
import UpdateResult from "../Controller/UpdateResult.js";
import GetResult from "../Controller/GetResult.js";
const ResultRouter = express.Router();
ResultRouter.route("/").get(ResultsList).post(GetResult);
ResultRouter.route("/:id").post(DeclareResult).put(UpdateResult);
export default ResultRouter;
