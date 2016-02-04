import { createAction } from 'redux-actions'
import r from 'superagent'
import _ from 'lodash'

import config from 'config'
import { pushMessage } from 'actions/messages'

export const updateOrder = createAction('UPDATE_ORDER')
export const addItsme = createAction('ADD_ITSME')
export const itsmeDeleted = createAction('ITSME_DELETED')
export const deleteItsme = itsmeId => (dispatch, getState) => {
  const state = getState()
  const itsme = _.find(state.newOrder.itsmes, { id: itsmeId })
  r.delete(`${config.apiFull}/images`)
    .send(itsme.images)
    .end()
  dispatch(itsmeDeleted(itsmeId))
}

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
export const imageDeleted = createAction('IMAGE_DELETED')
export const deleteImage = payload => dispatch => {
  dispatch(imageDeleted(payload))
  r.delete(`${config.apiFull}/images`)
    .send([payload.imageId])
    .end()
}
