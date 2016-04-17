import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import Logo from 'components/Logo'

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
        <nav>
          <div className='flex-auto'>
            <Logo width={80} />
          </div>
          {isLogged && <Link to={'/admin/orders'}>Admin</Link>}
          {!isLogged && <Link to={'/login'}>Login</Link>}
          <Link activeClassName='active' to={'/create'}>Create</Link>
          <Link activeClassName='active' to={'/'}>Home</Link>
        </nav>
      </header>
    )
  }

}

export default Header
