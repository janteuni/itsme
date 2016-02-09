import Order from 'api/order.model'

export const saveOrder = (order) => new Promise((resolve, reject) => {
  const newOrder = new Order(order)
  newOrder.date = new Date()
  newOrder.save((err) => {
    if (err) { return reject(err) }
    resolve()
  })
})

export const getOrders = () => new Promise((resolve, reject) => {
  Order.find({}, (err, orders) => {
    if (err) { return reject(err) }
    resolve(orders)
  })
})

export const getOrder = _id => new Promise((resolve, reject) => {
  Order.findOne({ _id }, (err, order) => {
    if (err) { return reject(err) }
    resolve(order)
  })
})
