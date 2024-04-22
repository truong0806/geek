const db = require("../models");
function generateOrderId(isTrk) {
  const timestamp = new Date().getTime();
  const randomString = Math.random().toString(36).substring(2, 8);
  return isTrk
    ? `TRK-${timestamp}-${randomString}`
    : `ORDER-${timestamp}-${randomString}`;
}

const createOrders = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const { userID, cartId, cart_products_new, user_address, user_payment } =
        payload;
      if (
        !user_address ||
        !user_address.street ||
        !user_address.ward ||
        !user_address.District ||
        !user_address.province
      ) {
        return reject("Vui lòng cung cấp địa chỉ giao hàng");
      }
      if (!user_payment) {
        return reject("Vui lòng cung cấp phương thức thanh toán");
      }
      let totalPrice = 0;
      cart_products_new.forEach((cart) => {
        cart.item_product.forEach((item) => {
          totalPrice += item.product_price * item.quantity;
        });
      });

      const order = await db.Order.create({
        id: generateOrderId(),
        order_userId: userID,
        totalprice: totalPrice,
        feeShip: 0,
        totalDiscount: 0,
        totalCheckout: totalPrice,
        order_shipping_method: "Standard",
        order_shipping_discount: 0,
        order_shipping_address: `${user_address.street}, ${user_address.ward}, ${user_address.District}, ${user_address.province}`,
        order_payment_method: user_payment.method,
        order_products_list: JSON.stringify(cart_products_new),
        order_status: "Pending",
        order_trackingnumber: generateOrderId(true),
        createAt: new Date(),
        updateAt: new Date(),
      });
      resolve(order);
    } catch (error) {
      console.error("Error creating order:", error);
      throw error;
    }
  });
const getOrderById = async (payload) => {
  try {
    const { orderId } = payload;
    // Find the order in the database
    const order = await db.Order.findOne({
      where: { id: orderId },
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });

    if (!order) {
      return null;
    }
    order.order_products_list = JSON.parse(order.order_products_list);
    return order;
  } catch (error) {
    console.error("Error fetching order:", error);
    throw error;
  }
};

module.exports = {
  createOrders,
  getOrderById,
};
