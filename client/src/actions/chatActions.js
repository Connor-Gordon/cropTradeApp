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

// gets post for profile
export function getMyPosts(username) {
    return axios.get('/profile/' + username).then( resp => {
        store.dispatch({
            type: "GET_MY_POSTS",
            payload: resp.data
        })
    })
}

// adds message to database

export function addMessage(message, post_id, user_id) {
    return axios.post('/chatroom/' + post_id + '/' + user_id, message)
}


// registers username and pw to database
export function assignUsername(profile) {
    console.log("assign Username", profile)
    return axios.post('/register', profile)
  }


  // gets token for login
  export function getToken(){
      return axios.get('/login').then( resp => {

          store.dispatch({
              type: 'GET_TOKEN',
              payload: resp.data
          })
      })
  }
