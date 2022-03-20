const { GenreMovie } = require('../models/index');


const GenreMovieController = {};


GenreMovieController.placeNewGenreAsignation = (req,res) => {
    
    let body = req.body;

    GenreMovie.create({
        genreId: body.genreId,
        movieId: body.movieId,
    })
    .then(GenreMovie => {
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
    ON movies.id = genreMovies.movieId;`;
    let resultado = await GenreMovie.sequelize.query(consulta,{type: GenreMovie.sequelize.QueryTypes.SELECT});
    if(resultado){
        res.send(resultado);
    }
};
GenreMovieController.findByGenre = async (req,res) => {
    let genre = req.params.name;
    let consulta = `SELECT genres.name AS name, movies.title AS title
    FROM genres INNER JOIN genremovies
    ON genres.id = genremovies.genreId INNER JOIN movies
    ON movies.id = genremovies.movieId WHERE genres.name = "${genre}";`;
    let resultado = await GenreMovie.sequelize.query(consulta, {type: GenreMovie.sequelize.QueryTypes.SELECT});
    if(resultado){
        res.send(resultado);
    }
};

GenreMovieController.deleteGenreById = (req, res) => {
    let id = req.params.id;

    try{
        GenreMovie.destroy({
            where : { id : id},
            truncate : false
        })
      
        .then(asignationDeleted =>{
            console.log(asignationDeleted);
            res.send(`La asignacion con la id ${id} ha sido eliminada`);
        })
    }
    catch(error){
        send.error(error);
    }
};

GenreMovieController.deleteAll = (req, res) => {
    try {

        GenreMovie.destroy({
            where : {},
            truncate : false
        })
        .then(genreAsignation => {
            res.send(`Se han eliminado ${genreAsignation} asignaciones de genero`);
        })

    } catch (error) {
        res.send(error);
    }
};





module.exports = GenreMovieController;