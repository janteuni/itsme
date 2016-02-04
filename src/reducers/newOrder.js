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

  ADD_ITSME: state => {
    const newItsme = { id: shortid.generate(), images: [], sheets: 2 }
    return {
      ...state,
      itsmes: [
        ...state.itsmes,
        newItsme
      ]
    }
  },

  DELETE_ITSME: (state, { payload: id }) => {
    return {
      ...state,
      itsmes: state.itsmes.filter(itsme => itsme.id !== id)
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
  },

  IMAGE_DELETED: (state, { payload }) => {
    const { itsmeId, imageId } = payload
    const original = _.find(state.itsmes, el => el.id === itsmeId)
    const newItsme = {
      ...original,
      images: original.images.filter(id => id !== imageId)
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
