import { createSlice } from "@reduxjs/toolkit";
const cardslice = createSlice({
  name: "cards",
  initialState: {
    DataSearch1: [],
  },
  reducers: {
    onSearch(state, action) {
      state.search = action.payload;
    },
  },
});

export const { onSearch, } = cardslice.actions;
export default cardslice.reducer;
