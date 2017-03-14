import {combineReducers} from 'redux'

import quotes from './quotes'
import moreQuotes from './moreQuotes'

const rootReducer = combineReducers({
  quotes,
  moreQuotes
})

export default rootReducer
