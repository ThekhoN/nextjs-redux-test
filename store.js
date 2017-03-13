import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'

const quotes = (state = [], action) => {
  switch (action.type) {
    case 'GET_QUOTES_FROM_DB':
      return action.quotes
    default:
      return state;
  }
}

const logger = store => next => action => {
  if(window.console){
    console.group('logger')
    console.log('currentState: ', store.getState())
    console.log('dispatchedAction: ', action)
    next(action)
    console.log('updatedState: ', store.getState())
    console.groupEnd('logger')
  }
}

const rootReducer = combineReducers({
  quotes
})

export const initStore = (initialState) => {
  return createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware, logger))
}
