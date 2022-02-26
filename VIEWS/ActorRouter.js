const { Router } = require("express");
const express = require("express");
const router = express.Router();

const auth = require('../middlewares/auth.js');
const isAdmin = require("../middlewares/isAdmin");


const ActorController = require("../controllers/ActorController");

//Endpoint para ver todos los actores registrados
router.get("/", ActorController.getAllActors);
//Endpoint para registrar un nuevo actor
router.post("/", auth, isAdmin, ActorController.registerActor);
//Endpoint para borrar un actor mediante su id
router.delete("/:id", auth, isAdmin, ActorController.deleteActor);
//Endpoint para borrar todos los actores
router.delete("/", auth, isAdmin, ActorController.deleteAll);

module.exports = router;