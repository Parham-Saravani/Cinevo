import jwt from "jsonwebtoken";
const createToken = (userID) => {
  return jwt.sign({ id: userID }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};
const decompressToken = (token) => {
  const data = jwt.verify(token, process.env.JWT_SECRET);
  return data.id;
};
export { createToken, decompressToken };
