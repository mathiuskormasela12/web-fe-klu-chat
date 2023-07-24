// ========== Root Reducer
// import all packages
import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from '../storage'

// import all reducers
import chatReducer from './chatReducer'

const rootPersistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: []
}

const rootReducer = combineReducers({
  chatReducer
})

export default persistReducer(rootPersistConfig, rootReducer)
