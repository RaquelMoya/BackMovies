const { send } = require('express/lib/response');
const { Movie } = require('../models/index');
const { Op } = require("sequelize");


const MoviesController = {};

//Endpoint para traer todas las peliculas
MoviesController.getAll =(req,res)=>{
    Movie.findAll()
    .then(data =>{
        res.send(data)
    })
};

//Endpoint para buscar películas por id
MoviesController.getMovieById =(req,res) =>{
    Movie.findByPk(req.params.id)
    .then(data =>{
        res.send(data)
    })
};

//Endpoint para buscar pelicula por titulo
MoviesController.getMovieByTitle =(req, res) =>{
    Movie.findOne({ where : {title : req.params.title}})
    .then(data =>{
        res.send(data)
    })
};

//Endpoint para registrar una nueva pelicula
MoviesController.registerMovie =(req, res) => {
    let title = req.body.title;
    let sinopsis = req.body.sinopsis;
    let adult = req.body.adult;
    let price = req.body.price;
    let rented = req.body.rented;
 
    Movie.findAll({
        where : {

            [Op.or] : [
                {
                    title : {
                        [Op.like] : title
                    }
                }
            ]

        }

    }).then(datosRepetidos => {

        if(datosRepetidos == 0){

                Movie.create({
                title: title,
                sinopsis: sinopsis,
                adult: adult,
                price: price,
                rented: rented
                
            }).then(movie => {
                res.send(`${movie.title} ha sido añadida al repertorio de peliculas`);
            })
            .catch((error) => {
                res.send(error);
            });

        }else {
            res.send("La pelicula con este titulo ya existe en nuestra base de datos");
        }
    }).catch(error => {
        res.send(error)
    });
};


//Endpoint para borrar una pelicula
MoviesController.deleteById =(req,res) => {
    let id = req.params.id;

    try{
        Movie.destroy({
            where : { id : id},
            truncate : false
        })
      
        .then(movieDeleted =>{
            console.log(movieDeleted);
            res.send(`La pelicula con la id ${id} ha sido eliminada`);
        })
    }
    catch(error){
        send.error(error);
    }
};

//Endpoint para borrar todas las peliculas
MoviesController.deleteAll =(req,res) => {
    try {

        Movie.destroy({
            where : {},
            truncate : false
        })
        .then(peliculasEliminadas => {
            res.send(`Se han eliminado ${peliculasEliminadas} peliculas`);
        })

    } catch (error) {
        res.send(error);
    }
};



module.exports = MoviesController;