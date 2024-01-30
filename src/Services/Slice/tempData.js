/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  queryString: "",
  users: [],
  totalCount: null,
  filters: [],
  filterPerPage: "10",
  filterRepositore: "desc",
  filterActivity: "followers",
  totalPages: 0,
  currentPage: 1,
  loading: false,
  error: false,
  errorMessage: "",
};

const tempData = createSlice({
  name: "tempData",
  initialState,
  reducers: {
    setIsLoading(state, action) {
      state.loading = action.payload;
    },
    setErrorMessage(state, action) {
      state.errorMessage = action.payload;
      state.error = true;
    },
    clearErrorMessage(state, action) {
      state.errorMessage = "";
      state.error = action.payload;
    },
    setTempDataUsers(state, action) {
      state.users = action.payload.data;
      state.totalCount = action.payload.count;
      state.totalPages = action.payload.totalPages;
      /*  state.currentPage = action.payload.page; */
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
    setQueryString(state, action) {
      state.queryString = action.payload;
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
  setQueryString,
  setIsLoading,
  setErrorMessage,
  clearErrorMessage,
} = tempData.actions;
export default tempData.reducer;
