import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

export const blogSlice = createSlice({
  name: "blogSlice",
  initialState: {
    posts: [],
    users: [],
    images: [],
  },
  reducers: {
    getPosts: (state, action) => {
      state.posts = [action.payload];
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter(post !== action.payload);
    },
  },
});

export const getPostsAsync = () => async (dispatch) => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    dispatch(getPosts(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const { getPosts, deletePost } = blogSlice.actions;
export const showPosts = (state) => {
    console.log(state);
    return state?.blog?.posts ?? [];
}
export const showUsers = (state) => state.blog.users;
export const showImages = (state) => state.blog.images;

export default blogSlice.reducer;
