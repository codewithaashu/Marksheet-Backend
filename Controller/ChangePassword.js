import { Admins } from "../Model/Admins.js";
const ChangePassword = async (req, res) => {
  try {
    const { id } = req.params;
    const { currentPassword, newPassword } = req.body;
    const admin = await Admins.findOne({ _id: id });
    if (!admin) {
      return res.status(202).json({ message: "Invalid User", success: false });
    }
    const comparePassword = admin.password == currentPassword;
    if (!comparePassword) {
      return res
        .status(202)
        .json({ message: "Current password is invalid.", success: false });
    }
    await Admins.findByIdAndUpdate(id, { password: newPassword });
    res
      .status(200)
      .json({ message: "Password changed successfully!", success: true });
  } catch (err) {
    res.status(500).json({ message: err.message, success: false });
  }
};
export default ChangePassword;
