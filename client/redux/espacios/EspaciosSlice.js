import { createEspacio, getAdminEspacios } from '@fb/espacios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

export const getEspacios = (adminId) => (dispatch) => {
  getAdminEspacios(adminId, (res) => dispatch(setEspaciosList(res)))
}

const initialState = { list: [] }

export const espaciosSlice = createSlice({
  name: 'espacios',
  initialState,
  reducers: {
    newEspacio: (newEspacio) => {
      createEspacio(newEspacio)
        .then((res) => console.log(`res`, res))
        .catch((err) => console.log(`err`, err))
    },
    setEspaciosList: (state, { payload }) => {
      state.list = payload
    }
  }
})
export const { login, setEspaciosList } = espaciosSlice.actions

export default espaciosSlice.reducer

// export const userReducer = userSlice.reducer
