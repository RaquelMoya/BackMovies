const router = require("express").Router();
const UserRouter = require (".VIEWS/UserRouter");
router.use("/users",UserRouter);


module.exports = router;