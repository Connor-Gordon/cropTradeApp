const initialState = {
    messages: [],
    token: {},
    profile: {},
    myPosts: []
  }
  
  export default function (state = initialState, action) {
    switch (action.type) {
      // add actions here
      case 'GET_NEW_MESSAGES':
        return {...state, messages: action.payload}
      case 'GET_MESSAGES':
        return {...state, messages: action.payload}
      case 'GET_TOKEN':
        return {...state, token: action.payload}
      case "GET_PROFILE":
        return {...state, profile: action.payload}
      case "GET_MY_POSTS":
        return {...state, myPosts: action.payload}
      default:
        return state
    }
  }