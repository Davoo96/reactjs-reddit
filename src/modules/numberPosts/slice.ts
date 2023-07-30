import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./constants";

const numberPostsSlice = createSlice({
  name: "numberPosts",
  initialState,
  reducers: {
    increment: state => {
      state.displayedPosts += 5;
    },
    clearPosts: state => {
      state.displayedPosts = 10;
    },
  },
});

export const { increment, clearPosts } = numberPostsSlice.actions;

export default numberPostsSlice.reducer;
