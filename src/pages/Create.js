import React, { Component } from 'react'

import FormOrder from 'components/FormOrder'
import FormIllustrations from 'components/FormIllustrations'

class Create extends Component {

  render () {
    return (
      <div className='flex'>
        <div className='illustration--container'>
         <div className='header'></div>
         <FormIllustrations />
        </div>
         <div className='flex-auto'>
          <div className='form-header'></div>
          <div className='p2'>
            <FormOrder />
          </div>
        </div>
      </div>
    )
  }

}

export default Create
