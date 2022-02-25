const express = require("express");
const router = express.Router();

const auth = require('../middlewares/auth.js');
const isAdmin = require("../middlewares/isAdmin");

const GenreMovieController = require("../controllers/GenreMovieController");

router.post("/", auth, GenreMovieController.placeNewGenreAsignation);
router.get("/", GenreMovieController.allGenresAsignations);


module.exports = router;