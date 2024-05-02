const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {

  let authHeader = req.headers.token;

  // let TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MjRkMDM0YmM2ODU1YTZhNDZhOTI3YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxNDY3NTY1MCwiZXhwIjoxNzE0Njc5MjUwfQ.El8khIsDKGADDx8YQQ1yEzE4DrTqj7phH5gkPpDX9UI"

  // authHeader = `Bearer ${TOKEN}`;

  console.log(authHeader);

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) res.status(403).json("Token is not valid!");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated by verify token !");
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};
