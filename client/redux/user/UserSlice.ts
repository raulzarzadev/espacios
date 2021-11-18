import { signInWithEmail, singupWithEmail } from '@fb/client'
import { createSlice } from '@reduxjs/toolkit'

export interface UserState {
  isLoggedIn: any
}
const initialState: UserState = {
  isLoggedIn: undefined
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signup: (state, { payload }) => {
      singupWithEmail(payload)
        .then((res) => {
          state.isLoggedIn = true
        })
        .catch((err) => console.log(`err`, err))
    },
    signin: (state, { payload }) => {
      signInWithEmail(payload)
    },
    signout: (state) => {
      state.isLoggedIn = false
    }
  }
})

export const { signin, signout, signup } = userSlice.actions

export default userSlice.reducer
