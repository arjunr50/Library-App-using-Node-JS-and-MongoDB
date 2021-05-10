const express = require("express");
const booksRouter = express.Router();

const Bookdata = require('../model/Bookdata');
function router(nav) {
    // var books = [
    //     {
    //         title: 'Tom and Jerry',
    //         author: 'Joseph Barbera',
    //         genre: 'Cartoon',
    //         description: 'The series features comic fights between an iconic pair of adversaries, a house cat (Tom) and a mouse (Jerry). The plots of each short usually center on Tom and Jerry`s numerous attempts to have the best of each other and the mayhem and destruction that follows.',
    //         img: 'Tom.jpg',
    //         link: 'https://en.wikipedia.org/wiki/Tom_and_Jerry'
    //     },
    //     {
    //         title: 'Harry Potter and the Sorcerer`s Stone',
    //         author: 'J K Rowling',
    //         genre: 'Fantasy, Adventure',
    //         description: 'When mysterious letters start arriving on his doorstep, Harry Potter has never heard of Hogwarts School of Witchcraft and Wizardry. They are swiftly confiscated by his aunt and uncle. Then, on Harry’s eleventh birthday, a strange man bursts in with some important news: Harry Potter is a wizard and has been awarded a place to study at Hogwarts. And so the first of the Harry Potter adventures is set to begin.',
    //         img: 'Harry.jpg',
    //         link: 'https://en.wikipedia.org/wiki/Harry_Potter_and_the_Philosopher%27s_Stone'
    //     },
    //     {
    //         title: 'The Kite Runner',
    //         author: 'Khaled Hosseini',
    //         genre: 'Novel, Drama, Historical Fiction, Bildungsroman',
    //         description: 'The unforgettable, heartbreaking story of the unlikely friendship between a wealthy boy and the son of his father`s servant, The Kite Runner is a beautifully crafted novel set in a country that is in the process of being destroyed.',
    //         img: 'Kite.jpg',
    //         link: 'https://en.wikipedia.org/wiki/The_Kite_Runner'
    //     },
    //     {
    //         title: 'The Lord of the Rings',
    //         author: 'J. R. R. Tolkien',
    //         genre: 'Novel, Fantasy Fiction, High fantasy, Chivalric romance, Adventure fiction, Heroic fantasy',
    //         description: 'The Lord of the Rings is the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil. Its many worlds and creatures were drawn from Tolkien`s extensive knowledge of philology and folklore.',
    //         img: 'Lord.jpg',
    //         link: 'https://en.wikipedia.org/wiki/The_Lord_of_the_Rings'
    //     }]
    booksRouter.get('/', function (req, res) {
        Bookdata.find()
            .then(function (books) {
                res.render('books', {
                    nav,
                    title: 'Books',
                    books
                })

            });
    });
    // booksRouter.get('/addbook', function (req, res) {
    //     res.render('addbook', {
    //         nav,
    //         title: 'Add Books',
    //         books
    //     });
    // });

    booksRouter.get('/:id', function (req, res) {
        const id = req.params.id;
        Bookdata.findOne({ _id: id })
            .then(function (book) {
                res.render('book', {
                    nav,
                    title: 'Book',
                    book
                });


            })
    });
    return booksRouter;
}


module.exports = router;