import { handleActions } from 'redux-actions'
import shortid from 'shortid'
import _ from 'lodash'

const initialState = {

  itsmes: [{ id: shortid.generate(), images: [], sheets: 2, results: [] }],
  groupSheet: false,

  firstname: 'toto',
  lastname: '',
  email: '',
  address: '',
  country: '',
  comment: '',

  price: 16

}

export default handleActions({

  UPDATE_PRICE: state => {
    const sheetPrice = 1.75
    const itsmePrice = 11
    const groupPrice = 3

    const nbSheets = state.itsmes.reduce((acc, itsme) => {
      return acc + itsme.sheets
    }, 0)
    const allSheetsPrice = nbSheets * sheetPrice
    const allItsmePrice = state.itsmes.length * itsmePrice

    const price = 1.5
      + allSheetsPrice
      + allItsmePrice
      + (state.groupSheet ? groupPrice : 0)

    return {
      ...state,
      price
    }
  },

  UPDATE_ORDER: (state, { payload: order }) => {
    return {
      ...state,
      ...order
    }
  },

  ADD_ITSME: state => {
    const newItsme = { id: shortid.generate(), images: [], sheets: 2, results: [] }
    return {
      ...state,
      itsmes: [
        ...state.itsmes,
        newItsme
      ]
    }
  },

  ITSME_DELETED: (state, { payload: id }) => {
    return {
      ...state,
      itsmes: state.itsmes.filter(itsme => itsme.id !== id)
    }
  },

  UPDATE_SHEETS: (state, { payload }) => {
    const original = _.find(state.itsmes, el => el.id === payload.id)
    const newItsme = {
      ...original,
      sheets: payload.sheets
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
