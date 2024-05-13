// backend/src/utils/auth.js

const jwt = require("jsonwebtoken");
const { secretKey } = require("../config");

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, secretKey, { expiresIn: "1h" });
};

const verifyToken = (token) => {
  return jwt.verify(token, secretKey);
};

module.exports = { generateToken, verifyToken };
