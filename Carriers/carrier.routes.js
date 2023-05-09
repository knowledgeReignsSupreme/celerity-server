const express = require("express");
const { createCarrier, getCarriers } = require("./carrier.controller.js");
const {
  validateSchema,
} = require("../Middleware/validateRequest.middleware.js");
const { createCarrierValidationSchema } = require("./carrier.validation.js");

const carrierRouter = express.Router({ mergeParams: true });

carrierRouter
  .route("")
  .get(getCarriers)
  .post(validateSchema(createCarrierValidationSchema), createCarrier);

module.exports = carrierRouter;
