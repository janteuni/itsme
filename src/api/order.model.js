import mongoose from 'mongoose'

const Order = mongoose.model('Order', {
  itsmes: [],
  groupSheet: Boolean,
  firstname: String,
  lastname: String,
  email: String,
  address: String,
  country: String,
  comment: String,
  money: { type: Boolean, default: false }
})

export default Order
