import { handleActions } from 'redux-actions'

const initialState = {

  istmes: [],
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
  }

}, initialState)
