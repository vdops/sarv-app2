var mongoose = require('mongoose');

var asktheExpertSchema = new mongoose.Schema({
    firstName : {
        type : String, 
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    category : { 
        type : String, 
        required : true
    }, 
    message : {
        type : String, 
        required : true
    }, 
    email : {
        type : String, 
        required : true
    } 
});
module.exports = mongoose.model('AsktheExpert', asktheExpertSchema, 'asktheExpert');