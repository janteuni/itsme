import React, { Component } from 'react'

class CheckBox extends Component {

  handleClick () {
    this.props.onChange(!this.props.value)
  }

  render () {
    const { value, label } = this.props
    return (
      <div>
        <label>{label}</label>
        <button type='button' onClick={::this.handleClick}>Change {value.toString()}</button>
      </div>
    )
  }

}

export default CheckBox
