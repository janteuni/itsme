import React, { Component } from 'react'
import cx from 'classnames'

class CheckBox extends Component {

  handleClick () {
    this.props.onChange(!this.props.value)
  }

  render () {
    const { value, label } = this.props
    return (
      <div className='CheckBox'>
        <button type='button' onClick={::this.handleClick} className={cx({ active: value })} ></button>
        <label>{label}</label>
      </div>
    )
  }

}

export default CheckBox
