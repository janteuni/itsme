import { createAction } from 'redux-actions'
import r from 'superagent'

import config from 'config'

const userLogged = createAction('USER_LOGGED')

export const userLogin = () => dispatch => new Promise((resolve, reject) => {
  dispatch(userLogged({ user: 'jasmine', token: '123' }))
  resolve()
})

const listLoaded = createAction('LIST_LOADED', list => list)

export const loadList = () => dispatch => new Promise((resolve, reject) => {
  r.get(`${config.apiFull}/orders`)
    .end((err, res) => {
      if (err) { return reject(err) }
      dispatch(listLoaded(res.body))
      resolve()
    })
})

export const fetchOrder = (id) => dispatch => new Promise((resolve, reject) => {
  r.get(`${config.apiFull}/orders/${id}`)
    .end((err, res) => {
      if (err) { return reject(err) }
      dispatch(listLoaded([res.body]))
      resolve()
    })
})

export const setCurrentOrder = createAction('SET_CURRENT_ORDER')

const statusUpdated = createAction('STATUS_UPDATED')

export const updateStatus = payload => dispatch => new Promise((resolve, reject) => {
  r.put(`${config.apiFull}/orders/${payload.id}`)
    .send({ status: payload.status })
    .end(err => {
      if (err) { return reject(err) }
      dispatch(statusUpdated(payload))
      resolve()
    })
})

export const addResults = createAction('ADD_RESULTS')
export const deleteResult = createAction('DELETE_RESULT')
export const saveCurrent = () => (dispatch, getState) => {
  const state = getState()
  r.put(`${config.apiFull}/orders/${state.orders.current}`)
    .send(state.orders.orders[state.orders.current])
    .end()
}
