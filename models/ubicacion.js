module.exports = (sequelize,type) => {
    return sequelize.define('ubicacion', {
        nombre : type.STRING(100),
        zona : type.STRING(45),
        comarca_idcomarca : type.INTEGER
    },{tableName: 'ubicacion', timestamps: false})
}