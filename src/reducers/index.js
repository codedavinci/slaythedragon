import { combineReducers } from 'redux'
import championsReducer from './championsReducer'

export default combineReducers({
  champs: championsReducer
})