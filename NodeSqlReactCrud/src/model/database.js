var Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'node',  //database
  'admin',  //Kullanici
  'password',  //Passport
  {
    host: 'localhost',  
    dialect: 'mysql'
  }
);

module.exports = sequelize;