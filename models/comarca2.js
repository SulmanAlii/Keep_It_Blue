const { sequelize } = require("../db");

module.exports = (sequelize,type) => {
    return sequelize.define('comarca2', {
        id : {
            type : type.INTEGER,
            primaryKey: true,
        },
        Playa : type.STRING,
        c : type.STRING,
        longt : type.DECIMAL,
        lat : type.DECIMAL,
        cp : type.INTEGER,
        provincia : type.STRING,
        num_provincia : type.INTEGER,
    },{tableName: 'comarca2', timestamps: false})
}