import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  isLoggedIn: boolean
}
const initialState: UserState = {
  isLoggedIn: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signin: (state) => {
      state.isLoggedIn = true
    },
    signout: (state) => {
      state.isLoggedIn = false
    }
  }
})

export const { signin, signout } = userSlice.actions

export default userSlice.reducer
