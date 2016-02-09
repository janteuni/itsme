import { createAction } from 'redux-actions'
import r from 'superagent'

import config from 'config'

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
  r.get(`${config.apiFull}/order/${id}`)
    .end((err, res) => {
      if (err) { return reject(err) }
      dispatch(listLoaded([res.body]))
      resolve()
    })
})

export const setCurrentOrder = createAction('SET_CURRENT_ORDER')
