import { combineReducers } from 'redux'

import movieReducer from './movie/slice.js'

const rootReducer = combineReducers({ movieReducer })

export default rootReducer