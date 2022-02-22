const { Router } = require("express");
const express = require("express");
const router = express.Router();



const MoviesController = require("../controllers/MoviesController");

//CRUD Rest-ful

router.get("/",MoviesController.getAll);

//Endpoint para buscar películas por id 
router.get("/id/:id",MoviesController.getMovieById);

//Endpoint para buscar peliculas por genero
router.get("/genre/:genre", MoviesController.getMovieByGenre);

//Endpoint para buscar pelicula por titulo
router.get("/title/:title", MoviesController.getMovieByTitle);

//Endpoint para buscar peliculas por actores
router.get("/actors/:actors", MoviesController.getMovieByActors);



module.exports = router;