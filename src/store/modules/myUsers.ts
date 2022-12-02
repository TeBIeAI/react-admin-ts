import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [] as any[]
}

const myUser1Slice = createSlice({
  name: 'tebieai',
  initialState,
  reducers: {}
})

export default myUser1Slice.reducer
