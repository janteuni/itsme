import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import Header from 'components/Header'
import Toasts from 'components/Toasts'

if (process.env.BROWSER) { require('styles/main.scss') }

class App extends Component {

  render () {
    return (
      <div>
        <Header />
        <Toasts />
        {this.props.children}
      </div>
    )
  }

}

export default App
