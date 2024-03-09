import express from "express";
import DeclareResult from "../Controller/DeclareResult.js";
import ResultsList from "../Controller/ResultsList.js";
import UpdateResult from "../Controller/UpdateResult.js";
const ResultRouter = express.Router();
ResultRouter.route("/").get(ResultsList);
ResultRouter.route("/:id").post(DeclareResult).put(UpdateResult);
export default ResultRouter;
