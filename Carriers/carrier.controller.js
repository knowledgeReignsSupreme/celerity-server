const CarrierService = require("./carrier.service.js");

exports.getCarriers = async (req, res) => {
  const parsedRequest = req.parsedRequest;
  const carriers = await CarrierService.findAll(rql);
  return res.status(200).send(carriers);
  return res.status(200).send([]);
};

exports.createCarrier = async (req, res) => {
  try {
    const carrier = req.body;

    await CarrierService.create(carrier);
    return res.status(200).send(carrier);
  } catch (error) {
    console.log("error", error);
    return res.status(200).send(error);
  }
};
