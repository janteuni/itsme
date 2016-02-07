import { combineReducers } from 'redux'
import { routeReducer as router } from 'react-router-redux'

import newOrder from 'reducers/newOrder'
import orders from 'reducers/orders'
import messages from 'reducers/messages'

export default combineReducers({
  router,
  newOrder,
  orders,
  messages
})
