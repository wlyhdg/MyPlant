const express = require('express');
const router = express.Router();
const app = express();

router.get("/login", (req, res) => {
    res.render("login");
});

router.post("/login", (req, res) => {
    User.findOne({username: req.body.username}, (err, gotItem) => {
        if (err) {
            console.log(err);
        } else {
            if (!gotItem) {
                res.render("register", {regNameDefault: req.body.username});
            } else {
                if (gotItem.password === req.body.password) {
                    res.redirect("/landing");
                    // res.render("landing", {user: _.startCase(_.toLower(req.body.username))})
                } else {
                    res.redirect("/login");
                    // res.render("login", {wrongPass: true})
                }
            }
        }
    })
});

router.get("/register", (req, res) => {
    res.render("register", {regNameDefault: null});
});

router.post("/register", (req, res) => {
    const createdUser = new User({
        username: req.body.username,
        password: req.body.password
    });
    createdUser.save((err) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect("/login");
        }
    });
});

router.get("/logout", (req, res) => {
    // req.logout();
    res.redirect("/");
});

module.exports = router;