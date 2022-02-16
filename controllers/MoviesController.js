const express = require("express");
const axios = require("axios");
const router = express.Router();

const MoviesController = {};

MoviesController.getTop = async (req,res)=>{
    try {

        let resultado = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1");

        res.send(resultado.data);

    } catch (error) {

        res.send(error);

    }; 
};
MoviesController.getPopular = async (req,res)=>{
    try {

        let resultado = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1");

        res.send(resultado.data);

    } catch (error) {

        res.send(error);

    }; 
};
MoviesController.getTitle = async (req,res)=>{
    try {
        let title = req.query.criterio;

        let resultado = await axios.get(`https://api.themoviedb.org/3/search/company?api_key=210d6a5dd3f16419ce349c9f1b200d6d&query=${title}&page=1`);

        res.send(resultado.data);

    } catch (error) {

        res.send(error);

    }; 
};









module.exports = MoviesController;