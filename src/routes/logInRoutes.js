const express = require("express");
const logInRouter = express.Router();
function router(nav) {
    logInRouter.get('/', function (req, res) {
        res.render('login', { nav, title: "Login" });
    });
    return logInRouter;
}


module.exports = router;