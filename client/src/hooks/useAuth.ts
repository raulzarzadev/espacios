import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@redux/store'
import { signin, signout, signup } from '@redux/user/UserSlice'

export default function useAuth() {
  const dispatch = useDispatch()

  const userStatus = useSelector((state: RootState) => state.user)
  console.log(`userStatus`, userStatus)

  const signupWithEmail = (form: any) => {
    dispatch(signup(form))
  }
  const handleLogin = (form: any) => {
    dispatch(signin(form))
  }
  const handleLogout = () => {
    dispatch(signout())
  }

  return { handleLogin, handleLogout, signupWithEmail, user: userStatus }
}
