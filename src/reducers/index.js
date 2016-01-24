import { combineReducers } from 'redux'
import { routerStateReducer as router } from 'redux-router'

import { newOrder } from 'reducers/newOrder'

export default combineReducers({
  router,
  newOrder
})
