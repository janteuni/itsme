import { createAction } from 'redux-actions'
import r from 'superagent'

import config from 'config'

export const updateOrder = createAction('UPDATE_ORDER')
export const orderSaved = createAction('ORDER_SAVED')

export const saveOrder = () => (dispatch, getState) => {
  const state = getState()
  const { newOrder } = state
  r.post(`${config.apiFull}/order`)
    .send(newOrder)
    .end((err, res) => {
      console.log(err, res)
      dispatch(orderSaved())
    })
}
