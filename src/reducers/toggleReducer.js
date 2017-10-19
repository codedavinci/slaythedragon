
const initialState = {
  toggle: false 
}

export default (state = initialState, action) => {
  switch(action.type){
    case "TOGGLE_MENU":
      return { toggle: !state.toggle }
    default: 
        return state
  }
}