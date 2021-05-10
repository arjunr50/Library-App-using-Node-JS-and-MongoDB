//Accessing mongoose package
const mongoose = require('mongoose');

//Database connection
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.lp2lp.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority ');

//schema definition
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fname: String,
    lname: String,
    email: String,
    uname: String,
    pass: String,
    pass1: String
});

//Model creation
var Userdata = mongoose.model('userdata', UserSchema);
module.exports = Userdata;