const { User } = require('../models/index');


module.exports = (req, res, next) => {

    let id = req.params.id;
    console.log ("aqui esta la id", id);
    User.findOne ({

        where : { id : id }

    }).then(usuarioEncontrado => {

        if(usuarioEncontrado.rol == 1){
            next();
        }else {
            res.send(`El usuario no es admin`)
        }
    }).catch(error => {
        res.send(error)
    })

};