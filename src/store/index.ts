// store/index.ts
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import counterSlice from './modules/routerSlice'
import testSlice from './modules/testAsync'
import userSlice from './modules/userSlice'
import logger from 'redux-logger'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

const rootReducers = combineReducers({
  counter: counterSlice,
  myTest: testSlice,
  user: userSlice
})

const persistConfig = {
  key: 'root',
  storage,
  // 不进行缓存的slice name
  // blacklist: ['myTest'],
  blacklist: []
}

// const myRersistReducer = persistReducer(persistConfig, rootReducers)

export const store = configureStore({
  reducer: rootReducers
  // middleware(getDefaultMiddleware) {
  //   return getDefaultMiddleware({
  //     serializableCheck: false
  //   }).concat(logger)
  // }
})

// 导出后就行进行本地存储
// export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
