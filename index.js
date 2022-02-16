const express = require("express");
const app = express();

const cors = require("cors");

const axios = require("axios");

const PORT = 3000;

const router = require("./router");

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


app.listen(PORT, ()=>{
    console.log(`Servidor arriba y funcionando en el puerto ${PORT}`);
});
