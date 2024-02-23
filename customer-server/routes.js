module.exports = function (app, db) {
  require("./controlller/user")(app, db);
  require("./controlller/payment")(app, db);
};
