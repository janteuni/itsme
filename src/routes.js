import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'components/App'
import Home from 'pages/Home'
import Create from 'pages/Create'
import Usages from 'pages/Usages'
import Login from 'pages/admin/Login'
import Orders from 'pages/admin/Orders'
import Order from 'pages/admin/Order'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home}/>
    <Route path='create' component={Create}/>
    <Route path='how-to-use' component={Usages}/>
    <Route path='login' component={Login}/>
    <Route path='admin/orders' component={Orders}/>
    <Route path='admin/order/:id' component={Order}/>
  </Route>
)
