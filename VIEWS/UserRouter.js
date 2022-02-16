const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");

//CRUD Rest Full
router.get("/", UserController.getUsers);
//http://localhost:3000/users (usando GET)




module.exports = router;