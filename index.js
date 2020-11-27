const express = require('express');
const {sequelize} = require('./db');
const mapasRoute = require('./routes/mapaRoute')


const app = express();
app.use("/" , mapasRoute)




const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Connected to " + port)
})