var sequelize = require('sequelize');
var config = require('./config.json');

const DB = new sequelize('foodapi', 'root', config.MYSQLPW, {
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

let apikeys = DB.define('apikeys', {
    key: sequelize.STRING,
    user: sequelize.STRING
});
  
class DataBase {
    static get connection() { return DB; }
    static get apikeys() { return apikeys; }
}

module.exports = DataBase;