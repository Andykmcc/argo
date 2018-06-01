const nconf = require('nconf');

// Adds values from .env file to process.env
require('dotenv').config();

nconf.argv()
  .env();

module.exports = nconf;
