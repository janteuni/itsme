import { handleActions } from 'redux-actions'
import _ from 'lodash'

const initialState = {
  orders: {},
  list: [],
  current: null
}

export default handleActions({
  LIST_LOADED: (state, { payload: list }) => {
    const orders = {
      ...state.orders,
      ..._.keyBy(list, '_id')
    }
    return {
      ...state,
      orders,
      list: Object.keys(orders)
    }
  },

  SET_CURRENT_ORDER: (state, { payload: id }) => {
    return {
      ...state,
      current: id
    }
  },

  STATUS_UPDATED: (state, { payload }) => {
    const order = {
      ...state.orders[payload.id],
      status: payload.status
    }
    const orders = {
      ...state.orders,
      [payload.id]: order
    }
    return {
      ...state,
      orders
    }
  },

  ADD_RESULTS: (state, { payload }) => {
    const order = state.orders[state.current]
    const original = _.find(order.itsmes, el => el.id === payload.id)
    const newItsme = {
      ...original,
      results: original.results.concat(payload.images)
    }
    const index = order.itsmes.indexOf(original)
    const newOrder = {
      ...order,
      itsmes: [
        ...order.itsmes.slice(0, index),
        newItsme,
        ...order.itsmes.slice(index + 1)
      ]
    }
    const out = {
      ...state,
      orders: {
        ...state.orders,
        [state.current]: newOrder
      }
    }
    return out
  },

  DELETE_RESULT: (state, { payload }) => {
    const { itsmeId, imageId } = payload
    const order = state.orders[state.current]
    const original = _.find(order.itsmes, el => el.id === itsmeId)
    const newItsme = {
      ...original,
      results: original.results.filter(id => id !== imageId)
    }
    const index = order.itsmes.indexOf(original)
    const newOrder = {
      ...order,
      itsmes: [
        ...order.itsmes.slice(0, index),
        newItsme,
        ...order.itsmes.slice(index + 1)
      ]
    }
    const out = {
      ...state,
      orders: {
        ...state.orders,
        [state.current]: newOrder
      }
    }
    return out
  }

}, initialState)
