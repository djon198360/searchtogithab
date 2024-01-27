/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  count: null,
  filters: [],
  filterPerPage: "30",
  filterRepositore: "desc",
  filterActivity: "followers",
};

const tempData = createSlice({
  name: "tempData",
  initialState,
  reducers: {
    setTempDataUsers(state, action) {
      state.users = action.payload.data;
      state.count = action.payload.count;
    },
    setActivityFilter(state, action) {
      state.filterActivity = action.payload;
    },
    setPerPageFilter(state, action) {
      state.filterPerPage = action.payload;
    },
    setRepositoreFilter(state, action) {
      state.filterRepositore = action.payload;
    },
  },
});

export const {
  setTempDataUsers,
  setActivityFilter,
  setPerPageFilter,
  setRepositoreFilter,
} = tempData.actions;
export default tempData.reducer;
