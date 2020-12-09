module.exports =   (sequelize,type) => {
    return sequelize.define('comarca', {
        nombre : type.STRING(45),
        lat : type.DECIMAL(7,4),
        long : type.DECIMAL(7,4)
    },{tableName: 'comarca', timestamps: false})
}


