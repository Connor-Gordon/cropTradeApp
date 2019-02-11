const initialState = {
    messages: [], 
    username: '',
    password: ''
  }
  
  export default function (state = initialState, action) {
    switch (action.type) {
      // add actions here
      case 'ADD_MESSAGE':
        return {...state, messages: [...state.messages, action.payload]}
      case 'SIGN_IN':
        return {...state, username: action.payload}
      case "REGISTER":
        return {...state, username: action.payload, password: action.payload}
      default:
        return state
    }
  }