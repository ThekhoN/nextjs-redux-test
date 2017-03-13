/*
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'


export const reducer = (state = { lastUpdate: 0, light: false }, action) => {
  switch (action.type) {
    case 'TICK': return { lastUpdate: action.ts, light: !!action.light }
    default: return state
  }
}

export const startClock = () => dispatch => {
  return setInterval(() => dispatch({ type: 'TICK', light: true, ts: Date.now() }), 800)
}

export const initStore = (initialState) => {
  return createStore(reducer, initialState, applyMiddleware(thunkMiddleware))
}
*/

const quotes = (state = [], action) => {
  switch (action.type) {
    case 'GET_QUOTES_FROM_DB':
      return [...action.quotes]
    default:
      return state;
  }
}

const counter = (state=0, action) => {
  switch(action.type){
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

import {createStore, combineReducers} from 'redux'

const rootReducer = combineReducers({
  quotes,
  counter
})

const store = createStore(rootReducer)

export default store
