
const { Pool } = require("pg");
require("dotenv").config();

module.exports = new Pool({
    host: process.env.HOSTNAME, 
    user: process.env.DB_USER,
    database: "",
    password: process.env.DB_PASS,
    port: process.env.DB_PORT
});