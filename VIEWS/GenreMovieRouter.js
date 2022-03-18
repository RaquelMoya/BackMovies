const express = require("express");
const router = express.Router();

const auth = require('../middlewares/auth.js');
const isAdmin = require("../middlewares/isAdmin");

const GenreMovieController = require("../controllers/GenreMovieController");


//Endpoint para registrar una nueva asignacion de genero
router.post("/", auth, isAdmin, GenreMovieController.placeNewGenreAsignation);
//Endpoint para ver todas las asignaciones de generos
router.get("/", GenreMovieController.allGenresAsignations);

router.get("/genre/:name", GenreMovieController.findByGenre);
//Endpoint para borrar una asignacion de genero
router.delete("/:id", auth, isAdmin,  GenreMovieController.deleteGenreById);
//Endpoint para borrar todas las asignaciones
router.delete("/", auth,  isAdmin, GenreMovieController.deleteAll);


module.exports = router;