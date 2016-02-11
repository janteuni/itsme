import { handleActions } from 'redux-actions'
import _ from 'lodash'

const initialState = {
  orders: {},
  list: [],
  current: {}
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
  }
}, initialState)
