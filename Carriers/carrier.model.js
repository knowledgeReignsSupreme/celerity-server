const mongoose = require("mongoose");
const { getNewKey } = require("../utils/mongoose.utils");

const CarrierSchema = new mongoose.Schema(
  {
    key: {
      type: Number,
      unique: true,
    },

    name: {
      type: String,
      unique: true,
    },

    isEnabled: {
      type: Boolean,
      default: true,
    },

    carrierType: {
      type: String,
    },

    trackingUrlPrefix: {
      type: String,
    },
  },
  { timestamps: true }
);

CarrierSchema.plugin(getNewKey, { schemaName: "carriers" });

const Carrier = mongoose.model("carriers", CarrierSchema, "carriers");

module.exports = Carrier;
