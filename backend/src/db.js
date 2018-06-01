const Sequelize = require('sequelize');
const config = require('./config');

let sequelize;

module.exports = (function (){
  if (!sequelize) {
    sequelize = new Sequelize(config.get('PG_DATABASE'), config.get('PG_USERNAME'), config.get('PG_PASSWORD'), {
      host: config.get('PG_HOST'),
      dialect: 'postgres',
      operatorsAliases: false,

      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    });
  }

  return sequelize;
})();
