import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@redux/store'
import { signup, signin, login, signout } from '@redux/user/UserSlice'
// import { userStatus } from '@fb/client'
import { useEffect, useState } from 'react'
import { logout, userStatus } from '@fb/client'
export default function useAuth() {
  const dispatch = useDispatch()
  const userState = useSelector((state: RootState) => state.user)

  useEffect(() => {
    userStatus((user) => {
      dispatch(login(user))
    })
  }, [])

  const signupWithEmail = (form: any) => {
    dispatch(signup(form))
  }
  const handleLogin = (form: any) => {
    dispatch(signin(form))
  }
  const handleLogout = () => {
    logout()
  }

  return { handleLogin, handleLogout, signupWithEmail, user: userState }
}
