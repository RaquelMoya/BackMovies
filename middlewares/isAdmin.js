
    const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

module.exports = (req, res, next) => {
    
    // pick the token
    let token = req.headers.authorization.split(' ')[1];
    // pick the user logged
    let {user} = jwt.decode(token, authConfig.secret)
    
    try {
        if (user.rol) {
            next();
        } else {
            res.status(403).send({ msg: `User is not allowed.` });
        }
    } catch (error) {
        res.status(400).json({
            msg: `Something bad happened, try to check the infos you put and try again.`,
            error: error
        });
    }
};
//const { User } = require('../models/index');
//
//module.exports = (req, res, next) => {
//    let id = req.params.id;
//    console.log ("aqui esta la id", id);
//    User.findOne ({
//        where : { id : id }
//
//    }).then(usuarioEncontrado => {
//
//        if(usuarioEncontrado.rol == 1){
//            next();
//        }else {
//            res.send(`El usuario no es admin`)
//        }
//    }).catch(error => {
//        res.send(error)
//    })
//
//};