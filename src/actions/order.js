import { createAction } from 'redux-actions'
import r from 'superagent'

import config from 'config'
import { pushMessage } from 'actions/messages'

export const updateOrder = createAction('UPDATE_ORDER')

export const saveOrder = () => (dispatch, getState) => {
  const state = getState()
  const { newOrder } = state
  r.post(`${config.apiFull}/order`)
    .send(newOrder)
    .end(() => {
      dispatch(pushMessage({
        message: 'Cool!',
        type: 'success'
      }))
    })
}

export const addImages = createAction('ADD_IMAGES')
