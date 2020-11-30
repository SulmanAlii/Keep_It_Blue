module.exports =   (sequelize,type) => {
    return sequelize.define('opinion', {
        nombre : type.STRING(45),
        opinion : type.STRING(1000),
        foto : type.STRING(150),
        ubicacion_idubicacion : type.INTEGER,
        puntuacion : type.INTEGER,

    },{tableName: 'opinion', timestamps: false})


}


