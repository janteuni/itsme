import React, { Component } from 'react'

import { connect } from 'react-redux'
import { updateOrder, saveOrder } from 'actions/order'

import Upload from 'components/Upload'

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

  handleUpload (filesNames) {
    console.log('Genial ', filesNames)
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
           <Upload onSuccess={::this.handleUpload} />
         <button>SAVE</button>
      </form>
    )
  }
}

export default FormOrder
