const { Order }= require("../models/index");


const OrdersController = {};

OrdersController.placeNewOrder = (req,res) => {
    
    let body = req.body;

    Order.create({
        movieId: body.movieId,
        userId: body.userId,
        rentingDate: body.rentingDate,
        returnDate:body.returnDate
    })
    .then(order => {
        if(order){
            res.send(order)
        }else{
            res.send("La creación de un nuevo pedido ha fallado");
        }
    })
    .catch((error => {
        res.send(error)
    }))
};

OrdersController.allOrders = async (req, res) => {
    let consulta = `SELECT users.name AS name, movies.title AS title, users.nickname AS nickname, users.email AS email
    FROM users INNER JOIN orders
    ON users.id = orders.userId INNER JOIN movies
    ON movies.id = orders.movieId;`;//Introducir entre las comillas la consulta hecha pura en SQL
    let resultado = await Order.sequelize.query(consulta,{type: Order.sequelize.QueryTypes.SELECT});
    if(resultado){
        res.send(resultado);
    }
};




module.exports = OrdersController;