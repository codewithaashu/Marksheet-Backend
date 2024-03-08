import { Admins } from "../Model/Admins.js";

const AdminsList = async (req, res) => {
  try {
    const admins = await Admins.find({ userType: "Admin" });
    if (!admins || admins.length == 0)
      throw new Error({ data: null, message: "No admin found" });
    return res.status(200).json({ data: admins, message: "Admin found" });
  } catch (err) {
    return res.status(500).json({
      data: null,
      message: err.message,
    });
  }
};
export default AdminsList;
