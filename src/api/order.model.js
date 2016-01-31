import mongoose from 'mongoose'

const Order = mongoose.model('Order', {
  istmes: Array,
  groupSheet: Boolean,
  firstname: String,
  lastname: String,
  email: String,
  adress: String,
  country: String,
  comment: String
});

export default Order
