import React, { Component } from 'react'

import { connect } from 'react-redux'
import { updateOrder, saveOrder, addItsme } from 'actions/order'

import Itsme from 'components/Itsme'
import CheckBox from 'components/CheckBox'

@connect(
  state => ({
    newOrder: state.newOrder
  })
)
class FormOrder extends Component {

  handleUpdate (e) {
    e.preventDefault()

    const data = {
      firstname: this.refs.firstname.value,
      lastname: this.refs.lastname.value,
      email: this.refs.email.value,
      address: this.refs.address.value,
      country: this.refs.country.value,
      comment: this.refs.comment.value
    }

    this.props.dispatch(updateOrder(data))
  }

  handleAddItsme () {
    this.props.dispatch(addItsme())
  }

  handleChangeProp (name, val) {
    const data = {
      [name]: val
    }
    this.props.dispatch(updateOrder(data))
  }

  render () {
    const { newOrder } = this.props
    return (
      <form className='form-container' onSubmit={(e) => { e.preventDefault(); this.props.dispatch(saveOrder()) }}>

        <div className='form-title'>
          <div className='dot-number'>1</div>
          <h1>Upload your photos</h1>
        </div>

        <div className='form-block'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce est orci, luctus eget dapibus in, mattis quis est.</p>
        </div>

        <div className='form-block'>
          <h2>Price: {newOrder.price}</h2>
          {newOrder.itsmes.map(itsme => (
            <Itsme
              key={itsme.id}
              data={itsme} />
          ))}
          <button className="btn btn-default" onClick={::this.handleAddItsme}>+  ADD PEOPLE</button>
        </div>

        <div className='form-block'>
          <CheckBox
            onChange={this.handleChangeProp.bind(this, 'groupSheet')}
            value={newOrder.groupSheet}
            label='I want a group sheet'/>
        </div>

        <div className='form-title'>
          <div className='dot-number'>2</div>
          <h1>Your informations</h1>
        </div>

        <div className='form-block'>
          <div className='flex'>
            <div className='form-block-input'>
              <label>Your firstname</label>
              <input type='text'
                defaultValue={newOrder.firstname}
                ref='firstname'
                onBlur={::this.handleUpdate}/>
            </div>
            <div className='form-block-input'>
              <label>Your lastname</label>
              <input type='text'
                defaultValue={newOrder.lastname}
                ref='lastname'
                onBlur={::this.handleUpdate}/>
            </div>
          </div>

          <div className='form-block-input'>
            <label>Your email</label>
            <input type='text'
              defaultValue={newOrder.email}
              ref='email'
              onBlur={::this.handleUpdate}/>
          </div>

          <div className='form-block-input'>
            <label>Your complete address</label>
            <textarea type='text'
              defaultValue={newOrder.address}
              ref='address'
              onBlur={::this.handleUpdate}/>
          </div>

          <div className='form-block-input'>
            <label>Your country</label>
            <input type='text'
              defaultValue={newOrder.country}
              ref='country'
              onBlur={::this.handleUpdate}/>
          </div>
        </div>

        <div className='form-title'>
          <div className='dot-number'>3</div>
          <h1>Payment</h1>
        </div>

        <div className='form-block'>
          <div className='form-block-input'>
            <label>A last comment</label>
            <textarea type='text'
              defaultValue={newOrder.comment}
              ref='comment'
              onBlur={::this.handleUpdate}/>
          </div>
          <button className='btn btn-default'>SAVE</button>
        </div>
      </form>
    )
  }
}

export default FormOrder
