import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import { createToken, decompressToken } from "../utilities/token.js";

const emailRegex =
  /^(?<localPart>(?<dotString>[0-9a-z!#$%&'*+\-\/=?^_`\{|\}~\u{80}-\u{10FFFF}]+(\.[0-9a-z!#$%&'*+\-\/=?^_`\{|\}~\u{80}-\u{10FFFF}]+)*)|(?<quotedString>"([\x20-\x21\x23-\x5B\x5D-\x7E\u{80}-\u{10FFFF}]|\\[\x20-\x7E])*"))(?<!.{64,})@(?<domainOrAddressLiteral>(?<addressLiteral>\[((?<IPv4>\d{1,3}(\.\d{1,3}){3})|(?<IPv6Full>IPv6:[0-9a-f]{1,4}(:[0-9a-f]{1,4}){7})|(?<IPv6Comp>IPv6:([0-9a-f]{1,4}(:[0-9a-f]{1,4}){0,5})?::([0-9a-f]{1,4}(:[0-9a-f]{1,4}){0,5})?)|(?<IPv6v4Full>IPv6:[0-9a-f]{1,4}(:[0-9a-f]{1,4}){5}:\d{1,3}(\.\d{1,3}){3})|(?<IPv6v4Comp>IPv6:([0-9a-f]{1,4}(:[0-9a-f]{1,4}){0,3})?::([0-9a-f]{1,4}(:[0-9a-f]{1,4}){0,3}:)?\d{1,3}(\.\d{1,3}){3})|(?<generalAddressLiteral>[a-z0-9\-]*[[a-z0-9]:[\x21-\x5A\x5E-\x7E]+))\])|(?<Domain>(?!.{256,})(([0-9a-z\u{80}-\u{10FFFF}]([0-9a-z\-\u{80}-\u{10FFFF}]*[0-9a-z\u{80}-\u{10FFFF}])?))(\.([0-9a-z\u{80}-\u{10FFFF}]([0-9a-z\-\u{80}-\u{10FFFF}]*[0-9a-z\u{80}-\u{10FFFF}])?))*))$/iu;

const takeAllUsers = async (req, res) => {
  const data = await User.find(
    {},
    {
      _id: true,
      username: true,
      role: true,
      email: true,
      createdAt: true,
    },
  );
  res.json(data);
};

const registerNewUser = async (req, res) => {
  const {
    username: userUsername,
    email: userEmail,
    password: userPassword,
  } = req.body;

  if (userUsername && emailRegex.test(userEmail) && userPassword.length >= 8) {
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
          const token = await createToken(user._id);
          res.json({ message: "LOGIN_SUCCESSFUL", token });
          // if (user.isLogin) {
          //   throw new Error("ALREADY_LOGIN");
          // } else {
          // User.updateOne({ _id: user._id }, { isLogin: true });
          //   const token = await createToken(user._id);
          //   res.json({ message: "LOGIN_SUCCESSFUL", token });
          // }
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
const takeUserData = async (req, res) => {
  const { token } = req.body;
  if (token) {
    try {
      const userID = decompressToken(token);
      if (!userID) throw Error();
      try {
        const userData = await User.findOne(
          { _id: userID },
          { _id: false, username: true, role: true, imageUrl: true },
        );
        if (userData) {
          res.json(userData);
        } else {
          throw new Error("NOT_FOUND");
        }
      } catch (error) {
        res.status(404).json({ message: error });
      }
    } catch (error) {
      res.json({ message: "INVALID_TOKEN" });
    }
  } else {
    res.status(400).json({ message: "INVALID_DATA" });
  }
};

const updateUserData = async (req, res) => {
  const { token, data } = req.body;
  if (token) {
    const userID = decompressToken(token);
    if (data) {
      try {
        const currentUser = await User.updateOne({ _id: userID }, data);
        res.json({ message: "UPDATE_SUCCESSFUL" });
      } catch (error) {
        res.json({ message: "USER_NOT_FOUND" });
      }
    } else {
      res.json({ message: "WRONG_DATA" });
    }
  } else {
    res.json({ message: "TOKEN_NOT_FOUND" });
  }
};
export {
  registerNewUser,
  loginOperation,
  logoutHandler,
  takeUserData,
  takeAllUsers,
  updateUserData,
};
