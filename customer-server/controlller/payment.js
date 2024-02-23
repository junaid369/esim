module.exports = (app, db) => {
  let common = require("../global/common");
  const PAYMENT_MODEL = require("../service/payment-status");
  const arrayEmpty = [];

  //add admin modules
  app.post("/v2/api/payment/payment_create",
//   common.verifyToken,
   (req, res) => {
    try {
      let obj = req.body;

      if (!obj) {
        res.status(200).json({
          success: false,
          message: "Requst is missing.",
          data: arrayEmpty,
        });
      } else {
        PAYMENT_MODEL.funPaymentCreate(obj, db)
          .then((result) => {
            res.status(200).json(result);
          })
          .catch((error) => {
            res.status(400).json({
              success: false,
              message: "Internal server error.",
              data: arrayEmpty,
            });
          });
      }
    } catch (error) {}
  });
  app.post("/v2/api/payment/payment_execute",
//   common.verifyToken,
   (req, res) => {
    try {
      let obj = req.body;

      if (!obj) {
        res.status(200).json({
          success: false,
          message: "Requst is missing.",
          data: arrayEmpty,
        });
      } else {
        PAYMENT_MODEL.funPaymentExecute(obj, db)
          .then((result) => {
            res.status(200).json(result);
          })
          .catch((error) => {
            res.status(400).json({
              success: false,
              message: "Internal server error.",
              data: arrayEmpty,
            });
          });
      }
    } catch (error) {}
  });

};
