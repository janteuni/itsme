import r from 'superagent'
import { startsWith } from 'lodash'

import config from 'config'

export default store => next => action => {

  if (!startsWith(action.type, 'admin:')) {
    return next(action)
  }

  const {
    method = 'get',
    send,
    url,
    cb
  } = action

  const state = store.getState()
  const { token } = state.auth

  return new Promise((resolve, reject) => {
    const request = r[method](`${config.apiFull}${url}`)

    request.set('Authorization', `Bearer ${token}`)

    if (send) {
      request.send(send)
    }

    request.end((err, res) => {
      if (err) { return reject(err) }
      resolve()
      return cb(res.body, store.dispatch, store.getState)
    })

  })
}
