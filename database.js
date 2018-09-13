var Sequelize = require('sequelize');
var config = require('./config.json')

const DB = new Sequelize('foodapi', 'root', config.MYSQLPW, {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    operatorsAliases: false
  });

const food = DB.define('food', {
    name: Sequelize.STRING,
    de: Sequelize.STRING,
    calories: Sequelize.INTEGER,
    category: Sequelize.STRING
});
  
class DataBase {
    static get connection() { return DB; }
    static get food() { return food; }
}