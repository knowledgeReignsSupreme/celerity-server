const Validator = require("../Modules/Validator.module.js");

exports.validateSchema = (schema) => {
  const validationResult = Validator.compile(schema);

  return (req, res, next) => {
    const data = req.body;

    const isValid = Validator.validate(schema, data);
    if (!isValid && validationResult.errors) {
      const errors = Validator.mapErrors(validationResult.errors);

      return res.status(400).json({ errors });
    }

    next();
  };
};
