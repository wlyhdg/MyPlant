const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../models/User');
const tkh = require('../../middleware/tokenHandler.js')

router.post("/login", (req, res) => {
  const { nameOrEmail, password } = req.body

  if ( !nameOrEmail || !password) {
    return res.status(400).json({msg: "Please enter all required fields."});
  }

  User.findOne({ $or: [{username: nameOrEmail}, {email: nameOrEmail}]})
  .then(foundItem => {
      if(!foundItem) {
          return res.status(400).json({err: "User does not exist!"});
      }

      // Validate the password received client
      bcrypt.compare(password, foundItem.password)
      .then( isMatch => {
        if (!isMatch) {
          return res.status(400).json({msg: "Invalid credentials"});
        } else {
          jwt.sign({id: foundItem.id}, process.env.JWT_KEY, (err, token) => {
            if (err) 
                console.log(err)
            res.json({
                token,
                user: {
                    id: foundItem.id,
                    username: foundItem.username,
                    email: foundItem.email
                }
            });
          });
        }
      })
  });
});

router.get("/user", tkh, (req, res) => {
  User.findById(req.user.id)
  .select('-password')
  .then(usr => {
    res.json(usr);
  })
})

module.exports = router;