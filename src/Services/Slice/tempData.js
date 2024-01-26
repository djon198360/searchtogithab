/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  filters: [],
  filterPerPage: 30,
  filterGenre: [],
  filterActivity: "По кол-ву подписчиков",
};

const tempData = createSlice({
  name: "tempData",
  initialState,
  reducers: {
    setTempDataUsers(state, action) {
      state.users = action.payload;
    },
    setActivityFilter(state, action) {
      state.filterActivity = action.payload;
    },
    setPerPage(state, action) {
      state.filterPerPage = action.payload;
    },
  },
});

export const { setTempDataUsers, setActivityFilter, setPerPage } =
  tempData.actions;
export default tempData.reducer;
