const router = require("express").Router();


const UserRouter = require (".VIEWS/UserRouter");
const MoviesRouter = require(".VIEWS/MoviesRouter");



router.use("/users",UserRouter);
router.use("/movies", MoviesRouter);


module.exports = router;