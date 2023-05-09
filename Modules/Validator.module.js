const Ajv = require("ajv");

class Validator {
  constructor(validator) {
    this.validator = validator;
  }

  mapErrors(errors) {
    return errors.map((error) => {
      return {
        message: error?.message,
        path: error?.params?.missingProperty,
      };
    });
  }

  compile(schema) {
    return this.validator.compile(schema);
  }

  validate(schema, data) {
    const validationResult = this.validator.compile(schema);
    const isValid = this.validator.validate(schema, data);

    if (!isValid && validationResult.errors) {
      this.mapErrors(validationResult.errors);
    }

    return isValid;
  }
}

const options = {};
module.exports = new Validator(new Ajv(options));
