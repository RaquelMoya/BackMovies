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

//Endpoint para registrar un nuevo actor
ActorController.registerActor =(req,res) => {
  
    let body = req.body;

    Actor.create({
        name: body.name,
        surname: body.surname,
    })
    .then(actor => {
        if(actor){
            res.send(actor)
        }else{
            res.send("Fallo al introducir actor/actriz en la base de datos");
        }
    })
    .catch((error => {
        res.send(error)
    }))
};

//Endpoint para borrar un actor
ActorController.deleteActor =(req, res) => {
    let id = req.params.id;

    try{
        Actor.destroy({
            where : { id : id},
            truncate : false
        })
      
        .then(actorDeleted =>{
            console.log(actorDeleted);
            res.send(`El actor con la id ${id} ha sido eliminado`);
        })
    }
    catch(error){
        send.error(error);
    }
};

//Endpoint para borrar todos los actores
ActorController.deleteAll =(req, res)=> {
    try {

        Actor.destroy({
            where : {},
            truncate : false
        })
        .then(actor => {
            res.send(`Se han eliminado ${actor} actores`);
        })

    } catch (error) {
        res.send(error);
    }
};

module.exports = ActorController;