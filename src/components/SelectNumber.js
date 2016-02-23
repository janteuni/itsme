import React, { Component } from 'react'

import ArrowUp from 'components/ArrowUp'
import ArrowDown from 'components/ArrowDown'

class SelectNumber extends Component {

  handlePlus () {
    this.props.plus()
  }

  handleMinus () {
    this.props.minus()
  }

  render () {
    const { number } = this.props
    return (
      <div className='SelectNumber-container'>
        <div className='SelectNumber'>
          <p>
          {number} {this.props.children}
          </p>
          <div className='arrow-container'>
            <i onClick={::this.handlePlus} >
              <ArrowUp className='arrow'/>
            </i>
            <i onClick={::this.handleMinus} >
              <ArrowDown className='arrow'/>
            </i>
          </div>
        </div>
      </div>
    )
  }

}

export default SelectNumber
