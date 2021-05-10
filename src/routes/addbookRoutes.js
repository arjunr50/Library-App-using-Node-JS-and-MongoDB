const express = require("express");
const addbookRouter = express.Router();

const Bookdata = require('../model/Bookdata');
function router(nav) {
    addbookRouter.get('/', function (req, res) {
        res.render('addbook', { nav, title: "Add Book" });
    });

    addbookRouter.post('/add', function (req, res) {
        var item = {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            link: req.body.link,
            blurb: req.body.blurb,
            image: req.body.image,
            file: req.body.file
        }

        var book = Bookdata(item);
        book.save();//saving to database
        res.redirect('/books');

    });
    return addbookRouter;
}


module.exports = router;