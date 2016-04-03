import { handleActions } from 'redux-actions'

const initialState = {
  user: null,
  token: null
}

export default handleActions({

  USER_LOGGED: (state, { payload }) => {
    return {
      ...state,
      ...payload
    }
  }

}, initialState)
