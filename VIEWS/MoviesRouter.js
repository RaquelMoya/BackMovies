const express = require("express");
const axios = require("axios");
const router = express.Router();
const auth = require('../middlewares/auth.js');


const MoviesController = require("../controllers/MoviesController");

//CRUD Rest-ful

router.get("/",MoviesController.getAll);

//Endpoint para buscar películas por id 
router.get("/id/:id",MoviesController.getMovieById);

//Endpoint para buscar peliculas por genero
router.get("/genre/:genre", MoviesController.getMovieByGenre);



module.exports = router;