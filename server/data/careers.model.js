var mongoose = require('mongoose');

var careersSchema = new mongoose.Schema({
   firstName : {
       type : String, 
       required : true
   },
   lastName : {
       type : String,
       required : true
   },
   gender : {
       type : String,
       required : true
   },
   qualification : { 
       type : String, 
       required : true
   }, 
   experience : { 
       type : String, 
       required : true
   }, 
   specialisation : { 
       type : String, 
       required : true
   }, 
   residingCountry : { 
       type : String, 
       required : true 
   }, 
   phone : { 
       type : String, 
       required : true
   }, 
   email : {
       type : String, 
       required : true
   } 
});
module.exports = mongoose.model('Careers', careersSchema, 'careers');