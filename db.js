const Sequelize = require('sequelize');
const opinion = require('./models/opinion');
const comarca = require('./models/comarca');
const ubicacion = require('./models/ubicacion');
const evento = require('./models/evento');


const sequelize = new Sequelize('mapa','root','admin1234', {
    host : 'localhost',
    dialect: 'mysql'
})

const opinionTable = opinion(sequelize,Sequelize);
const comarcaTable = comarca(sequelize,Sequelize);
const ubicacionTable = ubicacion(sequelize,Sequelize);
const eventoTable = evento(sequelize,Sequelize);

sequelize.sync()
.then((db) => {
    console.log("Conectado con db mapa");
}).catch((err) => {
    console.log("Error al crear base de datos" + err);
});


module.exports = {sequelize, opinionTable, comarcaTable, ubicacionTable, eventoTable};