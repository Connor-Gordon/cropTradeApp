const initialState = {
    username: ""
  }
  
  export default function (state = initialState, action) {
    switch (action.type) {
      // add actions here
      case "SIGN_IN":
        return {...state, username: action.username}
      default:
        return state
    }
  }
  