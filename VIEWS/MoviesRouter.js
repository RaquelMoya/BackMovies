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
router.get("/details",MoviesController.getDetails);
//http://localhost:3000/movies/details(usando GET)
router.get("/reviews",MoviesController.getReviews);
//http://localhost:3000/movies/reviews(usando GET)
router.get("/latest",MoviesController.getLatest);
//http://localhost:3000/movies/latest(usando GET)
router.get("/similar",MoviesController.getSimilar);
//http://localhost:3000/movies/similar(usando GET)

module.exports = router;