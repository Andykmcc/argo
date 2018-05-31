// const R = require('ramda');
const joi = require('joi');

// this is just a helper to wrap the schemas with so i can expose them
// as function that take one argument (the object to be tested)
// const validator = R.curry(R.flip(joi.validate));

const userSchema = joi.object().keys({
  email: joi.string().email().required()
}).required();

module.exports = class User {
  constructor (userData) {
    const {error, value} = joi.validate(userData, userSchema, {allowUnknown: false});

    if (error) {
      throw error;
    } else {
      Object.assign(this, value);
    }
  }
}
