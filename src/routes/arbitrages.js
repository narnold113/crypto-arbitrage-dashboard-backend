const express = require('express')
const router = express.Router()
const {Arbitrage} = require('../models')

// Get all arbitrages
router.get('/', (req, res) => {
    const arbitrage = Arbitrage.findAll().then(data => {
        if (data.length !== 0) {
            res.json(data).send()
        } else {
            res.send(`Arbitrage table empty`)
        }
    })
})

// Get arbitrage
router.get('/:id', (req, res) => {
    const arbitrage = Arbitrage.findByPk(req.params.id).then(data => {
        if (data === null) {
            res.send(`Arbitrage with id ${req.params.id} not found...`)
        } else {
            res.json(data).send()
        }
    })
})

router.get('/')

module.exports = router