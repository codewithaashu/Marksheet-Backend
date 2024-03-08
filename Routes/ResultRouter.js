import express from "express";
import DeclareResult from "../Controller/DeclareResult.js";
import ResultsList from "../Controller/ResultsList.js";
import UpdateResult from "../Controller/UpdateResult.js";
import DeleteResult from "../Controller/DeleteResult.js";
const ResultRouter = express.Router();
ResultRouter.route("/").get(ResultsList);
ResultRouter.route("/:id")
  .post(DeclareResult)
  .put(UpdateResult)
  .delete(DeleteResult);
export default ResultRouter;
