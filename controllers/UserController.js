const UserController =  {};


//Funciones del controlador

UserController.getUsers =(req,res)=>{

};

UserController.registerUser =(req,res) =>{

    try{
        let naming = req.body.name;

        console.log(req.body);

        if(naming === "Juanma"){
            res.send("No queremos a esa persona aqui");
        }else{
            res.send(naming);
        }

    }catch (error){
        res.send(error);
    }
};

UserController.loginUser =(req,res) =>{

};





module.exports = UserController;