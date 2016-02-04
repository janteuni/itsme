import React, { Component } from 'react'

import { connect } from 'react-redux'
import { updateOrder, saveOrder, addItsme } from 'actions/order'

import Itsme from 'components/Itsme'

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

  handleAddItsme () {
    this.props.dispatch(addItsme())
  }

  render () {
    const { newOrder } = this.props
    return (
      <form onSubmit={(e) => { e.preventDefault(); this.props.dispatch(saveOrder()) }}>
        <h2>Form here</h2>
        <input type='text'
          defaultValue={newOrder.firstname}
          ref='firstname'
          onBlur={::this.handleUpdate}/>
        {newOrder.itsmes.map(itsme => (
          <Itsme
            key={itsme.id}
            data={itsme} />
        ))}
        <button onClick={::this.handleAddItsme}>ADD ITSME</button>
        <button>SAVE</button>
      </form>
    )
  }
}

export default FormOrder
