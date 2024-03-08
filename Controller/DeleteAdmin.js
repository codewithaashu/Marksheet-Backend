import { Admins } from "../Model/Admins.js";

const DeleteAdmin = async (req, res) => {
  try {
    const adminId = req.params.id;
    await Admins.findByIdAndDelete(adminId);
    const data = await Admins.find({ userType: "Admin" });
    return res.status(200).json({ message: "Deleted Successfully", data });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
      data: null,
    });
  }
};
export default DeleteAdmin;
