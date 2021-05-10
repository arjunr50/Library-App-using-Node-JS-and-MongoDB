const express = require("express");
const addauthorRouter = express.Router();
const Authordata = require('../model/Authordata');
function router(nav) {
    addauthorRouter.get('/', function (req, res) {
        res.render('addauthor', { nav, title: "Add Author" });
    });

    addauthorRouter.post('/adda', function (req, res) {
        var item = {
            author: req.body.author,
            title: req.body.title,
            genre: req.body.genre,
            link: req.body.link,
            desc: req.body.desc,
            image: req.body.image
        }

        var author = Authordata(item);
        author.save();//saving to database
        res.redirect('/authors');

    });
    return addauthorRouter;
}


module.exports = router;