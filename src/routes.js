import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'components/App'
import Home from 'pages/Home'
import Create from 'pages/Create'
import Orders from 'pages/admin/Orders'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home}/>
    <Route path='create' component={Create}/>
    <Route path='admin/orders' component={Orders}/>
  </Route>
)
