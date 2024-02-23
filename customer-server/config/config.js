require("dotenv").config();

module.exports = {
  //Live  DB
  DATABASE_NAME: process.env.DATABASE_NAME,
  CONNECTION_URL: process.env.CONNECTION_URL,
  PORT: process.env.PORT,
  USER_COLLECTION: process.env.USER_COLLECTION,
  ADMIN_LOGIN_COLLECTION: process.env.USER_LOGIN_COLLECTION,
  JWT_SECRET: process.env.JWT_SECRET,
};
