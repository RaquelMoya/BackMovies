const router = require("express").Router();

const UserRouter = require ("./VIEWS/UserRouter");
const MoviesRouter = require("./VIEWS/MoviesRouter");
const OrdersRouter = require("./VIEWS/OrdersRouter");
const GenreRouter = require("./VIEWS/GenreRouter");
const ActorRouter = require("./VIEWS/ActorRouter");
const GenreMovieRouter = require("./VIEWS/GenreMovieRouter");
const ActorMovieRouter = require("./VIEWS/ActorMovieRouter");



router.use("/users",UserRouter);
router.use("/movies", MoviesRouter);
router.use("/orders", OrdersRouter);
router.use("/genres", GenreRouter);
router.use("/actors", ActorRouter);
router.use("/genreMovie", GenreMovieRouter);
router.use("/actorMovie", ActorMovieRouter);


module.exports = router;