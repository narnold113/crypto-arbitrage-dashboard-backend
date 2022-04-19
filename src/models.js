require('dotenv').config()
const Sequelize = require('sequelize')
const db = require('./config/db')

const Arbitrage = db.define('arbitrage', {
    arbitrage_type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    arbitrage_start_timestamp: {
        type: Sequelize.DATE,
        allowNull: false
    },
    arbitrage_end_timestamp: {
        type: Sequelize.DATE,
        allowNull: false
    },
    arbitrage_usdt_start_balance: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    arbitrage_usdt_end_balance: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    arbitrage_btc_start_balance: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    arbitrage_btc_end_balance: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    arbitrage_base_start_balance: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    arbitrage_base_end_balance: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
})

Arbitrage.sync().then(() => {
    console.log('table created')
})

const Order = db.define('order', {
    order_type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    order_timestamp: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    arbitrage_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    order_side: {
        type: Sequelize.STRING,
        allowNull: false
    },
    order_symbol: {
        type: Sequelize.STRING,
        allowNull: false
    },
    order_status: {
        type: Sequelize.STRING,
        allowNull: false
    },
    order_price: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    order_quantity: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    order_executed_quantity: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    order_cummulative_quote_quantity: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
})

Order.sync().then(() => {
    console.log('table created')
})

// Associations
Arbitrage.hasMany(Order, {
    foreignKey: 'arbitrage_id'
})

Order.belongsTo(Arbitrage, {
    foreignKey: 'arbitrage_id'
})

module.exports = {Arbitrage, Order}