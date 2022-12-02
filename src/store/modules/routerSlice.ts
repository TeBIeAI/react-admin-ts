// store/counterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
export interface CounterState {
  isLogin: boolean
  value: number
  featchVal: number
}

const initialState: CounterState = {
  isLogin: false,
  value: 0,
  featchVal: 0
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
