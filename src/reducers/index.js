import { combineReducers } from 'redux'
import toggleReducer from './toggleReducer'

export default combineReducers({
  toggleMenu: toggleReducer
})