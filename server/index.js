require('dotenv').config()
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

const user = require('./routes/api/user');
const dashboard = require('./routes/api/dashboard');
const auth = require('./routes/api/auth');

app.use('/api/user', user);
app.use('/api/auth', auth);
app.use('/api/dashboard', dashboard);

// Connect to mongoDB's plantDB collection
mongoose.connect("mongodb://localhost:27017/plantDB", {useNewUrlParser: true});
mongoose.set({useCreateNewIndex: true});

port = process.env.PORT || 3000
app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Listening on port ${port}...`);
    }
});