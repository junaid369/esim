const common = require("../global/common");
const mongoose = require("mongoose");
const { user } = require("../models/user-model");
let jwt = require("jsonwebtoken");
const config = require("../config/config");
const paypal = require("paypal-rest-sdk");
const arrayEmpty = [];

// Configure PayPal SDK with your API credentials
// paypal.configure({
//   mode: "sandbox", // Change to 'live' for production
//   client_id:
//     "AQ_3S2jKgjaiGnG_UjVcAB2KabyZvJEt81NNgGbv54GkyaukBVSAVVNRMdPFkxWdPvygefmtDqKo81HV",
//   client_secret:
//     "EOnQuaJfXTGNFYdDtZJt3rBIEDEwCOQp-NWc22Dc2xsVx7UMui4lOhFUz_Hv4UFDCg1mluksJJ--2yyS",
// });
paypal.configure({
  mode: "sandbox", // Change to 'live' for production
  client_id:
    "ASZhdNW8smv8_ZFWqZEdHXZedWT_t6QaelJUYnTmfYNWtkNZiUeUKlqxrru3NRKntthy51-kOi-t7KF1",
  client_secret:
    "EPpZT7vgGKUHYoUsz9kWvmMMCIaWgqbV8TXOBO9L2EUpoS8bKhMjCc6detIWhM6VSQxiS3xSiosdWPpD",
});

module.exports = {
  funPaymentCreate: async function (obj, db) {
    try {
      // Make a sample payment
      const paymentData = {
        intent: "sale",
        payer: {
          payment_method: "paypal",
        },
        transactions: [
          {
            amount: {
              total: "50.00",
              currency: "USD",
            },
          },
        ],
        redirect_urls: {
          return_url: "http://localhost:3000/success",
          cancel_url: "http://localhost:3000/cancel",
        },
      };

      paypal.payment.create(paymentData, (error, payment) => {
        if (error) {
          //   reject(error);
        } else {
          console.log(payment);
        }
      });
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "System:" + error,
        data: arrayEmpty,
      };
    }
  },
  funPaymentExecute: async function (obj, db) {
    try {
      const paymentId = obj.paymentId;
      const payerId = obj.payerId;
      // Make a sample payment

      const execution =  paypal.payment.execute(paymentId, {
        payer_id: payerId,
      });

 
    } catch (error) {
      return {
        success: false,
        message: "System:" + error,
        data: arrayEmpty,
      };
    }
  },
};
