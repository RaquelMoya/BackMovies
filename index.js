const express = require("express");
const app = express();

const db = require('./db.js');

const cors = require("cors");

const PORT = 3000;

const router = require("./router");

//configuro opciones de CORS
let corsOptions ={
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
};

//Middlewares

app.use(express.json());
app.use(cors(corsOptions));

app.use(router);

db.then(()=>{
    app.listen(PORT, ()=> console.log(`Server on port ${PORT}`)); //ARRANCO SERVIDOR
})
.catch((err)=> console.log(err.message)); 
