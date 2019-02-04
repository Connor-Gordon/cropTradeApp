const initialState = {
  categories: [],
  posts:[],
  post:{},
  scat:[],
  form:{}
}

export default function (state = initialState, action) {
  switch (action.type) {
    // add actions here
    case 'GET_CATEGORIES':
      return {...state, categories: action.payload}
    case 'GET_POSTS':
      return {...state, posts: action.payload}
    case 'GET_POST':
      return {...state, post: action.payload}
    case 'GET_SINGLECAT':
      return {...state, scat: action.payload}   
    default:
      return state
  }
}

