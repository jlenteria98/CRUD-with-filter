const validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function inputValidation(data) {
  let errors = {};

  data.firstname = !isEmpty(data.firstname) ? data.firstname : '';
  data.lastname = !isEmpty(data.lastname) ? data.lastname : '';

  if (validator.isEmpty(data.firstname)) {
    errors.firstname = 'Firstname is required';
  } else if (!validator.isLength(data.firstname, { min: 2 })) {
    errors.firstname = 'Firstname is atleast 2 characters';
  }
  if (validator.isEmpty(data.lastname)) {
    errors.lastname = 'Lastname is required';
  } else if (!validator.isLength(data.lastname, { min: 2 })) {
    errors.lastname = 'Lastname is atleast 2 characters';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
