var Sequelize = require('sequelize');

const DB = new Sequelize('foodapi', 'root', 'Nope, i dont leak it!', {
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
    de: Sequelize.STRING
});
  
class DataBase {
    static get connection() { return DB; }
    static get food() { return food; }
}