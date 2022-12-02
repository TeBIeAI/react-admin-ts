import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { incrementByAmount } from './routerSlice'

export interface MyTestState {
  list: any[]
}

const initialState: MyTestState = {
  list: []
}

const getList = async () => {
  const res = await axios.get('api/test')
  return res.data.data
}

export const getListData = createAsyncThunk('myTest1/getList', async aaa => {
  const res = await getList()
  return res.data
})

const testSlice = createSlice({
  name: 'myTest1',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(incrementByAmount, (state, action: PayloadAction<number>) => {
        state.list = action.payload as unknown as any[]
      })
      .addCase(getListData.pending, state => {})
      .addCase(getListData.fulfilled, (state, action: PayloadAction<any[]>) => {
        state.list = action.payload
      })
  }
})

export default testSlice.reducer
