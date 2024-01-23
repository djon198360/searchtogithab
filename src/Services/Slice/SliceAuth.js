/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isState: false,
};

const SliceAuth = createSlice({
  name: "SliceAuth",
  initialState,
  reducers: {
    setIsState(state, action) {
      state.isState = action.payload;
    },
  },
});

export const { setIsState } = SliceAuth.actions;
export default SliceAuth.reducer;
