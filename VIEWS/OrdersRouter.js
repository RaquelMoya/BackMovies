const express = require("express");
const router = express.Router();

const isAdmin = require("../middlewares/isAdmin");
const auth = require('../middlewares/auth.js');

const OrdersController = require("../controllers/OrdersController");

router.post("/", auth, OrdersController.placeNewOrder);

router.get("/", auth, isAdmin, OrdersController.allOrders);

router.delete("/:id", auth, isAdmin, OrdersController.deleteOrderById);

router.delete("/", auth, isAdmin, OrdersController.deleteAll);


module.exports = router;