const express = require("express");
const router = express.Router();

const auth = require('../middlewares/auth.js');
const isAdmin = require("../middlewares/isAdmin");

const ActController = require("../controllers/ActController");

//Endpoint para registrar una nueva actuacion
router.post("/",isAdmin, auth,  ActController.placeNewAct);
//Endpoint para ver todas las actuaciones registradas
router.get("/", ActController.allActs);
//Endpoint para borrar una actuacion mediante su id
router.delete("/:id", isAdmin, auth,  ActController.deleteById);
//Endpoint para borrar todas las actuaciones
router.delete("/", isAdmin, auth,  ActController.deleteAll);


module.exports = router;