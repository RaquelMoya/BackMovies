
const express = require("express");
const router = express.Router();

const auth = require('../middlewares/auth.js');
const isAdmin = require("../middlewares/isAdmin");


const MoviesController = require("../controllers/MoviesController");

//Endpoint para ver todas las peliculas
router.get("/",MoviesController.getAll);

//Endpoint para buscar películas por id 
router.get("/id/:id",MoviesController.getMovieById);

//Endpoint para buscar pelicula por titulo
router.get("/title/:title", MoviesController.getMovieByTitle);

//Endpoint para registrar nueva pelicula
router.post("/", isAdmin, auth,  MoviesController.registerMovie);

//Endpoint para borrar una pelicula
router.delete("/:id", isAdmin, auth,  MoviesController.deleteById);

//Endpoint para borrar todas las peliculas
router.delete("/",isAdmin, auth,  MoviesController.deleteAll);

//Endpoint-FilmController methods links
router.get('/clone', async(req, res) => {
    try {
        res.json(await MoviesController.clone())
    } catch(error) {
        return res.status(500).json({
            message: error.message
        })
    }
});



module.exports = router;