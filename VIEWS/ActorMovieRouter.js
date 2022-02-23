const express = require("express");
const router = express.Router();

const auth = require('../middlewares/auth.js');

const ActorMovieController = require("../controllers/ActorMovieController");




module.exports = router;