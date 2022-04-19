const express = require('express')
const router = express.Router()
const {Order} = require('../models')

// Get all Orders
router.get('/', (req, res) => {
    const arbitrage_id = req.query.arbitrage_id || null

    if (arbitrage_id) {
        console.log(arbitrage_id)
        const order = Order.findAll({
            where: {
                arbitrage_id: parseInt(arbitrage_id)
            }
        }).then(data => {
            if (data.length !== 0) {
                res.json(data).send()
            } else {
                res.send(`Arbitrage has no orders...`)
            }
        })
    } else {
        const order = Order.findAll().then(data => {
            if (data.length !== 0) {
                res.json(data).send()
            } else {
                res.send(`Order table empty`)
            }
        })
    }
})

// Get Order
router.get('/:id', (req, res) => {
    const order = Order.findByPk(req.params.id).then(data => {
        if (data === null) {
            res.send(`Order with id ${req.params.id} not found...`)
        } else {
            res.json(data).send()
        }
    })
})

// // Get all Arbitrage Child Orders
// router.get('/:arbitrage_id', (req, res) => {
//     const order = Order.findAll({
//         where: {
//             arbitrage_id: req.params.arbitrage_id
//         }
//     }).then(data => {
//         if (data) {
//             res.json(data).send()
//         } else {
//             res.send(`Arbitrage has no orders...`)
//         }
//     })
// })

router.get('/')

module.exports = router