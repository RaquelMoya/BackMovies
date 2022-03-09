const { send } = require('express/lib/response');
const { Movie } = require('../models/index');
const { Op } = require("sequelize");
const axios= require("axios");
const res = require('express/lib/response');

//API_KEY necessary for TMDB endpoints
const API_KEY = "210d6a5dd3f16419ce349c9f1b200d6d";

//Random number between two limits function
const minMaxRoundedRandom = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
}

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
    let synopsis = req.body.synopsis;
    let adult = req.body.adult;
    let popularity = req.body.popularity;
    let image = req.body.image;
    let genres = req.body.genres;
 
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
                synopsis: synopsis,
                adult: adult,
                popularity: popularity,
                image: image,
                genres: genres
                
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

//Función clonar 500 película desde TMDB
MoviesController.clone = async () => {
    ///Variable para guardar el root para ver el póster
    let TMDBimgUrlRoot = "https://image.tmdb.org/t/p/original";
    //Endpoint para traerme una página entera de películas. Necesario para tenerlo una primera vez
    let firstScan = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
    //bucle para recorrer 25 páginas de resultados. El valor de page lo saco de una función random para que no siempre muestre las mismas páginas.
    for(let j=1 ; j<=25 ; j++) {
        let resultss = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${minMaxRoundedRandom(1, 25)}&with_watch_monetization_types=flatrate`);
        //Saco el número de resultados por página para meterselo al siguiente bucle
        let numbOfResultsPerPageTMDB = resultss.data.results.length
        //Recorro cada elemento de la página para ir guardándolo acorde a los campos de mi BBDD
        for(let i=0; i<numbOfResultsPerPageTMDB ; i++) {
            //Por cada iteración creo un elemento
            Movie.create({
                //A la izquierda mis campos de mi BBDD
                //A la derecha los campos que devuelve TMDB
                title : resultss.data.results[i].original_title,
                synopsis : resultss.data.results[i].overview,
                adult : resultss.data.results[i].adult,
                popularity : resultss.data.results[i].popularity,
                image : (TMDBimgUrlRoot + "/" + resultss.data.results[i].poster_path)
            })
        }
    }
    res.send (`${25} pages have been clonated succesfully, with a total amount of ${500} films`)
};

module.exports = MoviesController;