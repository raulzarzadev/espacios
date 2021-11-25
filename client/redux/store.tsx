import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/ConuterSilce'
import EspaciosSlice from './espacios/EspaciosSlice'
import userSlice  from './user/UserSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userSlice,
    espacios: EspaciosSlice
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
