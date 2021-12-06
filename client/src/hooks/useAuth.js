import { useDispatch, useSelector } from 'react-redux'
import { signup, signin, login } from '@redux/user/UserSlice'
// import { userStatus } from '@fb/client'
import { useEffect, useState } from 'react'
import { logout, userStatus } from '@fb/client'
export default function useAuth() {
  const dispatch = useDispatch()
  const userState = useSelector((state) => state.user)

  useEffect(() => {
    userStatus((user) => {
      dispatch(login(user))
    })
  }, [dispatch])

  const signupWithEmail = (form) => {
    dispatch(signup(form))
  }
  const handleLogin = (form) => {
    dispatch(signin(form))
  }
  const handleLogout = () => {
    logout()
  }

  return { handleLogin, handleLogout, signupWithEmail, ...userState }
}
