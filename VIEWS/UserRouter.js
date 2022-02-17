const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");

//CRUD Rest Full
router.get("/", UserController.getUsers);
//http://localhost:3000/users (usando GET)

//Registro Usuarios
router.post("/",UserController.registerUser);
//http://localhost:3000/users (usando POST)

//Login Usuarios
router.post("/login",UserController.loginUser);
//http://localhost:3000/users/login (usando POST)



module.exports = router;