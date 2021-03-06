const express = require("express");
const router = express.Router();

const auth = require('../middlewares/auth.js');
const isAdmin = require("../middlewares/isAdmin");


const GenreController = require("../controllers/GenreController");

//Endpoint para ver todos los generos
router.get("/", GenreController.getAllGenres);
//Endpoint para registrar un nuevo genero
router.post("/", auth, isAdmin, GenreController.registerGenre);
//Endpoint para borrar un genero mediante su id
router.delete("/:id", auth, isAdmin, GenreController.deleteGenre);
//Endpoint para borrar todos los generos
router.delete("/", auth, isAdmin,  GenreController.deleteAll);

module.exports = router;