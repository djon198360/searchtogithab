/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  totalCount: null,
  filters: [],
  filterPerPage: "10",
  filterRepositore: "desc",
  filterActivity: "followers",
  totalPages: 0,
  currentPage: 1,
};

const tempData = createSlice({
  name: "tempData",
  initialState,
  reducers: {
    setTempDataUsers(state, action) {
      state.users = action.payload.data;
      state.totalCount = action.payload.count;
      state.totalPages = action.payload.totalPages;
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
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setTotalPages(state, action) {
      state.totalPages = action.payload;
    },
  },
});

export const {
  setTempDataUsers,
  setActivityFilter,
  setPerPageFilter,
  setRepositoreFilter,
  setCurrentPage,
  setTotalPages,
} = tempData.actions;
export default tempData.reducer;
