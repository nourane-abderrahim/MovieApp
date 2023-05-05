var mongoose = require('mongoose');
var mongoUri = 'mongodb://127.0.0.1:27017/movies';


var db=mongoose.connect(mongoUri,{ 
    useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then((db) => 
        console.log("Connected to MongoDB")) 
    .catch(err => console.log(err))
             
module.exports = db;