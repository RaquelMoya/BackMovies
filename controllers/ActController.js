const { Act } = require('../models/index');

const ActController = {};


//Endpoint para registrar una nueva actuacion
ActController.placeNewAct = (req,res) => {
    
    let body = req.body;

    Act.create({
        actorId: body.actorId,
        movieId: body.movieId,
    })
    .then(act => {
        if(act){
            res.send(act)
        }else{
            res.send("Fallo al introducir actor/actriz en la pelicula");
        }
    })
    .catch((error => {
        res.send(error)
    }))
};
//Endpoint para ver todas las actuaciones registradas
ActController.allActs = async (req, res) => {
    let consulta = `SELECT actors.name AS name, movies.title AS title, actors.surname AS surname
    FROM actors INNER JOIN acts
    ON actors.id = acts.actorId INNER JOIN movies
    ON movies.id = acts.movieId;`;//Introducir entre las comillas la consulta hecha pura en SQL
    let resultado = await Act.sequelize.query(consulta,{type: Act.sequelize.QueryTypes.SELECT});
    if(resultado){
        res.send(resultado);
    }
};
//Endpoint para eliminar una actuacion mediante su id
ActController.deleteById= (req, res) => {
    let id = req.params.id;

    try{
        Act.destroy({
            where : { id : id},
            truncate : false
        })
      
        .then(actDeleted =>{
            console.log(actDeleted);
            res.send(`La actuacion con la id ${id} ha sido eliminada`);
        })
    }
    catch(error){
        send.error(error);
    }
};
//Endpoint para eliminar todas las actuaciones
ActController.deleteAll= (req, res) => {
    try {

        Act.destroy({
            where : {},
            truncate : false
        })
        .then(act => {
            res.send(`Se han eliminado ${act} actuaciones`);
        })

    } catch (error) {
        res.send(error);
    }
};



module.exports = ActController;