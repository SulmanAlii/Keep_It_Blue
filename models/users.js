module.exports = (sequelize,type) => {
    return sequelize.define('users', {
        nombre : type.STRING,
        email : type.STRING,
        password : type.STRING,
    })
}