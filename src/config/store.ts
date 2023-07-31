import {
  PreloadedState,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { reactJsApi } from "./reactJsApi";

import postsReducer from "../modules/posts/slice";

const rootReducer = combineReducers({
  posts: postsReducer,
  [reactJsApi.reducerPath]: reactJsApi.reducer,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(reactJsApi.middleware),
    preloadedState,
  });
}

export type AppDispatch = AppStore["dispatch"];
export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof rootReducer>;
