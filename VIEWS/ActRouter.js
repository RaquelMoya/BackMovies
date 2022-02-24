const express = require("express");
const router = express.Router();

const auth = require('../middlewares/auth.js');
const isAdmin = require("../middlewares/isAdmin");

const ActController = require("../controllers/ActController");

router.post("/", isAdmin, ActController.placeNewAct);
router.get("/", ActController.allActs);




module.exports = router;