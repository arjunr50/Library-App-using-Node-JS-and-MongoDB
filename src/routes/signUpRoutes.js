const express = require("express");
const signUpRoutes = express.Router();
const Userdata = require('../model/Userdata');

function router(nav) {
    signUpRoutes.get('/', function (req, res) {
        res.render('signup', { nav, title: "Sign Up" });
    });

    signUpRoutes.post('/s', function (req, res) {
        var item = {
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            uname: req.body.uname,
            pass: req.body.pass,
            pass1: req.body.pass1
        }

        var user = Userdata(item);
        user.save();//saving to database
        res.redirect('/signup');


    });
    return signUpRoutes;
}


module.exports = router;