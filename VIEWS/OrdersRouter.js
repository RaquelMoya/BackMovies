const express = require("express");
const router = express.Router();

const isAdmin = require("../middlewares/isAdmin");
const auth = require('../middlewares/auth.js');

const OrdersController = require("../controllers/OrdersController");

//Endpoint para registrar un nuevo pedido
router.post("/", auth, OrdersController.placeNewOrder);
//Endpoint para ver todos los pedidos
router.get("/:id", isAdmin, auth, OrdersController.allOrders);
//Endpoint para ver pedidos por idUser
router.get("/usuario/:id", auth, OrdersController.getOrdersById);
//ENdpoint para borrar un pedido mediante su id
router.delete("/:id", isAdmin, auth, OrdersController.deleteOrderById);
//Endpoint para borrar todos los pedidos
router.delete("/deleteAll/:id", isAdmin, auth,  OrdersController.deleteAll);


module.exports = router;