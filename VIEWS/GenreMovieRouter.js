const express = require("express");
const router = express.Router();

const auth = require('../middlewares/auth.js');
const isAdmin = require("../middlewares/isAdmin");

const GenreMovieController = require("../controllers/GenreMovieController");


//Endpoint para registrar una nueva asignacion de genero
router.post("/", isAdmin, auth, GenreMovieController.placeNewGenreAsignation);
//Endpoint para ver todas las asignaciones de generos
router.get("/", GenreMovieController.allGenresAsignations);
//Endpoint para borrar una asignacion de genero
router.delete("/:id", isAdmin, auth,  GenreMovieController.deleteGenreById);
//Endpoint para borrar todas las asignaciones
router.delete("/", isAdmin, auth,  GenreMovieController.deleteAll);


module.exports = router;