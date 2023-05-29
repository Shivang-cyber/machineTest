const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize'); 

const User = sequelize.define('User', {
 email: {
  type: Sequelize.STRING,
  unique: true,
 },
 mobile: {
  type: Sequelize.STRING,
  unique: true,
 },
 name: Sequelize.STRING,
 password: Sequelize.STRING,
 latitude: Sequelize.STRING,
 longitue: Sequelize.STRING,
 friend: Sequelize.STRING,
 block: Sequelize.STRING,
 requests: Sequelize.STRING
});

module.exports = User;
