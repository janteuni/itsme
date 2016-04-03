import React, { Component } from 'react'
import { connect } from 'react-redux'

import { userLogin } from 'actions/admin'

@connect()
class Login extends Component {

  handleLogin = () => {
    this.props.dispatch(userLogin())
  }

  render () {
    return (
      <div>
        <button onClick={this.handleLogin}>Login here</button>
      </div>
    )
  }

}

export default Login
