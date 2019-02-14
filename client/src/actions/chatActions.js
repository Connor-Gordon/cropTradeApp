import axios from 'axios'
import store from '../store'
import io from 'socket.io-client'


axios.defaults.baseURL = '/api'

const socket = io.connect('http://localhost:3001')


// pull post data and user data to make

export function getProfile(username) {
    return axios.get('/profile/' + username).then( resp => {
        store.dispatch({
            type: "GET_PROFILE",
            payload: resp.data[0]
        })
    })
}

export function addMessage(message) {
    const username = store.getState().chatReducer.username
    socket.emit('new message', {
        username: username,
        message: message.message
    })
}

// registers username and pw to database
export function assignUsername(username, password) {
    console.log("assign Username", username, password)
    return axios.post('/register', {
        username: username,
        password: password})
  }

  export function getToken(){
      return axios.get('/login').then( resp => {

          store.dispatch({
              type: 'GET_TOKEN',
              payload: resp.data
          })
      })
  }

  export function signInTest(username){
    var promise = new Promise ((resolve, reject) => {
        store.dispatch({
            type: 'SIGN_IN',
            payload: username
        })

        resolve()
    })
    return promise
}


socket.on('new message', (message) => {
    store.dispatch({
        type:'ADD_MESSAGE',
        payload: message
    })
})
