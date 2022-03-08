const { AuthenticationError } = require("apollo-server");
const jwt = require("jsonwebtoken");

const secret = process.env.SECRET;
const expiration = "2h";

const signToken = ({ firstName, lastName, email, username, id }) => {
  const payload = { firstName, lastName, email, username, id };
  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
};

const authMiddleware = ({ req }) => {
  let token = req.body.token || req.query.token || req.headers.authorization;

  if (req.headers.authorization) {
    token = token.split(" ").pop().trim();
  }

  if (!token) {
    return req;
  }

  try {
    const { data } = jwt.verify(token, secret, { maxAge: expiration });
    req.user = data;
  } catch {
    throw new AuthenticationError("Invalid token");
  }

  return req;
};

const validatePrice = (price) => {
  return Math.round(price * 100) / 100;
};

module.exports = {
  signToken,
  authMiddleware,
  validatePrice,
};
