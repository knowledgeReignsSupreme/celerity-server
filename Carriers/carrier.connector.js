const { BaseConnector } = require("../Modules/BaseConnector.module.js");
const Carrier = require("./carrier.model.js");

class CarrierConnector extends BaseConnector {
  constructor() {
    const model = Carrier;
    super(model);
  }
}

module.exports = CarrierConnector;
