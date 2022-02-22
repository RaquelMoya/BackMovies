const express = require("express");
const router = express.Router();

const auth = require('../middlewares/auth.js');

const OrdersController = require("../controllers/OrdersController");




module.exports = router;