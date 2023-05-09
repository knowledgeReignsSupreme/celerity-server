import { Schema, model } from "mongoose";

const ServiceSchema = new Schema({
  key: {
    type: Number,
    unique: true,
  },

  carrier: {
    type: Schema.Types.ObjectId,
    ref: "carriers",
  },

  service: {
    type: String,
  },

  isEnabled: {
    type: Boolean,
    default: true,
  },

  type: {
    type: String,
  },
});

const Service = model("services", ServiceSchema, "services");
export default Service;
