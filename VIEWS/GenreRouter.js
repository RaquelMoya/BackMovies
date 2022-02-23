const { Router } = require("express");
const express = require("express");
const router = express.Router();



const GenreController = require("../controllers/GenreController");


router.get("/", GenreController.getAllGenres);

module.exports = router;