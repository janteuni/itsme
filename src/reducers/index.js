import { combineReducers } from 'redux'
import { routeReducer as router } from 'react-router-redux'

import newOrder from 'reducers/newOrder'

export default combineReducers({
  router,
  newOrder
})
