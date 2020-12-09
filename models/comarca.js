module.exports =   (sequelize,type) => {
    return sequelize.define('comarca', {
        nombre : type.STRING(45),
        lat : type.DECIMAL,
        longt : type.DECIMAL
    },{tableName: 'comarca', timestamps: false})
}


