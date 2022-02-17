
const { User } = require('../models/index');

const UserController =  {};


//Funciones del controlador

UserController.getUsers =(req,res)=>{
    User.findAll()
    .then(data =>{
        res.send(data)
    })
};

UserController.registerUser = async (req, res) =>{
//Registro usuarios
    try{
        let name = req.body.name;
        let surname = req.body.surname;
        let age = req.body.age;
        let phone = req.body.phone;
        let email = req.body.email;
        let adress = req.body.adress;

        //Guardamos en sequelize usuarios
            User.create({
                name: name,
                surname: surname,
                age: age, 
                phone: phone,
                adress: adress,
                email: email
                
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

};

UserController.getUserId =(req,res) =>{
    User.findByPk(req.params.id)
    .then(data =>{
        res.send(data)
    })
};

UserController.getUserEmail =(req, res) =>{
    User.findOne({ where : {email : req.params.email}})
    .then(data =>{
        res.send(data)
    })
};





module.exports = UserController;