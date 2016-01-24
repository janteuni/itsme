import { handleActions } from 'redux-actions'

export default handleActions({

  UPDATE_ORDER: (state, { payload: order }) => {
    return {
      ...state,
      ...order
    }
  }

}, {

  istmes: [],
  groupSheet: false,

  firstname: 'toto',
  lastname: '',
  email: '',
  adress: '',
  country: '',
  comment: ''

})
