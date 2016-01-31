import { handleActions } from 'redux-actions'

const initialState = []

export default handleActions({

  MESSAGE_PUSHED: (state, { payload: message }) => {
    return [
      ...state,
      message
    ]
  },

  MESSAGE_DELETED: (state, { payload: messageId }) => {
    return state.filter(el => el.id !== messageId)
  }

}, initialState)
