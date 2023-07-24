// ========== Store
// import all packages
import { configureStore } from '@reduxjs/toolkit'
import { persistStore, FLUSH, PERSIST, PURGE, REGISTER, PAUSE, REHYDRATE } from 'redux-persist'
import rootReducer from './features'

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [REGISTER, PURGE, PERSIST, FLUSH, PAUSE, REHYDRATE]
      }
    })
  }
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
