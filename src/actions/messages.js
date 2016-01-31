import { createAction } from 'redux-actions'
import shortid from 'shortid'

export const messagePushed = createAction('MESSAGE_PUSHED')
export const messageDeleted = createAction('MESSAGE_DELETED')

export const pushMessage = (message) => dispatch => {
  const id = shortid.generate()
  dispatch(messagePushed({ ...message, id }))
  setTimeout(() => {
    dispatch(messageDeleted(id))
  }, 2e3)
}
