const { Router } = require("express");
const express = require("express");
const router = express.Router();



const MoviesController = require("../controllers/MoviesController");

//CRUD Rest-ful

router.get("/",MoviesController.getAll);

//Endpoint para buscar películas por id 
router.get("/id/:id",MoviesController.getMovieById);

//Endpoint para buscar pelicula por titulo
router.get("/title/:title", MoviesController.getMovieByTitle);



module.exports = router;