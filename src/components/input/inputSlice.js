import { createSlice } from '@reduxjs/toolkit'


const inputSlice = createSlice({
  name: "input",
  initialState: "",
  reducers: {
    changeInput: (state, action) => (
      action.payload
    ) // why am i returning this here and not in the other slice ? 
  }
});

export const {
  changeInput
} = inputSlice.actions

export const getInput = state => state.input

export default inputSlice.reducer