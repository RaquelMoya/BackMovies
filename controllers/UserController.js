
const { send } = require('express/lib/response');
const { User } = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

const UserController =  {};


//Funciones del controlador

UserController.getUsers =(req,res)=>{
    User.findAll()
    .then(data =>{
        res.send(data)
    })
};

UserController.registerUser = async (req, res) =>{
//Registro usuarios mediante Postman
    try{
        let name = req.body.name;
        let surname = req.body.surname;
        let age = req.body.age;
        let phone = req.body.phone;
        let email = req.body.email;
        let adress = req.body.adress;
        let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));

        //Guardamos en sequelize usuarios
            User.create({
                name: name,
                surname: surname,
                age: age, 
                phone: phone,
                adress: adress,
                email: email,
                password: password
            //Se muestra en Postman 
            }).then(user =>{
                res.json({
                    name: user.name,
                    email: user.email
                })
            });

    }catch (error){
        res.send(error);
    }
};


UserController.loginUser =(req,res) =>{
    let correo = req.body.email;
    let password = req.body.password;

    User.findOne({
        where : {email : correo}
    }).then(User => {

        if(!User){
            res.send("Usuario o contraseña inválido");
        }else {
            //el usuario existe, por lo tanto, vamos a comprobar
            //si el password es correcto

            if (bcrypt.compareSync(password, User.password)) { //COMPARA CONTRASEÑA INTRODUCIDA CON CONTRASEÑA GUARDADA, TRAS DESENCRIPTAR

                console.log(User.password);

                let token = jwt.sign({ user: User }, authConfig.secret, {
                    expiresIn: authConfig.expires
                });

                res.json({
                    usuario: User,
                    token: token
                })
            } else {
                res.status(401).json({ msg: "Usuario o contraseña inválidos" });
            }
        };


    }).catch(error => {
        res.send(error);
    })
};


//Para buscar un usuario mediante un id
UserController.getUserId =(req,res) =>{
    User.findByPk(req.params.id)
    .then(data =>{
        res.send(data)
    })
};

//Para buscar un usuario mediante un email
UserController.getUserEmail =(req, res) =>{
    User.findOne({ where : {email : req.params.email}})
    .then(data =>{
        res.send(data)
    })
};

//Para eliminar usuarios
UserController.deleteAll =async(req, res) =>{
    
    try {

        Usuario.destroy({
            where : {},
            truncate : false
        })
        .then(usuariosEliminados => {
            res.send(`Se han eliminado ${usuariosEliminados} usuarios`);
        })

    } catch (error) {
        res.send(error);
    }

};

//Para eliminar usuario por ID
UserController.deleteById = async(req, res) =>{
    let id = req.params.id;

    try{
        User.destroy({
            where : { id : id},
            truncate : false
        })
      
        .then(userDeleted =>{
            console.log(userDeleted);
            res.send(`El usuario con la id ${id} ha sido eliminado`);
        })
    }
    catch(error){
        send.error(error);
    }
}

//Para modificar usuarios
UserController.modifyUser = async (req, res) =>{
     let datos = req.body;
     let id = req.params.id;
    
    try{
        User.update(req.body, {
            where: {id : id}
        })
        .then(actualizado =>{
            res.send(actualizado);
        })
    } catch(error){

    }
}




module.exports = UserController;