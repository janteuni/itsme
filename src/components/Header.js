import React, { Component } from 'react'
import { Link } from 'react-router'

class Header extends Component {

  render () {
    return (
      <header>
        <Link to={'/admin/orders'}>Admin</Link>
        <Link to={'/create'}>Create</Link>
        <Link to={'/'}>Home</Link>
      </header>
    )
  }

}

export default Header
