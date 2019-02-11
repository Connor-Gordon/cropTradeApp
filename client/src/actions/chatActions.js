import axios from 'axios'
import store from '../store'
import io from 'socket.io-client'


axios.defaults.baseURL = '/api'

const socket = io.connect('http://localhost:3001')

export function addMessage(message) {
    const username = store.getState().chatReducer.username
    socket.emit('new message', {
        username: username,
        message: message.message
    })

}

export function assignUsername(username, password) {
    return axios.post('/register', {
        username: username,
        password: password})
  }


socket.on('new message', (message) => {
    store.dispatch({
        type:'ADD_MESSAGE',
        payload: message
    })
})