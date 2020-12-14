module.exports =   (sequelize,type) => {
    return sequelize.define('evento', {
        nomEvent: type.STRING(200),
        nomPersona : type.STRING(45),
        descripcioEvent : type.STRING,
        data : type.DATE,
        tipoEvent : type.STRING(45),
        foto : type.STRING,
        nomplatja : type.STRING,
        idcomarca : type.INTEGER,
        nomcomarca : type.STRING,
        
    },{tableName: 'evento', timestamps: false})
}
