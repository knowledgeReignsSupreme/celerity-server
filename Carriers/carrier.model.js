const { Schema, model } = require("mongoose");
// import { getNewKey } from '../utils/mongoose.utils.js';

const CarrierSchema = new Schema(
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

// CarrierSchema.pre('save', async function (next) {
//   this.key = await getNewKey(Carrier);

//   console.log('NEW KEY!!!!!', this.key);

//   next();
// });

const Carrier = model("carriers", CarrierSchema, "carriers");

module.exports = Carrier;
