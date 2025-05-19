require('dotenv').config(); 

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: '127.0.0.1',
    dialect: process.env.DB_DIALECT,
  },
  test: {
    // podés configurar para test
  },
  production: {
    // podés configurar para producción
  }
};
 
