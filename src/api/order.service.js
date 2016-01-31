import Order from 'api/order.model'

export const saveOrder = (order) => new Promise((resolve, reject) => {
  const newOrder = new Order(order)
  newOrder.save((err) => {
    if (err) { return reject(err) }
    resolve()
  })
})
