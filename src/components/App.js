import React, { Component } from 'react'
import { Link } from 'react-router'

import Toasts from 'components/Toasts'

if (process.env.BROWSER) { require('styles/main.scss') }

class App extends Component {

  render () {
    return (
      <div>
        <Link to={'/create'}>Create</Link>
        <Link to={'/'}>Home</Link>
        <Toasts />
        {this.props.children}
      </div>
    )
  }

}

export default App
