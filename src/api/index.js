import express from 'express'
import mongoose from 'mongoose'

import * as Order from 'api/order.service'
import upload from 'api/upload'

mongoose.connect('mongodb://localhost/itsme')

const router = express.Router()

router.get('/', (req, res) => res.send('[ API UP ]'))

router.post('/order', (req, res) => {
  Order.saveOrder(req.body)
    .then(() => res.sendStatus(200))
    .catch((err) => res.status(500).send(err))
})

router.post('/upload', upload.array('file', 12), (req, res) => {
  const filesNames = req.files.map(f => f.filename)
  res.status(200).send(filesNames)
})

export default router
