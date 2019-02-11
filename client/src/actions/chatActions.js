import axios from 'axios'
import store from '../store'
import io from 'socket.io-client'


axios.defaults.baseURL = '/api'

const socket = io.connect('http://localhost:3001')

export function addMessage(message) {
    const username = store.getState().chatReducer.username
    console.log(message)
    socket.emit('new message', {
        username: username,
        message: message.message
    })

}

export function assignUsername(username){
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