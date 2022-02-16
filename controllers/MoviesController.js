const MoviesController = {};

MoviesController.getTop = async (req,res)=>{
    try {

        let resultado = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1");

        res.send(resultado.data);

    } catch (error) {

        res.send(error);

    }; 
};








module.exports = MoviesController;