const { send } = require('express/lib/response');
const { Genre } = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');


const GenreController = {};


//Endpoint para buscar peliculas por genero
GenreController.getAllGenres =(req, res) =>{
    Genre.findAll()
    .then(data =>{
        res.send(data)
    })
};



module.exports = GenreController;