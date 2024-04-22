const orderRouter = require("./order.route");
const createHttpError = require("http-errors");
const initRoutes = (app) => {
  app.use("/api/v1/order", orderRouter);
  app.use((req, res, next) => {
    next(createHttpError.NotFound("This route does not exist"));
  });

  return app.use((err, req, res, next) => {
    res.json({
      status: err.status || 500,
      message: err.message,
    });
  });
};

module.exports = initRoutes;
