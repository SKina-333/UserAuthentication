const pgSession = require("connect-pg-simple")(session);
const { Pool } = require("pg");
require("dotenv").config();

module.exports = new Pool({
    host: process.env.HOSTNAME, 
    user: process.env.DB_USER,
    database: "users",
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});