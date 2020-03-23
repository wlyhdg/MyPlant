require('dotenv').config()
const jwt = require('jsonwebtoken');

function tokenHandler(req, res, next) {
  const token = req.header('X-Auth-Token');
  if (!token) {
    res.status(401).json({msg: "Authorization Error. No token provided."})
  }
  try{
    const decoded = jwt.verify(token, process.env.JWT_KEY)
    req.user = decoded
    next()
  } catch(e) {
    res.status(400).json({msg: "Invalid token."})
  }

}

module.exports = tokenHandler;