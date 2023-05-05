var express = require('express');
var cors= require('cors')
var db = require('./db/index.js')
var router=require("./movie/router.js")
var app = express();
app.use(cors())
app.use(express.json());
app.use('/api',router)
var PORT = 3000;

app.listen(PORT, function () {
  console.log('listening on http://localhost:' + PORT);
});
