const { Router } = require("express");
const express = require("express");
const router = express.Router();



const ActorController = require("../controllers/ActorController");


router.get("/", ActorController.getAllActors);

module.exports = router;