import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import newOrder from 'reducers/newOrder'
import orders from 'reducers/orders'
import messages from 'reducers/messages'

export default combineReducers({
  routing,
  newOrder,
  orders,
  messages
})
