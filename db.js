const Sequelize = require('sequelize');


const sequelize = new Sequelize('mapa','root','admin1234', {
    host : 'localhost',
    dialect: 'mysql'
})


sequelize.sync()
.then((db) => {
    console.log("DB CREADO");
}).catch((err) => {
    console.log("Error al crear base de datos" + err);
});


module.exports = {sequelize};