import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    role: { type: String, enum: ["admin", "user"], default: "user" },
    email: { type: String, required: true },
    password: { type: String, required: true },
    imageUrl: { type: String, default: null },
    isLogin: { type: Boolean, default: true },
  },
  { timestamps: true },
);

const User = mongoose.model("users", userSchema);
export default User;
