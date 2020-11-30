const express = require('express');
const {sequelize} = require('./db');
const opinionRoute = require('./routes/opinionRoute')
const comarcaRoute = require('./routes/ComarcaRoute')
const ubicacionRoute = require('./routes/ubicacionRoute')




const app = express();
app.use(express.json())
app.use('/img' , express.static('uploads'))
app.use("/",express.static('public'))
app.use("/" , opinionRoute)
app.use("/" , comarcaRoute)
app.use("/" , ubicacionRoute)



const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Connected to " + port)
})