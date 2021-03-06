import express from 'express'
import mongoose from 'mongoose'
import passport from 'passport'
import path from 'path'
import fs from 'fs'

import config from 'config'
import * as Order from 'api/order.service'
import upload from 'api/upload'
import * as auth from 'api/auth.service'

import 'api/auth/passport-local'

mongoose.connect('mongodb://localhost/itsme')

const router = express.Router()

// -----------------------------------
// LOGIN
// -----------------------------------

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    const error = err || info
    if (error) { return res.status(401).json(error) }
    if (!user) { return res.status(401).json({ msg: 'login failed' }) }
    res.json({
      user: 'jasmine',
      token: auth.signToken('jasmine')
    })
  })(req, res, next)
})

// -----------------------------------
// API - admin
// -----------------------------------

router.get('/orders', auth.isAuthenticated(), (req, res) => {
  Order.getOrders()
    .then(orders => res.status(200).send(orders))
    .catch(err => res.status(500).send(err))
})

router.get('/orders/:id', auth.isAuthenticated(), (req, res) => {
  Order.getOrder(req.params.id)
    .then(order => res.status(200).send(order))
    .catch(err => res.status(500).send(err))
})

router.put('/orders/:id', auth.isAuthenticated(), (req, res) => {
  Order.updateOrder(req.params.id, req.body)
    .then(order => res.status(200).send(order))
    .catch(err => res.status(500).send(err))
})

// -----------------------------------
// API - client
// -----------------------------------

router.post('/orders', (req, res) => {
  Order.saveOrder(req.body)
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send(err))
})

router.post('/upload', upload.array('file', 12), (req, res) => {
  const filesNames = req.files.map(f => f.filename)
  res.status(200).send(filesNames)
})

router.delete('/images', (req, res) => {
  const imagesIds = req.body
  imagesIds.forEach(imageId => {
    const imagePath = path.join(config.uploadFolder, imageId)
    fs.unlink(imagePath)
  })
  res.sendStatus(200)
})

export default router
