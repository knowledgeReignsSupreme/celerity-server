const { BaseService } = require("../Modules/BaseService.module.js");
const CarrierConnector = require("./carrier.connector.js");
const Carrier = require("./carrier.model.js");

class CarrierService extends BaseService {
  constructor() {
    super(CarrierConnector, Carrier);
  }
}

module.exports = new CarrierService();
