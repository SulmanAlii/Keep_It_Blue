const express = require('express');
const {sequelize} = require('./db');
const cors = require("cors");


const app = express();
app.use(cors());

app.get('/' ,(req,res) => {
    res.send("BIENVENIDO AL MAPAS PLAYA")
})

/*
app.use("/", express.static('front'));
// esta funcion nos ayudará a escoger de forma aleatoria los comentarios que apareceran en el front
app.get("/api/citas/", (req, res) => {
const citaAleatoria = Math.floor(Math.random()*(citas.length - 0));
res.json(citas[citaAleatoria]);
 //res.json(citas[0])
});*/



const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Connected to " + port)
    sequelize.authenticate().then(() => console.log('Conectado a la db mapasPlayaDB'))
})




