import React, { Component } from 'react'

import { connect } from 'react-redux'
import { updateOrder } from 'actions'

@connect(
  state => ({
    newOrder: state.newOrder
  })
)
class FormOrder extends Component {

  handleUpdate (e) {
    e.preventDefault()

    const data = {
      firstname: this.refs.firstname.value
    }

    this.props.dispatch(updateOrder(data))
  }

  render () {
    const { newOrder } = this.props
    return (
      <form>
        <h2>Form here</h2>
         <input type='text' defaultValue={newOrder.firstname} ref='firstname' onBlur={::this.handleUpdate}/>
         <p>{newOrder.firstname}</p>
      </form>
    )
  }
}

export default FormOrder
