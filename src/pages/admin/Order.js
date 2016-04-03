import React, { Component } from 'react'
import { connect } from 'react-redux'
import { provideHooks } from 'redial'

import { updateStatus, setCurrentOrder, fetchOrder } from 'actions/admin'
import ItsmeAdmin from 'components/ItsmeAdmin'

@provideHooks({
  fetch: ({ params, dispatch }) => {
    return dispatch(fetchOrder(params.id))
      .then(() => dispatch(setCurrentOrder(params.id)))
  }
})
@connect(
 state => ({
   order: state.orders.orders[state.orders.current]
 })
)
class Order extends Component {

  handleChange (e) {
    const { order } = this.props
    this.props.dispatch(updateStatus({
      id: order._id,
      status: e.target.value
    }))
  }

  render () {
    const { order } = this.props
    return (
      <div>
        {order.firstname} / {order.lastname} / {order.status}
        <select ref='select' value={order.status} onChange={::this.handleChange}>
          <option value='doing'>DOING</option>
          <option value='sent'>SENT</option>
          <option value='canceled'>CANCELED</option>
        </select>
        {order.itsmes.map(itsme => <ItsmeAdmin data={itsme} key={itsme.id} />)}
      </div>
    )
  }

}

export default Order
