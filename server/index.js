const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const _ = require("lodash");

const app = express();

// Middleware
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

const account = require('./routes/api/account');
const dashboard = require('./routes/api/dashboard');

app.use('/api/auth', account);
app.use('', dashboard);

// Connect to mongoDB's plantDB collection
mongoose.connect("mongodb://localhost:27017/plantDB", {useNewUrlParser: true});
mongoose.set({useCreateNewIndex: true});

userSchema = {
    username: String,
    password: String,
    email: String,
    bmi: Number,
    bmr: Number,
    foodItems: Array
}

const User = mongoose.model("User", userSchema);


// app.get("/", (req, res) => {
//   res.send("Hello World")
//     // res.render("home");
// });

// app.get("/login", (req, res) => {
//     res.render("login");
// });

// app.post("/login", (req, res) => {
//     User.findOne({username: req.body.username}, (err, gotItem) => {
//         if (err) {
//             console.log(err);
//         } else {
//             if (!gotItem) {
//                 res.render("register", {regNameDefault: req.body.username});
//             } else {
//                 if (gotItem.password === req.body.password) {
//                     res.redirect("/landing");
//                     // res.render("landing", {user: _.startCase(_.toLower(req.body.username))})
//                 } else {
//                     res.redirect("/login");
//                     // res.render("login", {wrongPass: true})
//                 }
//             }
//         }
//     })
// });

// app.get("/register", (req, res) => {
//     res.render("register", {regNameDefault: null});
// });

// app.post("/register", (req, res) => {
//     const createdUser = new User({
//         username: req.body.username,
//         password: req.body.password
//     });
//     createdUser.save((err) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.redirect("/login");
//         }
//     });
// });

// app.get("/landing", (req, res) => {
//     res.render("landing", {user: "<username here>"});
// });

// app.post("/bmi", (req, res) => {
//     User.updateOne(
//         {username: _.toLower(req.body.username)}, 
//         {$set: JSON.stringify({bmi: req.body.bmi}) }
//     );
// });

// app.get("/logout", (req, res) => {
//     // req.logout();
//     res.redirect("/");
// });

app.listen(process.env.PORT || 3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Listening on port 3000...");
    }
});