var mongoose = require('mongoose');
const db = require('../db/index.js');
var movieSchema=new mongoose.Schema({
    name:String,
    posterurl:String,
    description:String,
    rating:Number
});
var Movie=mongoose.model('movie',movieSchema)
module.exports=Movie;