import React, { Component } from 'react'
import { connect } from 'react-redux'
import { prefetch } from 'react-fetcher'

import { setCurrentOrder, fetchOrder } from 'actions/admin'

@prefetch(
  ({ params, dispatch }) => {
    return dispatch(fetchOrder(params.id))
      .then(() => dispatch(setCurrentOrder(params.id)))
  }
)
@connect(
 state => ({
   order: state.orders.orders[state.orders.current]
 })
)
class Order extends Component {

  render () {
    const { order } = this.props
    return (
      <div>
        {order.firstname} / {order.lastname}
      </div>
    )
  }

}

export default Order
