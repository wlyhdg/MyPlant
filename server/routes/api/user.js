const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../models/User');

router.post("/", (req, res) => {
  const { username, email, password } = req.body

  if ( !username || !email || !password) {
    return res.status(400).json({msg: "Please enter all required fields."});
  }

  User.findOne({ username })//, (err, gotItem) => {
    .then(gotItem => {
      if(gotItem) {
          return res.status(400).json({err: "User already exists"});
      }
      const createdUser = new User({
          username,
          password,
          email
      });

      // Salt and hash credentials for User
      bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(password, salt, (err, hash) => {
              if (err) {
                  console.log(err);
              } 
              createdUser.password = hash;
              createdUser.save()
              .then((usr) => {
                  jwt.sign({id: usr.id}, process.env.JWT_KEY, (err, token) => {
                      if (err) 
                          console.log(err)
                      res.json({
                          token,
                          user: {
                              id: usr.id,
                              username: usr.username,
                              email: usr.email
                          }
                      });
                  });
              });
          })
      })
  });
});

router.post("/bmi", (req, res) => {
    console.log(req.body)
}) 

module.exports = router;