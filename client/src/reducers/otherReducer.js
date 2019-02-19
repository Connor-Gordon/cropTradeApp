const initialState = {
    images: []
  }
  
  export default function (state = initialState, action) {
    switch (action.type) {
      // add actions here
      case 'ADD_IMAGES':
        return {...state, images: action.payload}
      default:
        return state
    }
  }