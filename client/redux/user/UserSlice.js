import { signInWithEmail, singupWithEmail } from '@fb/client'
import { async } from '@firebase/util'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

/* const signup = createAsyncThunk('signup', async (args) => {
  console.log(`args`, args)
  try {
    let res = 'esperando'
    setTimeout(() => {
      res = 'llena'
      return res
    }, 1000)
  } catch (err) {
    console.log(`err`, err)
  }
}) */

export const signup = createAsyncThunk(
  'users/create',
  async ({ email, password }, thunkAPI) => {
    console.log(`email, password`, email, password)
    const response = await singupWithEmail({ email, password })
    return response
  }
)

export const signin = createAsyncThunk(
  'users/login',
  async ({ email, password }, thunkAPI) => {
    //console.log(`login => email, password`, email, password)
    const res = await signInWithEmail({ email, password })
    return res
  }
)


const initialState = {
  isLoggedIn: false,
  loading: false,
  user: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      if (action.payload) {
        state.user = action.payload
        state.isLoggedIn = true
        state.loading = false
      } else {
        state.user = null
        state.isLoggedIn = false
        state.loading = false
      }
    }
  },
  extraReducers: (builder) => {
    // ------------------------------------------------------ SIGIN
    builder.addCase(signin.pending, (state, action) => {
      state.isLoggedIn = false
      state.loading = true
      state.user = undefined
    })
    builder.addCase(signin.rejected, (state, action) => {
      state.isLoggedIn = false
      state.loading = false
      state.user = null
    })
    builder.addCase(signin.fulfilled, (state, { payload }) => {
      state.isLoggedIn = true
      state.loading = false
      state.user = payload
    })

    // ------------------------------------------------------ SIGNUP
    builder.addCase(signup.pending, (state, action) => {
      state.isLoggedIn = false
      state.loading = true
    })
    builder.addCase(signup.rejected, (state, action) => {
      state.isLoggedIn = false
      state.loading = false
    })
    builder.addCase(signup.fulfilled, (state, { payload }) => {
      state.isLoggedIn = true
      state.loading = false
      state.user = payload
    })
  }
})
export const { login } = userSlice.actions

export default userSlice.reducer

// export const userReducer = userSlice.reducer
