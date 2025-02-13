const { Pool } = require('pg');
require('dotenv').config();  // Cargar variables de entorno desde .env

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false, // Necesario para Amazon RDS
  },
});

module.exports = pool;

