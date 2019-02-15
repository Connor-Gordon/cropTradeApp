const initialState = {
    messages: [],
    token: {},
    profile: {},
    myPosts: []
  }
  
  export default function (state = initialState, action) {
    switch (action.type) {
      // add actions here
      case 'ADD_MESSAGE':
        return {...state, messages: [...state.messages, action.payload]}
      case 'SIGN_IN':
        return {...state, username: action.payload}
      case 'GET_TOKEN':
        return {...state, token: action.payload}
      case "REGISTER":
        return {...state, profile: action.payload}
      case "GET_PROFILE":
        return {...state, profile: action.payload}
      case "GET_MY_POSTS":
        return {...state, myPosts: action.payload}
      default:
        return state
    }
  }