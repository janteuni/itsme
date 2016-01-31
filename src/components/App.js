import React, { Component } from 'react'

import Toasts from 'components/Toasts'
import config from 'config'

if (process.env.BROWSER) { require('styles/main.scss') }

class App extends Component {

  render () {
    return (
      <div>
        <Toasts />
        {this.props.children}
      </div>
    )
  }

}

export default App
