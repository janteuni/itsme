import { handleActions } from 'redux-actions'
import shortid from 'shortid'
import _ from 'lodash'

const initialState = {

  itsmes: [{ id: shortid.generate(), images: [], sheets: 2 }],
  groupSheet: false,

  firstname: 'toto',
  lastname: '',
  email: '',
  adress: '',
  country: '',
  comment: ''

}

export default handleActions({

  UPDATE_ORDER: (state, { payload: order }) => {
    return {
      ...state,
      ...order
    }
  },

  ADD_IMAGES: (state, { payload }) => {
    const original = _.find(state.itsmes, el => el.id === payload.id)
    const newItsme = {
      ...original,
      images: original.images.concat(payload.images)
    }
    const index = state.itsmes.indexOf(original)
    const out = {
      ...state,
      itsmes: [
        ...state.itsmes.slice(0, index),
        newItsme,
        ...state.itsmes.slice(index + 1)
      ]
    }
    return out
  }

}, initialState)
