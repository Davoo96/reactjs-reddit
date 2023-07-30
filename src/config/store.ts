import { configureStore } from "@reduxjs/toolkit";
import { reactJsApi } from "./reactJsApi";

import numberPostsReducer from "../modules/numberPosts/slice";

const store = configureStore({
  reducer: {
    numberPosts: numberPostsReducer,
    [reactJsApi.reducerPath]: reactJsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(reactJsApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
