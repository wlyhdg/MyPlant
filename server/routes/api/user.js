const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const tkh = require('../../middleware/tokenHandler.js')

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

router.get("/bmi", tkh, (req, res) => {
    console.log(req.user)
    User.findById(req.user.id, (err, foundUser) => {
        if (err) {
            res.json(400).response({err})
        }
        res.json({bmi: foundUser.bmi || 0})
    })
}) 

router.patch("/bmi", (req, res) => {
    const {bmi, user} = req.body
    if(user) { 
        User.updateOne(
            {_id: user.id}, 
            {$set: {bmi}},
            (err) => {
                if(!err) {
                    console.log('PATCH is good!')
                    res.status(200).json({msg: `Successfully updated ${user.username}'s BMI`})
                } else {
                    console.log('PATCH is fuckin trash!')
                    res.status(404).json({err: "Information invalid: " + err})
                }
            })
    }
}) 

module.exports = router;