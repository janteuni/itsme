import { createAction } from 'redux-actions'
import r from 'superagent'
import Cookies from 'js-cookie'

import config from 'config'

export const userLogged = createAction('USER_LOGGED')

export const userLogin = () => dispatch => new Promise((resolve, reject) => {

  r.post(`${config.apiFull}/login`)
    .send({ username: 'jasmine', password: 'jasmine' })
    .end((err, res) => {
      if (err) { return reject(err) }
      dispatch(userLogged(res.body))
      Cookies.set('itsme-token', res.body.token, { expires: 365 })
      resolve()
    })

})

const listLoaded = createAction('LIST_LOADED', list => list)

export const loadList = () => ({
  type: 'admin:loadlist',
  url: '/orders',
  cb: (list, dispatch) => dispatch(listLoaded(list))
})

export const fetchOrder = (id) => ({
  type: 'admin:fetchorder',
  url: `/orders/${id}`,
  cb: (order, dispatch) => { dispatch(listLoaded([order])) }
})

export const setCurrentOrder = createAction('SET_CURRENT_ORDER')

const statusUpdated = createAction('STATUS_UPDATED')

export const updateStatus = (payload) => ({
  type: 'admin:updateStatus',
  method: 'put',
  url: `/orders/${payload.id}`,
  send: { status: payload.status },
  cb: (body, dispatch) => { dispatch(statusUpdated(payload)) }
})

export const addResults = createAction('ADD_RESULTS')
export const deleteResult = createAction('DELETE_RESULT')
export const saveCurrent = () => (dispatch, getState) => {
  const state = getState()
  r.put(`${config.apiFull}/orders/${state.orders.current}`)
    .send(state.orders.orders[state.orders.current])
    .end()
}
