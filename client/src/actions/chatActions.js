import axios from 'axios'
import store from '../store'
import { api} from '../lib/auth'

axios.defaults.baseURL = '/api'

// notifcation of new message

export function getNewMessages() {
    const username = api.getProfile().username
    return axios.get('/new_messages/' + username).then(resp => {
        store.dispatch({
            type: "GET_NEW_MESSAGES",
            payload: resp.data
        })
    })
}

// gets username 

export function getProfile(username) {
    return axios.get('/profile/' + username).then( resp => {
        store.dispatch({
            type: "GET_PROFILE",
            payload: resp.data[0]
        })
    })
}


// gets posts for logged in profile


export function getMyPosts(username) {
    return axios.get('/profile/' + username).then( resp => {
        store.dispatch({
            type: "GET_MY_POSTS",
            payload: resp.data
        })
    })
}

///////// messages ///////////////////

// dispatch messages to front end

export function getMessages(receiver_id, user_id){
    return axios.get('/chatroom/' + receiver_id + '/' + user_id).then( resp => {
        store.dispatch({
            type: "GET_MESSAGES",
            payload: resp.data
        })
    })
}

// adds message to database

export function addMessage(message, receiver_id, user_id) {
    console.log(message)
    return axios.post('/chatroom/' + receiver_id + '/' + user_id, message)
}


/////////////////// profile stuff ////////////////

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