require('dotenv').config();

module.exports={
  "development": {
    "username": process.env.DB_USERNAME || "root",
    "password": process.env.DB_PASSWORD || "rakel1990",
    "database": process.env.DB_DATABASE || "films2022",
    "host": process.env.DB_HOST || "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": "mysql"
   
  }
}
