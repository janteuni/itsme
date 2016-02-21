import React, { Component } from 'react'

import FormOrder from 'components/FormOrder'

class Create extends Component {

  render () {
    return (
      <div className='flex'>
        <div className='illustration--container'>
          <h1>Order your Itsme</h1>
        </div>
        <div className='flex-auto'>
          <FormOrder />
        </div>
      </div>
    )
  }

}

export default Create
