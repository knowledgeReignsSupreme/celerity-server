const express = require("express");
const { createCarrier, getCarriers } = require("./carrier.controller.js");
const {
  validateSchema,
} = require("../Middleware/validateRequest.middleware.js");
const { createCarrierValidationSchema } = require("./carrier.validation.js");
const {
  parseRequest,
  rqlParser,
} = require("../Middleware/praseRequest.middleware.js");

const carrierRouter = express.Router({ mergeParams: true });

carrierRouter
  .route("")
  .get(rqlParser, parseRequest, getCarriers)
  .post(validateSchema(createCarrierValidationSchema), createCarrier);

module.exports = carrierRouter;
