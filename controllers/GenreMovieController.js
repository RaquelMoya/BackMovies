const { GenreMovie } = require('../models/index');


const GenreMovieController = {};


GenreMovieController.placeNewGenreAsignation = (req,res) => {
    
    let body = req.body;

    GenreMovie.create({
        genreId: body.genreId,
        movieId: body.movieId,
    })
    .then(genreMovie => {
        if(GenreMovie){
            res.send(GenreMovie)
        }else{
            res.send("Fallo al introducir un genero en la pelicula");
        }
    })
    .catch((error => {
        res.send(error)
    }))
};

GenreMovieController.allGenresAsignations = async (req, res) => {
    let consulta = `SELECT genres.name AS name, movies.title AS title
    FROM genres INNER JOIN genreMovies
    ON genres.id = genreMovies.genreId INNER JOIN movies
    ON movies.id = genreMovies.movieId;`;//Introducir entre las comillas la consulta hecha pura en SQL
    let resultado = await GenreMovie.sequelize.query(consulta,{type: GenreMovie.sequelize.QueryTypes.SELECT});
    if(resultado){
        res.send(resultado);
    }
};





module.exports = GenreMovieController;