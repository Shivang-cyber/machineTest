const Sequelize = require('sequelize');
const sequelize = new Sequelize('freindster', 'root', '9026724930M@n', {
 host: 'localhost',
 dialect: 'mysql',
 port: "3306"
});

module.exports = sequelize;
