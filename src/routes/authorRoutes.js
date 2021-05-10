const express = require("express");
const authorRouter = express.Router();
const Authordata = require('../model/Authordata');
function router1(nav) {
    // var authors = [
    //     {
    //         title: 'Tom and Jerry',
    //         author: 'Joseph Barbera',
    //         genre: 'Cartoon',
    //         description: 'Joseph Roland Barbera was an American animator, director, producer, storyboard artist, and cartoon artist, whose film and television cartoon characters entertained millions of fans worldwide for much of the 20th century.',
    //         img: 'Joseph.jpeg'
    //     },
    //     {
    //         title: 'Harry Potter',
    //         author: 'J K Rowling',
    //         genre: 'Fiction',
    //         description: 'J. K. Rowling, is a British author, philanthropist, film producer, television producer, and screenwriter. She is best known for writing the Harry Potter fantasy series, which has won multiple awards and sold more than 500 million copies, becoming the best-selling book series in history.',
    //         img: 'Rowling.jpg'
    //     },
    //     {
    //         title: 'The Kite Runner',
    //         author: 'Khaled Hosseini',
    //         genre: 'Novel, Drama, Historical Fiction, Bildungsroman',
    //         description: 'The unforgettable, heartbreaking story of the unlikely friendship between a wealthy boy and the son of his father`s servant, The Kite Runner is a beautifully crafted novel set in a country that is in the process of being destroyed.',
    //         img: 'Kite.jpg',

    //     },
    //     {
    //         title: 'The Lord of the Rings',
    //         author: 'J. R. R. Tolkien',
    //         genre: 'Novel, Fantasy Fiction, High fantasy, Chivalric romance, Adventure fiction, Heroic fantasy',
    //         description: 'The Lord of the Rings is the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil. Its many worlds and creatures were drawn from Tolkien`s extensive knowledge of philology and folklore.',
    //         img: 'Lord.jpg',

    //     }]
    authorRouter.get('/', function (req, res) {
        Authordata.find()
            .then(function (authors) {
                res.render('authors', {
                    nav,
                    title: 'Authors',
                    authors
                })
            });
    });

    authorRouter.get('/:id', function (req, res) {
        const id = req.params.id
        Authordata.findOne({ _id: id })
            .then(function (author) {
                res.render('author', {
                    nav,
                    title: 'Author',
                    author
                });
            });
    });
    return authorRouter;
}


module.exports = router1;