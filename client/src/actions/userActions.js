import axios from 'axios'
import store from '../store'

axios.defaults.baseURL = '/api'

export function assignUsername(username) {
    var promise = new Promise((resolve, reject) => {
      store.dispatch({
        type: "SIGN_IN",
        username: username
      })
      resolve()
    })
    return promise
  }