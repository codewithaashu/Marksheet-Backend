import express from "express";
import CreateAdmin from "../Controller/CreateAdmin.js";
import AdminsList from "../Controller/AdminsList.js";
import UpdateAdmin from "../Controller/UpdateAdmin.js";
import DeleteAdmin from "../Controller/DeleteAdmin.js";
const AdminRouter = express.Router();
AdminRouter.route("/").post(CreateAdmin).get(AdminsList);
AdminRouter.route("/:id").put(UpdateAdmin).delete(DeleteAdmin);
export default AdminRouter;
