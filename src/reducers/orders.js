import { handleActions } from 'redux-actions'
import _ from 'lodash'

const initialState = {
  orders: {},
  list: []
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
  }
}, initialState)
