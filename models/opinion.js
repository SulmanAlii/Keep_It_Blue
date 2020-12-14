module.exports =   (sequelize,type) => {
    return sequelize.define('opinion', {
        nombre : type.STRING,
        opinion : type.STRING,
        foto : type.STRING,
        puntuacion : type.INTEGER,
        nomplatja : type.STRING,
        idcomarca : type.INTEGER,
        nomcomarca :type.STRING,
        cp : type.INTEGER,
    

    },{tableName: 'opinion', timestamps: false})

}


