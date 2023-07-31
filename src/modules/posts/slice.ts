import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./constants";

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    incrementPost: state => {
      state.displayedPosts += 5;
    },
    clearPosts: state => {
      state.displayedPosts = 10;
    },
  },
});

export const { incrementPost, clearPosts } = postsSlice.actions;

export default postsSlice.reducer;
