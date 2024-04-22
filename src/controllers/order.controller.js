const service = require("../service/order.service");

const createOrders = async (req, res) => {
  try {
    if (!req || !res) {
      throw new Error("Null pointer reference: req or res");
    }
    const response = await service.createOrders(req.body);
    if (!response) {
      throw new Error("Unhandled exception: response is falsy");
    }
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: " " + error,
    });
  }
};
const getOrdersById = async (req, res) => {
  try {
    if (!req || !res) {
      throw new Error("Null pointer reference: req or res");
    }
    const response = await service.getOrderById(req.body);
    if (!response) {
      throw new Error("Unhandled exception: response is falsy");
    }
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Fail at order controller" + error,
    });
  }
};
module.exports = {
  createOrders,
  getOrdersById,
};
