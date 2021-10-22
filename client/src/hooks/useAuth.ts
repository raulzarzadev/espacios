import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@redux/store'
import { signin, signout } from '@redux/user/UserSlice'
import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

export default function useAuth() {
  const dispatch = useDispatch()
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage('isLoggedIn', undefined)
  const userStatus = useSelector((state: RootState) => state.user)
  const handleLogin = () => {
    setIsLoggedIn(true)
  }
  const handleLogout = () => {
    setIsLoggedIn(false)
    dispatch(signout())
  }

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(signin())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn])

  return { handleLogin, handleLogout, user: userStatus }
}
