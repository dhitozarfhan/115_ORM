require("dotenv").config();

const development ={
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT
};
const test ={
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT
};

const production ={
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT
};

module.exports = { 
  development, 
  test, 
  production };