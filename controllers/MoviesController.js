const { send } = require('express/lib/response');
const { Movie } = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');


const MoviesController = {};

//Endpoint para traer todas las peliculas
MoviesController.getAll =(req,res)=>{
    Movie.findAll()
    .then(data =>{
        res.send(data)
    })
};

//Endpoint para buscar películas por id
MoviesController.getMovieById =(req,res) =>{
    Movie.findByPk(req.params.id)
    .then(data =>{
        res.send(data)
    })
};

//Endpoint para buscar pelicula por titulo
MoviesController.getMovieByTitle =(req, res) =>{
    Movie.findOne({ where : {title : req.params.title}})
    .then(data =>{
        res.send(data)
    })
};




module.exports = MoviesController;