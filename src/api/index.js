import express from 'express'
import mongoose from 'mongoose'
import multer from 'multer'
import shortid from 'shortid'
import mime from 'mime'

import * as Order from 'api/order.service'

mongoose.connect('mongodb://localhost/itsme')

const router = express.Router()
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    const name = `${shortid.generate()}.${mime.extension(file.mimetype)}`
    cb(null, name)
  }
})
const upload = multer({ storage })

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
