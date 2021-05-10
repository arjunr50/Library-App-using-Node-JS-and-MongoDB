//Accessing mongoose package
const mongoose = require('mongoose');

//Database connection
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.lp2lp.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority ');

//schema definition
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    author: String,
    genre: String,
    link: String,
    blurb: String,
    image: String,
    file: String
});

//Model creation
var Bookdata = mongoose.model('bookdata', BookSchema);
module.exports = Bookdata;