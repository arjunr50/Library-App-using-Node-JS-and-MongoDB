//Accessing mongoose package
const mongoose = require('mongoose');

//Database connection
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.lp2lp.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority ');

//schema definition
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    author: String,
    title: String,
    genre: String,
    desc: String,
    link: String,
    image: String,

});

//Model creation
var Authordata = mongoose.model('authordata', AuthorSchema);
module.exports = Authordata;