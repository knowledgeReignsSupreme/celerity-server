exports.createCarrierValidationSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    key: { type: "number", nullable: true },
    isEnabled: { type: "boolean", nullable: true },
    trackingUrlPrefix: { type: "string", nullable: true },
    carrierType: { type: "string", nullable: true },
  },
  required: ["name"],
  additionalProperties: false,
};
