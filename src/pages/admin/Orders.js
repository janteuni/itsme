import React, { Component } from 'react'
import { connect } from 'react-redux'
import { prefetch } from 'react-fetcher'

import { loadList } from 'actions/admin'

@prefetch(({ dispatch }) => dispatch(loadList()))
@connect(
  state => ({
    orders: state.orders.list.map(id => state.orders.orders[id])
  })
)
class Orders extends Component {

  render () {
    const { orders } = this.props
    console.log(orders)
    return (
      <div>
        {orders.map(order => (
          <div key={order._id}>
            {order.firstname} - {order.lastname}
          </div>
        ))}
      </div>
    )
  }

}

export default Orders
