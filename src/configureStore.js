import  { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

export default (initialState) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const middleware = process.env.NODE_ENV !== 'production' ? [thunk, createLogger()] : [ thunk]

  const createStoreWithMiddleware = composeEnhancers(applyMiddleware(...middleware))(createStore)

  const store = createStoreWithMiddleware(rootReducer, initialState)

  return store
}