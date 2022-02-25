const express = require("express");
const router = express.Router();
const auth = require('../middlewares/auth.js');
const isAdmin = require("../middlewares/isAdmin");

const UserController = require("../controllers/UserController");

//CRUD Rest Full

//Ver todos los usuarios
router.get("/", auth, UserController.getUsers);
//http://localhost:3000/users (usando GET)

//Buscar usuario por ID
router.get("/:id", auth, UserController.getUserId);
//http://localhost:3000/users/:id

//Buscar usuario por Email
router.get("/email/:email", auth, UserController.getUserEmail);
//http://localhost:3000/users/email/:email



//Registro Usuarios
router.post("/", UserController.registerUser);
//http://localhost:3000/users (usando POST)

//Login Usuarios
router.post("/login", UserController.loginUser);
//http://localhost:3000/users/login (usando POST)


//Modificar Password
router.put("/newpassword", auth, UserController.updatePassword);



//Modificar datos de usuario
router.put("/:id", auth, UserController.modifyUser);
//http://localhost:3000/users/:id (usando PUT)



//Borrar usuarios
router.delete("/", auth, UserController.deleteAll);
//http://localhost:3000/users (usando DEL)

router.delete("/delete/:id", auth,  UserController.deleteById);
//http://localhost:3000/users/delete/:id (usando DEL)






module.exports = router;