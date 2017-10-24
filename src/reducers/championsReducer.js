const initialState = {
  champions: [],
  error: false,
  isLoading: false
}


export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_CHAMPIONS_BEGIN":
      return { 
        ...state,
        isLoading: true
      }
    case "GET_CHAMPIONS_SUCCESS":
      return {
        ...state,
        champions: {...action.champs},
        isLoading: false
      }
    case "GET_CHAMPIONS_ERROR":
      return {
        ...state,
        error: action.err.message,
        isLoading: false
      }
    default:
      return state
  }

}