const express = require("express");
const axios = require("axios");
const router = express.Router();


const MoviesController = require("../controllers/MoviesController");

//CRUD Rest full
router.get("/",MoviesController.getTop);
//http://localhost:3000/movies(usando GET)
router.get("/popular",MoviesController.getPopular);
//http://localhost:3000/movies/popular(usando GET)



module.exports = router;