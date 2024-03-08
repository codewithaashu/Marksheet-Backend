import mongoose from "mongoose";
const AdminSchema = new mongoose.Schema({
  userType: { type: String, default: "Admin" },
  name: { type: String, required: true },
  username: { type: String, unique: true, required: true },
  email: { type: String },
  password: { type: String, required: true },
});
AdminSchema.methods.generateToken = function () {
  const token = jwt.sign({ _id: this._id }, "mynameisashishranjan");
  this.tokens = [...this.tokens, { token }];
  this.save();
  return token;
};

export const Admins = mongoose.model("Admins", AdminSchema);
