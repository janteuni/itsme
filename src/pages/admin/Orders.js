import React, { Component } from 'react'
import { connect } from 'react-redux'
import { prefetch } from 'react-fetcher'
import { Link } from 'react-router'

import { loadList, setCurrentOrder } from 'actions/admin'

@prefetch(({ dispatch }) => dispatch(loadList()))
@connect(
  state => ({
    orders: state.orders.list.map(id => state.orders.orders[id])
  })
)
class Orders extends Component {

  handleOrderClick (id) {
    this.props.dispatch(setCurrentOrder(id))
  }

  render () {
    const { orders } = this.props
    return (
      <div>
        {orders.map(order => (
          <div key={order._id}>
            {order.firstname} - {order.lastname}
            <Link
              to={`/admin/order/${order._id}`}
              onClick={this.handleOrderClick.bind(this, order._id)} >
              view more
            </Link>
          </div>
        ))}
      </div>
    )
  }

}

export default Orders
