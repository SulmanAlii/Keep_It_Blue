const express = require('express');
const {sequelize} = require('./db');



const app = express();


app.get('/' ,(req,res) => {
    res.send("BIENVENIDO AL MAPAS PLAYA")
})


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Connected to " + port)
})