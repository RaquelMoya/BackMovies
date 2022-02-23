const { send } = require('express/lib/response');
const { Actor } = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');


const ActorController = {};


//Endpoint para traer todos los actores
ActorController.getAllActors =(req, res) =>{
    Actor.findAll()
    .then(data =>{
        res.send(data)
    })
};

module.exports = ActorController;