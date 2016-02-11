import { createAction } from 'redux-actions'
import r from 'superagent'
import _ from 'lodash'

import config from 'config'
import { pushMessage } from 'actions/messages'

const updatePrice = createAction('UPDATE_PRICE')

const priceModifier = actionName => {
  const action = createAction(actionName)
  return payload => dispatch => {
    dispatch(action(payload))
    dispatch(updatePrice())
  }
}

export const updateOrder = priceModifier('UPDATE_ORDER')
export const updateSheets = priceModifier('UPDATE_SHEETS')
export const addItsme = priceModifier('ADD_ITSME')
export const itsmeDeleted = priceModifier('ITSME_DELETED')

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
  r.post(`${config.apiFull}/orders`)
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
