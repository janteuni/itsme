import express from 'express'
import mongoose from 'mongoose'

import * as Order from 'api/order.service'

mongoose.connect('mongodb://localhost/itsme')

const router = express.Router()

router.get('/', (req, res) => res.send('[ API UP ]'))

router.post('/order', (req, res) => {
  Order.saveOrder(req.body)
    .then(() => res.sendStatus(200))
    .catch((err) => res.status(500).send(err))
})

export default router
