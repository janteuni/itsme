import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import newOrder from 'reducers/newOrder'
import orders from 'reducers/orders'
import messages from 'reducers/messages'
import auth from 'reducers/auth'

export default combineReducers({
  routing,
  newOrder,
  orders,
  messages,
  auth
})
