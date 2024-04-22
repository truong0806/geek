const orderController = require("../controllers/order.controller");
const express = require("express");

const router = express.Router();
router.post("/", orderController.createOrders);
router.get("/", orderController.getOrdersById);

module.exports = router;
