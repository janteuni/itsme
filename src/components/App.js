import React, { Component } from 'react'

import config from 'config'

if (process.env.BROWSER) { require('styles/main.scss') }

class App extends Component {

  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }

}

export default App
