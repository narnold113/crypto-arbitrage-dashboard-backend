require('dotenv').config()
const Sequelize = require('sequelize')

const dbSocketPath = process.env.DB_SOCKET_PATH || '/cloudsql'

if (process.env.IS_CLOUD) {
  module.exports =  new Sequelize('main', process.env.PG_USER, process.env.PG_PASSWORD, {
    // host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    dialect: 'postgres',
    dialectOptions: {
      socketPath: `${dbSocketPath}/${process.env.INSTANCE_CONNECTION_NAME}`
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  })
} else {
  module.exports =  new Sequelize('main', process.env.PG_USER, process.env.PG_PASSWORD, {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  })
}

