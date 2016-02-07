import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import Toasts from 'components/Toasts'
import { loadList } from 'actions/admin'

if (process.env.BROWSER) { require('styles/main.scss') }

@connect()
class App extends Component {

  handleAdminClick () {
    this.props.dispatch(loadList())
  }

  render () {
    return (
      <div>
        <Link to={'/admin/orders'} onClick={::this.handleAdminClick}>Admin</Link>
        <Link to={'/create'}>Create</Link>
        <Link to={'/'}>Home</Link>
        <Toasts />
        {this.props.children}
      </div>
    )
  }

}

export default App
