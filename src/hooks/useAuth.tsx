import { useAppDispatch } from '@/store/hooks'
import { init, setUserInfo } from '@/store/modules/userSlice'

let isLogin = false

export function useAuth() {
  const dispatch = useAppDispatch()

  const signIn = () => {
    isLogin = true

    const userInfo = {
      userId: 123,
      name: 'awefeng'
    }

    dispatch(setUserInfo(userInfo))
  }

  const signOut = () => {
    isLogin = false
    dispatch(init())
  }

  return {
    signIn,
    signOut,
    isLogin
  }
}
