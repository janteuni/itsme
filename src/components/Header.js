import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { loadList } from 'actions/admin'

@connect()
class Header extends Component {

  handleAdminClick () {
    this.props.dispatch(loadList())
  }

  render () {
    return (
      <header>
        <Link to={'/admin/orders'} onClick={::this.handleAdminClick}>Admin</Link>
        <Link to={'/create'}>Create</Link>
        <Link to={'/'}>Home</Link>
      </header>
    )
  }

}

export default Header
