const express = require("express");
const router = express.Router();

const auth = require('../middlewares/auth.js');

const GenreMovieController = require("../controllers/GenreMovieController");




module.exports = router;