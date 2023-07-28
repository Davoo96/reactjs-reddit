import { configureStore } from "@reduxjs/toolkit";
import { reactJsApi } from "./reactJsApi";

const store = configureStore({
  reducer: {
    [reactJsApi.reducerPath]: reactJsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(reactJsApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
