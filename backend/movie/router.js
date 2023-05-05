var movieRouter = require('express').Router();
var movieController = require('./controller.js');

movieRouter.get('/movie',movieController.getMovie)
movieRouter.post('/movie',movieController.saveMovie)
movieRouter.put('/update/:id',movieController.UpdateMovie)
movieRouter.delete('/delete/:id',movieController.deleteMovie)

module.exports= movieRouter;