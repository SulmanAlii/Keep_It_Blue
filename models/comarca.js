module.exports =   (sequelize,type) => {
    return sequelize.define('comarca', {
        nombre : type.STRING(45),
        gps : type.STRING(45),
    },{tableName: 'comarca', timestamps: false})
}


