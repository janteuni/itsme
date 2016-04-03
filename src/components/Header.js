import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

@connect(
  state => ({
    isLogged: !!state.auth.user
  })
)
class Header extends Component {

  render () {
    const { isLogged } = this.props
    return (
      <header>
        {isLogged && <Link to={'/admin/orders'}>Admin</Link>}
        {!isLogged && <Link to={'/login'}>Login</Link>}
        <Link to={'/create'}>Create</Link>
        <Link to={'/'}>Home</Link>
      </header>
    )
  }

}

export default Header
