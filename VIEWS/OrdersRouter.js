const express = require("express");
const axios = require("axios");
const router = express.Router();


const OrdersController = require("../controllers/OrdersController");
//CRUD Rest full
router.get("/", MoviesController.getTop);
//http://localhost:3000/movies(usando GET)



module.exports = router;