import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiSearch } from "../Services/apiSearch";
import SliceAuth from "../Services/Slice/SliceAuth";

export const store = configureStore({
  reducer: {
    [apiSearch.reducerPath]: apiSearch.reducer,
    SliceAuth,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      apiSearch.middleware
    ),
});

setupListeners(store.dispatch);
