import { USER_ROLE_ENUM } from '@/enums/user'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UserStateProps {
  userId: number
  name: string
  phone: string
  role: USER_ROLE_ENUM
}

const initState = (): UserStateProps => {
  return {
    userId: 0,
    name: '',
    phone: '',
    role: USER_ROLE_ENUM.GUEST
  }
}
const userSlice = createSlice({
  name: 'user',
  initialState: initState(),
  reducers: {
    init(state) {
      const initS = initState()

      Object.keys(initS).forEach(key => {
        state[key] = initS[key]
      })
    },
    setUserInfo(state, action: PayloadAction<Partial<UserStateProps>>) {
      const inputState = action.payload

      Object.keys(inputState).forEach(key => {
        state[key] = inputState[key]
      })
    }
  }
})

export const { init, setUserInfo } = userSlice.actions

export default userSlice.reducer
