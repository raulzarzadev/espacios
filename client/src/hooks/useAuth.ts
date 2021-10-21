import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@redux/store'
import { signin, signout } from '@redux/user/UserSlice'
import { useEffect } from 'react'

export default function useAuth() {
  const dispatch = useDispatch()
  const userStatus = useSelector((state: RootState) => state.user)
  const handleLogin = () => {
    dispatch(signin())
  }
  const handleLogout = () => {
    dispatch(signout())
  }

  useEffect(() => {
    console.log(userStatus)
  }, [userStatus])
  return { handleLogin, handleLogout, user: userStatus }
}
/* 
{userStatus.isLoggedIn ? (
          <Button onClick={handleLogout} label="Salir" />
        ) : (
          <Button onClick={handleLogin} label="Entrar" />
        )} */
