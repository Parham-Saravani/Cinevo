import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import { createToken, decompressToken } from "../utilities/token.js";

const emailRegex = /[a-zA-Z1-9]+@[a-zA-Z]+\.[a-zA-Z]+/;

const registerNewUser = async (req, res) => {
  const {
    username: userUsername,
    email: userEmail,
    password: userPassword,
  } = req.body;

  if (userUsername && emailRegex.test(userEmail) && userPassword.length >= 2) {
    try {
      const isEmailUsed = await User.findOne({ email: userEmail });
      const isUsernameTaken = await User.findOne({ username: userUsername });
      const hashedPassword = await bcrypt.hash(userPassword, 10);
      if (isUsernameTaken) {
        throw new Error("USERNAME_TAKEN");
      } else if (isEmailUsed) {
        throw new Error("EMAIL_USED");
      } else {
        const newUser = await User.create({
          username: userUsername,
          email: userEmail,
          password: hashedPassword,
        });
        const token = await createToken(newUser._id);
        res.status(201).json({ message: "USER_CREATED", token });
      }
    } catch (error) {
      res.json({ message: error.message });
    }
  } else {
    res.json({ message: "INVALID-DATA" });
  }
};
const loginOperation = async (req, res) => {
  const { email, password } = req.body;

  if (emailRegex.test(email) && password.length >= 8) {
    try {
      const user = await User.findOne({ email: email });
      if (user) {
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (passwordCompare) {
          if (user.isLogin) {
            throw new Error("ALREADY_LOGIN");
          } else {
            User.updateOne({ _id: user._id }, { isLogin: true });
            const token = await createToken(user._id);
            res.json({ message: "LOGIN_SUCCESSFUL", token });
          }
        } else {
          throw new Error("WRONG_CREDENTIALS");
        }
      } else {
        throw new Error("WRONG_CREDENTIALS");
      }
    } catch (error) {
      res.json({ message: error.message });
    }
  }
};
const logoutHandler = async (req, res) => {
  try {
    const token = req.body;
    const userID = await decompressToken(token);
    const user = await User.updateOne({ _id: userID }, { isLogin: false });
    res.json({ message: "SIGNOUT_SUCCESSFUL" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
export { registerNewUser, loginOperation, logoutHandler };
