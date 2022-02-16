const express = require("express");
const axios = require("axios");
const router = express.Router();

const MoviesController = {};

//Endpoint para listar las películas con más valoraciones
MoviesController.getTop = async (req,res)=>{
    try {

        let resultado = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1");

        res.send(resultado.data);

    } catch (error) {

        res.send(error);

    }; 
};
//Endpoint para listar las peliculas más populares
MoviesController.getPopular = async (req,res)=>{
    try {

        let resultado = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1");

        res.send(resultado.data);

    } catch (error) {

        res.send(error);

    }; 
};
//Endpoint para buscar películas por título mediante Query params en postman
MoviesController.getTitle = async (req,res)=>{
    try {
        //Por defecto req tiene dos metodos: query para get, body para post. Criterio es el query param KEY que ponemos desde Postman
        let title = req.query.criterio;

        let resultado = await axios.get(`https://api.themoviedb.org/3/search/company?api_key=210d6a5dd3f16419ce349c9f1b200d6d&query=${title}&page=1`);

        res.send(resultado.data);

    } catch (error) {

        res.send(error);

    }; 
};
//Endpoint para buscar novedades
MoviesController.getUpcoming = async (req,res)=>{
    try {
        
        let resultado = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1");

        res.send(resultado.data);

    } catch (error) {

        res.send(error);

    }; 
};
//Endpoint para buscar detalles de películas por id mediante Query params en postman
MoviesController.getDetails = async (req,res)=>{
    try {
        //Por defecto req tiene dos metodos: query para get, body para post. Criterio es el query param KEY que ponemos desde Postman
        let id = req.query.criterio;

        let resultado = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1`);

        res.send(resultado.data);

    } catch (error) {

        res.send(error);

    }; 
};
//Endpoint para buscar reviews de películas por id mediante Query params en postman
MoviesController.getReviews = async (req,res)=>{
    try {
        //Por defecto req tiene dos metodos: query para get, body para post. Criterio es el query param KEY que ponemos desde Postman
        let id = req.query.criterio;

        let resultado = await axios.get(`
        https://api.themoviedb.org/3/movie/${id}/reviews?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1`);

        res.send(resultado.data);

    } catch (error) {

        res.send(error);

    }; 
};








module.exports = MoviesController;