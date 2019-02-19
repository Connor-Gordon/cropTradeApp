import axios from 'axios'
import store from '../store'

axios.defaults.baseURL = '/api'

export function addImages(images) {
    return axios.post('/comingsoon', images)
}