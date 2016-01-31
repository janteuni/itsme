import React, { Component } from 'react'
import { connect } from 'react-redux'

@connect(
  state => ({ messages: state.messages })
)
class Toasts extends Component {

  render () {
    const { messages } = this.props
    return (
      <div>
        {messages.map(el => (
          <div key={el.id}>
            {el.message}
          </div>
        ))}
      </div>
    )
  }

}

export default Toasts
