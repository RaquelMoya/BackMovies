const { Order }= require("../models/index");

const auth = require('../middlewares/auth.js');
const isAdmin = require("../middlewares/isAdmin");

const OrdersController = {};

//Endpoint para registrar un nuevo pedido
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
//Endpoint para ver todos los pedidos asignados a un user
OrdersController.getOrdersById =async (req, res) => {
    let consulta = `SELECT movies.title AS title, users.name AS name
    FROM movies INNER JOIN orders
    ON movies.id = orders.movieId INNER JOIN users
    ON users.id = orders.userId;`;//Introducir entre las comillas la consulta hecha pura en SQL
    let resultado = await Order.sequelize.query(consulta,{type: Order.sequelize.QueryTypes.SELECT});
    if(resultado){
        res.send(resultado);
    }
};

//Endpoint para ver todos los pedidos
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
//Endpoint para borrar un pedido mediante su id
OrdersController.deleteOrderById = (req,res) => {
    let id = req.params.id;

    try{
        Order.destroy({
            where : { id : id},
            truncate : false
        })
      
        .then(orderDeleted =>{
            console.log(orderDeleted);
            res.send(`El pedido con la id ${id} ha sido eliminado`);
        })
    }
    catch(error){
        send.error(error);
    }
};
//Endpoint para borrar todos los pedidos
OrdersController.deleteAll = (req, res) => {
    try {

        Order.destroy({
            where : {},
            truncate : false
        })
        .then(pedidosEliminados => {
            res.send(`Se han eliminado ${pedidosEliminados} pedidos`);
        })

    } catch (error) {
        res.send(error);
    }
};




module.exports = OrdersController;