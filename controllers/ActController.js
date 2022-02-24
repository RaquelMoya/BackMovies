const { Act } = require('../models/index');

const ActController = {};



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




module.exports = ActController;