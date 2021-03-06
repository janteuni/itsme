import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'

import reducer from 'reducers'
import adminMiddleware from 'middlewares/admin'

export default history => {

  const initialState = (process.env.BROWSER)
    ? window.__INITIAL_STATE__
    : {}

  const routing = routerMiddleware(history)
  const isProduction = process.env.NODE_ENV === 'production'

  const devTools = (process.env.BROWSER && window.devToolsExtension && !isProduction)
    ? window.devToolsExtension()
    : f => f

  const enhancers = compose(
    applyMiddleware(thunk, routing, adminMiddleware),
    devTools
  )

  const store = createStore(reducer, initialState, enhancers)

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store

}
