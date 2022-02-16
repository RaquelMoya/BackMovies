const express = require("express");
const axios = require("axios");
const router = express.Router();


const MoviesController = require("../controllers/MoviesController");

//CRUD Rest full
router.get("/",MoviesController.getTop);
//http://localhost:3000/movies(usando GET)
router.get("/popular",MoviesController.getPopular);
//http://localhost:3000/movies/popular(usando GET)
router.get("/title",MoviesController.getTitle);
//http://localhost:3000/movies/title(usando GET)
router.get("/upcoming",MoviesController.getUpcoming);
//http://localhost:3000/movies/upcoming(usando GET)



module.exports = router;