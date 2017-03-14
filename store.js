import {createStore, compose, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducer/rootReducer'

//logger
import createLogger from 'redux-logger';
const logger = createLogger();

const enhancers = compose(
  typeof window !== 'undefined' && process.env.NODE_ENV !== 'production' ? window.devToolsExtension && window.devToolsExtension() : f => f
)

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore)

export const initStore = (initialState) => createStoreWithMiddleware(rootReducer, initialState, enhancers)
